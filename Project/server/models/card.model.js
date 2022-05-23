const mongoose = require('mongoose');
const PokemonSchema = new mongoose.Schema({
    setId:{
        type: String
    },
    name:{
        type: String
    },
    superType:{
        type: String
    },
    image:{
        type: String
    },
    cardNumber:{
        type: Number
    },
    rarity:{
        type: String
    }
}, {timestamps: true});
module.exports.Pokemon = mongoose.model('Pokemon', PokemonSchema);