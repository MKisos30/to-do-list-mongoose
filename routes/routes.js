// const express = require('express');
// const router = express().Router();

// const { Router } = require('express');
// const router = Router();

const router = require('express').Router();
const controllers = require('../controllers/controller')

router
    .get('/', controllers.getData)
    .post('/addTask', controllers.addTask)
    .put('/editTask', controllers.editTask)
    .delete('/deleteData', controllers.deleteData)
    .get('/TaskById/:id', controllers.getTaskById)


module.exports = router;