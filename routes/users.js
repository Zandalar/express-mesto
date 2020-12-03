const router = require('express').Router();
const path = require('path');
const fileReader = require('./fileReader');

const filepath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (req, res) => {
  fileReader(filepath)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

router.get('/users/:id', (req, res) => {
  fileReader(filepath)
    .then((data) => {
      let status = 404;
      let answer = { message: 'Нет пользователя с таким id' };
      data.some((user) => {
        if (user._id === req.params.id) {
          status = 200;
          answer = user;
        }
      });
      res.status(status).send(answer);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
