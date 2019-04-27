const commantModel = require('../models/commants');
module.exports = {
    create: function (req, res, next) {
        commantModel.create({ name: req.body.name, commant: req.body.commant, released_on: req.body.released_on }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Commant added successfully!!!", data: null });
        });
    },
    updateById: function (req, res, next) {
        commantModel.findByIdAndUpdate(req.params.commantId, { name: req.body.name, commant: req.body.commant, released_on: req.body.released_on }, function (err, gameInfo) {
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
    getAll: function (req, res, next) {
        let commantsList = [];
        commantModel.find({}, function (err, commants) {
            if (err) {
                next(err);
            } else {
                for (let commant of commants) {
                    commantsList.push({ id: commant._id, name: commant.name, commant: commant.commant, released_on: commant.released_on });
                }
                res.json({ status: "success", message: "Commants list found!!!", data: { commants: commantsList } });
            }
        });
    },
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
}