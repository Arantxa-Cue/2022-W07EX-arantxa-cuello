const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Item = model("Item", ItemSchema, "item");

module.exports = Item;
