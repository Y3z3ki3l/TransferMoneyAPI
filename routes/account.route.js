const express = require('express');
const router = express.Router();

// Require the related controller
const account = require('../controllers/account.controller');

router.get('/test/account', account.testAccountCtrlr);

router.post('/account/create', account.create);

router.get('/account/:accountNumber/getBalance', account.getAccountBalance);

module.exports = router;