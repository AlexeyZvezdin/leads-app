const models = require("../models");

exports.landing = function(req, res, next) {
  // landing here in quotes know exactly where index.pug is located due to app.set('views', ...)
  res.render("landing", { title: "Express" });
};

exports.submit_lead = function(req, res, next) {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect("/leads");
  });
};

exports.show_leads = function(req, res, next) {
  models.Lead.findAll().then(leads => {
    res.render("landing", { title: "Express", leads: leads });
  });
};

exports.show_lead = function(req, res, next) {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render("lead", { lead: lead });
  });
};
