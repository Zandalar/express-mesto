const fs = require('fs').promises;

function fileReader(path) {
  return fs.readFile(path, { encoding: 'utf-8' })
    .then((data) => JSON.parse(data));
}

module.exports = fileReader;
