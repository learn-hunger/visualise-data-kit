import { ICoordinates, INormalizedLandmark } from "./types/canvas/types";

export function isObject(item:any) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }
   
  /**
   * Deeply merges multiple objects into a single object.
   * @date 3/2/2024 - 11:12:38 PM
   *
   * @export
   * @param {*} target - The target object to merge into.
   * @param {...*} sources - The source objects to merge from.
   * @returns {*} - The merged object.
   */
  export function mergeDeep(target:any, ...sources:any) {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
  
    return mergeDeep(target, ...sources);
  }

  /**
   * used when you make the video laterally inverted and correspondingly want to draw landmarks
   * @param landmarks 
   * @param invertAxis 
   * @returns 
   */
  export function invertLandmarks(landmarks:INormalizedLandmark[],invertAxis:'x' | 'y'):INormalizedLandmark[]{
    landmarks=JSON.parse(JSON.stringify(landmarks))
    landmarks=landmarks.map((i)=>{
      i[invertAxis]=1-i[invertAxis];
      return i
    })
    return landmarks;
  }