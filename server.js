const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const connectDB = require('./db/connection');

require('dotenv').config();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

//Connection to the database
connectDB();

//Api routes

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/profile', require('./routes/profile'));


function notFound(req, res, next) {
  res.status(404);
  const error = new Error ('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    msg: err.message,
    stack: err.stack
  })
}
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || process.env.LOCAL_PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
