var express = require("express");

var router = express.Router();

var db = require("../models/");

router.get("/api/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll()
    .then(function(burgerData){
      res.json(burgerData);
    })
  });

// post route
router.post("/api/burgers", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  db.Burger.create({
    burger_name: req.body.burger_name
  })
    // Send back the ID of the new quote
    .then(function(result){
    res.json({ id: result.insertId });
  });
});

// put route
router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update({
    devoured: true
      },
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(result){
        res.sendStatus(200);
  });
});

module.exports = router;
