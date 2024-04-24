import User from "../model/UserModel.js";

const authenticateToken = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).json({
        succeded: false,
        error: "no token available",
      });
    }

    req.user = await User.findById(
      jwt.verify(token, process.env.JWT_SECRET).userId
    );

    next();
  } catch (error) {
    res.status(401).json({
      error: error + "not authenticated",
    });
  }
};

export { authenticateToken };
