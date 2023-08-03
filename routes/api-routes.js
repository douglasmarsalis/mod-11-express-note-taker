const router = require('express').Router();
const path = require('path');

router.get('/api/notes', (req, res) => {
    res.sendData(path.join(__dirname, '../public/notes.html'))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
