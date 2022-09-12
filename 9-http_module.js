const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        res.end("Welcome to HomePage")
    }

    if (req.url === "/about") {
        res.end("This is the about page")
    }
    res.end(
        `<h1>Oops!</h1?
       <p>The page isn't vailable which you are looking for</p>
       <a href="/">Back to Home</a>`
    )
})

server.listen(5000)