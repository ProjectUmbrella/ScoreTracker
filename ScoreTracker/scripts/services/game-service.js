'use strict';

var keeperModule = angular.module("ScoreKeeper");
keeperModule.service('gameService', ['dataStorageService', function (dataStorageService) {
    var self = this;

    self.getData = function () {
        var users = [
            { index: 1, name: 'Player1', scores: [] },
            { index: 2, name: 'Player2', scores: [] },
			{ index: 3, name: 'Player3', scores: [] },
			{ index: 4, name: 'Player4', scores: [] }
        ];
       
        return users;
    };

    ////Business related methods
    self.getLastSavedGame = function () {
        //Get App Configuration

        //If not exist create one
        //Create a default game
        //Persist the game data
        //Update the App Configuration

        //Return the game data
    };

    self.saveGame = function (gameObj) {

    };

    self.getSavedGames = function (pageNo, pageSize) {

    };

    self.getAppConfig = function () {

    };
}]);
