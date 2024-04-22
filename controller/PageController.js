const getİndexPage = (req, res) => {
  res.render("index",{
    link:"index",
  });
};

const getAboutPage = (req, res) => {
  res.render("about",{
    link:"about",
  });
};



const getRegisterPage = (req, res) => {
  res.render("register",{
    link:"register",
  });
}




export { getAboutPage, getİndexPage,getRegisterPage };
