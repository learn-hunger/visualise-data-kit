import { TDraw, IBuiltIn, ICustom } from "../../types/canvas/types";

    //TypeGuards
    export function isBuiltIn(data: TDraw): data is IBuiltIn {
        return (data as IBuiltIn).model !== undefined;
    }

    export function isCustom(data: TDraw): data is ICustom {
        return (data as ICustom).connections !== undefined;
    }