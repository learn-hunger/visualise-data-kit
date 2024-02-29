import { ACanvas, IAddConnections, IAddDataPoints, IRemoveConnections, TDraw } from "../../utils/types/canvas/types";
export declare class Canvas extends ACanvas {
    draw(data: TDraw): void;
    addLabel(): void;
    clear(): void;
    destroy(): void;
    addConnectors(data: IAddConnections): IRemoveConnections;
    removeConnections(data: IRemoveConnections): void;
    addDataPoints(data: IAddDataPoints): IRemoveConnections;
    removeDataPoints(data: IRemoveConnections): void;
    private drawCommon;
}
