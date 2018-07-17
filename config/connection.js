// Set up database connection
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	connection = mysql.createConnection({
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'root',
// 		database: 'burgers_db'
// 	});
// };

// trying a direct connect to JawsDB...
connection = mysql.createConnection({
	host: '	tyduzbv3ggpf15sx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'aaaj9up2m13ghgjz',
	password: 'qzo2acpab860s3db',
	port: 3306,
	database: 'ghkgqkaspn1oew5u'
});

// not strictly required, but best practice to establish connection
// it's possible query establishes the connection
connection.connect(function(err) {
	if (err) {
		console.error('error conencting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;
