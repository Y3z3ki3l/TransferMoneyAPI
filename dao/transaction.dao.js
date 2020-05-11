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

    getAllByAccountNum: function(query, cb) {
        this.find(query, cb);
    },

    getSentByAccountNum: function(query, cd) {
        this.find(query, cd);
    },

    getReceivedByAccountNum: function(query, cd) {
        this.find(query, cd);
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