const {Pirate} = require('../models/pirate.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    })
}

module.exports.createPirate = (req, res) => {
    const { name, image, treasureChests, catchPhrase, position, pegLeg, eyePatch, hookHand } = req.body;
    Pirate.create({
        name,
        image,
        treasureChests,
        catchPhrase,
        position,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
}

module.exports.allPirates = (req, res) => {
    Pirate.find({})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

module.exports.getOnePirate = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.json(err));
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}