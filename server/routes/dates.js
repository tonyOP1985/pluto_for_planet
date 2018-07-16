const express = require('express');
const mongoose = require('mongoose');
const { Date, validate } = require('../models/Date');
const router = express.Router();

router.get('/', async (req, res) => {
  const dates = await Date.find();
  res.send(dates);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let date = new Date({
    date: req.body.date
  });

  date = await date.save();

  res.send(date);
});

module.exports = router;