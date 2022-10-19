const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.get('/hello-world', (req, res) => {
	const pathToHtmlFile = path.resolve(__dirname, '../dist/helloWorld.html');
	const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
	res.send(contentFromHtmlFile);
});

app.get('/kiwi', (req, res) => {
	const pathToHtmlFile = path.resolve(__dirname, '../dist/kiwi.html');
	const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
	res.send(contentFromHtmlFile);
});

// We will create a separate specific route for our static files.
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {
	console.log('Application is running on http://localhost:3000/');
});
