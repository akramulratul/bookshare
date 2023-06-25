const joi = require("joi");

const regValidator = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  college: joi.string().required(),
  location: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().min(6).required(),
  confirmPassword: joi.string().min(6).required(),
});

const loginValidator = joi.object({
  email: joi.string().required().email(),
  password: joi.string().min(6).required(),
});

const editValidator = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
  college: joi.string().required(),
  location: joi.string().required(),
  profilePic: joi.string(),
});

const changePasswordValidator = joi.object({
  currentPassword: joi.string().min(6).required(),
  newPassword: joi.string().min(6).required(),
  confirmPassword: joi.string().min(6).required(),
});

const postBookValidator = joi.object({
  bookName: joi.string().required(),
  subject: joi.string().required(),
  branch: joi.string().required(),
  // condition: joi.string().when("share", {
  //   is: false, // when 'share' is false (meaning the book is for sale, not for share)
  //   then: joi.required(),
  //   otherwise: joi.allow(null),
  // }),
  // priceType: joi.string().when("share", {
  //   is: false, // when 'share' is false (meaning the book is for sale, not for share)
  //   then: joi.required(),
  //   otherwise: joi.allow(null),
  // }),
  // mrp: joi.number().when("share", {
  //   is: false, // when 'share' is false (meaning the book is for sale, not for share)
  //   then: joi.required(),
  //   otherwise: joi.allow(null),
  // }),
  selectedFile: joi.string().required(),
  author: joi.string().required(),
  bookName: joi.string().required(),
  tags: joi.array().required(),
  noOfPages: joi.number().required(),
  edition: joi.string().required(),
  description: joi.string().required().min(20),
  ownerName: joi.string().required(),
  share: joi.boolean(),
  price: joi.number(),
  // price: joi.number().when("share", {
  //   is: false, // when 'share' is false (meaning the book is for sale, not for share)
  //   then: joi.required(),
  //   otherwise: joi.allow(null),
  // }),
});

const feedBackValidator = joi.object({
  name: joi.string().required(),
  message: joi.string().required().min(20),
});

module.exports.loginValidator = loginValidator;
module.exports.regValidator = regValidator;
module.exports.editValidator = editValidator;
module.exports.changePasswordValidator = changePasswordValidator;
module.exports.postBookValidator = postBookValidator;
module.exports.feedBackValidator = feedBackValidator;
