/**
 * Created by Aharon on 19/07/2016.
 */
var Trello = require("node-trello");
var https = require('https');
var Q = require('Q');
var apiKey = process.env.TRELLO_API_KEY;

function login(userToken){

}

function getCards(){

}

function createCards(cardName){

}

function closeCards(cardId) {

}

function editCheckListItem(userToken,cardId, itemName){
    var t = new Trello(apiKey, userToken);

    t.put("/1/checklists/" + cardId + '/name', { value: itemName }, function(err, data) {
        if (err) throw err;
        console.log(data);
    });
}

function createCheckListItem(userToken,cardId, itemName){
    var t = new Trello(apiKey, userToken);

    t.post('/1/checklists', { idCard: cardId, name: itemName }, function(err, data) {
        if (err) throw err;
        console.log(data);
    });
}

function getCheckList(userToken, cardId) {
    var deferred = Q.defer();
    var t = new Trello(apiKey, userToken);

    t.get("/1/cards/" + cardId + '/checklists', { fields: 'name', cards: 'open', card_fields: 'name'}, function(err, data) {
        if (err) {
            deferred.reject(err);
        }
        deferred.resolve(data);
    });

    return deferred.promise;
}


exports = module.exports = {
    login: login,
    getCards: getCards,
    createCards: createCards,
    closeCards: closeCards,
    createCheckListItem: createCheckListItem,
    editCheckListItem: editCheckListItem,
    getCheckList: getCheckList
}