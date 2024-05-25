import pg from "pg";

export const pool = new pg.Pool({
  user: "skivadev",
  host: "localhost",
  password: "root",
  database: "myusersdb",
  port: "5432"
});

pool
  .query("SELECT * FROM users;")
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });