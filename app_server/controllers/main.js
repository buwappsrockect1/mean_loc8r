
// index (Homepage) controller
const indexController = function(req, res, next) {
    res.render('index', { title: 'Express' });
};

module.exports = {
    indexController

};    