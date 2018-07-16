const express = require('express');
const mongoose = require('mongoose');
const { Song, validate } = require('../models/Song');
const router = express.Router();

router.get('/', async (req, res) => {
  const songs = await Song.find().sort('title');
  res.send(songs);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    original: req.body.original
  });

  song = await song.save();

  res.send(song);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const song = await Song.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    artist: req.body.artist,
    original: req.body.original
  }, { new: true });

  if (!song) return res.status(404).send('The song with the given ID was not found.');

  res.send(song);
});

router.get('/:id', async (req, res) => {
  const song = await Song.findById(req.params.id);

  if (!song) return res.status(404).send('The song with the given ID was not found.');

  res.send(song);
});

router.delete('/:id',  async (req, res) => {
  const song = await Song.findByIdAndRemove(req.params.id);

  if (!song) return res.status(404).send('The song with the given ID was not found.');

  res.send(song);
});

module.exports = router;