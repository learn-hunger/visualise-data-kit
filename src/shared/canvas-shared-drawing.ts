import { ICommonDraw } from "../utils/types/canvas/types";

export function drawLandmarks(canvasContext: CanvasRenderingContext2D, data: ICommonDraw, canvasWidth: number, canvasHeight: number,showLabels:boolean) {
    const overlayWidth = canvasWidth / data.metricX;
    const overlayHeight = canvasHeight / data.metricY;


    // Draw landmarks (points)
    canvasContext.strokeStyle = data.landmarksStyle.point.color ?? "red";
    canvasContext.lineWidth = data.landmarksStyle.point.width ?? "2";
    for (const handLandmark of data.dataPoints) {
        canvasContext.beginPath();
        canvasContext.arc(
            handLandmark.x * overlayWidth,
            handLandmark.y * overlayHeight,
            data.landmarksStyle.point.radius,
            0,
            2 * Math.PI
        );
        canvasContext.stroke();
    }

    // Draw connections (lines)
    canvasContext.strokeStyle = data.landmarksStyle.line.color ?? "darkcyan";
    canvasContext.lineWidth = data.landmarksStyle.line.width ?? "2";
    for (const [startIdx, endIdx] of data.connections) {
        const startLandmark = data.dataPoints[startIdx];
        const endLandmark = data.dataPoints[endIdx];
        canvasContext.beginPath();
        canvasContext.moveTo(startLandmark.x * overlayWidth, startLandmark.y * overlayHeight);
        canvasContext.lineTo(endLandmark.x * overlayWidth, endLandmark.y * overlayHeight);
        canvasContext.stroke();
    }

    // Draw labels if enabled
    if (showLabels) {
        canvasContext.fillStyle = data.labelStyle.style.color ?? "red";
        canvasContext.font = data.labelStyle.style.font;
        canvasContext.fillText(
            data.labelStyle.name!,
            data.labelStyle.position.x,
            data.labelStyle.position.y,
            data.labelStyle.style.boundingBoxMaxWidth
        );
    }
}
