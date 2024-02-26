import { C_CUSTOM_DEFAULT_STYLE, C_DETECTORS_DATA } from "../utils/constants";
import { ACanvas, NCanvas } from "../utils/types";
export class Canvas extends ACanvas {
    draw(data, style) {
        const drawCommon = (data, model) => {
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
        };
        switch (true) {
            case NCanvas.isBuiltIn(data):
                data.connections = C_DETECTORS_DATA[data.model].connections;
                data.metric = C_DETECTORS_DATA[data.model].metric;
                data.style = data.style ? data.style : C_DETECTORS_DATA[data.model].style;
                drawCommon(data, data.model);
                break;
            case NCanvas.isCustom(data):
                data.style ? data.style : C_CUSTOM_DEFAULT_STYLE;
                drawCommon(data);
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
}
//# sourceMappingURL=canvas.js.map