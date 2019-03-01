const User = require('../models/time');

module.exports = function (app) {
  app.get('/activities', (req, res) => {
    User.getActivities((err, data) => {
      res.json(data);
    });
  });
/*
  app.post('/users', (req, res) => {
    const userData = {
      Id: null,
      UserName: req.body.username,
      EMail: req.body.email,
      Password: req.body.password
    };

    User.insertUser(userData, (err, data) => {
      if (data && data.insertId ) {
        res.json({
          success: true,
          msg: 'Usuario Insertad',
          data: data
        });
      } else {
        res.status(500).json({
          success: false,
          msg: 'Error'
        });
      }
    });
  });

  app.put('/users/:id', (req, res) => {
    const userData = {
      Id: req.params.id,
      UserName: req.body.username,
      EMail: req.body.email,
      Password: req.body.password
    };

    User.updateUser(userData, (err, data) => {
      if (data && data.msg) {
        res.json(data);
      } else {
        res.json({
          success: false,
          msg: 'Error'
        });
      }
    });
  });

  app.delete('/users/:id', (req, res) => {
    User.deleteUser(req.params.id, (err, data) => {
      if (data && data.msg === 'deleted' || data.msg === 'not exists') {
        res.json({
          success: true,
          data
        });
      } else {
        res.status(500).json({
          msg: "Error"
        });
      }
    });
  });
  */
};