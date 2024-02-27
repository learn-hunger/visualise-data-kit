import { NDetectors } from "./constants";

export type TDetectors = NDetectors.ETensorflow | NDetectors.EFaceApi;
export interface ICoordinates {
    x: number,
    y: number,
    z?: number,
}


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
export namespace NCanvas {
    export type TDraw = ICustom | IBuiltIn;

    export interface ICustom extends ICommon {
        connections: number[][];
        metric: number;
    }

    export interface IBuiltIn extends ICommon {
        model: TDetectors;
        append?: ICustom;
    }

    export interface IDetectorsData {
        connections: ICustom["connections"];
        metric: ICustom["metric"];
        style: IStyle
    }
    export interface ICommon {
        dataPoints: ICoordinates[];
        style?: IStyle
    }

    export interface IStyle {
        line?: IStyleCommon;
        point?: IStyleCommon;
    }
    export interface IStyleCommon {
        color?: string,
        width?: number,
    }

    //TypeGuards
    export function isBuiltIn(data: NCanvas.TDraw): data is NCanvas.IBuiltIn {
        return (data as NCanvas.IBuiltIn).model !== undefined;
    }

    export function isCustom(data: NCanvas.TDraw): data is NCanvas.ICustom {
        return (data as NCanvas.ICustom).connections !== undefined;
    }


}


export interface ITest {
    abc: string,
}
export abstract class ACanvas {
    protected canvasContext: CanvasRenderingContext2D;
    protected canvasElement: HTMLCanvasElement;
    constructor(canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d')!;
    }
    public abstract draw(data: NCanvas.TDraw): void;
    public abstract addLabel(): void;
    public abstract clear(): void;
    public abstract destroy(): void;
}
