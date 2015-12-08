var Athlete = require('../../models/athlete');
module.exports.post = function* () {
  
  var athlete = new Athlete(this.request.body);

  if (athlete.name === null) {
    this.throw(400, 'Name is required');
  }
  
  // Save in collection
  var newathlete = yield athlete.save();
  
  yield this.body = newathlete;
};