const crypto = require('crypto');

function tokenizaion(secret) {
  const algorithm = 'aes-192-cbc';
  const key = crypto.scryptSync(secret, 'salt', 24);
  const iv = Buffer.alloc(16, 0);

  function encrypt(data) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  function decrypt(encrypted) {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  const hash = x => crypto.createHash('sha256').update(x, 'utf8').digest('hex');

  return { encrypt, decrypt, hash };
}

module.exports = tokenizaion;