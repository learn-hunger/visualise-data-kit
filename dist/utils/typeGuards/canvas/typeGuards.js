import { ECommon } from "../../constants/canvas/constants";
/**
 * Checks whether the given data is of a built-in type.
 * @date 3/2/2024 - 11:10:30 PM
 *
 * @export
 * @param {TDraw} data - The data to be checked.
 * @returns {boolean} - Returns true if the data is built-in, otherwise false.
 */
export function isBuiltIn(data) {
    return !(data.type == ECommon.CUSTOM);
}
/**
 * Checks whether the given data is of a custom type.
 * @date 3/2/2024 - 11:10:34 PM
 *
 * @export
 * @param {TDraw} data - The data to be checked.
 * @returns {boolean} - Returns true if the data is custom, otherwise false.
 */
export function isCustom(data) {
    return (data.type == ECommon.CUSTOM);
}
//# sourceMappingURL=typeGuards.js.map