const express = require('express');

const router = express.Router();

const burger = require('../models/burger');

router.get("/", function (req, res) {
    burger.all(function (data) {
        let obj = {
            burgers: data
        };

        // console.log(obj);
        res.render("index", obj);
    })
});

router.post("/api/burger", function (req, res) {
    burger.create([req.body.burgerName], function (result) {
        res.json({ id: result.insertId })
    })


});

router.put("api/burger/:id", function (req, res) {
    burger.update(req.param.id, function (result) {

    });
});

module.exports = router;