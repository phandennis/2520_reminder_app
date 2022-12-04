let database = require("../database");

let authController = {
  login: (req, res) => {
    res.render("auth/login");
  },

  register: (req, res) => {
    res.render("auth/register");
  },

  loginSubmit: (req, res) => {
    passport.authenticate("local", {
      successRedirect: "/reminders",
      failureRedirect: "/auth/login",
    })(req, res);
  },

  registerSubmit: (req, res) => {
    let { username, password } = req.body;
    let hashedPassword = database.hashPassword(password);
    database.addUser(username, hashedPassword);
    res.redirect("/auth/login");
  },
};

module.exports = authController;
