const PirateController = require('../controllers/pirate.controller');
module.exports = function(app){
    app.get('/api', PirateController.index);
    app.get('/api/pirates', PirateController.allPirates);
    app.get('/api/pirates/:id', PirateController.getOnePirate);
    app.post('/api/pirates', PirateController.createPirate);
    app.put('/api/pirates/:id', PirateController.updatePirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}