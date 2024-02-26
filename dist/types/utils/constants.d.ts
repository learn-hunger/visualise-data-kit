import { NCanvas, TDetectors } from "./types";
export declare namespace NDetectors {
    /**
     * Ensure the below enums values are not same
     */
    enum ETensorflow {
        POSE = "POSE",
        HAND = "HAND"
    }
    enum EFaceApi {
    }
}
export declare const C_DETECTORS_DATA: Record<TDetectors, NCanvas.IDetectorsData>;
export declare const C_CUSTOM_DEFAULT_STYLE: NCanvas.IStyle;
