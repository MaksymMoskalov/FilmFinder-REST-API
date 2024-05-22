const { validationSheme, updateFavoriteSchema } = require("./shemas");
const { registerShema, emailShema, loginShema } = require("./registerShema");

module.exports = {
  validationSheme,
  updateFavoriteSchema,
  registerShema,
  emailShema,
  loginShema,
};
