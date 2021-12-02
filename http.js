const http = require('http')

const server = http.createServer((req, res, next) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
  if(req.url === '/about') {
      res.end('Here is our short history')
  }
  //res end cos psuje tutaj jak to zrobic?
   res.end('wrong page')
})

server.listen(5000)
