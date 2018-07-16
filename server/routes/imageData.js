const express = require('express');
const mongoose = require('mongoose');
const { ImageData, validate } = require('../models/ImageData');
const router = express.Router();

router.get('/', async (req, res) => {
  const data = await ImageData.find();
  res.send(data);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let data = new ImageData({
    title: req.body.title,
    description: req.body.description,
    imageName: req.body.imageName,
    url: req.body.url
  });

  data = await data.save();

  res.send(data);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const data = await ImageData.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    imageName: req.body.imageName,
    url: req.body.url
  });

  if (!data) return res.status(404).send('The data with the given ID was not found.');

  res.send(data);
});

router.get('/:id', async (req, res) => {
  const data = await ImageData.findById(req.params.id);

  if (!data) return res.status(404).send('The data with the given ID was not found');

  res.send(data);
});

router.delete('/:id', async (req, res) => {
  const data = await ImageData.findByIdAndRemove(req.params.id);

  if (!data) return res.status(404).send('The data with the given ID was not found.');

  res.send(data);
});

module.exports = router;