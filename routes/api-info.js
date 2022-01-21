const path = require('path');

const express = require('express');

const isAuth = require('../middleware/is-auth');

const apiInfoController = require("./../controllers/api-info");

const router = express.Router();




router.get("/info", apiInfoController.getProcessInfo)
router.get("/randoms", apiInfoController.calculateRandomNumbers)



module.exports = router;