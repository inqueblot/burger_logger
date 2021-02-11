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
    burger.create([req.body.burger_name], function (result) {
        console.log(req.body.burger_name)
    })


})

module.exports = router;