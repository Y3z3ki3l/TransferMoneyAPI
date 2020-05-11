const Transaction = require('../dao/transaction.dao');
const Account = require('../dao/account.dao');

//Simple version, without validation or sanitation
exports.testTransactionCtrlr = function (req, res) {
    res.send('Greetings from the transaction controller TEST!');
};
