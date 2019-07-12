var express = require("express");
var router = express.Router();

// try { es6 } to avoid writing index.index
let { landing, submit_lead, show_leads } = require("../controllers/landing");
/* GET home page. */
router.get("/", landing);
router.post("/", submit_lead);
router.get("/leads", show_leads);
module.exports = router;
