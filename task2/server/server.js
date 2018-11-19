
const http = require('http');
const loremIpsum = require('lorem-ipsum');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    function createPosts() {
        const arrayPost = [];

        for (let i = 0; i < 10; i++) {

            const myPosts = {
                id: Math.floor(Math.random() * 100),
                title: loremIpsum({ count: 3, units: 'words' }),
                intro: loremIpsum({ count: 2, units: 'sentences' })

            }

            arrayPost.push(myPosts);

        }
        return arrayPost;
    }

    res.end(JSON.stringify(createPosts()));
});

server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});
