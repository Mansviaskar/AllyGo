const express = require("express");
const router = express.Router();

const {
  signupCompany,
  loginCompany
} = require("../controllers/companyController");

router.post("/signup", signupCompany);
router.post("/login", loginCompany);

module.exports = router;