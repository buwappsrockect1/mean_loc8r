// controller for locations

// index (Homepage) controller
const homeList = function(req, res, next) {
    res.render('locations-list', { title: 'HomeList' });
};

// location info
const locationInfo = function(req, res, next) {
    res.render('index', { title: 'LocationInfo' });
};

// add review
const addReview = function(req, res, next) {
    res.render('index', { title: 'AddReview' });
};

module.exports = {
    homeList         ,
    locationInfo     ,
    addReview

};  