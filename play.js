const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("error", (err) => {
    console.error("Connection error:", err.message);
  });

  conn.on("end", () => {
    console.log("Disconnected from server.");
  });

  return conn;
};

console.log("Connecting ...");
connect();