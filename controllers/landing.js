const models = require("../models");

exports.landing = function(req, res, next) {
  // landing here in quotes know exactly where index.pug is located due to app.set('views', ...)
  res.render("landing", { title: "Express" });
};

exports.show_leads = function(req, res, next) {
  models.Lead.findAll().then(leads => {
    res.render("landing", { title: "Express", leads: leads });
  });
};

exports.submit_lead = function(req, res, next) {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect("/leads");
  });
};
