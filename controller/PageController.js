const getİndexPage = (req, res) => {
  res.render("index", {
    link: "index",
  });
};

const getAboutPage = (req, res) => {
  res.render("about", {
    link: "about",
  });
};

const getRegisterPage = (req, res) => {
  res.render("register", {
    link: "register",
  });
};

const getLoginPage = (req, res) => {
  res.render("login", {
    link: "login",
  });
};

export { getAboutPage, getİndexPage, getRegisterPage ,getLoginPage};
