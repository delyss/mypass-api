const passwordGenerator = require("generate-password");
const tokenization = require('./tokenization');

function passCrypto(secret) {

  const token = tokenization(secret);

  function validateSecret() {
    return process.env.SECRET === token.hash(secret);
  }

  function generatePassword(symbols, length) {
    return passwordGenerator.generate({ length, symbols, numbers: true });
  }

  function encryptedNewPassword(symbols, length) {
    let password = generatePassword(symbols, length);
    return token.encrypt(password);
  }

  function decryptPassword(password) {
    return token.decrypt(password);
  }

  return { generatePassword, validateSecret, encryptedNewPassword, decryptPassword };
}

module.exports = { passCrypto };
