import { ACanvas, NCanvas } from "../utils/types";
export declare class Canvas extends ACanvas {
    draw(data: NCanvas.TDraw, style?: NCanvas.IStyle): void;
    addLabel(): void;
    clear(): void;
    destroy(): void;
}
