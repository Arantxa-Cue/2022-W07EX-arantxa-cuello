const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = model("User", UserSchema, "user");

module.exports = User;
