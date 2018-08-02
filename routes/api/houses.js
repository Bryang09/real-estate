const express = require('express');
const router = express.Router();

const Houses = require('../models/Houses/Houses');
const California = require('../models/Houses/CaliforniaHouses');
const NY = require('../models/Houses/NYHouses');


// TEXAS
router.get('/texas', (req, res) => {
  Houses.find()
    .then(house => res.json(house))
})

router.post('/texas', (req, res) => {
  const newHouse = new House({
    src: req.body.src,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  })
  newHouse.save().then(house => res.json(house))
})

// CALI

router.get("/california", (req, res) => {
  California.find()
    .then(cali => res.json(cali))
});

router.post("/california", (req, res) => {
  const newCali = new California({
    src: req.body.src,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  })
  newCali.save().then(item => res.json(item))
})


//  NY 

router.get('/ny', (req, res) => {
  NY.find()
    .then(ny => res.json(ny))
})

router.post('/ny', (req, res) => {
  const newNY = new NY({
    src: req.body.src,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  })
  newNY.save().then(item => res.json(item))
})
module.exports = router;