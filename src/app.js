const app = require('./config/express')
const redis = require('./config/redis').start

redis.on("connect", () => {
    app.listen(3000, console.log('Connect Redis Server!'))
});
