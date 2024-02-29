import { C_CUSTOM_DEFAULT_STYLE } from "../../utils/constants/canvas/constants";
import { isBuiltIn, isCustom } from "../../utils/typeGuards/canvas/typeGuards";
import { ACanvas } from "../../utils/types/canvas/types";
export class Canvas extends ACanvas {
    draw(data) {
        var _a, _b, _c, _d, _e;
        switch (true) {
            case isBuiltIn(data):
                data.style = { ...this.instanceData[data.model].style, ...data.style };
                data.dataPoints = [...((_a = this.instanceData[data.model].dataPoints) !== null && _a !== void 0 ? _a : []), ...data.dataPoints, ...((_c = (_b = data.append) === null || _b === void 0 ? void 0 : _b.dataPoints) !== null && _c !== void 0 ? _c : [])];
                data.connections = [...this.instanceData[data.model].connections, ...((_e = (_d = data.append) === null || _d === void 0 ? void 0 : _d.connections) !== null && _e !== void 0 ? _e : [])];
                data.metric = data.metric ? data.metric : this.instanceData[data.model].metric;
                this.drawCommon(data);
                break;
            case isCustom(data):
                data.style = { ...C_CUSTOM_DEFAULT_STYLE, ...data.style };
                this.drawCommon(data);
                break;
            // default:
        }
    }
    addLabel() {
        throw new Error("Method not implemented.");
    }
    clear() {
        throw new Error("Method not implemented.");
    }
    destroy() {
        throw new Error("Method not implemented.");
    }
    addConnectors(data) {
        const returnData = { model: data.model, start: this.instanceData[data.model].connections.length, count: data.connections.length };
        this.instanceData[data.model].connections.push(...data.connections);
        return returnData;
    }
    removeConnections(data) {
        //TODO need to maintain states when remove data and update others data start and end
        this.instanceData[data.model].connections.splice(data.start, data.count);
    }
    addDataPoints(data) {
        var _a, _b;
        const returnData = { model: data.model, start: (_b = (_a = this.instanceData[data.model].dataPoints) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, count: data.dataPoints.length };
        this.instanceData[data.model].dataPoints = { ...this.instanceData[data.model].dataPoints, ...data.dataPoints };
        return returnData;
    }
    removeDataPoints(data) {
        var _a;
        //TODO need to maintain states when remove data and update others data start and end
        (_a = this.instanceData[data.model].dataPoints) === null || _a === void 0 ? void 0 : _a.splice(data.start, data.count);
    }
    drawCommon(data) {
        const overlayWidth = this.canvasElement.width / data.metric;
        const overlayHeight = this.canvasElement.height / data.metric;
        this.canvasContext.strokeStyle = data.style.point.color;
        this.canvasContext.lineWidth = data.style.point.width;
        for (const handLandmark of data.dataPoints) {
            this.canvasContext.beginPath();
            this.canvasContext.arc(handLandmark.x * overlayWidth, handLandmark.y * overlayHeight, 5, 0, 2 * Math.PI);
            this.canvasContext.stroke();
        }
        this.canvasContext.strokeStyle = data.style.line.color;
        this.canvasContext.lineWidth = data.style.line.width;
        for (const connection of data.connections) {
            const [startIdx, endIdx] = connection;
            const startLandmark = data.dataPoints[startIdx];
            const endLandmark = data.dataPoints[endIdx];
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(startLandmark.x * overlayWidth, startLandmark.y * overlayHeight);
            this.canvasContext.lineTo(endLandmark.x * overlayWidth, endLandmark.y * overlayHeight);
            this.canvasContext.stroke();
        }
    }
}
//# sourceMappingURL=canvas.js.map