const path = require('path');
const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors())
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
app.use(routes);

module.exports = app;