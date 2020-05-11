const express = require('express');
const router = express.Router();

// Require the related controller
const account = require('../controllers/account.controller');

 /**
 * @swagger
 * /api/test/account:
 *  get:
 *    description: Use to account controller simple test.
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/test/account', account.testAccountCtrlr);

/**
 * @swagger
 *  /api/account/create:
 *   post:
 *      description: Use to create a new account
 *      consumes:
 *          - application/json
 *      parameters:
 *          - in: body
 *            name: account
 *            description: Account to be created.
 *            schema:
 *              type: object
 *              required:
 *                  - accountNumber
 *                  - balance
 *                  - owner
 *              properties:
 *                  accountNumber:
 *                      type: int64
 *                      description: Account's number
 *                  balance:
 *                      type: double
 *                      description: Account's balance
 *                  owner:
 *                      type: int64
 *                      description: Account's owner
 *                  createdAt:
 *                      type: Date
 *                      description: Account's created date
 *      responses:
 *          200:
 *            description: New account successfully created.
 */
router.post('/account/create', account.create);

/**
 * @swagger
 *  /api/account/{accountNumber}/getBalance:
 *   get:
 *      parameters:
 *          - in: path
 *            name: accountNumber
 *            required: true
 *            schema:
 *              type: int64
 *              minimum: 1
 *            description: The Account's number
 *      responses:
 *          200:
 *            description: OK
 */
router.get('/account/:accountNumber/getBalance', account.getAccountBalance);

module.exports = router;