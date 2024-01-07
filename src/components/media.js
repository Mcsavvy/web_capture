export const CAM_LIST = "select#cam-list";
export const WEBCAM_VIDEO = "video#webcam-stream";
export const WEBCAM_CANVAS = "canvas#canvas";
export const WEBCAM_RECORDING = "video#webcam-recording";
export const WEBCAM_START = "button#start-webcam";
export const WEBCAM_STOP = "button#stop-webcam";
export const WEBCAM_RECORD = "button#record-webcam";
export const MIC_LIST = "select#mic-list";
export const MIC_RECORDING = "audio#mic-recording";
export const MIC_START = "button#start-mic";
export const MIC_STOP = "button#stop-mic";
export const MIC_RECORD = "button#record-mic";
export const MIC_RECORD_TRANSCRIPT = "button#record-transcript";
export const MIC_STOP_RECORDING = "button#stop-mic-recording";
export const MIC_ICON = "div.microphone";
export const MIC_TRANSCRIPT = "textarea#mic-transcript";

/**
 *
 * @param {MediaDeviceKind} kind
 */
export async function getMediaDevices(kind) {
  let mediaDevices = await navigator.mediaDevices.enumerateDevices();
  let devices = mediaDevices.filter((device) => device.kind === kind);
  return devices;
}
