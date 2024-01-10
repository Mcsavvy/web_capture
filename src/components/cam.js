import $ from "jquery";
import client from "../client";
import {
  getMediaDevices,
  CAM_LIST,
  WEBCAM_VIDEO,
  WEBCAM_RECORDING,
  WEBCAM_RECORD,
  WEBCAM_START,
  WEBCAM_STOP,
} from "./media";

let currentDeviceID = null;
let currentStream = null;

async function getVideoStream(deviceId) {
  let constraints = {
    audio: false,
  };
  if (deviceId) {
    constraints.video = { deviceId: deviceId };
  } else {
    constraints.video = true;
  }
  if (currentStream) {
    currentStream.getTracks().forEach((track) => track.stop());
  }
  let stream = await navigator.mediaDevices.getUserMedia(constraints);
  currentStream = stream;
  return stream;
}

export async function loadVideoDevices() {
  let videoDevices;
  try {
    videoDevices = await getMediaDevices("videoinput");
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return [];
  }
  videoDevices.forEach((device) => {
    $(CAM_LIST).append(
      `<option class="cam" value="${device.deviceId}">${device.label}</option>`
    );
  });
  return videoDevices;
}

export async function setCurrentCam(deviceId) {
  console.log("setCurrentCam", deviceId);
  let videoDevices = await getMediaDevices("videoinput");
  if (videoDevices.length === 0) {
    return false;
  }
  if (deviceId === "default") {
    currentDeviceID = null;
  } else {
    currentDeviceID = deviceId;
  }
  return true;
}

export async function startVideoStream() {
  /**@type {HTMLVideoElement} */
  let video = $(WEBCAM_VIDEO).get(0);
  try {
    console.log("currentDeviceID", currentDeviceID);
    let stream = await getVideoStream(currentDeviceID);
    video.srcObject = stream;
    await video.play();
    $(WEBCAM_START).toggleClass("disabled", true);
    $(WEBCAM_STOP).toggleClass("disabled", false);
    $(WEBCAM_RECORD).toggleClass("disabled", false);
  } catch (err) {
    console.error(`An error occurred: ${err}`);
  }
}

export async function stopVideoStream() {
  /**@type {HTMLVideoElement} */
  let video = $(WEBCAM_VIDEO).get(0);

  if (currentStream) {
    currentStream.getTracks().forEach((track) => track.stop());
    currentStream = null;
  }
  video.srcObject = null;
  video.pause();
  $(WEBCAM_START).toggleClass("disabled", false);
  $(WEBCAM_STOP).toggleClass("disabled", true);
  $(WEBCAM_RECORD).toggleClass("disabled", true);
}

export async function startRecording() {
  let recorder = new MediaRecorder(currentStream);
  let chunks = [];
  recorder.ondataavailable = (e) => chunks.push(e.data);
  recorder.onstop = (e) => {
    let blob = new Blob(chunks, { type: "video/webm" });
    let url = URL.createObjectURL(blob);
    client.emit("clip", Date.now(), blob);
    $(WEBCAM_RECORDING).attr("src", url);
  };
  recorder.start();
  $(WEBCAM_RECORD).toggleClass("disabled", true);
  setTimeout(() => {
    recorder.stop();
    $(WEBCAM_RECORD).toggleClass("disabled", false);
  }, 1000);
  return recorder;
}
