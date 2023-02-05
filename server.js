const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use( express.json())


app.listen(
	PORT,
	console.log(`it's at alive on http://localhost:${PORT}`)
	);