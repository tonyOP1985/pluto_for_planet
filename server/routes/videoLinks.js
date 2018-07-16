const express = require('express');
const mongoose = require('mongoose');
const { VideoLink, validate } = require('../models/VideoLink');
const router = express.Router();

router.get('/', async (req, res) => {
  const links = await VideoLink.find();
  res.send(links);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let link = new VideoLink({
    link: req.body.lin
  });

  link = await link.save();

  res.send(link);
});

router.put('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const link = await VideoLink.findByIdAndUpdate(req.params.id, {
    link: req.body.link
  }, { new: true });

  if (!link) return res.status(404).send('The link with the given ID was not found.');

  res.send(link);
});

router.get('/:id', async (req, res) => {
  const link = await VideoLink.findById(req.params.id);

  if (!link) return res.status(404).send('The link with the given ID was not found.');

  res.send(link);
});

router.delete('/:id', async (req, res) => {
  const link = await VideoLink.findByIdAndRemove(req.params.id);

  if (!link) return res.status(404).send('The link with the given ID was not found.');

  res.send(link);
});

module.exports = router;