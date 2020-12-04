const path = require('path');
const fileReader = require('../helpers/fileReader');

const filepath = path.join(__dirname, '../data/users.json');

function getUsersList(req, res) {
  fileReader(filepath)
    .then((data) => {
      if (!data) {
        return res.status(400).send({ message: 'Файл не найден' });
      }
      return res.status(200).send(data);
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Файл не найден' });
      }
      return res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
}

function getUser(req, res) {
  fileReader(filepath)
    .then((data) => data.find((user) => user._id === req.params.id))
    .then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Файл не найден' });
      }
      return res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
}

module.exports = {
  getUsersList,
  getUser,
};
