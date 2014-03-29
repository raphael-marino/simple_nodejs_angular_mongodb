'use strict';
/**
 * Lists all users.
 */
function rendering(req, res) {
  	res.render('layout');
}

module.exports = function (app) {
  app.get('/', rendering);
  app.get('/hellow', rendering);
};
