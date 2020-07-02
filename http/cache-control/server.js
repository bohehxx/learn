const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=200'
    })
    response.end('console.log("script loaded twice")')
  }
}).listen(8888)

console.log('server listening on 8888')
      // max-age和max-stale参数的意义
      // max-age:告知缓存多长时间，在没有超过缓存时间的情况下，请求会返回缓存内的数据，在超出max-age的情况下向服务端发起新的请求，
      // 请求失败的情况下返回缓存数据（测试中已验证），否则向服务端重新发起请求。
      // max-stale:指示客户机可以接收超出max-age时间的响应消息，max-stale在请求设置中有效，在响应设置中无效（测试中已验证，且参见博客https://www.jianshu.com/p/db197279f053）。
      // 因此max-age和max-stale在请求中同时使用的情况下，缓存的时间可以为max-age和max-stale的和。


      // 为了配合Cache-Control中no-cache，在server端我们还需要加上头Last-Modified、Etag。收到带Last-Modified这个头，
      // 下次浏览器发送request就会带上If-Modified-Since或者If-Unmodified-Since，
      // 服务器收到这个request的If-Modified-Since后，通过读取它的值对比资源存在的地方的Last-Modified，服务器就告诉浏览器是否可以使用缓存。
      // Etag是一个更加严格的验证，它是根据文件的内容生成Etag（数据签名，最常用做法是对资源内容进行哈希计算），
      // 收到带Etag这个头，下次浏览器发送request就会带上If-Match或者If-Non-Match，
      // 服务器收到这个request的上If-Match或者If-Non-Match后，通过读取它的值对比资源存在的地方的Etag，服务器就告诉浏览器是否可以使用缓存。
     

      // no-cache和no-store的区别！
      // 1.no-cache：是把资源进行了本地缓存，在浏览器使用缓存之前，会使用last-Modified和Etag往返浏览器进行对比，
      // 判断时间和唯一标识符和服务器的是否一致，一致的话304使用缓存，不一致的话请求服务器。

      // 2.no-store：才是真正的完完全全的禁止本地缓存

