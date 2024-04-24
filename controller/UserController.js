import User from "../model/UserModel.js";
import bcrypt from "bcrypt";

const CreateUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      succeded: true,
      user,
    });
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
      res.status(200).json({
        message: "logged in successfully  ",
      });
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

export { CreateUser, loginUser };
