var express = require("express");
var router = express.Router();

// try { es6 } to avoid writing index.index
let { landing, submit_lead } = require("../controllers/landing");
/* GET home page. */
router.get("/", landing);
router.post("/", submit_lead);
module.exports = router;
