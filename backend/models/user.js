const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongooseValidationErrorTransform = require("mongoose-validation-error-transform");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseValidationErrorTransform);
module.exports = mongoose.model("User", userSchema);
