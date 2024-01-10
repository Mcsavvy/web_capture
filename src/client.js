import io, { Socket } from "socket.io-client";
import $ from "jquery";
import {OBJECT_PREDICTIONS, WEBCAM_SNAPSHOT} from "./components/media.js";

const serverURL = process.env.SERVER_URL;
/**@type {Socket} */
let client = io(serverURL, {
  transports: ["websocket", "polling", "flashsocket"],
});


client.on("connect", () => {
  console.log("connected");
});

client.on("disconnect", () => {
  console.log("disconnected");
});

client.on("error", (err) => {
  console.log(err);
});


client.on("message", (msg) => {
  console.log("got message:", msg);
});

client.on("recognition", (data) => {
  let [image_bytes, result] = data;
  console.log("got recognition:",JSON.stringify(result));
  let byte_array = new Uint8Array(image_bytes).reduce((data, byte) => data + String.fromCharCode(byte), '');
  let imageUrl = `data:image/png;base64,${btoa(byte_array)}`;
  $(WEBCAM_SNAPSHOT).attr("src", imageUrl);
  let tableBody = $(OBJECT_PREDICTIONS + ' tbody');
  tableBody.empty();
  result.forEach((prediction) => {
    let {top, left, bottom, right} = prediction.location;
    tableBody.append(`
    <tr>
      <td>${prediction.name}</td>
      <td>${Math.round(prediction.value * 100)}%</td>
      <td>${top.toFixed(2)}</td>
      <td>${left.toFixed(2)}</td>
      <td>${bottom.toFixed(2)}</td>
      <td>${right.toFixed(2)}</td>
    </tr>
    `);
  });
})


export default client;
