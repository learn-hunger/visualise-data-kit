import { drawLandmarks } from "../../shared/canvas-shared-drawing";
import { BOUNDING_BOX_CONNECTIONS } from "../../utils/constants/canvas/connections";
import { C_DETECTORS_DATA, ECommon, ETensorflow } from "../../utils/constants/canvas/constants";
import { mergeDeep } from "../../utils/functions";
import { isBuiltIn, isCustom } from "../../utils/typeGuards/canvas/typeGuards";
import { ACanvas, IAddConnections, IAddDataPoints, IAddLabel, IBuiltIn, ICommonDraw, ICommonRemoveState, ICustom, IDataDetectors, IDrawBoundingBox, IFaceDetector, IObjectDetector, IRemoveConnections, IRemoveLabel, IWorkers, TDraw } from "../../utils/types/canvas/types";

/**
 * Canvas class representing a canvas element for drawing custom or built-in data for visualizing landmarks.
 * @date 3/2/2024 - 10:49:33 PM
 *
 * @export
 * @class Canvas
 * @typedef {Canvas}
 * @extends {ACanvas}
 */
export class Canvas extends ACanvas {
    private _setShowAllLabels = true;
    private _connectionsStateManager: ICommonRemoveState = {};
    private _dataPointsStateManager: ICommonRemoveState = {};
    private _useWorker!: IWorkers;
    private workerInstance!: Worker;
    constructor(canvasElement: HTMLCanvasElement, videoElement: HTMLVideoElement) {
        super(canvasElement, videoElement);
    }
    /**
     * Setter method for controlling whether to display all labels or not.
     * @param {boolean} data - Flag indicating whether to display all labels.
     */
    set setShowAllLabels(data: boolean) {
        this._setShowAllLabels = data
    }


    /**
     * attach worker with cdn or script downloaded and 
     * placed at public folder (usually)
     *
     * @public
     * @type {IWorkers}
     */
    public set useWorker(toggle: IWorkers) {
        this._useWorker = toggle;
        this._initWorkerForDrawing();

    }
    public get useWorker() {
        return this._useWorker
    }

    /**
     * Draw method to render custom or built-in data on the canvas.
     * @param {TDraw} data - Data to be drawn on the canvas.
     */
    public draw(data: TDraw): void {
        let preprocessedData: ICommonDraw;
        switch (true) {
            case isCustom(data):
                preprocessedData = {
                    connections: [...this.instanceData[ECommon.CUSTOM].connections, ...(data as ICustom).connections],
                    dataPoints: [...(this.instanceData[ECommon.CUSTOM].dataPoints ?? []), ...data.dataPoints],
                    landmarksStyle: mergeDeep({}, this.instanceData[ECommon.CUSTOM].landmarksStyle, data.landmarksStyle),
                    labelStyle: mergeDeep({}, this.instanceData[ECommon.CUSTOM].labelStyle, data.labelStyle),
                    metricX: data.metricX ? data.metricX : this.instanceData[ECommon.CUSTOM].metricX,
                    metricY: data.metricY ? data.metricY : this.instanceData[ECommon.CUSTOM].metricY,

                };
                this._drawCommon(preprocessedData);
                break;
            case isBuiltIn(data):
                const labelStyle: IDataDetectors['labelStyle'] = mergeDeep({}, this.instanceData[data.type].labelStyle, data.labelStyle);
                const overlayWidth = this.canvasElement.width;
                const overlayHeight = this.canvasElement.height;
                const preProcessedLabelStyle: Pick<ICommonDraw, 'labelStyle'> = {
                    labelStyle: {
                        ...labelStyle,
                        position: {

                            x: labelStyle.position.type == 'absolute'
                                ?
                                labelStyle.position.x
                                :
                                (data.dataPoints[labelStyle.position.landmarkIndex].x * overlayWidth / labelStyle.position.metricX) + labelStyle.position.left,
                            y: labelStyle.position.type == 'absolute'
                                ?
                                labelStyle.position.y
                                :
                                (data.dataPoints[labelStyle.position.landmarkIndex].y * overlayHeight / labelStyle.position.metricY) + labelStyle.position.top,

                            type: 'absolute'
                        },
                    }
                }
                preprocessedData = {
                    connections: [...this.instanceData[data.type].connections, ...((data as IBuiltIn).append?.connections ?? [])],
                    dataPoints: [...(this.instanceData[data.type].dataPoints ?? []), ...data.dataPoints, ...((data as IBuiltIn).append?.dataPoints ?? [])],
                    landmarksStyle: mergeDeep({}, this.instanceData[data.type].landmarksStyle, data.landmarksStyle),
                    labelStyle: preProcessedLabelStyle.labelStyle,
                    metricX: data.metricX ? data.metricX : this.instanceData[data.type].metricX,
                    metricY: data.metricY ? data.metricY : this.instanceData[data.type].metricY,

                };
                this._drawCommon(preprocessedData);
                break;
        }
    }

    public drawBoundingBox(data: IDrawBoundingBox): void {
        const overlayWidth = this.canvasElement.width;
        const overlayHeight = this.canvasElement.height;
        const faceDetector = data.boundingBox as IFaceDetector;
        const objectDetector = data.boundingBox as IObjectDetector;
        if (faceDetector.width) {
            objectDetector.x = faceDetector.originX;
            objectDetector.y = faceDetector.originY;
            objectDetector.h = faceDetector.width;
            objectDetector.w = faceDetector.height;
        }
        const preprocessedData: ICustom = {
            connections: BOUNDING_BOX_CONNECTIONS,
            type: ECommon.CUSTOM,
            dataPoints: [
                {
                    x: objectDetector.x,
                    y: objectDetector.y,
                },
                {
                    x: objectDetector.x + objectDetector.w,
                    y: objectDetector.y,
                },
                {
                    x: objectDetector.x + objectDetector.w,
                    y: objectDetector.y + objectDetector.h,
                },
                {
                    x: objectDetector.x,
                    y: objectDetector.y + objectDetector.h,
                },

            ],
            metricX: overlayWidth,
            metricY: overlayHeight,
            labelStyle: {
                name: data.labelStyle?.name ?? ECommon.CUSTOM,
                position: mergeDeep({
                    type: data.labelStyle?.position?.type ?? 'absolute',
                    x: objectDetector.x,
                    y: objectDetector.y,
                    metricX: overlayWidth,
                    metricY: overlayHeight,
                }, data.labelStyle?.position),
                style: data.labelStyle?.style ?? this.instanceData[ECommon.CUSTOM].labelStyle.style
            },
            landmarksStyle: mergeDeep({}, this.instanceData[ECommon.CUSTOM].landmarksStyle, data.landmarksStyle),

        }
        this.draw(preprocessedData);
    }


    /**
=     * Clears the canvas by removing all drawings.
     * @date 3/2/2024 - 10:49:42 PM
     *
     * @public
     */
    public clear() {
        if (this._useWorker) {
            // Clear the canvas in the worker
            this.workerInstance.postMessage({ action: 'clear' });
        } else {
            // Clear the canvas on the main thread
            this.canvasElement.getContext('2d')?.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        }
    }


    /**
     * Resets the canvas to its initial state, clearing all data and settings.
     * @date 3/2/2024 - 10:49:52 PM
     *
     * @public
     */
    public reset() {
        this.instanceData = { ...C_DETECTORS_DATA };
        this._connectionsStateManager = {};
        this._dataPointsStateManager = {};
        this._setShowAllLabels = true;
    }


    /**
     * Adds connections to the canvas data and returns the state manager for removal.
     * @date 3/2/2024 - 10:49:58 PM
     *
     * @public
     * @param {IAddConnections} data - Connections data to be added.
     * @returns {Readonly<IRemoveConnections>} - Readonly state manager for removal.
     */
    public addConnections(data: IAddConnections): Readonly<IRemoveConnections> {
        const now = (new Date()).getTime();
        this._connectionsStateManager[now] = { type: data.type, time: now, start: this.instanceData[data.type].connections.length, count: data.connections.length }
        this.instanceData[data.type].connections.push(...data.connections);
        return this._connectionsStateManager[now];
    }


    /**
     * Removes connections from the canvas data based on the provided state manager.
     * @date 3/2/2024 - 10:50:07 PM
     *
     * @public
     * @param {IRemoveConnections} data - State manager for connections removal.
     */
    public removeConnections(data: IRemoveConnections): void {
        this.instanceData[data.type].connections.splice(data.start, data.count);
        delete this._dataPointsStateManager[data.time];
        for (const i in this._dataPointsStateManager) {
            if (this._dataPointsStateManager[i].start > data.start) {
                this._dataPointsStateManager[i].start -= data.count;
            }
        }
    }


    /**
     * Adds data points to the canvas data and returns the state manager for removal.
     * @date 3/2/2024 - 10:50:39 PM
     * @public
     * @param {IAddDataPoints} data - Data points to be added.
     * @returns {Readonly<IRemoveConnections>} - Readonly state manager for removal.     
     */
    public addDataPoints(data: IAddDataPoints): Readonly<IRemoveConnections> {
        const now = (new Date()).getTime();
        this._dataPointsStateManager[now] = { type: data.type, time: now, start: this.instanceData[data.type].dataPoints?.length ?? 0, count: data.dataPoints.length };
        this.instanceData[data.type].dataPoints = { ...this.instanceData[data.type].dataPoints, ...data.dataPoints };
        return this._dataPointsStateManager[now];
    }


    /**
     * Removes data points from the canvas data based on the provided state manager.
     * @date 3/2/2024 - 10:50:30 PM
     * @public
     * @param {IRemoveConnections} data - State manager for data points removal.
     */
    public removeDataPoints(data: IRemoveConnections): void {
        this.instanceData[data.type].dataPoints?.splice(data.start, data.count);
        delete this._connectionsStateManager[data.time];
        for (const i in this._connectionsStateManager) {
            if (this._connectionsStateManager[i].start > data.start) {
                this._connectionsStateManager[i].start -= data.count;
            }
        }
    }


    /**
     * Adds a label to the canvas data.
     * @date 3/2/2024 - 10:50:49 PM
     * @public
     * @param {IAddLabel} data - Label data to be added.
     * @returns {Readonly<IRemoveLabel>} - Readonly state manager for label removal.
     */
    public addLabel(data: IAddLabel): Readonly<IRemoveLabel> {
        const { 'type': _, ...rest } = data;
        Object.assign(this.instanceData[data.type].labelStyle, mergeDeep(this.instanceData[data.type].labelStyle, rest));
        return { type: data.type }
    }


    /**
     * Removes a label from the canvas data.
     * @date 3/2/2024 - 10:50:55 PM
     *
     * @public
     * @param {IRemoveLabel} data - State manager for label removal.
     * */
    public removeLabel(data: IRemoveLabel): void {
        this.instanceData[data.type].labelStyle.name = null;
    }


    /**
     * Private method to draw common elements like data points, connections, and labels on the canvas.
     *
     * @private
     * @param {ICommonDraw} data - Common data to be drawn on the canvas.     * @date 3/2/2024 - 10:51:01 PM
     */
    private _drawCommon(data: ICommonDraw) {
        if (this._useWorker) {
            this._drawInWorker(data);  // Delegate drawing to the worker
        } else {
            // Draw on the main thread directly if workers are not used
            const canvasWidth = this.canvasElement.width;
            const canvasHeight = this.canvasElement.height;
            drawLandmarks(this.canvasElement.getContext('2d')!, data, canvasWidth, canvasHeight,this._setShowAllLabels);
        }
    }

    /**
     * initialise the worker
     */
    private _initWorkerForDrawing() {
        // Only create the worker if it doesn't already exist
        if (!this.workerInstance) {
            // Make sure the OffscreenCanvas is transferred before any context is created
            const offscreenCanvas = this.canvasElement.transferControlToOffscreen();

            // Initialize the worker
            this.workerInstance = new Worker(this.useWorker.canvasWorkerPath);

            // Post the offscreen canvas to the worker
            this.workerInstance.postMessage({ canvas: offscreenCanvas }, [offscreenCanvas]);
        }
    }

    /**
     * draw with worker
     * @param data 
     */
    private _drawInWorker(data: ICommonDraw) {
        const showLabels=this._setShowAllLabels;
        // Send drawing data to the worker
        this.workerInstance.postMessage({
            dataPoints: data.dataPoints,
            metricX: data.metricX,
            metricY: data.metricY,
            landmarksStyle: data.landmarksStyle,
            connections: data.connections,
            labelStyle: data.labelStyle,
            showLabels:showLabels
        });
    }

    /**
     * terminate the worker , use it when you had used worker
     */
    public destroy() {
        if (this.useWorker) {
            this.workerInstance.terminate();
        }
    }




}