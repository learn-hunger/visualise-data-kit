import {FilesetResolver, HandLandmarker} from "@mediapipe/tasks-vision" ;
import { visualisation } from "@learn-hunger/visualise-data-kit";
import "./hand-landmark.css";
import { useRef } from "react";
import { Canvas } from "@learn-hunger/visualise-data-kit/src/blueprints/canvas/canvas";
import { ETensorflow } from "@learn-hunger/visualise-data-kit/src/utils/constants/canvas/constants";
const HandLandmarkerExample=()=>{
    const camRef=useRef<HTMLVideoElement>(null);
    const canvasRef=useRef<HTMLCanvasElement>(null)
    const startCamera=async ()=>{
        console.log("camera started")
        const stream=await navigator.mediaDevices.getUserMedia({video:true});
        if(camRef.current){
            camRef.current.srcObject=stream;
            camRef.current.paused?camRef.current.play():null;
        }
    }

    let handLandmarker:HandLandmarker;
    let landmarkDrawer:Canvas;
    const loadHandModels=async ()=>{
        const vision = await FilesetResolver.forVisionTasks(
            "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
        );
        handLandmarker = await HandLandmarker.createFromOptions(vision, {
            baseOptions: {
              modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
            //   delegate: "GPU"
            },
            runningMode: "IMAGE",
            numHands: 2
          });
        
    }

    const getAndDrawLandmarks=async()=>{
        const cameraElement=camRef.current!;
        const canvasElement=canvasRef.current!;
        //get landmarks
        const landmarks=await handLandmarker.detect(cameraElement).landmarks;
        
        //draw landmarks;
        if(!landmarkDrawer){
            landmarkDrawer=new visualisation.Canvas(canvasElement,cameraElement);
        }

        //iterate the two hands landmarks and draw them
        landmarks.forEach((i)=>{
            landmarkDrawer.draw({
                type:ETensorflow.HAND,dataPoints:i,
                // landmarksStyle: { 
                //     line: { color: "red", width: 10}, //connections drawings
                //     point: { color: "red", width: 10,radius:2} //points arcs drawings
                //     },
            })

        })

        setTimeout(()=>{
            getAndDrawLandmarks();
            landmarkDrawer.clear();},1000)


    }

    startCamera().then(()=>{
        loadHandModels().then(()=>{
            getAndDrawLandmarks()
        })
    });

    return(
        <>
            <div id="container">
                <video src="" ref={camRef} className="webcam"></video>
                <canvas className="canvas webcam" ref={canvasRef}></canvas>
            </div>
        </>
    )
}

export default HandLandmarkerExample