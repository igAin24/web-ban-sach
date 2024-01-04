const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getDetails,
  getLogin,
  logedIn,
} = require("../controllers/contronller");

router.get("/", getHomepage);
router.get("/details", getDetails);
router.get("/login", getLogin);
router.post("/login", logedIn);
module.exports = router;
