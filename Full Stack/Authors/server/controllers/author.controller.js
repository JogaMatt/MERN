const {Author} = require('../models/author.model');
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World!"
    })
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.allAuthors = (req, res) => {
    Author.find({})
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err));
}