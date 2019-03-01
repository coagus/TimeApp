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

activityModel.insertActivity = (activityData, callback) => {
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
      Name = ${connection.escape(activityData.Name)},
      TimeIni = ${connection.escape(activityData.TimeIni)},
      TimeEnd = ${connection.escape(activityData.TimeEnd)},
      Seconds = ${connection.escape(activityData.Seconds)}
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

activityModel.deleteActivity = (id, callback) => {
  let qry = `SELECT * FROM Activity WHERE Id = ${connection.escape(id)}`;

  connection.query(qry, (err, row) => {
    if (row) {
      let qry = `DELETE FROM Activity WHERE Id = ${id}`;

      connection.query(qry, (err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, {
            msg: "deleted"
          });
        }
      });
    } else {
      callback(null, {
        "msg": "not exists"
      });
    }
  });
};

module.exports = activityModel;