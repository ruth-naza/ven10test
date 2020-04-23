const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'build');
// const cors = require("cors");
const apiRoute = require('./routes/api')

// app.use(cors());
app.use('/api', apiRoute);
app.use(express.static(publicPath ));

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = {
	server,
	app
};