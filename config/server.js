const express = require('express')
const consign = require('consign')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.use(express.static('./app/public'))

consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app);

app.get('*', (req,res) => {
    res.send('<h1>Page not found...</h1>')
})

module.exports = app