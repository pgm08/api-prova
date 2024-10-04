const repositoryDeck = require('../repositories/repositoryDeck');
const containsSpecialCharacters = require('../utils/validation')

class ServiceDeck{
    async getDecks(){
        return repositoryDeck.findAll();
    }

    async createDeck(text){
        if(!text){
            throw new Error('Texto em branco')
        }

        if(text.lenght > 60){
            throw new Error('Texto maior que o máximo permitido')
        }

        return repositoryDeck.createDeck({text});
    }
}

module.exports = new ServiceDeck();