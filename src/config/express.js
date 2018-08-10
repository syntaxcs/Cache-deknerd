const express = require('express')
const handler = require('express-handlebars')
const bodyParser = require('body-parser')
const cors = require('cors')
const methodOverride = require('method-override')

const app = express();
app.engine('hanlebar', handler({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use('/redis',require('../models/'))

module.exports = app 