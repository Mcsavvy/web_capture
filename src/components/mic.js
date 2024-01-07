import $ from "jquery";
import {
  MIC_ICON,
  MIC_RECORD,
  MIC_RECORDING,
  MIC_RECORD_TRANSCRIPT,
  MIC_START,
  MIC_STOP,
  MIC_STOP_RECORDING,
  MIC_TRANSCRIPT,
  getMediaDevices,
} from "./media";

let currentDeviceId = null;
/**@type {MediaStream} */
let currentStream = null;
/**@type {MediaRecorder} */
let recorder = null;
let chunks = [];
/**@type {SpeechRecognition} */
let recognition = null;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

export async function loadAudioDevices() {
  let microphoneDevices;
  try {
    microphoneDevices = await getMediaDevices("audioinput");
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return [];
  }
  microphoneDevices.forEach((device) => {
    $("#mic-list").append(
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
  $(MIC_RECORD_TRANSCRIPT).toggleClass("disabled", false);
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
  $(MIC_RECORD_TRANSCRIPT).toggleClass("disabled", true);
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
  recordTranscript();
}

export function recordTranscript() {
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (e) => {
    console.log("onresult", e);
    let transcript = e.results[0][0].transcript;
    $(MIC_TRANSCRIPT).val(transcript);
  };
  recognition.onaudiostart = (e) => {
    console.log("Recognition: started listening");
  };
  recognition.onaudioend = (e) => {
    console.log("Recognition: stopped listening");
  };
  recognition.onspeechstart = (e) => {
    console.log("Recognition: speech started");
  };
  recognition.onnomatch = (e) => {
    console.log("Recognition: no match");
  };
  recognition.onerror = (event) => {
    alert("An error occurred: " + event.error);
    console.error("Recognition error: ", event.error);
  };
  recognition.onstart = (e) => {
    console.log("Recognition: started");
  };
  recognition.onend = (e) => {
    console.log("Recognition: ended");
    $(MIC_RECORD_TRANSCRIPT).toggleClass("disabled", false);
    if (!recorder) {
      $(MIC_STOP_RECORDING).toggleClass("disabled", true);
    }
  };

  recognition.start();
  $(MIC_RECORD_TRANSCRIPT).toggleClass("disabled", true);
  $(MIC_STOP_RECORDING).toggleClass("disabled", false);
  $(MIC_RECORD).toggleClass("disabled", true);
}

export function stopRecording() {
  if (recorder) {
    recorder.stop();
  } if (recognition) {
    recognition.stop();
  }
  $(MIC_RECORD).toggleClass("disabled", false);
  $(MIC_STOP_RECORDING).toggleClass("disabled", true);
}
