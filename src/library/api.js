const http = require('http');

let api = {}

queryFromServer = (path) => {
    return {
        host: 'localhost',
        port: 8080,
        path: '/api/v2.0/' + path,
        agent: false,
        timeout: 1
    };
}

api.getFromServer = (api) => {
    return new Promise((resolve) => {
        (async () => {
            http.get(queryFromServer(api), (res) => {
                res.on('data', (result) => {
                    resolve(result)
                });
            }).end();
        })();
    })
}

// getFromServer('banner').then(listBanner => {
//     client.set(["banner", listBanner.toString('utf8')], redis.print);
//     client.get("banner", (error, replies) => {
//         console.log(replies + '\n')
//     })
// })

// getFromServer('coin').then(listCoin => {
//     client.set(["coin", listCoin.toString('utf8')], redis.print);
//     client.get("coin", (error, replies) => {
//         console.log(replies + '\n')
//     })

// })

module.exports = api