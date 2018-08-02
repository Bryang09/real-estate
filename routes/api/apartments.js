const express = require('express');
const router = express.Router();

const Apartment = require('../models/Apartment/Apartment');
const TwoRoom = require('../models/Apartment/TwoRooms')
const Studio = require("../models/Apartment/Studio");

// One Apartment
router.get('/one-room', (req, res) => {
  Apartment.find()
    .then(apartment => res.json(apartment))
})

router.post('/one-room', (req, res) => {
  const newApt = new Apartment({
    src: req.body.src,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    rent: req.body.rent,
    rooms: req.body.rooms,
  })
  newApt.save().then(apartment => res.json(apartment))
})


// Two Room
router.get('/two-room', (req, res) => {
  TwoRoom.find()
    .then(two => res.json(two))
})

router.post("/two-room", (req, res) => {
  const newTwo = new TwoRoom({
    src: req.body.src,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    rent: req.body.rent,
    rooms: req.body.rooms,
  })
  newTwo.save().then(newTwo => res.json(newTwo))
})

// Studio 

router.get("/studio", (req, res) => {
  Studio.find()
    .then(studio => res.json(studio))
})

router.post("/studio", (req, res) => {
  const newStudio = new Studio({
    src: req.body.src,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code,
    rent: req.body.rent,
    rooms: req.body.rooms,
  })
  newStudio.save().then(studio => res.json(studio))
})

module.exports = router;