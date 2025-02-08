const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "dac20",
  password: "welcome",
  database: "hungerhive",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

module.exports = pool;
