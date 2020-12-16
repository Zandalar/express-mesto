const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь океана',
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^((https?)\\:\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)$/.test(v);
      },
      message: 'Ссылка не корректна. Попробуйте снова',
    },
  },
  versionKey: false,
});

module.exports = mongoose.model('user', userSchema);
