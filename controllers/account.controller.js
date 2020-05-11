// const Account = require('../models/account.model');
const Account = require('../dao/account.dao');

//Simple version, without validation or sanitation
exports.testAccountCtrlr = function (req, res) {
    res.send('Greetings from the account controller TEST!');
};
