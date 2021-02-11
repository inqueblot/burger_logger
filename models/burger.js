const orm = require("../config/orm");

const burger = {
    all: function (cb) {
        orm.selectAll(function (res) {
            // console.log(res)
            cb(res);

        });
    },

    create: function (burger_name, cb) {
        orm.insertOne(burger_name, function (res) {
            // console.log(res);
            cb(res);
        });
    },

    update: function (idVal, cb) {
        orm.updateOne(idVal, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;