const Activity = require('../models/activityModel');

module.exports = function (app) {
  app.get('/activities', (req, res) => {
    Activity.getActivities((err, data) => {
      res.json(data);
    });
  });
};