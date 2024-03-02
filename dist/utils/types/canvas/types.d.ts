import { ECommon, EFaceApi, ETensorflow } from "../../constants/canvas/constants";
export interface ICoordinates {
    x: number;
    y: number;
    z?: number;
}
export type TDraw = ICustom | IBuiltIn;
export type TDetectors = ETensorflow | EFaceApi | ECommon;
export type TData = Record<TDetectors, IDataDetectors>;
export type TCommonData = Required<ICustom>;
export interface ICommon {
    dataPoints: ICoordinates[];
    landmarksStyle?: ILandmarksStyle;
    metric?: number;
    labelStyle?: ILabel;
}
export interface ICustom extends Omit<ICommon, 'metric'>, Required<Pick<ICommon, 'metric'>> {
    connections: number[][];
    type: ECommon.CUSTOM;
}
export interface IBuiltIn extends ICommon {
    type: TDetectors;
    append?: IAppend;
}
export interface IDataDetectors extends Required<Pick<ICustom, 'connections' | 'metric'>>, Partial<Pick<ICustom, 'dataPoints'>>, THierarchy3<ICustom, 'landmarksStyle' | 'labelStyle'> {
}
type THierarchy2<T> = {
    [K in keyof T]-?: Required<T[K]>;
};
export type THierarchy3<T, U extends keyof T> = {
    [P in U]-?: THierarchy2<T[P]>;
};
export interface ILabel {
    name: string | null;
    style?: IStyleLabel;
    position: IPositionAbsolute | IPositionRelative;
}
export interface IPositionAbsolute {
    type: 'absolute';
    x: number;
    y: number;
}
export interface IPositionRelative {
    type: 'relative';
    landmarkIndex?: number;
    left?: number;
    top?: number;
    metric?: number;
}
export interface IStyleCommon {
    color?: string;
    width?: number;
}
export interface IStyleLabel extends Pick<IStyleCommon, 'color'> {
    font?: string;
    boundingBoxMaxWidth?: number;
}
export interface ILandmarksStyle {
    line?: IStyleCommon;
    point?: IStyleCommon;
}
export interface IAppend extends Pick<ICustom, 'connections'>, Partial<Pick<ICustom, 'dataPoints'>> {
}
export interface IAddConnections extends Pick<IBuiltIn, 'type'>, Pick<ICustom, 'connections'> {
}
export interface IRemoveConnections extends Pick<IBuiltIn, 'type'> {
    start: number;
    count: number;
    time: number;
}
export interface IAddDataPoints extends Pick<IBuiltIn, 'type' | 'dataPoints'> {
}
export interface ICommonRemoveState {
    [key: IRemoveConnections['time']]: IRemoveConnections;
}
export interface IAddLabel extends ILabel, Pick<IBuiltIn, 'type'> {
}
export interface IRemoveLabel extends Pick<IBuiltIn, 'type'> {
}
export interface ICommonLabelStyle extends Omit<ILabel, 'position' | 'style'>, THierarchy3<ILabel, 'style'> {
    position: IPositionAbsolute;
}
export interface ICommonDraw extends Omit<Required<IDataDetectors>, 'labelStyle'> {
    labelStyle: ICommonLabelStyle;
}
export declare abstract class ACanvas {
    protected canvasContext: CanvasRenderingContext2D;
    protected canvasElement: HTMLCanvasElement;
    protected instanceData: TData;
    constructor(canvasElement: HTMLCanvasElement);
    abstract draw(data: TDraw): void;
    abstract clear(): void;
    abstract reset(): void;
}
export {};
