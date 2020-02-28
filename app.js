const app = require('./config/server')

const port = 3000
app.listen(port, (req, res) => {
    console.log(`Server has started on port: ${port}`)
})