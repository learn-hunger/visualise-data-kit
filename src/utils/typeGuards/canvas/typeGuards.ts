import { ECommon } from "../../constants/canvas/constants";
import { TDraw } from "../../types/canvas/types";
//TypeGuards
export function isBuiltIn(data: TDraw): boolean {
    return !(data.type == ECommon.CUSTOM);
}

export function isCustom(data: TDraw): boolean {
    return (data.type == ECommon.CUSTOM);
}