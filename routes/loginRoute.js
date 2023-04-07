const controls = require('../controllers/login')
const express = require("express");
const router = express.Router();

router.post('/logingin',controls.logingin)

module.exports = router