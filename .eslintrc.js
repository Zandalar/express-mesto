module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    _id: 'off',
    'array-callback-return': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
  },
};
