const Transaction = require('../dao/transaction.dao');
const Account = require('../dao/account.dao');

//Simple version, without validation or sanitation
exports.testTransactionCtrlr = function (req, res) {
    res.send('Greetings from the transaction controller TEST!');
};

exports.createTransaction = function (req, res, next) {

    // Take Source Account for validate balance
    Account.getByAccountNum({accountNumber: req.body.fromAccount}, 
        function(err, account) {
            if(err) {
                res.json({
                    error: err
                })
            }

            if (account.length > 0) {

                console.log("Request body -> amount: " + req.body.amount);

                // var data_response = account
                // var reqParams = req;

                console.log("Source Account: " + account);
                console.log("Source Account Balance: " + account[0].balance);
                // console.log("Amount to extract from Source Account: " + reqParams.amount);

                if ( (account[0].balance - req.body.amount) >= -500.00 ) {
                    
                    // let's update source account and destination account 
                    // balance
                    // UPDATE SOURCE ACCOUNT BALANCE
                    var sourceBalance = {
                        balance: account[0].balance - req.body.amount
                    }

                    Account.update({accountNumber: req.body.fromAccount}, sourceBalance,
                        
                        function(err, sourceAccount){

                            if (err) {
                                res.json({
                                    error: err
                                })
                            }
                    })

                    // TAKE DESTINATION ACCOUNT BALANCE
                    Account.getByAccountNum({accountNumber: req.body.toAccount}, 
                        function(err, account) {
                            if(err) {
                                res.json({
                                    error: err
                                })
                            }

                            console.log("Destination Account length: " + account.lenth);
                            console.log("Destination Account: " + account);

                            if (account.length > 0) {

                                var destBalance = {
                                    balance: Number(account[0].balance) + Number(req.body.amount)
                                }
                    
                                // UPDATE DESTINATION ACCOUNT BALANCE
                                Account.update({accountNumber: req.body.toAccount}, destBalance,
                                
                                    function(err, destAccount){
                    
                                        if (err) {
                                            res.json({
                                                error: err
                                            })
                                        }
                                    })

                                // Now let's create the transaction
                                var transaction = {
                                    fromAccount: req.body.fromAccount,
                                    toAccount: req.body.toAccount,
                                    amount: req.body.amount
                                }

                                Transaction.create(transaction, function(err, createdTransaction){

                                    if (err) {
                                        res.json({
                                            error: err
                                        })
                                    }

                                    console.log("What res is? -> " + createdTransaction);

                                    /* 
                                    res.json({
                                        message01: "Source Account balance successfully updated",
                                        message02: "Destination Account balance successfully updated",
                                        message03: "Transaction successfully created"
                                    })
                                    */
                
                                    res.status(200).send({
                                        message: "Transaction successfully created"
                                    })
                                })
                                
                            } else {
                                
                                res.status(404).send({
                                    error: "Given Destination Account number not found"
                                })

                            }

                        })

                } else {
                    res.status(404).send({
                        message: "Transaction didn't proceed," 
                        + " Source Account doesn't have enough balance for transfer money"
                    })
                }
                
            } else {
                res.status(404).send({
                    error: "Given Source Account number not found"
                })   
            }

        })

}

exports.geTransByAccountNum = function (req, res, next) {

    Transaction.getAllByAccountNum({$or: [{fromAccount: req.params.accountNumber}, 
                                        {toAccount: req.params.accountNumber}]}, 
        function(err, transactions){

            if (err) {
                res.json({
                    error: err
                })
            }

            if (transactions.length > 0) {
                
                const response = {
                    transactions: transactions
                }

                res.status(200).json(response);

            } else {
                res.status(404).json({
                    message: "Not Account found for given Account number"
                })
            }

            /* 
            res.json({
                transactions: transactions
            })
             */
    })

}

exports.getSentTransByAccount = function (req, res, next) {

    Transaction.getSentByAccountNum({fromAccount: req.params.accountNumber}, 
        function(err, transactions){

            if (err) {
                res.json({
                    error: err
                })
            }
            res.json({
                transactions: transactions
            })
    })

}

exports.getReceivedTransByAccount = function (req, res, next) {

    Transaction.getReceivedByAccountNum({toAccount: req.params.accountNumber}, 
        function(err, transactions){

            if (err) {
                res.json({
                    error: err
                })
            }
            res.json({
                transactions: transactions
            })
    })

}