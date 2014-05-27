var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'OPENSHIFT_MYSQL_DB_HOST',
  user     : 'OPENSHIFT_MYSQL_DB_USERNAME',
  password : 'OPENSHIFT_MYSQL_DB_PASSWORD',
  socketPath: 'OPENSHIFT_MYSQL_DB_SOCKET',
  port  :  'OPENSHIFT_MYSQL_DB_PORT',
  database: 'OPENSHIFT_APP_NAME'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();