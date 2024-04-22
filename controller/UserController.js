import User from "../model/UserModel.js";

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


export { CreateUser, };