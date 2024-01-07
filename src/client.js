import io from "socket.io-client";

const USE_SERVER = false;
let client;

if (USE_SERVER) {
    client = io("http://localhost:8080", {
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
    return;
} else {
    client = {
        emit: (event, ...args) => {
            console.log("emit", event, args);
        }
    }
}

export default client;