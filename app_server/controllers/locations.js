// controller for locations

// index (Homepage) controller
const homeList = function(req, res, next) {
    res.render('locations-list', { title: 'HomeList' });
};

// location info
const locationInfo = function(req, res, next) {
    res.render('location-info', { title: 'Location Info' });
};

// add review
const addReview = function(req, res, next) {
    res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
    homeList         ,
    locationInfo     ,
    addReview

};  