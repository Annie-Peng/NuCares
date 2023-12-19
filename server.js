const { createServer } = require("http");
const { WebSocketServer } = require("ws");
const { parse } = require("url");
const next = require("next");
const port = 3000;
const wss1 = require("./src/common/server/ws");

const dev = process.env.node_env !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) =>
    handle(req, res, parse(req.url, true))
  );

  server.on("upgrade", function (req, socket, head) {
    const { pathname } = parse(req.url, true);
    if (pathname === "/ws") {
      wss1.handleUpgrade(req, socket, head, function done(ws) {
        return wss1.emit("connection", ws, req);
      });
    }
  });

  // Keep the next.js upgrade handler
  // from being added to our custom server so
  // sockets stay open even when not HMR.
  const originalOn = server.on.bind(server);
  server.on = function (event, listener) {
    if (event !== "upgrade") {
      return originalOn(event, listener);
    }
  };

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> ready on http://localhost:${port} and ws://localhost:${port}`
    );
  });
});
