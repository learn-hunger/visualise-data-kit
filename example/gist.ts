  /**
   * This file is only for referenece , this file doesn't work 
   */
import { FilesetResolver, HandLandmarker, PoseLandmarker, FaceDetector, ObjectDetector } from "@mediapipe/tasks-vision";
import { visualisation } from "visualise-data-kit";
import { ETensorflow } from "visualise-data-kit/dist/utils/constants/canvas/constants";
  /**
   * 
   */
export async function faceMesh() {
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    const detectorConfig: any = {
      runtime: 'tfjs', // or 'tfjs'
      solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
      refineLandmarks: true,

    }
    const faceMeshDetector = await faceLandmarksDetection.createDetector(model, detectorConfig);
    const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    const visual = new visualisation.Canvas(canvasElement, videoElement);
    //be careful with clear
    visual.clear();//To remove existing drawings on the canvas
    const faceMeshLandmarks = await faceMeshDetector.estimateFaces(videoElement);
    faceMeshLandmarks.forEach((i:any) => {
      visual.draw(
        {
          type: ETensorflow.FACE_MESH,
          dataPoints: i.keypoints,
          //    landmarksStyle: { 
          //     line: { color: "red", width: 2 }, 
          //     point: { color: "blue", width: 2 ,radius:2} 
          //   }, 
          //   labelStyle:{
          //     name:"Hand",
          //     position:{
          //       type:'relative',
          //       landmarkIndex:12,
          //       left:140,
          //       top:-30,
          //       metricX:canvasElement.width,
          //       metricY:canvasElement.height
          //     },
          //     style:{
          //       color:'red',
          //       boundingBoxMaxWidth:200,
          //       font:"18px Arial"
          //     }
          //   },
          //   append:{
          //     connections:[[33,12],[16,33]],
          //     dataPoints:[midPoint({point1:i[16],point2:i[11]})]
          //   },
          //   metricX:canvasElement.width,
          //   metricY:canvasElement.height,

        }
      )
    })
  }


  export async function hand() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );
    const handDetector = await HandLandmarker.createFromModelPath(vision,
      "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"
    );
    const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    const visual = new visualisation.Canvas(canvasElement, videoElement);
    //be careful with clear
    visual.clear();//To remove existing drawings on the canvas

    const handPredictions = await handDetector?.detect(videoElement);
    handPredictions.landmarks.forEach((i: any) => {
      visual.draw({
        type: ETensorflow.HAND,
        dataPoints: i,
        //    landmarksStyle: { 
        //     line: { color: "red", width: 2 }, 
        //     point: { color: "blue", width: 2 ,radius:2} 
        //   }, 
        //   labelStyle:{
        //     name:"Hand",
        //     position:{
        //       type:'relative',
        //       landmarkIndex:12,
        //       left:140,
        //       top:-30,
        //       metricX:canvasElement.width,
        //       metricY:canvasElement.height
        //     },
        //     style:{
        //       color:'red',
        //       boundingBoxMaxWidth:200,
        //       font:"18px Arial"
        //     }
        //   },
        //   append:{
        //     connections:[[33,12],[16,33]],
        //     dataPoints:[midPoint({point1:i[16],point2:i[11]})]
        //   },
        //   metricX:canvasElement.width,
        //   metricY:canvasElement.height,

      });

    })
  }

  export async function pose() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );
    const poseDetector = await PoseLandmarker.createFromModelPath(vision,
      "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task"
    );
    const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    const visual = new visualisation.Canvas(canvasElement, videoElement);
    //be careful with clear
    visual.clear();//To remove existing drawings on the canvas
    const poseLandmarks = (await poseDetector.detectForVideo(videoElement, performance.now()));
    poseLandmarks.landmarks.forEach((i) => {
      visual.draw(
        {
          type: ETensorflow.POSE,
          dataPoints: i,
          //    landmarksStyle: { 
          //     line: { color: "red", width: 2 }, 
          //     point: { color: "blue", width: 2 ,radius:2} 
          //   }, 
          //   labelStyle:{
          //     name:"Pose",
          //     position:{
          //       type:'relative',
          //       landmarkIndex:12,
          //       left:140,
          //       top:-30,
          //       metricX:canvasElement.width,
          //       metricY:canvasElement.height
          //     },
          //     style:{
          //       color:'red',
          //       boundingBoxMaxWidth:200,
          //       font:"18px Arial"
          //     }
          //   },
          //   append:{
          //     connections:[[33,12],[16,33]],
          //     dataPoints:[midPoint({point1:i[16],point2:i[11]})]
          //   },
          //   metricX:canvasElement.width,
          //   metricY:canvasElement.height,

        }
      )
    })
  }

  export async function facedetect() {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
    );
    const faceDetector = await FaceDetector.createFromModelPath(vision,
      "https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite"
    );

    const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
    const videoElement = document.getElementById("video") as HTMLVideoElement;
    const visual = new visualisation.Canvas(canvasElement, videoElement);

    //be careful with clear
    visual.clear();//To remove existing drawings on the canvas
    const facePredictions = await faceDetector?.detect(videoElement);
    facePredictions.detections.forEach((i) => {
      visual.drawBoundingBox({
        boundingBox: i.boundingBox!,
        // labelStyle: {
        //   name: "Face Detector",
        //   style: { color: "red",font:"18px Arial",boundingBoxMaxWidth:200 },
        //   position:{
        //     type:'relative',
        //     landmarkIndex:12,
        //     left:140,
        //     top:-30,
        //     metricX:this.canvasElement.width,
        //     metricY:this.canvasElement.height
        //   },
        // },
      }
      )
    })
  }

  export async function object(){
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
  );
  const objectDetector = await ObjectDetector.createFromModelPath(vision,
      "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite"
  );
  const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
  const videoElement = document.getElementById("video") as HTMLVideoElement;
  const visual = new visualisation.Canvas(canvasElement, videoElement);
  
  //be careful with clear
  visual.clear();//To remove existing drawings on the canvas
  const objectLandmarks = await objectDetector.detect(videoElement);
  objectLandmarks.detections.forEach((i) => {
    visual.drawBoundingBox({ 
      boundingBox: i.boundingBox!,
       labelStyle: { 
        name: "object " + i.categories[0].categoryName,
        // style: { color: "red",font:"18px Arial",boundingBoxMaxWidth:200 },
        // position:{
        //   type:'relative',
        //   landmarkIndex:12,
        //   left:140,
        //   top:-30,
        //   metricX:this.canvasElement.width,
        //   metricY:this.canvasElement.height
        // },        
  
      }, 
    }
    )
  })

  }