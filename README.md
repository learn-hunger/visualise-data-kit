# visualise-data-kit
[ sample visualisation demo image](publish/assets/all.png)

Introducing visualise-data-kit, a versatile toolkit for creating static, animated, and interactive visualizations in Typescript.
This package is designed to seamlessly integrate with popular JavaScript frameworks like React and Angular, without any extra dependencies apart from Typescript.
It's lightweight and standalone, offering various customization options and built-in data handling features.
visualise-data-kit prioritizes error-free development with its strongly typed structure in Typescript.
It includes both instance-level and functional-level state management for easier development.
Efforts have been made to keep the code DRY and abstract where necessary.
Dynamic objects within the toolkit adjust their values based on class states, with certain attributes set as readonly to prevent unintended modifications.
Built on OOP principles, visualise-data-kit emphasizes encapsulation, abstraction, and interfaces, while embracing modern paradigms such as  modular and generic programming concepts.
## Motivation
Inspired by Python's Matplotlib and the magic of data visualization in data science, I ventured into a world of challenges, especially in TensorFlow's rule-based classifications.

As I worked, I realized something profound: true productivity often springs from visualizing data creatively, not just staring at numbers. But adding extra details to my visualizations and dealing with countless TensorFlow models left me feeling overwhelmed and stressed.

Yet, it was this very struggle that fueled my determination. Out of pain emerged beauty, leading me to create visualise-data-kit a tool born from the desire to make visualizing data easier and more delightful like python matplotlib, even in the face of complexity.
# Features
## Available Methods
```
   1. draw()
   2. drawBoundingBox()
   3. addConnections()
   4. removeConnections()
   5. addDataPoints()
   6. removeDataPoints()
   7. addLabel()
   8. removeLabel()
   9. setShowAllLabels
   10. reset()
   11. clear()
```
## 1. draw()
Draw method used to render custom or built-in data connections on the canvas.
Achieves Functional Level State management together with instance level states and its values,
Doesn't modify existing instance level states
Takes the single named parameter
### 1.1 builtin and custom drawings
```
    draw{
        type: ETensorflow.POSE, //or ECommon.CUSTOM ,using this you can't append connections instead you will give with connections parameter
        dataPoints: [{x:number,y:number,z?:number}],
        //below all are optional parameters for customizations
            //landmarks customisations
                landmarksStyle?: { 
                line: { color: string, width: number }, //connections drawings
                point: { color: string, width: number,radius:number} //points arcs drawings
                },
            //label customisations, eg it is used to show label about the model to differntiate among various models
                labelStyle?:{
                name:string, you can give your desired name
                position:{
                    type:'relative', // or absolute and should give corresponding parameters
                    landmarkIndex:12, //used to keep the label relative to the landmarks
                    left:140,
                    top:-30,
                    metricX:canvasElement.width, // based on the landmark x value ,it will be decided , default value is 1
                    metricY:canvasElement.height //based on the landmark y value ,it will be decided , default value is 1
                },
                style:{
                    color:'red',  //label customisation fontcolor
                    boundingBoxMaxWidth:200,
                    font:"18px Arial"
                }
                },
            //it is only availabe when type is not ECommon.CUSTOM
            //add connections and datapoints to existing built in connections 
                append:{
                connections:[[33,12],[16,33]],
                dataPoints:[midPoint({point1:i[16],point2:i[11]})]
                },
            //It is used to modify the rendering based on normalisation values of  x and y values of landmarks
            metricX:canvasElement.width,
            metricY:canvasElement.height,

      }
```

## 2. drawBoundingBox()
It is used to draw box around the the detection
```
visual.drawBoundingBox({
    boundingBox: {
        width:number,
        height:number,
        originX:number,
        originY:number,
        angle?:number
    },
    //below are the optional parameters for customisations you can see more about his in draw method
    labelStyle?:{
        name:string, you can give your desired name
        position:{
            type:'relative', // or absolute and should give corresponding parameters
            landmarkIndex:12, //used to keep the label relative to the landmarks
            left:140,
            top:-30,
            metricX:canvasElement.width, // based on the landmark x value ,it will be decided , default value is 1
            metricY:canvasElement.height //based on the landmark y value ,it will be decided , default value is 1
        },
        style:{
            color:'red',  //label customisation fontcolor
            boundingBoxMaxWidth:200,
            font:"18px Arial"
        }
    }
  }
  )
```

## 3. addConnections()
It is used to change the state of class by appending connections to respective model specified in the parameter , you can see the demo image in figure provided
It returns the readonly values for state management which are used to remove connections ,used as parameter to removeconnections
```
let stateConnections={
    type:ETensorflow 
    start: number,
    count: number,
    time: number
};
 stateConnections = visual.addConnections({
    type:ETensorflow.POSE, //connections are added to this model
    connections:[[0,12]] //  connections needed to draw , type is number[][]
})

//stateConnections.start=2 //throws compile error , it is readonly


```
[Add Connections demo image](publish/assets/connection.png)

## 4. removeConnections()
It is used to change the state of class by removing connections of respective model specified in the parameter 
It takes and uses the readonly values returned by addConnections method 
```
remove({
    type:ETensorflow.POSE // use correspond model like face or hand
    start: number,
    count: number,
    time: number
})
// remove(stateConnections)// state connections is retured parameter of addconnections

```
## 5. addDataPoints()
It is used to change the state of class by appending datapoints to respective model specified in the parameter , you can see the demo image in figure provided
It returns the readonly values for state management which are used to remove datapoints ,used as parameter to removeconnections
```
let stateDatapoints={
    type:ETensorflow 
    start: number,
    count: number,
    time: number
};
 stateDatapoints = visual.addDataPoints({
    type:ETensorflow.POSE, //datapoints are added to this model
    dataPoints:[[0,12]] // datapoints needed to draw , type is number[][]
})
//stateDatapoints.start=2 //throws compile error , it is readonly
```
[Add DataPoints demo image](./publish/assets/connection.png)

## 6. removeDataPoints()
It is used to change the state of class by removing dataPoints of respective model specified in the parameter 
It takes and uses the readonly values returned by addDataPoints method 
```
remove({
    type:ETensorflow.POSE // use correspond model like face or hand
    start: number,
    count: number,
    time: number
})
// remove(stateDatapoints)// state dataPoints is retured parameter of addDataPoints
```
## 7.  addLabel()
It is used to add Label to the built in models 
It returns the readonly values for state management which are used to remove label ,used as parameter to removeLabel
```
let stateLabel:{type:ETensorflow};
stateLabel=addLabel({
    type: ETensorflow.POSE, // to which model you want to add style
    name: "My Pose",
    position: {
        type:'absolute', //can be relative tooo
        x:2,
        y:2,
    },
    //style is optional
    style:{
        color:'red',
        font:"18px Arial",
        boundingBoxMaxWidth:200
    }
})
```
## 8. removeLabel()
It is used to remove Label from the built in models 
It takes and uses the readonly values returned by addDataPoints method
 ```
 removeLabel({type:ETensorflow})
 //removeLabel(stateLabel) // stateLabel from the addLabel
```
## 9. setShowAllLabels()
It is used to show Labels or not for all the models datapoints currently rendering

```
setShowAllLabels=false;
```
## 10. reset 
It is used to set instance states to initial values
```
visual.reset() //visual is instance of Canvas class
```
## 11. clear
It is used to clear all drawing on instance canvas
```
visual.clear() //visual is instance of Canvas class
```

# Usage With Examples
## 1. Installation,Importing,Initialisation
### 1.1 Installation
```
    npm install visualise-data-kit
```
### 1.2 Importing
```
import { visualisation } from 'visualise-data-kit/dist';
import { ETensorflow } from 'visualise-data-kit/dist/utils/constants/canvas/constants';
```
### 1.3 Initialisation
```
const canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
const videoElement = document.getElementById("video") as HTMLVideoElement;
const visual=new visualisation.Canvas(canvasElement,videoElement);
```
## 2. Built-in-drawing & Custom-drawing
### 2.1 Bounding Box
#### 2.1.1 Face Detector

The Bounding box method lets you draw bounding boxes at location of
faces within images or videos.

```
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
  const faceLandmarks = await faceDetector?.detect(videoElement);
  faceLandmarks.detections.forEach((i) => {
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
      //     metricX:canvasElement.width,
      //     metricY:canvasElement.height
      //   },
      // },
    }
    )
  })
```

For more information, refer to the [Face Detector](https://developers.google.com/mediapipe/solutions/vision/face_detector/web_js) documentation.

### 2.1.2 Object Detector

The MediaPipe Object Detector task lets you detect the presence and location of
multiple classes of objects within images or videos.

```
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
      //   metricX:canvasElement.width,
      //   metricY:canvasElement.height
      // },        

    }, 
  }
  )
})
```

For more information, refer to the [Object Detector](https://developers.google.com/mediapipe/solutions/vision/object_detector/web_js) documentation.
### 2.2 Drawing Landmarks
#### 2.2.1 Pose Landmarker

The draw method used to render visual effects over the body.

```
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
```

For more information, refer to the [Pose Landmarker](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker/web_js) documentation.

#### 2.2.2 Hand Landmarker

The draw method helps to render visual effects over the hands.

```
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
```

For more information, refer to the [Hand Landmarker](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker/web_js) documentation.

#### 2.2.3 Face Mesh | Face Landmarks detection

The drawMethod helps you to render visual effects over the faces.

```
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
    faceMeshLandmarks.forEach((i) => {
      visual.draw(
        {
          type: ETensorflow.FACE_MESH,
          dataPoints: i.keypoints,
          //    landmarksStyle: { 
          //     line: { color: "red", width: 2 }, 
          //     point: { color: "blue", width: 2 ,radius:2} 
          //   }, 
          //   labelStyle:{
          //     name:"Face mesh",
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

```

For more information, refer to the [Face Mesh](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection/src/mediapipe) documentation.

# Future Scopes
* <b> Evolve </b>: Develop Graphs like, how Canvas was built
* <b> CI & CD</b> : continous deployment and building 
* <b> Automated Code Management</b> : For community package development

# References
