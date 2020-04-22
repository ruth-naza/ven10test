const express = require('express');
const router = express.Router();
const ownerRoute = require('./owners');

router.use('/owners', ownerRoute);

module.exports = router; 