var mongoose = require('mongoose');

var otherSchema = mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    adminpass: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    department: {
        type: String,
        default: ''
    },
    brand: {
        type: String,
        default: ''
    },
    gen: {
        type: String,
        default: ''
    },
    model: {
        type: String,
        default: ''
    },
    serial: {
        type: String,
        default: ''
    },
    warranty: {
        type: String,
        default: ''
    },
    dealer: {
        type: String,
        default: ''
    },
    owner: {
        type: String,
        default: ''
    },
    servicetag: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        default: ''
    }
})

var other = module.exports = mongoose.model('other', otherSchema);
module.exports.get = function (callback, limit) {
    other.find(callback).limit(limit);
}