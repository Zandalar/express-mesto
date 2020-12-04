const path = require('path');
const fileReader = require('../helpers/fileReader');

const filepath = path.join(__dirname, '../data/cards.json');

function getCards(req, res) {
  fileReader(filepath)
    .then((data) => {
      if (!data) {
        return res.status(404).send({ message: 'Файл не найден' });
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

module.exports = {
  getCards,
};
