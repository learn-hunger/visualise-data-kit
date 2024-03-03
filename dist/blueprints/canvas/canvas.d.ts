import { ACanvas, IAddConnections, IAddDataPoints, IAddLabel, IDrawBoundingBox, IRemoveConnections, IRemoveLabel, TDraw } from "../../utils/types/canvas/types";
/**
 * Canvas class representing a canvas element for drawing custom or built-in data for visualizing landmarks.
 * @date 3/2/2024 - 10:49:33 PM
 *
 * @export
 * @class Canvas
 * @typedef {Canvas}
 * @extends {ACanvas}
 */
export declare class Canvas extends ACanvas {
    private _setShowAllLabels;
    private _connectionsStateManager;
    private _dataPointsStateManager;
    /**
     * Setter method for controlling whether to display all labels or not.
     * @param {boolean} data - Flag indicating whether to display all labels.
     */
    set setShowAllLabels(data: boolean);
    /**
     * Draw method to render custom or built-in data on the canvas.
     * @param {TDraw} data - Data to be drawn on the canvas.
     */
    draw(data: TDraw): void;
    drawBoundingBox(data: IDrawBoundingBox): void;
    /**
=     * Clears the canvas by removing all drawings.
     * @date 3/2/2024 - 10:49:42 PM
     *
     * @public
     */
    clear(): void;
    /**
     * Resets the canvas to its initial state, clearing all data and settings.
     * @date 3/2/2024 - 10:49:52 PM
     *
     * @public
     */
    reset(): void;
    /**
     * Adds connections to the canvas data and returns the state manager for removal.
     * @date 3/2/2024 - 10:49:58 PM
     *
     * @public
     * @param {IAddConnections} data - Connections data to be added.
     * @returns {Readonly<IRemoveConnections>} - Readonly state manager for removal.
     */
    addConnections(data: IAddConnections): Readonly<IRemoveConnections>;
    /**
     * Removes connections from the canvas data based on the provided state manager.
     * @date 3/2/2024 - 10:50:07 PM
     *
     * @public
     * @param {IRemoveConnections} data - State manager for connections removal.
     */
    removeConnections(data: IRemoveConnections): void;
    /**
     * Adds data points to the canvas data and returns the state manager for removal.
     * @date 3/2/2024 - 10:50:39 PM
     * @public
     * @param {IAddDataPoints} data - Data points to be added.
     * @returns {Readonly<IRemoveConnections>} - Readonly state manager for removal.
     */
    addDataPoints(data: IAddDataPoints): Readonly<IRemoveConnections>;
    /**
     * Removes data points from the canvas data based on the provided state manager.
     * @date 3/2/2024 - 10:50:30 PM
     * @public
     * @param {IRemoveConnections} data - State manager for data points removal.
     */
    removeDataPoints(data: IRemoveConnections): void;
    /**
     * Adds a label to the canvas data.
     * @date 3/2/2024 - 10:50:49 PM
     * @public
     * @param {IAddLabel} data - Label data to be added.
     * @returns {Readonly<IRemoveLabel>} - Readonly state manager for label removal.
     */
    addLabel(data: IAddLabel): Readonly<IRemoveLabel>;
    /**
     * Removes a label from the canvas data.
     * @date 3/2/2024 - 10:50:55 PM
     *
     * @public
     * @param {IRemoveLabel} data - State manager for label removal.
     * */
    removeLabel(data: IRemoveLabel): void;
    /**
     * Private method to draw common elements like data points, connections, and labels on the canvas.
     *
     * @private
     * @param {ICommonDraw} data - Common data to be drawn on the canvas.     * @date 3/2/2024 - 10:51:01 PM
     */
    private _drawCommon;
}
