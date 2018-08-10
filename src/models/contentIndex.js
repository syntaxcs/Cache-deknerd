const express = require('express')
const router = express.Router()

const cache = require('../config/redis')

router.post('/contentIndex', async (request, response) => {
    return response.status(200).send(await cache.store('contentIndex', request.body))
})

router.post('/contentIndex/selectTag', async (request, response) => {
    return response.status(200).send(await cache.store('contentIndex/selectTag', request.body))
})

module.exports = router