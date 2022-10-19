const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.get('/', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/imageCaption.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);

});

// We will create a separate specific route for our static files.
app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.listen(9003, () => {
    console.log("Application is running on http://localhost:9003/");
});