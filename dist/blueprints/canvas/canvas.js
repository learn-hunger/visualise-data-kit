import { C_DETECTORS_DATA, ECommon } from "../../utils/constants/canvas/constants";
import { mergeDeep } from "../../utils/functions";
import { isBuiltIn, isCustom } from "../../utils/typeGuards/canvas/typeGuards";
// import { isBuiltIn, isCustom } from "../../utils/typeGuards/canvas/typeGuards";
import { ACanvas } from "../../utils/types/canvas/types";
export class Canvas extends ACanvas {
    constructor() {
        super(...arguments);
        this._setShowAllLabels = true;
        this._connectionsStateManager = {};
        this._dataPointsStateManager = {};
    }
    set setShowAllLabels(data) {
        this._setShowAllLabels = data;
    }
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
                    metric: data.metric ? data.metric : this.instanceData[ECommon.CUSTOM].metric,
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
                                    (data.dataPoints[labelStyle.position.landmarkIndex].x * overlayWidth / labelStyle.position.metric) + labelStyle.position.left,
                            y: labelStyle.position.type == 'absolute'
                                ?
                                    labelStyle.position.y
                                :
                                    (data.dataPoints[labelStyle.position.landmarkIndex].y * overlayHeight / labelStyle.position.metric) + labelStyle.position.top,
                            type: 'absolute'
                        },
                    }
                };
                preprocessedData = {
                    connections: [...this.instanceData[data.type].connections, ...((_c = (_b = data.append) === null || _b === void 0 ? void 0 : _b.connections) !== null && _c !== void 0 ? _c : [])],
                    dataPoints: [...((_d = this.instanceData[data.type].dataPoints) !== null && _d !== void 0 ? _d : []), ...data.dataPoints, ...((_f = (_e = data.append) === null || _e === void 0 ? void 0 : _e.dataPoints) !== null && _f !== void 0 ? _f : [])],
                    landmarksStyle: mergeDeep({}, this.instanceData[data.type].landmarksStyle, data.landmarksStyle),
                    labelStyle: preProcessedLabelStyle.labelStyle,
                    metric: data.metric ? data.metric : this.instanceData[data.type].metric,
                };
                this._drawCommon(preprocessedData);
                break;
        }
    }
    clear() {
        var _a;
        (_a = this.canvasElement.getContext('2d')) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    reset() {
        this.instanceData = { ...C_DETECTORS_DATA };
        this._connectionsStateManager = {};
        this._dataPointsStateManager = {};
        this._setShowAllLabels = true;
    }
    addConnections(data) {
        const now = (new Date()).getTime();
        this._connectionsStateManager[now] = { type: data.type, time: now, start: this.instanceData[data.type].connections.length, count: data.connections.length };
        this.instanceData[data.type].connections.push(...data.connections);
        return this._connectionsStateManager[now];
    }
    removeConnections(data) {
        this.instanceData[data.type].connections.splice(data.start, data.count);
        delete this._dataPointsStateManager[data.time];
        for (const i in this._dataPointsStateManager) {
            if (this._dataPointsStateManager[i].start > data.start) {
                this._dataPointsStateManager[i].start -= data.count;
            }
        }
    }
    addDataPoints(data) {
        var _a, _b;
        const now = (new Date()).getTime();
        this._dataPointsStateManager[now] = { type: data.type, time: now, start: (_b = (_a = this.instanceData[data.type].dataPoints) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, count: data.dataPoints.length };
        this.instanceData[data.type].dataPoints = { ...this.instanceData[data.type].dataPoints, ...data.dataPoints };
        return this._dataPointsStateManager[now];
    }
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
    addLabel(data) {
        const { 'type': _, ...rest } = data;
        Object.assign(this.instanceData[data.type].labelStyle, mergeDeep(this.instanceData[data.type].labelStyle, rest));
        return { type: data.type };
    }
    removeLabel(data) {
        this.instanceData[data.type].labelStyle.name = null;
    }
    _drawCommon(data) {
        var _a;
        const overlayWidth = this.canvasElement.width / data.metric;
        const overlayHeight = this.canvasElement.height / data.metric;
        this.canvasContext.strokeStyle = data.landmarksStyle.point.color;
        this.canvasContext.lineWidth = data.landmarksStyle.point.width;
        for (const handLandmark of data.dataPoints) {
            this.canvasContext.beginPath();
            this.canvasContext.arc(handLandmark.x * overlayWidth, handLandmark.y * overlayHeight, 5, 0, 2 * Math.PI);
            this.canvasContext.stroke();
        }
        this.canvasContext.strokeStyle = data.landmarksStyle.line.color;
        this.canvasContext.lineWidth = data.landmarksStyle.line.width;
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
            this.canvasContext.fillStyle = data.labelStyle.style.color;
            this.canvasContext.font = data.labelStyle.style.font;
            ;
            this.canvasContext.fillText((_a = data.labelStyle) === null || _a === void 0 ? void 0 : _a.name, data.labelStyle.position.x, data.labelStyle.position.y, data.labelStyle.style.boundingBoxMaxWidth);
        }
    }
}
//# sourceMappingURL=canvas.js.map