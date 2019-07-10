var express = require("express");
var router = express.Router();

// try { es6 } to avoid writing index.index
let { index } = require("../controllers/index");
/* GET home page. */
router.get("/", index);

module.exports = router;
