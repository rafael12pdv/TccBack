const express = require('express');
const routes = require('./routes');
require('../src/database/index');
const app = express();


app.use(express.json());
app.use(routes);
app.listen(3333);