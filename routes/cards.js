const router = require('express').Router();
const path = require('path');
const fileReader = require('./fileReader');

const filepath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  fileReader(filepath)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
