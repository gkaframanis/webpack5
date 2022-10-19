const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// We will create a separate specific route for our static files.
app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
	const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
	const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
	res.send(contentFromHtmlFile);
});

app.listen(3000, () => {
	console.log('Application is running on http://localhost:3000/');
});
