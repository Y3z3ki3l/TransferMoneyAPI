const express = require('express');
const router = express.Router();

// Require the related controller
const transaction = require('../controllers/transaction.controller');

// A simple test url to check that all of our files are communicating correctly.
router.get('/test/transaction', transaction.testTransactionCtrlr);

router.post('/transaction/create', transaction.createTransaction);

router.get('/transaction/getAll', transaction.geTransactions);

module.exports = router;