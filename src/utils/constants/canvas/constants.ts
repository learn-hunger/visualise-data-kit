import { TData } from "../../types/canvas/types";

/**
 * Ensure the below enums values are not same
 */
export enum ETensorflow {
    POSE = "POSE",
    HAND = "HAND",
}
export enum EFaceApi {
    //TODO ADDING FACEAPI
    // POSE="FACEAPI_POSE"
}
export enum ECommon {
    CUSTOM = "CUSTOM"
}
export const C_DETECTORS_DATA: Readonly<TData> = {
    [ETensorflow.POSE]: {
        connections: [
            [8, 6], [6, 5], [5, 4], [4, 0], [0, 1],
            [1, 2], [2, 3], [3, 7], [10, 9],
            [20, 18], [18, 16], [16, 20], [16, 22],
            [16, 14], [14, 12], [12, 11], [11, 13],
            [13, 15], [15, 21], [15, 17], [17, 19],
            [19, 15], [12, 24], [11, 13], [24, 26],
            [23, 25], [26, 28], [25, 27], [28, 30],
            [28, 32], [30, 32], [27, 31], [27, 29],
            [29, 31], [11, 23], [23, 25], [24, 23]
        ],
        metric: 1,
        landmarksStyle: { line: { color: '#0000FF', width: 2, }, point: { color: '#0000FF', width: 2 } },
        labelStyle: {
            name: ETensorflow.POSE,
            position: { type: 'relative', left: 2, top: 2, landmarkIndex: 0, metric: 1 },
            style: {
                font: "18px Arial",
                color: "#FFFFFF",
                boundingBoxMaxWidth: 100
            }
        },

    },
    [ETensorflow.HAND]: {
        connections: [
            [0, 1], [1, 2], [2, 3], [3, 4],
            [0, 5], [5, 6], [6, 7], [7, 8],
            [0, 9], [9, 10], [10, 11], [11, 12],
            [0, 13], [13, 14], [14, 15], [15, 16],
            [0, 17], [17, 18], [18, 19], [19, 20],
        ],
        metric: 1,
        landmarksStyle: { line: { color: '#00FF00', width: 2, }, point: { color: '#00FF00', width: 2 } },
        labelStyle: {
            name: ETensorflow.HAND,
            position: { type: 'relative', left: 2, top: 2, landmarkIndex: 2, metric: 1 },
            style: {
                font: "18px Arial",
                color: "#FFFFFF",
                boundingBoxMaxWidth: 100
            }
        },
    },
    [ECommon.CUSTOM]: {
        connections: [],
        metric: 1,
        landmarksStyle: { line: { color: '#0000FF', width: 2, }, point: { color: '#0000FF', width: 2 } },
        labelStyle: {
            name: ECommon.CUSTOM,
            position: { type: 'absolute', x: 10, y: 10 },
            style: {
                font: "18px Arial",
                color: "#FFFFFF",
                boundingBoxMaxWidth: 100
            }
        },
    }
};

