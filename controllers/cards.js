const Card = require('../models/card');
// const path = require('path');
// const fileReader = require('../helpers/fileReader');
//
// const filepath = path.join(__dirname, '../data/cards.json');

// function getCards(req, res) {
//   fileReader(filepath)
//     .then((data) => {
//       if (!data) {
//         return res.status(404).send({ message: 'Файл не найден' });
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

function getCards(req, res) {
  Card.find({})
    .then((data) => res.status(200).send(data))
    .catch((err) => {
      if (err.code === 'ENOENT') {
        return res.status(404).send({ message: 'Файл не найден' });
      }
      return res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
}

function createCard(req, res) {
  const { name, link, ownerId } = req.body;
  Card.create({ name, link, owner: ownerId })
    .then((card) => res.status(200).send(card))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
}

function deleteCard(req, res) {
  Card.findByIdAndRemove(req.params.cardId)
    .then(() => res.status(200).send({ message: 'Карточка успешно удалена!' }))
    .catch(() => res.status(500).send({ message: 'Внутренняя ошибка сервера' }));
}

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
