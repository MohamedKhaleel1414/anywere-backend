const controls = require("../controllers/controls");
const express = require("express");
const router = express.Router();
const verify = require("../middleware/verify")

router.post("/save", verify.verify, controls.save);
router.get("/retrieve", verify.verify, controls.retrieve);

module.exports = router;
