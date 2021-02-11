const connection = require('./connection');

const orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) {
                throw err;
            }
            // console.log(result);
            cb(result);
        });
    },
    insertOne: function (value, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)"
        connection.query(queryString, value, function (err, result) {
            if (err) {
                res.status(500).end();
            }
            // console.log(result);
            cb(result);
        });

    },
    // updateOne()
}

module.exports = orm;