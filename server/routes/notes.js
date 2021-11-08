const Note = require("../models/Note");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const note = await new Note(req.body).save();
    res.status(200).send(note);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.send(notes);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send(`note with the name ${note.note} updated`);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).send(`note with the name: "${note.note}" deleted`);
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
