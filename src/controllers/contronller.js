const getHomepage = (req, res) => {
  res.render("view");
};
const getDetails = (req, res) => {
  res.render("details");
};
const getLogin = (req, res) => {
  res.render("loginForm");
};
const logedIn = (req, res) => {
  res.render("details");
};

module.exports = {
  getDetails,
  getHomepage,
  getLogin,
  logedIn,
};
