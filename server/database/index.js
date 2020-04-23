const knexConfig = require("../knexfile");
const knex = require('knex')
require('dotenv').config()

const _knexConfig;

switch(process.env.NODE_ENV) {
	case "production":
		_knexConfig = knexConfig.production
	break;
	case "staging":
		_knexConfig = knexConfig.staging;
	break;
	default:
	_knexConfig = knexConfig.development;
}
const db = knex(_knexConfig);

module.exports = db;