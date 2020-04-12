const passCrypto = require('../lib/passCrypto');

function passwordController(Password) {
  function post(req, res) {
    const crypto = passCrypto.passCrypto(req.get('secret'));
    const password = new Password(req.body)
    const { symbols, length = 8 } = req.body;

    password.password = crypto.encryptedNewPassword(symbols, length);
    password.save();
    res.status(201);
    password.password = crypto.decryptPassword(password.password);
    return res.send(password);
  }
  return { post };
}

module.exports = passwordController;