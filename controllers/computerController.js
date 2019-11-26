Computer = require('../models/computerModel');

exports.index = function (req, res) {
    Computer.get(function (err, computers) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Computers retrieved successfully",
            data: computers
        });
    });
};

exports.new = function (req, res) {
    var computer = new Computer();
    computer.location = req.body.location;
    computer.name = req.body.name;
    computer.owner = req.body.owner;
    computer.type = req.body.type;
    computer.department = req.body.department;
    computer.brand = req.body.brand;
    computer.servicetag = req.body.servicetag;
    computer.processor = req.body.processor;
    computer.ram = req.body.ram;
    computer.cpu = req.body.cpu;
    computer.hdd = req.body.hdd;
    computer.macwifi = req.body.macwifi;
    computer.maclan = req.body.maclan;
    computer.os = req.body.os;
    computer.windowsid = req.body.windowsid;
    computer.screen = req.body.screen;
    computer.screenserial = req.body.screenserial;
    computer.serial = req.body.serial;
    computer.warranty = req.body.warranty;
    computer.date = req.body.date;
    computer.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New computer created!',
            data: computer
        });
    });
};

exports.view = function (req, res) {
    Computer.findById(req.params.computer_id, function (err, computer) {
        if (err)
            res.send(err);
        res.json({
            message: 'Computer details loading..',
            data: computer
        });
    });
};

exports.update = function (req, res) {
    Computer.findById(req.params.computer_id, function (err, computer) {
        if (err)
            res.send(err);
        computer.location = req.body.location;
        computer.name = req.body.name;
        computer.owner = req.body.owner;
        computer.type = req.body.type;
        computer.department = req.body.department;
        computer.brand = req.body.brand;
        computer.servicetag = req.body.servicetag;
        computer.processor = req.body.processor;
        computer.ram = req.body.ram;
        computer.cpu = req.body.cpu;
        computer.hdd = req.body.hdd;
        computer.macwifi = req.body.macwifi;
        computer.maclan = req.body.maclan;
        computer.os = req.body.os;
        computer.windowsid = req.body.windowsid;
        computer.screen = req.body.screen;
        computer.screenserial = req.body.screenserial;
        computer.serial = req.body.serial;
        computer.warranty = req.body.warranty;
        computer.date = req.body.date;
        computer.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Computer Info updated',
                data: computer
            });
        });
    });
};

exports.delete = function (req, res) {
    Computer.remove({
        _id: req.params.computer_id
    }, function (err, computer) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Computer deleted'
        });
    });
};
