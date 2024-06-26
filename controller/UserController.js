import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.redirect("/login");
  } catch (error) {
    console.log(req.body);
    res.status(500).json({
      succeded: false,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    let same = false;
    if (user) {
      same = await bcrypt.compare(password, user.password);
    } else {
      return res.status(401).json({
        error: "kullanıcı bulunamadı",
      });
    }

    if (same) {
      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      });
      res.redirect("/users/dashboard");
    } else {
      res.status(401).json({
        status: "false",
        error: "yanlış parola",
      });
    }
  } catch (error) {
    res.status(500).json({
      succeded: false,
      error: error.message,
    });
  }
};

const createToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const getDashboardPage = (req, res) => {
  res.render("dashboard", {
    link: "Dashboard",
  });
};

export { CreateUser, loginUser, getDashboardPage };
