const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

server.use(router)
server.listen(3600, () => {
  console.log('JSON Server is running\nhttp://localhost:3000')
})
