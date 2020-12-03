const usersRouter = require('express').Router();
const { getUser, getUsersList } = require('../controllers/users');

usersRouter.get('/users', getUsersList);
usersRouter.get('/users/:id', getUser);

module.exports = usersRouter;
