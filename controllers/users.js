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
    .catch(() => res.status(500).send({ message: 'Сервер не отвечает' }));
}

function getUser(req, res) {
  fileReader(filepath)
    .then((users) => users.find((user) => user._id === req.params.id))
    .then((user) => {
      if (!user) {
        return res.status(400).send({ message: 'Нет пользователя с таким id' });
      }
      return res.status(200).send(user);
    })
    .catch(() => res.status(500).send({ message: 'Сервер не отвечает' }));
}

module.exports = {
  getUsersList,
  getUser,
};
