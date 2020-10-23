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
// GET INFO FROM DB
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
///
// SEND INFO TO DB
router.post('/', function (req, res) {
  const taskToAdd = req.body;
  const query =
    'INSERT INTO "task" ("task_name", "is_complete") VALUES ($1, $2);';

  pool
    .query(query, [taskToAdd.task_name, taskToAdd.is_complete])
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error in POST', error);
      res.sendStatus(500);
    });
});
///
// DELETE INFO FROM DB
router.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  const queryText = `DELETE FROM "task" WHERE id=$1;`;
  const queryArrayData = [taskId];

  pool
    .query(queryText, queryArrayData)
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
///
// UPDATES INFO IN DB

//fix
router.put('/:id', (req, res) => {
  const newTaskInfo = req.body;
  const queryText = `UPDATE "TASK" SET is_complete=$1 WHERE id=$2;`;
  const queryArray = [newTaskInfo.is_complete, req.params.id];

  pool
    .query(queryText, queryArray)
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.warning(err);
      res.sendStatus(500);
    });
});
///

module.exports = router;
