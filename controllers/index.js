exports.index = function(req, res, next) {
  // index here in quotes know exactly where index.pug is located due to app.set('views', ...)
  res.render("index", { title: "Express" });
};
