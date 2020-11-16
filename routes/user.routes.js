const express = require('express')

const checkAuth = require('../middleware/check-auth')
const userController = require('../controllers/user.controller')

const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/password', userController.password)
router.post('/recover', userController.recover)
router.get('/find', checkAuth, userController.find)
router.put('/', checkAuth, userController.update)
router.delete('/', checkAuth, userController.delete)

module.exports = router