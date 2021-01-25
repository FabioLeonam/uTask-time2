const express = require('express');
const TaskController = require('./controllers/TaskController');
const Task = require('./models/Task');

const routes = new express.Router();


routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.put('/tasks/:id', TaskController.update);
routes.delete('/tasks/:id', TaskController.delete);


module.exports = routes;