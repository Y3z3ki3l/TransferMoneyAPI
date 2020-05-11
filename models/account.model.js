const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let accountSchema = new Schema({
    accountNumber: {type: Number, required: true},
    balance: {type: mongoose.Decimal128, required: true},
    owner: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
});


// Export the schema
// module.exports = mongoose.model('Account', AccountSchema);
module.exports = accountSchema