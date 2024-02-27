import { NDetectors } from "./constants";
export type TDetectors = NDetectors.ETensorflow | NDetectors.EFaceApi;
export interface ICoordinates {
    x: number;
    y: number;
    z?: number;
}
export declare namespace NCanvas {
    type TDraw = ICustom | IBuiltIn;
    interface ICustom extends ICommon {
        connections: number[][];
        metric: number;
    }
    interface IBuiltIn extends ICommon {
        model: TDetectors;
        append?: ICustom;
    }
    interface IDetectorsData {
        connections: ICustom["connections"];
        metric: ICustom["metric"];
        style: IStyle;
    }
    interface ICommon {
        dataPoints: ICoordinates[];
        style?: IStyle;
    }
    interface IStyle {
        line?: IStyleCommon;
        point?: IStyleCommon;
    }
    interface IStyleCommon {
        color?: string;
        width?: number;
    }
    function isBuiltIn(data: NCanvas.TDraw): data is NCanvas.IBuiltIn;
    function isCustom(data: NCanvas.TDraw): data is NCanvas.ICustom;
}
export interface ITest {
    abc: string;
}
export declare abstract class ACanvas {
    protected canvasContext: CanvasRenderingContext2D;
    protected canvasElement: HTMLCanvasElement;
    constructor(canvasElement: HTMLCanvasElement);
    abstract draw(data: NCanvas.TDraw): void;
    abstract addLabel(): void;
    abstract clear(): void;
    abstract destroy(): void;
}
