const getHomepage = (req, res) => {
  res.render("view");
};
const getDetails = (req, res) => {
  res.render("details");
};

module.exports = {
  getDetails,
  getHomepage,
};
