const express = require('express')
const router = express.Router()

const cache = require('../config/redis')

router.post('/genproductios', async (request, response) => {
    return response.status(200).send(await cache.store('genproductios', request.body))
})

module.exports = router