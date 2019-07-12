var express = require("express");
var router = express.Router();

// try { es6 } to avoid writing index.index
let {
  landing,
  submit_lead,
  show_leads,
  show_lead,
  edit_lead,
  show_edit_lead
} = require("../controllers/landing");

/* GET home page. */
router.get("/", landing);
router.post("/", submit_lead);
router.get("/leads", show_leads);
router.get("/lead/:lead_id", show_lead);
router.get("/lead/:lead_id/edit", show_edit_lead);
router.post("/lead/:lead_id/edit", edit_lead);

module.exports = router;
