const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateSignupInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Please enter your name";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter an email address";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };    
}
