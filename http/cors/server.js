const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html', 'utf8')
  response.writeHead(200, {
    'Content-Type': 'text/html'
  })
  response.end(html)
}).listen(8888)

console.log('server listening on 8888')
// 预请求
// 1:请求的方法不是GET/HEAD/POST

// 2:POST请求的Content-Type并非application/x-www-form-urlencoded, multipart/form-data, 或text/plain

// 3:请求设置了自定义的header字段