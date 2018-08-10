const express = require('express')
const router = express.Router()

const cache = require('../config/redis')

router.post('/banner', async (request, response) => {
    return response.status(200).send(await cache.store('banner', request.body))
})

module.exports = router