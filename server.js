import { PeerServer } from "peer";

const port = Number(process.env.PORT) || 9000;

PeerServer({
  host: "0.0.0.0",
  port,
  path: "/",
  proxied: true, // обязательно за прокси хостинга
});

console.log(`PeerJS server listening on :${port}`);