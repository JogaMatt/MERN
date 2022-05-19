const mongoose = require("mongoose");
const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    image: {
        type: String,
        required: [true, "Please select an image"]
    },
    treasureChests: {
        type: Number,
        required: [true, "Please select an amount of treasure chests"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Please enter a catch phrase"]
    },
    position: {
        type: String,
        required: [true, "Please select a postion"]
    },
    pegLeg: {
        type: String
    },
    eyePatch: {
        type: String
    },
    hookHand: {
        type: String
    }
}, {timestamps: true});
module.exports.Pirate = mongoose.model("Pirate", PirateSchema)