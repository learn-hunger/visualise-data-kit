// export interface RequiredParameters{
//     canvas:HTMLCanvasElement,
//     landmarks:Coordinates
// }
// export interface OptionalParameters{
//     overlay?:boolean,
//     connetions?:Connections
// }
// export interface Connections{
//     append?:boolean,
//     value:ConnectionsByDetector
// }
// export interface ITensorflow{
//     model:NDetectors.ETensorflow,
//     metric?:number,
// }
export var NCanvas;
(function (NCanvas) {
    //TypeGuards
    function isBuiltIn(data) {
        return data.model !== undefined;
    }
    NCanvas.isBuiltIn = isBuiltIn;
    function isCustom(data) {
        return data.connections !== undefined;
    }
    NCanvas.isCustom = isCustom;
})(NCanvas || (NCanvas = {}));
export class ACanvas {
    constructor(canvasElement) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
    }
}
//# sourceMappingURL=types.js.map