const userRouter = require('./username')
const ordersRouter = require('./orders')
const siteRouter = require('./site')
const sidebarRouter = require('./sidebar')
const customerRouter = require('./customer')

function route(app) {
    // nếu các tuyến đường bên trên ko match -> chạy tuyến đường bên dưới cùng
    app.use('/user', userRouter)
    app.use('/customer', customerRouter)
    app.use('/orders', ordersRouter)
    app.use('/sidebar', sidebarRouter)
    app.use('/', siteRouter)
}

module.exports = route