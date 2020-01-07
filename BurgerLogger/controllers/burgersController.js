// placeholder for controller code
var express = require("express");

var router = express.Router();

// import the model 

var burgers = require('../models/burger');

// routes and logic

router.get('/', function(req, res){
    burgers.selectAll(function(data){
        var hbsObject = {
            burgers:data
        };
        res.render("index",hbsObject)
    });
});

router.post("api/burgers", function(req,res){
    burgers.insertOne(["burger_name"], [req.body.name],
    function(result){
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id= " + req.params.id;

    console.log("condition", condition);

    burgers.updateOne({
        devoured:true
    },condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

module.exports = router;