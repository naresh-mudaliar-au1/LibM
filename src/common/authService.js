import jwt from "jsonwebtoken";
import { userModel } from "../user";

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error("Access denied. No token provided");

    const mySecretKey = process.env.SECRETKEY;

    const verifyToken = jwt.verify(authorization, mySecretKey);

    const username = verifyToken.username;

    const getUser = await userModel.findOne({ username });
    if (!getUser) throw new Error("Token Not Valid");

    req.currentUser = getUser;
    next();
  } catch (error) {
    res.status(403).send({ Error: error.message });
  }
};

export default auth;
