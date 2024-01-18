import $ from "jquery";
import client from "./client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  loadAudioDevices,
  setCurrentMic,
  startMicrophoneStream,
  stopMicrophoneStream,
  startRecording as startRecordingAudio,
  stopRecording as stopRecordingAudio,
} from "./components/mic";
import {
  CAM_LIST,
  MIC_RECORD,
  MIC_START,
  MIC_STOP,
  MIC_STOP_RECORDING,
  MIC_LIST,
  WEBCAM_CANVAS,
  WEBCAM_RECORD,
  WEBCAM_START,
  WEBCAM_STOP,
  WEBCAM_VIDEO,
} from "./components/media";
import {
  loadVideoDevices,
  setCurrentCam,
  startRecording as startRecordingVideo,
  startVideoStream,
  stopVideoStream,
} from "./components/cam";

/**@type {ConstrainDOMString}*/
let currentCamID = null;
/**@type {HTMLVideoElement}*/
let video = null;
/**@type {HTMLCanvasElement}*/
let canvas = null;

let streaming = false; // Whether or not we're currently streaming
const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

function startup() {
  loadVideoDevices().then((videoDevices) => {
    if (videoDevices.length === 0) {
      console.error("No video devices found");
      return;
    }
    setCurrentCam(videoDevices[0].deviceId || "default");
    $(WEBCAM_START).toggleClass("disabled", false);
  });
  loadAudioDevices().then((microphoneDevices) => {
    if (microphoneDevices.length === 0) {
      console.error("No microphone devices found");
      return;
    }
    setCurrentMic(microphoneDevices[0].deviceId || "default");
    $(MIC_START).toggleClass("disabled", false);
  });
}

$(() => {
  video = $(WEBCAM_VIDEO).get(0);
  canvas = $(WEBCAM_CANVAS).get(0);

  $(CAM_LIST).on("change", function () {
    streaming = false;
    setCurrentCam(this.value).then(startVideoStream);
  });
  $(WEBCAM_START).on("click", function (ev) {
    startVideoStream();
    ev.preventDefault();
  });
  $(WEBCAM_STOP).on("click", function (ev) {
    stopVideoStream();
    ev.preventDefault();
  });

  $(WEBCAM_RECORD).on("click", function (ev) {
    startRecordingVideo();
    ev.preventDefault();
  });

  $(video).on("canplay", (ev) => {
    console.log("canplay");
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);

      if (isNaN(height)) {
        height = width / (4 / 3);
      }
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      streaming = true;
    }
  });

  $(MIC_LIST).on("change", function () {
    setCurrentMic(this.value);
  });

  $(MIC_START).on("click", function (ev) {
    startMicrophoneStream();
    ev.preventDefault();
  });
  $(MIC_STOP).on("click", function (ev) {
    stopMicrophoneStream();
    ev.preventDefault();
  });
  $(MIC_RECORD).on("click", function (ev) {
    startRecordingAudio();
    ev.preventDefault();
  });
  $(MIC_STOP_RECORDING).on("click", function (ev) {
    stopRecordingAudio();
    ev.preventDefault();
  });
  startup();
});
