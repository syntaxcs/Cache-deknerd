const express = require('express')

const app = express();

app.use(require('./banner'))
app.use(require('./category'))
app.use(require('./categoryExam'))
app.use(require('./coin'))
app.use(require('./contact'))
app.use(require('./contentIndex'))
app.use(require('./coupon'))
app.use(require('./genproductios'))
app.use(require('./level'))
app.use(require('./page'))
app.use(require('./poster'))

module.exports = app