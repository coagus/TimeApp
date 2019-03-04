const Activity = require('../models/activityModel');

module.exports = function (app) {
  app.get('/activities', (req, res) => {
    Activity.getActivities((err, data) => {
      res.json(data);
    });
  });

  app.post('/addactivity', (req, res) => {
    const activityData = {
      Id: null,
      Name: req.body.Name
    };

    Activity.addActivity(activityData, (err, data) => {
      if (data && data.insertId ) {
        res.json({
          success: true,
          msg: 'Activity Inserted',
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

  app.put('/activity/:id', (req, res) => {
    const activityData = {
      Id: req.params.id,
      Name: req.body.Name
    };

    Activity.updateActivity(activityData, (err, data) => {
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
};
