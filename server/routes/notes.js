// const Note = require("../models/Note");
const express = require("express");
const router = express.Router();
const {
  getNotes,
  postNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/notes");

router.post("/", postNotes);

router.get("/", getNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);

module.exports = router;
