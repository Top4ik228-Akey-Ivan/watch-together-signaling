import { PeerServer } from "peer";

const port = Number(process.env.PORT) || 9000;

const server = PeerServer({
  host: "0.0.0.0",
  port,
  path: "/",
  proxied: true,
});

server.on("connection", (c) => console.log("connected:", c.getId()));
server.on("disconnect", (c) => console.log("disconnected:", c.getId()));