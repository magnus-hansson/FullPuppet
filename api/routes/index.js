// Require todo model


module.exports = function* () {
  // Grab all todo items

  
  // Return and embed in template
  this.body = 'welcome young jedi';
};

// module.exports.get = function* (id) {
//   // Grab all todo items
//   var results = yield Athlete.find({ _id: id });
//   
//   // Return and embed in template
//   yield this.body = results;
// };
// 
// module.exports.post = function* () {
//   
//   var athlete = new Athlete(this.request.body);
// 
//   if (athlete.name === null) {
//     this.throw(400, 'Name is required');
//   }
//   
//   // Save in collection
//   var newathlete = yield athlete.save();
//   
//   yield this.body = newathlete;
// };