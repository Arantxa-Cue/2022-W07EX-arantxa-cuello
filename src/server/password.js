const bcrypt = require("bcrypt");

(async () => {
  const encriptedPassword = await bcrypt.hash("1234ac", 10);
  console.log(encriptedPassword);
})();
