const express = require('express');
const router = express.Router()
const path = require('path');
const authController = require("../../controllers/authController")

router.route('/login')
    .post(authController.login)
    
router.route('/register')
    .post(authController.register)

module.exports = router