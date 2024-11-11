const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const router = require('./routes');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname, '..', 'Client')));

const port = process.env.PORT || 3000;

app.use(bp.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});