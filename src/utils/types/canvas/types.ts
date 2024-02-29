import { C_DETECTORS_DATA, EFaceApi, ETensorflow } from "../../constants/canvas/constants";

export interface ICoordinates {
    x: number,
    y: number,
    z?: number,
}

    export type TDraw = ICustom | IBuiltIn;
    export type TDetectors = ETensorflow | EFaceApi;
    export type TData=Record<TDetectors, IDataDetectors>;
    export interface ICustom extends Omit<ICommon,'metric'>,Required<Pick<ICommon,'metric'>> {
        connections: number[][];
    }

    export interface IBuiltIn extends ICommon {
        model: TDetectors;
        append?: IAppend;
    }

    export interface IDataDetectors extends Pick<ICustom,'connections'|'metric'>,Partial<Pick<ICommon,'dataPoints'>>,T2<ILandmarksStyle,ICommon,'landmarksStyle'>{
        // landmarksStyle:MyType<ILandmarksStyle>
    }
    export type MyType<T>={[K in keyof T]-?:Required<T[K]>}
    export type T2<T,U,S extends keyof U>={[P in S]:MyType<T>}
    export interface ILabel{
        name:string,
        style?:IStyleLabel,
        position:IPositionAbsolute | IPositionRelative
    }
    export interface IDataLabel extends Required<Omit<ILabel,'position'>>{
        position:Required<IPositionAbsolute> | Required<IPositionRelative>
    }

    export interface IPositionAbsolute{
        x:number;
        y:number;
        absolute:true;
    }
    export interface IPositionRelative{
        relative:true;
        landmarkIndex?:number;
        marginX?:number;
        marginY?:number;
        metric?:number
    }

    export interface IStyleLabel extends IStyleCommon{
        font?:string,
        height?:number,
    }
    export interface ICommon {
        dataPoints: ICoordinates[];
        landmarksStyle?: ILandmarksStyle;
        metric?: number;

    }

    export interface ILandmarksStyle {
        line?: IStyleCommon;
        point?: IStyleCommon;
    }
    export interface IStyleCommon {
        color?: string,
        width?: number,
    }
    export interface IAppend extends Pick<ICustom,'connections'>,Partial<Pick<ICustom,'dataPoints'>>{
    }
    export interface IAddConnections extends Pick<IBuiltIn,'model'> ,Pick<ICustom,'connections'>{
    }

    export interface IRemoveConnections extends Pick<IBuiltIn,'model'>{
        start:number,
        count:number,

    }

    export interface IAddDataPoints extends Pick<IBuiltIn,'model' | 'dataPoints'>{
    }

    export interface IRemoveDataPoints{
        
    }






export interface ITest {
    abc: string,
}
export abstract class ACanvas {
    protected canvasContext: CanvasRenderingContext2D;
    protected canvasElement: HTMLCanvasElement;
    protected instanceData:TData;
    constructor(canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d')!;
        this.instanceData={...C_DETECTORS_DATA};
    }
    public abstract draw(data: TDraw): void;
    public abstract clear(): void;
    public abstract destroy(): void;
}
