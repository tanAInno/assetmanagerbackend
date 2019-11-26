let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

var computerController = require('./controllers/computerController');
var otherController = require('./controllers/otherController');

router.route('/others')
    .get(otherController.index)
    .post(otherController.new);
router.route('/other/:other_id')
    .get(otherController.view)
    .patch(otherController.update)
    .put(otherController.update)
    .delete(otherController.delete);
router.route('/computers')
    .get(computerController.index)
    .post(computerController.new);
router.route('/computer/:computer_id')
    .get(computerController.view)
    .patch(computerController.update)
    .put(computerController.update)
    .delete(computerController.delete);

module.exports = router;