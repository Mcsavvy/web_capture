import io from "socket.io-client";

const client = io("http://localhost:8080", {
    transports: ["websocket", "polling", "flashsocket"],
});

client.on("connect", () => {
    console.log("connected");
})

client.on("disconnect", () => {
    console.log("disconnected");
})

client.on("response", (data) => {
    console.log("response", data);
})

export default client;
