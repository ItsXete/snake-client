const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // Change to the server's IP address if needed
    port: 50541, // Change to the server's port if needed
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");

    // Send name to server upon connection
    conn.write("Name: XET"); // Name can be any 3-character string
    // conn.write("Move: up"); // Example move command
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

module.exports = { connect };
