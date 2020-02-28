module.exports = (application) => {
    application.get('/example', async (req, res) => {
        application.app.controllers.example.example(application, req, res)
    })
}