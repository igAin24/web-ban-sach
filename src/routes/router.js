const express = require("express");
const router = express.Router();
const { getHomepage, getDetails } = require("../controllers/contronller");

router.get("/", getHomepage);
router.get("/details", getDetails);
module.exports = router;
