const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
	event: { type: String, required: true},
	category: { type: String, required: true},
	quantity: {type: String, required: true},
    weight: {type: String, required: true},
	date: {type: String, required: false},
	files: {type: Array, "default": []}
	
})


module.exports = mongoose.model('Event', eventSchema);
