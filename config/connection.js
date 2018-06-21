// Set up database connection
var mysql = require('mysql');
var connection;

// add in the environment variable option for JAWSDB for heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'q57yawiwmnaw13d2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'uivae449kzulg6oj',
		password: 'udb3p42y8ntmq3gb',
		database: 'xx7erppen4q5qn5d'
	});
};

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
