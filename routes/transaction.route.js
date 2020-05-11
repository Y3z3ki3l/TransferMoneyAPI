const express = require('express');
const router = express.Router();

// Require the related controller
const transaction = require('../controllers/transaction.controller');

// A simple test url to check that all of our files are communicating correctly.
/**
 * @swagger
 * /api/test/transaction:
 *  get:
 *    description: Use to transaction controller simple test
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/test/transaction', transaction.testTransactionCtrlr);

/**
 * @swagger
 *  /api/transaction/create:
 *   post:
 *      description: Use to create a new transaction
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: transaction
 *            description: Transaction to be created.
 *            schema:
 *              type: object
 *              required:
 *                  - fromAccount
 *                  - toAccount
 *                  - amount
 *              properties:
 *                  fromAccount:
 *                      type: int64
 *                      description: Source Account
 *                  toAccount:
 *                      type: int64
 *                      description: Destination Account
 *                  amount:
 *                      type: double
 *                      description: Amount to be transfered
 *                  sentAt:
 *                      type: Date
 *                      description: Transaction's created date
 *      responses:
 *          200:
 *            description: New transaction successfully created.
 */
router.post('/transaction/create', transaction.createTransaction);

/**
 * @swagger
 *  /api/transaction/getAll:
 *   get:
 *      responses:
 *          200:
 *            description: All Transactions
 */
router.get('/transaction/getAll', transaction.geTransactions);

module.exports = router;