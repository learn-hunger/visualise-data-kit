import { C_DETECTORS_DATA } from "../../constants/canvas/constants";
export class ACanvas {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
        this.instanceData = { ...C_DETECTORS_DATA };
    }
}
//# sourceMappingURL=types.js.map