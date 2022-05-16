const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    joke: {
    type: String,
    required: [true, 'Please enter a joke.']}
});
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
