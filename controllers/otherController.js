Other = require('../models/otherModel');

exports.index = function (req, res) {
    Other.get(function (err, others) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Others retrieved successfully",
            data: others
        });
    });
};

exports.new = function (req, res) {
    var other = new Other();
    other.name = req.body.name;
    other.adminpass = req.body.adminpass;
    other.type = req.body.type;
    other.department = req.body.department;
    other.brand = req.body.brand;
    other.gen = req.body.gen;
    other.model = req.body.model;
    other.serial = req.body.serial;
    other.warranty = req.body.warranty;
    other.dealer = req.body.dealer;
    other.date = req.body.date;
    other.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New other created!',
            data: other
        });
    });
};

exports.view = function (req, res) {
    Other.findById(req.params.other_id, function (err, other) {
        if (err)
            res.send(err);
        res.json({
            message: 'Other details loading..',
            data: other
        });
    });
};

exports.update = function (req, res) {
    Other.findById(req.params.other_id, function (err, other) {
        if (err)
            res.send(err);
        other.name = req.body.name;
        other.adminpass = req.body.adminpass;
        other.type = req.body.type;
        other.department = req.body.department;
        other.brand = req.body.brand;
        other.gen = req.body.gen;
        other.model = req.body.model;
        other.serial = req.body.serial;
        other.warranty = req.body.warranty;
        other.dealer = req.body.dealer;
        other.date = req.body.date;
        other.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Other Info updated',
                data: other
            });
        });
    });
};

exports.delete = function (req, res) {
    Other.remove({
        _id: req.params.other_id
    }, function (err, other) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Other deleted'
        });
    });
};
