import { C_DETECTORS_DATA, ECommon, EFaceApi, ETensorflow } from "../../constants/canvas/constants";

export interface ICoordinates {
    x: number,
    y: number,
    z?: number,
}

export type TDraw = ICustom | IBuiltIn;
export type TDetectorsBuiltIn = ETensorflow | EFaceApi;
export type TDetectors = ETensorflow | EFaceApi | ECommon;
export type TData = Record<TDetectors, IDataDetectors>;
export type TCommonData = Required<ICustom>;

export interface ICommon {
    dataPoints: ICoordinates[];
    landmarksStyle?: ILandmarksStyle;
    metricX?: number;
    metricY?:number;
    labelStyle?: ILabel

}
export interface ICustom extends Omit<ICommon, 'metricX'|'metricY'>, Required<Pick<ICommon, 'metricX'|'metricY'>> {
    connections: number[][];
    type: ECommon.CUSTOM
}

export interface IBuiltIn extends ICommon {
    type: TDetectorsBuiltIn;
    append?: IAppend;
}

export interface IDataDetectors extends Required<Pick<ICustom, 'connections' | 'metricX'|'metricY'>>, Partial<Pick<ICustom, 'dataPoints'>>, THierarchy3<ICustom, 'landmarksStyle' | 'labelStyle'> {
}
type THierarchy2<T> = { [K in keyof T]-?: Required<T[K]> }
export type THierarchy3<T, U extends keyof T> = { [P in U]-?: THierarchy2<T[P]> }
export interface ILabel {
    name: string | null,
    style?: IStyleLabel,
    position: IPositionAbsolute | IPositionRelative
}
export interface IPositionAbsolute extends Pick<IPositionRelative,'metricX'|'metricY'>{
    type: 'absolute';
    x: number;
    y: number;
}
export interface IPositionRelative {
    type: 'relative';
    landmarkIndex?: number;
    left?: number;
    top?: number;
    metricX?: number,
    metricY?:number
}

export interface IStyleCommon {
    color?: string,
    width?: number,
    radius?:number,
}

export interface IStyleLabel extends Pick<IStyleCommon, 'color'> {
    font?: string,
    boundingBoxMaxWidth?: number
}

export interface ILandmarksStyle {
    line?: Omit<IStyleCommon,'radius'>;
    point?: IStyleCommon;
}

export interface IAppend extends Pick<ICustom, 'connections'>, Partial<Pick<ICustom, 'dataPoints'>> {
}
export interface IAddConnections extends Pick<IBuiltIn, 'type'>, Pick<ICustom, 'connections'> {
}

export interface IRemoveConnections extends Pick<IBuiltIn, 'type'> {
    start: number,
    count: number,
    time: number
}

export interface IAddDataPoints extends Pick<IBuiltIn, 'type' | 'dataPoints'> {
}

export interface ICommonRemoveState {
    [key: IRemoveConnections['time']]: IRemoveConnections
}
export interface IAddLabel extends ILabel, Pick<IBuiltIn, 'type'> {

}
let x:IAddLabel={
    type: ETensorflow.POSE, // to which model you want to add style
    name: "My Pose",
    position: {
        type:'absolute',
        x:2,
        y:2,
    },
    //style is optional
    style:{
        color:'red',
        font:"18px Arial",
        boundingBoxMaxWidth:200
    }
}

export interface IRemoveLabel extends Pick<IBuiltIn, 'type'> {

}

export interface ICommonLabelStyle extends Omit<ILabel, 'position' | 'style'>, THierarchy3<ILabel, 'style'> {
    position: IPositionAbsolute;
}
export interface ICommonDraw extends Omit<Required<IDataDetectors>, 'labelStyle'> {
    labelStyle: ICommonLabelStyle

}

export interface IDrawBoundingBox extends Partial<Pick<ICustom,'landmarksStyle'>> {
    boundingBox:IObjectDetector | IFaceDetector,
    labelStyle?:Partial<ILabel>
}
export interface IObjectDetector {
    x: number,
    y: number,
    w: number,
    h: number
}

export interface IFaceDetector{
    width:number,
    height:number,
    originX:number,
    originY:number,
    angle?:number
}

export abstract class ACanvas {
    protected canvasContext: CanvasRenderingContext2D;
    protected canvasElement: HTMLCanvasElement;
    protected instanceData: TData;
    constructor(canvasElement: HTMLCanvasElement,overlay:HTMLVideoElement) {
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d')!;
        this.canvasElement.width = overlay.videoWidth;
        this.canvasElement.height = overlay.videoHeight;
        this.instanceData = { ...C_DETECTORS_DATA };
    }
    public abstract draw(data: TDraw): void;
    public abstract drawBoundingBox(data:IDrawBoundingBox):void;
    public abstract clear(): void;
    public abstract reset(): void;
}
