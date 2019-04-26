const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();

// DB setup
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });

//App setup
app.use(morgan('combined')); //logging middleware
app.use(bodyParser.json({ type: '*/*' })); //parses all incoming requests to json
router(app);

//Server setup
const port = process.env.PORT || 4001;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
