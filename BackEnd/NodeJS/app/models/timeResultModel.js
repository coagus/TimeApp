const mysql = require('mysql');
const cnn = require('./conf');

connection = mysql.createConnection({
  host: cnn.host,
  user: cnn.user,
  password: cnn.password,
  database: cnn.database
});

let timeResultModel = {};

timeResultModel.getTimeResult = (callback) => {
    if (connection) {
      connection.query(
        'SELECT * FROM TimeResult ORDER BY Id',
        (err, rows) => {
          if (err) {
            throw err;
          } else {
            callback(null,rows);
          }
        }
      );
    }
  };

  module.exports = timeResultModel;