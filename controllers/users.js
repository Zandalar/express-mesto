// const path = require('path');
// const fileReader = require('../helpers/fileReader');
const User = require('../models/user');

// const filepath = path.join(__dirname, '../data/users.json');

// function getUsersList(req, res) {
//   fileReader(filepath)
//     .then((data) => {
//       if (!data) {
//         return res.status(400).send({ message: 'Файл не найден' });
//       }
//       return res.status(200).send(data);
//     })
//     .catch((err) => {
//       if (err.code === 'ENOENT') {
//         return res.status(404).send({ message: 'Файл не найден' });
//       }
//       return res.status(500).send({ message: 'Внутренняя ошибка сервера' });
//     });
// }

// function getUser(req, res) {
//   fileReader(filepath)
//     .then((data) => data.find((user) => user._id === req.params.id))
//     .then((user) => {
//       if (!user) {
//         return res.status(400).send({ message: 'Нет пользователя с таким id' });
//       }
//       return res.status(200).send(user);
//     })
//     .catch((err) => {
//       if (err.code === 'ENOENT') {
//         return res.status(404).send({ message: 'Файл не найден' });
//       }
//       return res.status(500).send({ message: 'Внутренняя ошибка сервера' });
//     });
// }

function getUsers(req, res) {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Файл не найден' });
      }
      return res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
}

function getUser(req, res) {
  User.findById(req.params.id)
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

function createUser(req, res) {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка' }));
}

module.exports = {
  getUsers,
  getUser,
  createUser,
};
