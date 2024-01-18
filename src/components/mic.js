import $ from "jquery";
import {
  MIC_ICON,
  MIC_LIST,
  MIC_RECORD,
  MIC_RECORDING,
  MIC_START,
  MIC_STOP,
  MIC_STOP_RECORDING,
  getMediaDevices,
} from "./media";

let currentDeviceId = null;
/**@type {MediaStream} */
let currentStream = null;
/**@type {MediaRecorder} */
let recorder = null;
let chunks = [];

export async function loadAudioDevices() {
  let microphoneDevices;
  try {
    microphoneDevices = await getMediaDevices("audioinput");
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return [];
  }
  microphoneDevices.forEach((device) => {
    $(MIC_LIST).append(
      `<option class="mic" value="${device.deviceId}">${
        device.label || "default"
      }</option>`
    );
  });
  return microphoneDevices;
}

export async function setCurrentMic(deviceId) {
  console.log("setCurrentMic", deviceId);
  let microphoneDevices = await getMediaDevices("audioinput");
  if (microphoneDevices.length === 0) {
    return false;
  }
  if (deviceId === "default") {
    currentDeviceId = null;
  } else {
    currentDeviceId = deviceId;
  }
  return true;
}

export async function startMicrophoneStream() {
  let constraints = {
    audio: true,
  };
  if (currentDeviceId) {
    constraints.audio = { deviceId: currentDeviceId };
  }
  if (currentStream) {
    currentStream.getTracks().forEach((track) => track.stop());
  }
  let stream = await navigator.mediaDevices.getUserMedia(constraints);
  currentStream = stream;
  recorder = new MediaRecorder(stream);
  $(MIC_ICON).toggleClass("active", true);
  $(MIC_START).toggleClass("disabled", true);
  $(MIC_STOP).toggleClass("disabled", false);
  $(MIC_RECORD).toggleClass("disabled", false);
  return stream;
}

export function stopMicrophoneStream() {
  if (currentStream) {
    currentStream.getTracks().forEach((track) => track.stop());
  }
  currentStream = null;
  recorder = null;
  $(MIC_ICON).toggleClass("active", false);
  $(MIC_START).toggleClass("disabled", false);
  $(MIC_STOP).toggleClass("disabled", true);
  $(MIC_RECORD).toggleClass("disabled", true);
  $(MIC_STOP_RECORDING).toggleClass("disabled", true);
}

export function startRecording() {
  if (!recorder) {
    console.error("No recorder found");
    return;
  }
  recorder.onerror = (event) => {
    console.error("Recorder error: ", event.error);
  };
  recorder.ondataavailable = (e) => chunks.push(e.data);
  recorder.onstop = (e) => {
    let blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
    chunks = [];
    let audioURL = window.URL.createObjectURL(blob);
    $(MIC_RECORDING).attr("src", audioURL);
  };
  recorder.start();
  $(MIC_STOP_RECORDING).toggleClass("disabled", false);
  $(MIC_RECORD).toggleClass("disabled", true);
}

export function stopRecording() {
  if (recorder) {
    recorder.stop();
  }
  $(MIC_RECORD).toggleClass("disabled", false);
  $(MIC_STOP_RECORDING).toggleClass("disabled", true);
}
