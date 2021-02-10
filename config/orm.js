const connection = require('./connection');

const orm = {
    selectAll: function () {
        connection.query("SELECT * FROM burgers", function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function () {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, FALSE)"
        connection.query(queryString, [req.body.burgers], function (err, data) {
            if (err) {
                res.status(500).end();
            }
            console.log(data);
        })

    },
    updateOne()
};

module.exports = orm;