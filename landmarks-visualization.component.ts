import { Component, ViewChild, ElementRef } from '@angular/core';
import { Media } from 'src/app/services/AI-Games-Services/common/terminator';
import { PoseService } from 'src/app/services/AI-Games-Services/ModalLoading/pose.service';
import { forkJoin, from } from 'rxjs';
import { PoseLandmarker } from '@mediapipe/tasks-vision';
import * as aiGamesEnum from 'src/app/utilities/ai-games-enum';

const HAND_CONNECTIONS = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [0, 5], [5, 6], [6, 7], [7, 8],
  [0, 9], [9, 10], [10, 11], [11, 12],
  [0, 13], [13, 14], [14, 15], [15, 16],
  [0, 17], [17, 18], [18, 19], [19, 20],
];

const POSE_CONNECTIONS = [
  [8, 6], [6, 5], [5, 4], [4, 0], [0, 1],
  [1, 2], [2, 3], [3, 7], [10, 9],
  [20, 18], [18, 16], [16, 20], [16, 22],
  [16, 14], [14, 12], [12, 11], [11, 13],
  [13, 15], [15, 21], [15, 17], [17, 19],
  [19, 15], [12, 24], [11, 13], [24, 26],
  [23, 25], [26, 28], [25, 27], [28, 30],
  [28, 32], [30, 32], [27, 31], [27, 29],
  [29, 31], [11, 23], [23, 25], [24, 23],
];

// const FACE_CONNECTIONS = [
//   [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // Jaw line
// ];

@Component({
  selector: 'app-landmarks-visualization',
  templateUrl: './landmarks-visualization.component.html',
  styleUrls: ['./landmarks-visualization.component.scss']
})
export class LandmarksVisualizationComponent {

  @ViewChild('webcam')
  webCamRef!: ElementRef;
  videoElement!: HTMLVideoElement;
  faceDetector: any;
  handPoseDetector: any;
  poseDetector: PoseLandmarker;
  x: number;
  y: number;
  canvasElement: HTMLCanvasElement
  handX: number;
  handY: number;
  facePredictions: any;
  posePredictions: any;
  handPredictions: any;

  constructor(private media: Media,
    private loadPoseWeights: PoseService
  ) { }



  ngOnInit(): void {
    this.setupCamera();
  }

  public async setupCamera() {
    const stream = await this.media?.startMedia({ video: true });
    this.videoElement = this.webCamRef?.nativeElement;
    this.videoElement.srcObject = stream;
    this.videoElement?.addEventListener("loadeddata", async () => {
      this.loadWeights();
    })
  }

  private loadWeights() {
    const handWeights = from(this.loadPoseWeights.handLoadWeights())
    const PoseWeights = from(this.loadPoseWeights.motionLoadWeights());
    const facialGestureWeights = from(this.loadPoseWeights.facialGestureWeights({ url: aiGamesEnum.ModelWeightsUrls.FACE }));
    forkJoin([handWeights, PoseWeights, facialGestureWeights]).subscribe((res) => {
      this.handPoseDetector = res[0].handPoseLandmarker;
      this.poseDetector = res[1].motionPoseLandmarker;
      this.faceDetector = res[2].facialGestureLandmarker;
      if (this.handPoseDetector && this.faceDetector && this.poseDetector) {
        console.log("loaded weights");
        this.detect();
      }
    }, (error: any) => {
      console.log("error");
    })
  }


  private async detectLandmarks(canvasCtx: CanvasRenderingContext2D, landmarks: any[], landmarkType: string, label: string) {

    if (landmarkType === 'face') {
      canvasCtx.fillStyle = '#FFFFFF';
      canvasCtx.font = '18px Arial';
      canvasCtx.fillText(label, 120, 120);
    } else if (landmarkType === 'pose') {
      canvasCtx.fillStyle = '#FFFFFF';
      canvasCtx.font = '18px Arial';
      canvasCtx.fillText(label, 10, 20);
    } else if (landmarkType === 'hand') {
      canvasCtx.fillStyle = '#FFFFFF';
      canvasCtx.font = '18px Arial';
      canvasCtx.fillText(label, 40, 200);
    }

    switch (landmarkType) {
      case 'face':
        if (this.facePredictions.keypoints)
          this.drawFaceLandmarks(canvasCtx, this.facePredictions.keypoints);
        break;
      case 'pose':
        if (this.posePredictions)
          this.drawPoseLandmarks(canvasCtx, this.posePredictions);
        break;
      case 'hand':
        this.drawHandLandmarks(canvasCtx, this.handPredictions);
        break;
      default:
        console.error('Unsupported landmark type');
    }
  }


  private drawFaceLandmarks(ctx: CanvasRenderingContext2D, faceKeypoints: any[]) {
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 2;

    for (const keypoint of faceKeypoints) {
      ctx.beginPath();
      ctx.arc(keypoint.x * this.canvasElement.width, keypoint.y * this.canvasElement.height, 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

  }

  private drawPoseLandmarks(ctx: CanvasRenderingContext2D, poseLandmarks: any[]) {
    ctx.strokeStyle = '#0000FF';
    ctx.lineWidth = 2;

    for (const landmark of poseLandmarks) {
      ctx.beginPath();
      ctx.arc(landmark.x * this.canvasElement.width, landmark.y * this.canvasElement.height, 5, 0, 2 * Math.PI);
      ctx.stroke();
    }

    this.drawConnectors(ctx!, poseLandmarks!, POSE_CONNECTIONS!, {
      color: '#0000FF',
      lineWidth: 2
    });

  }

  private drawHandLandmarks(ctx: CanvasRenderingContext2D, handLandmarksArray: any[]) {
    ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 2;

    for (const handLandmarks of handLandmarksArray) {
      for (const handLandmark of handLandmarks) {
        ctx.beginPath();
        ctx.arc(handLandmark.x * this.canvasElement.width, handLandmark.y * this.canvasElement.height, 5, 0, 2 * Math.PI);
        ctx.stroke();
      }
      this.drawConnectors(ctx!, handLandmarks!, HAND_CONNECTIONS!, {
        color: '#00FF00',
        lineWidth: 2
      });
    }
  }

  private drawConnectors(ctx: CanvasRenderingContext2D, landmarks: any[], connections: number[][], options: any) {
    ctx.strokeStyle = options.color;
    ctx.lineWidth = options.lineWidth;

    for (const connection of connections) {
      const [startIdx, endIdx] = connection;
      const startLandmark = landmarks[startIdx];
      const endLandmark = landmarks[endIdx];

      ctx.beginPath();
      ctx.moveTo(startLandmark.x * this.canvasElement.width, startLandmark.y * this.canvasElement.height);
      ctx.lineTo(endLandmark.x * this.canvasElement.width, endLandmark.y * this.canvasElement.height);
      ctx.stroke();
    }
  }

  private async detect() {
    const video = this.webCamRef?.nativeElement;
    this.canvasElement = document.getElementById("output_canvas") as HTMLCanvasElement;
    this.canvasElement.width = video.videoWidth;
    this.canvasElement.height = video.videoHeight;
    const canvasCtx = this.canvasElement.getContext("2d");
    this.posePredictions = (await this.poseDetector.detectForVideo(video, performance.now())).landmarks[0];
    this.handPredictions = await this.handPoseDetector?.detect(video);
    this.handPredictions = this.handPredictions?.landmarks;
    this.facePredictions = await this.faceDetector?.detect(video);
    this.facePredictions = this.facePredictions?.detections[0];
    if (canvasCtx) {
      this.detectLandmarks(canvasCtx, this.facePredictions.keypoints!, 'face', 'facelandmarks');
      this.detectLandmarks(canvasCtx, this.posePredictions!, 'pose', 'poselandmarks');
      this.detectLandmarks(canvasCtx, this.handPredictions!, 'hand', 'handlandmarks');
    }
    setTimeout(() => {
      this.detect()
    }, 10);
  }
}
