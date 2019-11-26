var mongoose = require('mongoose');

var computerSchema = mongoose.Schema({
    location: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    owner: {
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
    servicetag: {
        type: String,
        default: ''
    },
    processor: {
        type: String,
        default: ''
    },
    ram: {
        type: String,
        default: ''
    },
    cpu: {
        type: String,
        default: ''
    },
    hdd: {
        type: String,
        default: ''
    },
    macwifi: {
        type: String,
        default: ''
    },
    maclan: {
        type: String,
        default: ''
    },
    os: {
        type: String,
        default: ''
    },
    windowsid: {
        type: String,
        default: ''
    },
    screen: {
        type: String,
        default: ''
    },
    screenserial: {
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
    date: {
        type: String,
        default: ''
    }
})

var computer = module.exports = mongoose.model('computer', computerSchema);
module.exports.get = function (callback, limit) {
    computer.find(callback).limit(limit);
}