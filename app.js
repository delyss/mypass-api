const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const db = mongoose.connect('mongodb://mongo/npass', { useNewUrlParser: true, useUnifiedTopology: true });
const port = process.env.PORT || 2000;

const Password = require('./models/password');
const passwordRouter = require('./routes/passwordRouter')(Password);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', passwordRouter);


app.get('/', (req, res) => {
  res.send('hello janim');
});

app.listen(port, () => {
  console.log(`Running on port:${port}`);
});