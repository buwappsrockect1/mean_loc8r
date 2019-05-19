// controller for locations

// index (Homepage) controller
const homeList = function(req, res, next) {
    res.render('locations-list', { 
        title: 'Loc8r - Find a place to work with WiFi' ,
        pageHeader: {
            title:      'Loc8r' ,
            strapLine:  'Find places to work with wifi near you!'
        }
    });
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