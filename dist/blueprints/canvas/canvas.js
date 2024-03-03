import { BOUNDING_BOX_CONNECTIONS } from "../../utils/constants/canvas/connections";
import { C_DETECTORS_DATA, ECommon } from "../../utils/constants/canvas/constants";
import { mergeDeep } from "../../utils/functions";
import { isBuiltIn, isCustom } from "../../utils/typeGuards/canvas/typeGuards";
import { ACanvas } from "../../utils/types/canvas/types";
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
    constructor() {
        super(...arguments);
        this._setShowAllLabels = true;
        this._connectionsStateManager = {};
        this._dataPointsStateManager = {};
    }
    /**
     * Setter method for controlling whether to display all labels or not.
     * @param {boolean} data - Flag indicating whether to display all labels.
     */
    set setShowAllLabels(data) {
        this._setShowAllLabels = data;
    }
    /**
     * Draw method to render custom or built-in data on the canvas.
     * @param {TDraw} data - Data to be drawn on the canvas.
     */
    draw(data) {
        var _a, _b, _c, _d, _e, _f;
        let preprocessedData;
        switch (true) {
            case isCustom(data):
                preprocessedData = {
                    connections: [...this.instanceData[ECommon.CUSTOM].connections, ...data.connections],
                    dataPoints: [...((_a = this.instanceData[ECommon.CUSTOM].dataPoints) !== null && _a !== void 0 ? _a : []), ...data.dataPoints],
                    landmarksStyle: mergeDeep({}, this.instanceData[ECommon.CUSTOM].landmarksStyle, data.landmarksStyle),
                    labelStyle: mergeDeep({}, this.instanceData[ECommon.CUSTOM].labelStyle, data.labelStyle),
                    metricX: data.metricX ? data.metricX : this.instanceData[ECommon.CUSTOM].metricX,
                    metricY: data.metricY ? data.metricY : this.instanceData[ECommon.CUSTOM].metricY,
                };
                this._drawCommon(preprocessedData);
                break;
            case isBuiltIn(data):
                const labelStyle = mergeDeep({}, this.instanceData[data.type].labelStyle, data.labelStyle);
                const overlayWidth = this.canvasElement.width;
                const overlayHeight = this.canvasElement.height;
                const preProcessedLabelStyle = {
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
                };
                preprocessedData = {
                    connections: [...this.instanceData[data.type].connections, ...((_c = (_b = data.append) === null || _b === void 0 ? void 0 : _b.connections) !== null && _c !== void 0 ? _c : [])],
                    dataPoints: [...((_d = this.instanceData[data.type].dataPoints) !== null && _d !== void 0 ? _d : []), ...data.dataPoints, ...((_f = (_e = data.append) === null || _e === void 0 ? void 0 : _e.dataPoints) !== null && _f !== void 0 ? _f : [])],
                    landmarksStyle: mergeDeep({}, this.instanceData[data.type].landmarksStyle, data.landmarksStyle),
                    labelStyle: preProcessedLabelStyle.labelStyle,
                    metricX: data.metricX ? data.metricX : this.instanceData[data.type].metricX,
                    metricY: data.metricY ? data.metricY : this.instanceData[data.type].metricY,
                };
                this._drawCommon(preprocessedData);
                break;
        }
    }
    drawBoundingBox(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const overlayWidth = this.canvasElement.width;
        const overlayHeight = this.canvasElement.height;
        const faceDetector = data.boundingBox;
        const objectDetector = data.boundingBox;
        if (faceDetector.width) {
            objectDetector.x = faceDetector.originX;
            objectDetector.y = faceDetector.originY;
            objectDetector.h = faceDetector.width;
            objectDetector.w = faceDetector.height;
        }
        const preprocessedData = {
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
                name: (_b = (_a = data.labelStyle) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ECommon.CUSTOM,
                position: mergeDeep({
                    type: (_e = (_d = (_c = data.labelStyle) === null || _c === void 0 ? void 0 : _c.position) === null || _d === void 0 ? void 0 : _d.type) !== null && _e !== void 0 ? _e : 'absolute',
                    x: objectDetector.x,
                    y: objectDetector.y,
                    metricX: overlayWidth,
                    metricY: overlayHeight,
                }, (_f = data.labelStyle) === null || _f === void 0 ? void 0 : _f.position),
                style: (_h = (_g = data.labelStyle) === null || _g === void 0 ? void 0 : _g.style) !== null && _h !== void 0 ? _h : this.instanceData[ECommon.CUSTOM].labelStyle.style
            },
            landmarksStyle: mergeDeep({}, this.instanceData[ECommon.CUSTOM].landmarksStyle, data.landmarksStyle),
        };
        this.draw(preprocessedData);
    }
    /**
=     * Clears the canvas by removing all drawings.
     * @date 3/2/2024 - 10:49:42 PM
     *
     * @public
     */
    clear() {
        var _a;
        (_a = this.canvasElement.getContext('2d')) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    /**
     * Resets the canvas to its initial state, clearing all data and settings.
     * @date 3/2/2024 - 10:49:52 PM
     *
     * @public
     */
    reset() {
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
    addConnections(data) {
        const now = (new Date()).getTime();
        this._connectionsStateManager[now] = { type: data.type, time: now, start: this.instanceData[data.type].connections.length, count: data.connections.length };
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
    removeConnections(data) {
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
    addDataPoints(data) {
        var _a, _b;
        const now = (new Date()).getTime();
        this._dataPointsStateManager[now] = { type: data.type, time: now, start: (_b = (_a = this.instanceData[data.type].dataPoints) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, count: data.dataPoints.length };
        this.instanceData[data.type].dataPoints = { ...this.instanceData[data.type].dataPoints, ...data.dataPoints };
        return this._dataPointsStateManager[now];
    }
    /**
     * Removes data points from the canvas data based on the provided state manager.
     * @date 3/2/2024 - 10:50:30 PM
     * @public
     * @param {IRemoveConnections} data - State manager for data points removal.
     */
    removeDataPoints(data) {
        var _a;
        (_a = this.instanceData[data.type].dataPoints) === null || _a === void 0 ? void 0 : _a.splice(data.start, data.count);
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
    addLabel(data) {
        const { 'type': _, ...rest } = data;
        Object.assign(this.instanceData[data.type].labelStyle, mergeDeep(this.instanceData[data.type].labelStyle, rest));
        return { type: data.type };
    }
    /**
     * Removes a label from the canvas data.
     * @date 3/2/2024 - 10:50:55 PM
     *
     * @public
     * @param {IRemoveLabel} data - State manager for label removal.
     * */
    removeLabel(data) {
        this.instanceData[data.type].labelStyle.name = null;
    }
    /**
     * Private method to draw common elements like data points, connections, and labels on the canvas.
     *
     * @private
     * @param {ICommonDraw} data - Common data to be drawn on the canvas.     * @date 3/2/2024 - 10:51:01 PM
     */
    _drawCommon(data) {
        var _a, _b, _c, _d, _e, _f;
        const overlayWidth = this.canvasElement.width / data.metricX;
        const overlayHeight = this.canvasElement.height / data.metricY;
        this.canvasContext.strokeStyle = (_a = data.landmarksStyle.point.color) !== null && _a !== void 0 ? _a : "red";
        this.canvasContext.lineWidth = (_b = data.landmarksStyle.point.width) !== null && _b !== void 0 ? _b : "2";
        for (const handLandmark of data.dataPoints) {
            this.canvasContext.beginPath();
            this.canvasContext.arc(handLandmark.x * overlayWidth, handLandmark.y * overlayHeight, data.landmarksStyle.point.radius, 0, 2 * Math.PI);
            this.canvasContext.stroke();
        }
        this.canvasContext.strokeStyle = (_c = data.landmarksStyle.line.color) !== null && _c !== void 0 ? _c : "darkcyan";
        this.canvasContext.lineWidth = (_d = data.landmarksStyle.line.width) !== null && _d !== void 0 ? _d : "2";
        for (const connection of data.connections) {
            const [startIdx, endIdx] = connection;
            const startLandmark = data.dataPoints[startIdx];
            const endLandmark = data.dataPoints[endIdx];
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(startLandmark.x * overlayWidth, startLandmark.y * overlayHeight);
            this.canvasContext.lineTo(endLandmark.x * overlayWidth, endLandmark.y * overlayHeight);
            this.canvasContext.stroke();
        }
        if (this._setShowAllLabels && data.labelStyle.name) {
            this.canvasContext.fillStyle = (_e = data.labelStyle.style.color) !== null && _e !== void 0 ? _e : "red";
            this.canvasContext.font = data.labelStyle.style.font;
            ;
            this.canvasContext.fillText((_f = data.labelStyle) === null || _f === void 0 ? void 0 : _f.name, data.labelStyle.position.x, data.labelStyle.position.y, data.labelStyle.style.boundingBoxMaxWidth);
        }
    }
}
//# sourceMappingURL=canvas.js.map