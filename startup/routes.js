module.exports = app => {
    app.use('/', require('../routes/movies'));
}