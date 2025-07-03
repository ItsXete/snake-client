const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.20.118.65", // or "localhost" if local
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: XET"); // optional: your 3-letter snake name
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  conn.on("end", () => {
    console.log("Disconnected from server.");
  });

  conn.on("error", (err) => {
    console.error("Connection error:", err.message);
  });

  return conn;
};

// Export the connect function
module.exports = { connect };
