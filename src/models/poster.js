const express = require('express')
const router = express.Router()

const cache = require('../config/redis')

router.post('/poster', async (request, response) => {
    return response.status(200).send(await cache.store('poster', request.body))
})

module.exports = router