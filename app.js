const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./routes/usersRouter');
const cardsRouter = require('./routes/cardsRouter');
const notFoundRouter = require('./routes/notFoundRouter');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  // useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.user = { _id: '5fd779d3aa71c56131c37ef0' };
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', usersRouter);
app.use('/', cardsRouter);
app.use('*', notFoundRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
