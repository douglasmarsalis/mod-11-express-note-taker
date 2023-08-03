const fs = require("fs");
const { readFromFile, readAndAppend } = require('../utils/fsUtils');
const uuid = require("../utils/uuid.js");
const router = require('express').Router();

//Get Route for a New Note
router.get('/', (req, res) => {
    readFromFile("./db/db.json")
    .then((data) =>  {
        res.json(JSON.parse(data));
    });
 });

 //Post Route for a new Note
router.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`);
    } else {
        res.json('Error in adding note!');
    }
});

//Delete note requests
// app.delete("/api/notes/:id", function (req, res) {

//     let noteId = req.params.id;
//     let newId = 0;
//     console.log(`Deleting note with id ${noteId}`);
//     data = data.filter(currentNote => {
//         return currentNote.id != noteId;
//     });
//     for (currentNote of data) {
//         currentNote.id = newId.toString();
//         newId++;
//     }
//     fs.writeFileSync("./db/db.json", JSON.stringify(data));
//     res.json(data);
// }); 

module.exports = router;