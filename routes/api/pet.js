const express = require('express');
const router = express.Router()
const path = require('path');
const petController = require("../../controllers/petController")

router.route('/')
    .get(petController.getAllPets)
    
router.route('/breeds')
    .get(petController.getBreedsByType)

router.route('/:id')
    .get(petController.getPet)

module.exports = router