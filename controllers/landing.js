exports.landing = function(req, res, next) {
  // landing here in quotes know exactly where index.pug is located due to app.set('views', ...)
  res.render("landing", { title: "Express" });
};

exports.submit_lead = function(req, res, next) {
  console.log(" lead email", req.body.lead_email);
  res.redirect("/");
};
