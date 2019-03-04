const mysql = require('mysql');

connection = mysql.createConnection({
  host: '192.168.13.59',
  user: 'root',
  password: 'timeapp',
  database: 'TimeAppDB'
});

let activityModel = {};

activityModel.getActivities = (callback) => {
  if (connection) {
    connection.query('SELECT * FROM Activity ORDER BY Id',
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

module.exports = activityModel;
