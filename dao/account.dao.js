var mongoose = require('mongoose');
var accountSchema = require('../models/account.model');
mongoose.set('useFindAndModify', false);

accountSchema.statics = {
    create : function(data, cb) {
        var account = new this(data);
        account.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByAccountNum: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var accountModel = mongoose.model('Account', accountSchema);
module.exports = accountModel;