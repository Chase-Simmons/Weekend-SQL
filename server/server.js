const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const taskRouter = require('./routes/task.router');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.use('/task', taskRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
