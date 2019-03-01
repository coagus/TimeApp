const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// settings
app.set('port', process.env.PORT || 3000);
app.disable('etag');

// routes
require('../routes/time.js')(app);

app.listen(app.get('port'), () => {
  console.log('server on port ' + app.get('port'));
});