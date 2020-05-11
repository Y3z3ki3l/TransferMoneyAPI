// const Account = require('../models/account.model');
const Account = require('../dao/account.dao');

//Simple version, without validation or sanitation
exports.testAccountCtrlr = function (req, res) {
    res.send('Greetings from the account controller TEST!');
};

exports.create = function (req, res, next) {
    
    // Validate request
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Account info can not be empty"
        });
    }

    // Create an Account object from date model
    const account = new Account({
        accountNumber: req.body.accountNumber,
        balance: req.body.balance,
        owner: req.body.owner
    });

    // Save Account in the database
    account.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });

}

exports.getAccountBalance = function(req, res, next) {

    console.log("Request params: " + req.params.accountNumber);

    Account.getByAccountNum({accountNumber: req.params.accountNumber}, 
        function(err, account) {
            if(err) {
                res.json({
                    error: err
                })
            }

            var data_response = account
            console.log("Account obtained: " + account);
            console.log("Account balance: " + account[0].balance);

            res.json({
                balance: account
            })
        })
}