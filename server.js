const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "blog");

const app = express();
app.use(express.static (initial_path));

app.get('/', (req, res) => {
res. sendFile(path.join(initial_path, "home.html"));
})

app.get('/editor', (req,res) => {
    res.sendFile(path.join(initial_path,"editor.html"))
})

app.listen ("3001", () => {
console.log('listening... .');
})