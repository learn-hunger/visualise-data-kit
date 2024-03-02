import { ECommon } from "../../constants/canvas/constants";
//TypeGuards
export function isBuiltIn(data) {
    return !(data.type == ECommon.CUSTOM);
}
export function isCustom(data) {
    return (data.type == ECommon.CUSTOM);
}
//# sourceMappingURL=typeGuards.js.map