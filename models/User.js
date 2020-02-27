const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accountBalance: {
    type: Decimal128,
    default: 5000.00
  }
  },
  {
      timestamps: true
  });

module.exports = User = mongoose.model("User", UserSchema);