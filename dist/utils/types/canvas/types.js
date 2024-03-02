import { C_DETECTORS_DATA, ETensorflow } from "../../constants/canvas/constants";
let x = {
    type: ETensorflow.HAND,
    dataPoints: []
};
export class ACanvas {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
        this.instanceData = { ...C_DETECTORS_DATA };
    }
}
//# sourceMappingURL=types.js.map