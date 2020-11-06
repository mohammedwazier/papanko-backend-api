const mysql = require('mysql2');
const util = require('util');

const Config = require('../Configs/index.js');
const { host, username, password, database } = Config.database;

const pool = mysql.cracreatePool({
	ConnectionLimit: 10,
	host: host,
	user: username,
	password: password,
	database: database
})

pool.getConnection((err, connection) => {
	if(err){
		if(err.code === 'PROTOCOL_CONNECTION_LOST'){
			console.log('Database Connection was Closed');
			process.exit();
		}
		if(err.code === 'ER_CON_COUNT_ERROR'){
			console.log('Database has to many connection');
			process.exit();
		}
		if(err.code === 'ECONNREFUSED'){
			console.log('Database Connection was Refused');
			process.exit();
			/*Create Log Data*/
		}
	}
	if (connection) connection.release();

	return;
})

pool.query = util.promisify(pool.query);

module.exports = pool;