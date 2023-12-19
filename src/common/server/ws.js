const WebSocket = require("ws");

const wss1 = new WebSocket.WebSocketServer({ noServer: true });

wss1.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", (message) => {
    //監聽前端傳回來的訊息

    const newMsg = JSON.parse(message);

    //推播
    sendAllUser(newMsg);
  });
});

function sendAllUser(msg) {
  wss1.clients.forEach(function each(client) {
    //已連線 && 推播給所有人
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(msg));
    }
  });
}

module.exports = wss1;
