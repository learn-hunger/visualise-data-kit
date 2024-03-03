import { TData } from "../../types/canvas/types";
/**
 *  Enum representing TensorFlow models for pose and hand detection.
 * Note: Ensure the below enums values are not same
 * @date 3/2/2024 - 11:02:57 PM
 *
 * @export
 * @enum {number}
 */
export declare enum ETensorflow {
    POSE = "POSE",
    HAND = "HAND",
    FACE_MESH = "FACE_MESH"
}
/**
 * Enum representing FaceApi models.
 * @date 3/2/2024 - 11:03:18 PM
 *
 * @export
 * @enum {number}
 */
export declare enum EFaceApi {
}
/**
 * Enum representing common types used in canvas operations.
 * @date 3/2/2024 - 11:03:23 PM
 *
 * @export
 * @enum {number}
 */
export declare enum ECommon {
    CUSTOM = "CUSTOM"
}
/**
 * Readonly constant representing data for various detectors.
 * @date 3/2/2024 - 11:03:28 PM
 *
 * @type {Readonly<TData>}
 */
export declare const C_DETECTORS_DATA: Readonly<TData>;
