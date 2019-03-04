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
    connection.query(
      'SELECT * FROM Activity ORDER BY Id',
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

activityModel.addActivity = (activityData, callback) => {
  if (connection) {
    connection.query(
      'INSERT INTO Activity SET ?', activityData,
      (err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, {
            'insertId': result.insertId
          });
        }
      }
    );
  }
};

activityModel.updateActivity = (activityData, callback) => {
  if (connection) {
    const qry = `
      UPDATE Activity SET
      Name = ${connection.escape(activityData.Name)}
      WHERE Id = ${connection.escape(activityData.Id)}
    `;

    connection.query(qry, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(null, {
          "msg": "success"
        });
      }
    });
  }
};

module.exports = activityModel;
