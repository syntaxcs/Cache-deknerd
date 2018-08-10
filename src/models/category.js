const express = require('express')
const router = express.Router()

const cache = require('../config/redis')

router.post('/category', async (request, response) => {
    return response.status(200).send(await cache.store('category', request.body))
})

router.post('/category/newCategory', async (request, response) => {
    return response.status(200).send(await cache.store('category/newCategory', request.body))
})

router.post('/category/interest', async (request, response) => {
    return response.status(200).send(await cache.store('category/interest', request.body))
})

module.exports = router