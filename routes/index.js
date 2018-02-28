const express = require('express')
const router = express.Router()
const storeController = require('../controllers/storeControllers')

router.get('/', storeController.homePage)

module.exports = router