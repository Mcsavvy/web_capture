/**
 * @type {ConstrainDOMString}
 */
let defaultDeviceId = null;
/**
 * @type {HTMLVideoElement}
 */
let video = null;
/**
 * @type {HTMLCanvasElement}
 */
let canvas = null;
/**
 * @type {HTMLImageElement}
 */
let photo = null;
/**
 * @type {HTMLButtonElement}
 */
let snapbutton = null;
/**
 * @type {HTMLButtonElement}
 */
let clearbutton = null;
/**
 *
 * @type {HTMLSelectElement}
 */
let select = null;
/**
 * 
 * @type {MediaStream}
 */
let currentStream = null;

async function getVideoDevices() {
  let mediaDevices = await navigator.mediaDevices.enumerateDevices();
  let videoDevices = mediaDevices.filter(
    (device) => device.kind === "videoinput"
  );
  return videoDevices;
}

/**
 *
 * @param {?ConstrainDOMString} deviceId
 * @returns
 */
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

/**
 *
 * @param {ConstrainDOMString} deviceId
 */
async function setDefaultDevice(deviceId) {
  console.log("setDefaultDevice", deviceId);
  let videoDevices = await getVideoDevices();
  if (videoDevices.length === 0) {
    return false;
  }
  // if (videoDevices.some((device) => device.deviceId === deviceId)) {
  //   defaultDeviceId = deviceId;
  // }
  // defaultDeviceId = videoDevices[0].deviceId;
  defaultDeviceId = deviceId;
  // alert(`Default device ${defaultDeviceId}`)
  return true;
}

async function startStream() {
  let stream = null;
  try {
    console.log("defaultDeviceId", defaultDeviceId);
    stream = await getVideoStream(defaultDeviceId);
  } catch (err) {
    console.error(`An error occurred: ${err}`);
    return;
  }
  console.log("stream", stream);
  video.srcObject = stream;
  await video.play();
}

(() => {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  const width = 320; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea").remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener("click", () => window.open(location.href));
      return true;
    }
    return false;
  }

  function startup() {
    if (showViewLiveResultButton()) {
      return;
    }
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    snapbutton = document.getElementById("snap");
    clearbutton = document.getElementById("clear");
    select = document.getElementById("cam-list");

    select.addEventListener("change", () => {
      streaming = false;
      setDefaultDevice(select.value).then(startStream);
    });

    getVideoDevices()
      .then((videoDevices) => {
        if (videoDevices.length === 0) {
          console.error("No video devices found");
          return;
        }
        videoDevices.forEach((device) => {
          let option = document.createElement("option");
          option.value = device.deviceId;
          option.text = device.label;
          select.appendChild(option);
        });
        setDefaultDevice(videoDevices[0].deviceId);
        setInterval(takepicture, 5000);
        snapbutton.addEventListener(
          "click",
          (ev) => {
            takepicture();
            ev.preventDefault();
          },
          false
        );
        clearbutton.addEventListener(
          "click",
          (ev) => {
            clearphoto();
            ev.preventDefault();
          },
          false
        );
        startStream();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        console.log("canplay");
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          // video.setAttribute("width", "80vw");
          // video.setAttribute("height", "80vh");
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false
    );
    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);
    } else {
      clearphoto();
    }
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener("load", startup, false);
})();
