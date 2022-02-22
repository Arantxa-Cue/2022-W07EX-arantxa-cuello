const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../database/models/UserModel");

const loginUser = async(req, res, next)=>{
  const {username, password} = req.body;
  const user = await User.findOne(username);
  if (!user) {
    const error = new Error("User not found");
    error.code = 401;
    next(error);
  }else{
    const rightPassword = await bcrypt.compare(password, user);
    if (!rightPassword) {
      const error = new Error("Incorrect password");
      next(error);
  }else{
    const useData = {
      name: username,
      id: user.id,
    }
  }
}
