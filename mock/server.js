const jsonServer = require('json-server')
const server = jsonServer.create()

const middleware = jsonServer.defaults()
server.use(middleware)

const router = jsonServer.router('mock/server.js')
server.use(router)

router.render = (req, res) => {
  console.log(res.locals.data)
  res.jsonp({
    data:res.locals.data,
    status: 0,
    msg: ''
  })
}

server.listen(9090, ()=> {
  console.log('josn server is running')
})