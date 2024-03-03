import { C_DETECTORS_DATA, ETensorflow } from "../../constants/canvas/constants";
let x = {
    type: ETensorflow.POSE, // to which model you want to add style
    name: "My Pose",
    position: {
        type: 'absolute',
        x: 2,
        y: 2,
    },
    //style is optional
    style: {
        color: 'red',
        font: "18px Arial",
        boundingBoxMaxWidth: 200
    }
};
export class ACanvas {
    constructor(canvasElement, overlay) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
        this.canvasElement.width = overlay.videoWidth;
        this.canvasElement.height = overlay.videoHeight;
        this.instanceData = { ...C_DETECTORS_DATA };
    }
}
//# sourceMappingURL=types.js.map