const MainRoutes = require('./main_route');

module.exports = (app) => {
    app.use('/', MainRoutes);
};
