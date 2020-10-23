const express = require('express');
const router = express.Router();

const pg = require('pg');

const Pool = pg.Pool; // Class

// Connect Node to our database
const pool = new Pool({
  database: 'weekend-to-do-app', // name of our database
  host: 'localhost', // where is your database?
  port: 5432, // this is the default port
  max: 10, // number of connections
  idleTimeoutMillis: 10000, // 10 seconds
});
///
//
router.get('/', (req, res) => {
  console.log('getter');
  let search = `SELECT * FROM "task" ORDER BY "id"`;
  pool
    .query(search)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error in GET /songs ${error}`);
      res.sendStatus(500);
    });
});
//

module.exports = router;
