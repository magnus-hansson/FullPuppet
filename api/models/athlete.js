// Get mongoose object
var db = require('../lib/db');

// Prepare schema
var schema = new db.Schema({
    name:String,
    emails:[String],
	phones:[String],
    genre:{type:String},
    activities:[{type: db.Schema.Types.ObjectId, ref: 'Activity'}],
    group: {type: db.Schema.Types.ObjectId, ref: 'Group'}
});

// Return model with schema linked to collection
module.exports = db.model('Athlete', schema );