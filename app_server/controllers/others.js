// controller for others 

// about controller
const about = function(req, res, next) {
    res.render('generic-text', { title: 'About' });
};


module.exports = {
    about         

};  