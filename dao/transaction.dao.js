var mongoose = require('mongoose');
var transactionSchema = require('../models/transaction.model');
mongoose.set('useFindAndModify', false);

transactionSchema.statics = {
    create : function(data, cb) {
        var transaction = new this(data);
        transaction.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getAccountByBalance: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var accountModel = mongoose.model('Transaction', transactionSchema);
module.exports = accountModel;