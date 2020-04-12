const express = require('express');
const passwordController = require('../controllers/passwordController');
const passCrypto = require('../lib/passCrypto');

function routes(Password) {
  const router = express.Router();
  controller = passwordController(Password);

  router.use('/password', (req, res, next) => {
    const crypto = passCrypto.passCrypto(req.get('secret'));
    const valid = crypto.validateSecret();
    if (!valid) {
      throw "your secret is not valid !!!"
    }
    return next();
  });

  router.route('/password')
    .post(controller.post)
    .get((req, res) => {
      return res.send('helloy');
    });

  return router;
}

module.exports = routes;