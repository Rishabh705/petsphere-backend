const express = require('express');
const router = express.Router()
const path = require('path');
const favoriteController = require("../../controllers/favoriteController")

router.route('/')
    .get(favoriteController.getFavoritePets)
    .post(favoriteController.addFavoritePet)

module.exports = router