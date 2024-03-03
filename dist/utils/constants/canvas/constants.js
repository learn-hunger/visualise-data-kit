import { FACE_MESH_CONNECTIONS, HAND_CONNECTIONS, POSE_CONNECTIONS } from "./connections";
/**
 *  Enum representing TensorFlow models for pose and hand detection.
 * Note: Ensure the below enums values are not same
 * @date 3/2/2024 - 11:02:57 PM
 *
 * @export
 * @enum {number}
 */
export var ETensorflow;
(function (ETensorflow) {
    ETensorflow["POSE"] = "POSE";
    ETensorflow["HAND"] = "HAND";
    ETensorflow["FACE_MESH"] = "FACE_MESH";
})(ETensorflow || (ETensorflow = {}));
/**
 * Enum representing FaceApi models.
 * @date 3/2/2024 - 11:03:18 PM
 *
 * @export
 * @enum {number}
 */
export var EFaceApi;
(function (EFaceApi) {
    //TODO ADDING FACEAPI
    // POSE="FACEAPI_POSE"
})(EFaceApi || (EFaceApi = {}));
/**
 * Enum representing common types used in canvas operations.
 * @date 3/2/2024 - 11:03:23 PM
 *
 * @export
 * @enum {number}
 */
export var ECommon;
(function (ECommon) {
    ECommon["CUSTOM"] = "CUSTOM";
})(ECommon || (ECommon = {}));
/**
 * Readonly constant representing data for various detectors.
 * @date 3/2/2024 - 11:03:28 PM
 *
 * @type {Readonly<TData>}
 */
export const C_DETECTORS_DATA = {
    [ETensorflow.POSE]: {
        connections: POSE_CONNECTIONS,
        metricX: 1,
        metricY: 1,
        landmarksStyle: { line: { color: 'red', width: 2 }, point: { color: 'blue', width: 2, radius: 4 } },
        labelStyle: {
            name: ETensorflow.POSE,
            position: { type: 'relative', left: 2, top: 2, landmarkIndex: 0, metricX: 1, metricY: 1 },
            style: {
                font: "18px Arial",
                color: "red",
                boundingBoxMaxWidth: 100
            }
        },
    },
    [ETensorflow.HAND]: {
        connections: HAND_CONNECTIONS,
        metricX: 1,
        metricY: 1,
        landmarksStyle: { line: { color: 'green', width: 2 }, point: { color: '#00FF00', width: 2, radius: 4 } },
        labelStyle: {
            name: ETensorflow.HAND,
            position: { type: 'relative', left: 2, top: 2, landmarkIndex: 12, metricX: 1, metricY: 1 },
            style: {
                font: "18px Arial",
                color: "green",
                boundingBoxMaxWidth: 100
            }
        },
    },
    [ETensorflow.FACE_MESH]: {
        connections: FACE_MESH_CONNECTIONS,
        metricX: 1,
        metricY: 1,
        landmarksStyle: { line: { color: 'darkcyan', width: 1, }, point: { color: '#00FF00', width: 1, radius: 1 } },
        labelStyle: {
            name: ETensorflow.FACE_MESH,
            position: { type: 'relative', left: -35, top: -10, landmarkIndex: 10, metricX: 1, metricY: 1 },
            style: {
                font: "18px Arial",
                color: "darkcyan",
                boundingBoxMaxWidth: 100
            }
        },
    },
    [ECommon.CUSTOM]: {
        connections: [],
        metricX: 1,
        metricY: 1,
        landmarksStyle: { line: { color: 'blue', width: 2, }, point: { color: '#0000FF', width: 2, radius: 4 } },
        labelStyle: {
            name: ECommon.CUSTOM,
            position: { type: 'absolute', x: 10, y: 10, metricX: 1, metricY: 1 },
            style: {
                font: "18px Arial",
                color: "blue",
                boundingBoxMaxWidth: 100
            }
        },
    },
};
//# sourceMappingURL=constants.js.map