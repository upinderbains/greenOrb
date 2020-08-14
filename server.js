const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();
const multer = require('multer');
const connectDB = require('./db/connection');
const helper = require('./utils/helper');
require('dotenv').config();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(
  multer({
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    },
    fileFilter: helper.fileFilter
  }).single('file')
);

//Connection to the database
connectDB();

//Api routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/posts', require('./routes/posts'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.json({
    msg: err.message,
    stack: err.stack
  });
}
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || process.env.LOCAL_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
