const {Pokemon} = require('../models/card.model');
import axios from 'axios'
// module.exports.createCard = (req, res) => {
//     const {setId, name, superType, image, cardNumber, rarity} = card.body;
// }


module.exports.getCards = (req, res) => {
    const getCard = () => {
        for(let i = 1; i<=203; i++){
            let card = {};
            axios.get(`https://api.pokemontcg.io/v2/cards/swsh-${i}`)
                .then(newCard => card.push(newCard))
                .catch(err => console.log(err))
        }
        return card
    }
}

console.log(getCard())
