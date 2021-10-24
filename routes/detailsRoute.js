const express = require('express')

const detailsController = require('./../controllers/detailsController')
const router = express.Router()

router.get('/details', detailsController.getDetails)

module.exports = router
