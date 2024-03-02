import { ACanvas, IAddConnections, IAddDataPoints, IAddLabel, IRemoveConnections, IRemoveLabel, TDraw } from "../../utils/types/canvas/types";
export declare class Canvas extends ACanvas {
    private _setShowAllLabels;
    private _connectionsStateManager;
    private _dataPointsStateManager;
    set setShowAllLabels(data: boolean);
    draw(data: TDraw): void;
    clear(): void;
    reset(): void;
    addConnections(data: IAddConnections): Readonly<IRemoveConnections>;
    removeConnections(data: IRemoveConnections): void;
    addDataPoints(data: IAddDataPoints): Readonly<IRemoveConnections>;
    removeDataPoints(data: IRemoveConnections): void;
    addLabel(data: IAddLabel): Readonly<IRemoveLabel>;
    removeLabel(data: IRemoveLabel): void;
    private _drawCommon;
}
