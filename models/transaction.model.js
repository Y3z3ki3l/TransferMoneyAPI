const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transactionSchema = new Schema({
    fromAccount: {type: Number, required: true},
    toAccount: {type: Number, required: true},
    amount: {type: mongoose.Decimal128, required: true},
    sentAt: {type: Date, default: Date.now, required: true}
});


// Export the model
// module.exports = mongoose.model('Transaction', transactionSchema);
module.exports = transactionSchema;