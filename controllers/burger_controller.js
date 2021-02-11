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


})

module.exports = router;