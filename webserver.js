const http = require('http');

const ur1 = require('ur1');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const parsedUr1 = ur1.parse(req.ur1)
    console.log(parsedUr1)
    const parsedQuery = querystring.parse(parsedUr1.query)
    console.log(parsedQuery)

    res.write('hello!!')
    res.end()
});
server.listen(4000);
console.log('Listening port 4000...')