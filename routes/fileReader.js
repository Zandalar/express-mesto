const fs = require('fs').promises;

const fileReader = (path) => fs.readFile(path, { encoding: 'utf-8' })
  .then((data) => JSON.parse(data))
  .catch((err) => console.log(`Что-то пошло не так :( ${err}`));

module.exports = fileReader;
