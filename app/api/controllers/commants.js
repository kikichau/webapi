const commantModel = require('../models/commants');
module.exports = {
    getById: function (req, res, next) {
        console.log(req.body);
        commantModel.findById(req.params.commantId, function (err, commantInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Commant found!!!", data: { commants: commantInfo } });
            }
        });
    },
    getAll: function (req, res, next) {
        let commantsList = [];
        commantModel.find({}, function (err, commants) {
            if (err) {
                next(err);
            } else {
                for (let commant of commants) {
                    commantsList.push({ id: commant._id, name: commant.name, released_on: commant.released_on });
                }
                res.json({ status: "success", message: "Commants list found!!!", data: { commants: commantsList } });

            }
        });
    },
    updateById: function (req, res, next) {
        commantModel.findByIdAndUpdate(req.params.commantId, { name: req.body.name, commant: req.body.commant, date: dateTime }, function (err, commantInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Commant updated successfully!!!", data: null });
            }
        });
    },
    deleteById: function (req, res, next) {
        commantModel.findByIdAndRemove(req.params.commantId, function (err, commantInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Commant deleted successfully!!!", data: null });
            }
        });
    },
    create: function (req, res, next) {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        commantModel.create({ name: req.body.name, commant: req.body.commant, date: dateTime }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Commant added successfully!!!", data: null });

        });
    },
}