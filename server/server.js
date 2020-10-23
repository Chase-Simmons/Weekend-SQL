const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const taskRouter = require('./routes/task.router.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/task', taskRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
