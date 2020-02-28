module.exports = (application) => {
    application.get('/', async (req, res) => {
        application.app.controllers.index.index(application, req, res)
    })
}