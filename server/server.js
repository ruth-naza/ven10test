const express = require('express');
const app = express();
const cors = require("cors");
const knex = require("knex");
const apiRoute = require('./routes/api')

app.use(cors());
app.use('/api', apiRoute)
const port = 5000;

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = {
	server,
	app
};