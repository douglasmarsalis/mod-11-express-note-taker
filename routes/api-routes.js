const fs = require("fs");
//var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
const router = require('express').Router();

//Get Route for a New Note
router.get('/', (req, res) => {
    console.log("Hello");
    fs.readFile("./db/db.json", (err, data) => {
        console.log(data);
        if (err) {
            console.log(err);
        }
        res.json(data)
    });
 });

// GET Route for retrieving all the notes
// router.get('/', (req, res) => {
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
//     console.log(data);
// });

 //Post Route for a new Note
router.post('/', (req, res) => {
    console.log(req.body);

    const { noteTitle, note, noteId} = req.body;

    if (req.body) {
        const newNote = {
            noteTitle,
            note,
            noteId: uuid(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully!`);
    } else {
        res.error('Error in adding note!');
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