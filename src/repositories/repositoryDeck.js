const Deck = require('../models/deck')

class RepositoryDeck{
    async createDeck(Deck){
        return await Deck.create(Deck);
    }

    async findAll(){
        return await Deck.findAll();
    }
}

module.exports = new RepositoryDeck();