import { C_CUSTOM_DEFAULT_STYLE, ETensorflow } from "../../utils/constants/canvas/constants";
import { isBuiltIn, isCustom } from "../../utils/typeGuards/canvas/typeGuards";
import { ACanvas, IAddConnections, IAddDataPoints, ICustom, IRemoveConnections, TDraw } from "../../utils/types/canvas/types";

export class Canvas extends ACanvas {
    public draw(data: TDraw) {
        switch (true) {
            case isBuiltIn(data):
                data.landmarksStyle = {...this.instanceData[data.model].landmarksStyle,...data.landmarksStyle};
                data.dataPoints=[...(this.instanceData[data.model].dataPoints??[]),...data.dataPoints,...(data.append?.dataPoints??[])];
                (data as unknown as ICustom).connections =[...this.instanceData[data.model].connections,...(data.append?.connections ??[])];
                (data as unknown as ICustom).metric = data.metric?data.metric:this.instanceData[data.model].metric;                
                this.drawCommon(data as unknown as ICustom);
                break;
            case isCustom(data):
                data.landmarksStyle = {...C_CUSTOM_DEFAULT_STYLE,...data.landmarksStyle};
                this.drawCommon(data);
                break;
            // default:

        }

    }
    public clear() {
        throw new Error("Method not implemented.");
    }
    public destroy() {
        throw new Error("Method not implemented.");
    }

    public addConnections(data:IAddConnections):IRemoveConnections{
        const returnData={model:data.model,start:this.instanceData[data.model].connections.length,count:data.connections.length};
        this.instanceData[data.model].connections.push(...data.connections);
        return returnData;
    }

    public removeConnections(data:IRemoveConnections):void{
        //TODO need to maintain states when remove data and update others data start and end
        this.instanceData[data.model].connections.splice(data.start,data.count);
        
    }
    public addDataPoints(data:IAddDataPoints):IRemoveConnections{
        const returnData={model:data.model,start:this.instanceData[data.model].dataPoints?.length ?? 0,count:data.dataPoints.length};
        this.instanceData[data.model].dataPoints={...this.instanceData[data.model].dataPoints,...data.dataPoints};
        return returnData;
    }

    public removeDataPoints(data:IRemoveConnections){
             //TODO need to maintain states when remove data and update others data start and end
             this.instanceData[data.model].dataPoints?.splice(data.start,data.count);
        
    }

        
    public addLabel() {
        throw new Error("Method not implemented.");
    }
    public removeLabel(){
        
    }

    private drawCommon(data:ICustom){
        const overlayWidth = this.canvasElement.width / data.metric;
        const overlayHeight = this.canvasElement.height / data.metric;
        this.canvasContext.strokeStyle = data.landmarksStyle!.point!.color!;
        this.canvasContext.lineWidth = data.landmarksStyle!.point!.width!;
        for (const handLandmark of data.dataPoints) {
            this.canvasContext.beginPath();
            this.canvasContext.arc(handLandmark.x * overlayWidth, handLandmark.y * overlayHeight, 5, 0, 2 * Math.PI);
            this.canvasContext.stroke();
        }
        this.canvasContext.strokeStyle = data.landmarksStyle!.line!.color!;
        this.canvasContext.lineWidth = data.landmarksStyle!.line!.width!;
        for (const connection of data.connections) {
            const [startIdx, endIdx] = connection;
            const startLandmark = data.dataPoints[startIdx];
            const endLandmark = data.dataPoints[endIdx];
            this.canvasContext.beginPath();
            this.canvasContext.moveTo(startLandmark.x * overlayWidth, startLandmark.y * overlayHeight);
            this.canvasContext.lineTo(endLandmark.x * overlayWidth, endLandmark.y * overlayHeight);
            this.canvasContext.stroke();
        }

    }


}
