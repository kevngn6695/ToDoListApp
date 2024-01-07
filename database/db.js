const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Kevngn0606!",
  host: "localhost",
  port: 5432,
  database: "to_do_db",
});

module.exports = pool;
