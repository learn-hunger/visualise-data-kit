import { EFaceApi, ETensorflow } from "../../constants/canvas/constants";
export interface ICoordinates {
    x: number;
    y: number;
    z?: number;
}
export type TDraw = ICustom | IBuiltIn;
export type TDetectors = ETensorflow | EFaceApi;
export type TData = Record<TDetectors, IDetectorsData>;
export interface ICustom extends Omit<ICommon, 'metric'>, Required<Pick<ICommon, 'metric'>> {
    connections: number[][];
}
export interface IBuiltIn extends ICommon {
    model: TDetectors;
    append?: IAppend;
}
export interface IDetectorsData extends Pick<ICustom, 'connections' | 'metric'>, Partial<Pick<ICommon, 'dataPoints'>>, Required<Pick<ICommon, 'style'>> {
}
export interface ILabel {
    name: string;
    style?: IStyleLabel;
    position: IPositionAbsolute | IPositionRelative;
}
export interface ILabelData {
    name: ILabel['name'];
    style: ILabel['style'];
    position: IPositionAbsolute | IPositionRelativeData;
}
export type ILabelData2 = Required<ILabel>;
export interface IPositionAbsolute {
    x: number;
    y: number;
    absolute: true;
}
export interface IPositionRelative {
    relative: true;
    landmarkIndex?: number;
    marginX?: number;
    marginY?: number;
    metric?: number;
}
export interface IPositionRelativeData {
    relative: IPositionRelative['relative'];
    landmarkIndex: IPositionRelative['landmarkIndex'];
    marginX: IPositionRelative['marginX'];
    marginY: IPositionRelative['marginY'];
    metric: IPositionRelative['metric'];
}
export interface IStyleLabel extends IStyleCommon {
    font?: string;
    height?: number;
}
export interface ICommon {
    dataPoints: ICoordinates[];
    style?: IStyleKeyPoint;
    metric?: number;
}
export interface IStyleKeyPoint {
    line?: IStyleCommon;
    point?: IStyleCommon;
}
export interface IStyleCommon {
    color?: string;
    width?: number;
}
export interface IAppend extends Pick<ICustom, 'connections'>, Partial<Pick<ICustom, 'dataPoints'>> {
}
export interface IAddConnections extends Pick<IBuiltIn, 'model'>, Pick<ICustom, 'connections'> {
}
export interface IRemoveConnections extends Pick<IBuiltIn, 'model'> {
    start: number;
    count: number;
}
export interface IAddDataPoints extends Pick<IBuiltIn, 'model' | 'dataPoints'> {
}
export interface IRemoveDataPoints {
}
export interface ITest {
    abc: string;
}
export declare abstract class ACanvas {
    protected canvasContext: CanvasRenderingContext2D;
    protected canvasElement: HTMLCanvasElement;
    protected instanceData: TData;
    constructor(canvasElement: HTMLCanvasElement);
    abstract draw(data: TDraw): void;
    abstract addLabel(): void;
    abstract clear(): void;
    abstract destroy(): void;
}
