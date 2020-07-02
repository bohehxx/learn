const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  const html = fs.readFileSync('test.html')
  response.writeHead(200, {
    'Content-Type': 'text/html',
    // 'X-Content-Options': 'nosniff'
    'Content-Encoding': 'gzip'
  })
  response.end(zlib.gzipSync(html))
}).listen(8888)

console.log('server listening on 8888')
// 数据协商：客户端给服务端发送一个请求的时候，客户端会声明我希望这个请求我想要拿到的数据格式以及数据相关的一些限制，
// 服务端会根据请求里面表示的想要拿到什么样的数据之后，然后做出一个判断，服务端可能会有很多不同类型的数据返回，服务端可以根据头信息进行区分
// 请求声明Accept:
// Accept: 声明我想要怎么样的数据，声明数据类型
// Accept-Encoding: 代表数据是怎么样的编码方式
// Accept-Language: 判断返回的信息是什么语言
// User-Agent: 表示浏览器的一些相关的信息
// 与之对应的就是服务端Content:

// Content-Type: 对应Accept，Accept可以接收很多种数据格式，Content-Type会在里面选择一种数据格式返回，在返回的时候声明返回的数据格式
// Content-Encoding: 对应Accept-Encoding，告诉客户端，我究竟用了什么样的压缩数据的方式
// Content-Language: 是否根据请求返回对应的语言