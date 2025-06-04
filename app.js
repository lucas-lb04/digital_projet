const express = require("express");
const path = require("path");
const app = express();
const port = 4000; 
const jsonData = require("./data/data.json"); 

app.use(express.static("public")); 
app.get("/api/data", (req, res) => {
    res.json(jsonData);
});


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
