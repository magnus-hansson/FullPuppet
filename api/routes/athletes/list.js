// Require todo model
var Athlete = require('../../models/athlete');

module.exports = function *() {
  // Grab all todo items
  var results = yield Athlete.find({});
  
  // Return and embed in template
  yield this.body = results;
};