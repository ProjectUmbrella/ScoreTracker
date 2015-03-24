'use strict';

var keeperModule = angular.module("ScoreKeeper");
keeperModule.service('gameService', ['dataStorageService', function (dataStorageService) {
    var self = this;
    var dbServerURL = dataStorageService.getDbServerURL();
    self.getDbServerURL = function () {
        return dbServerURL;
    };

    self.getData = function () {
        var users = [
            { index: 1, name: 'Hari', scores: [] },
            { index: 2, name: 'Radhika', scores: [] },
			{ index: 3, name: 'Kumar', scores: [] },
			{ index: 4, name: 'Venky', scores: [] },
			{ index: 5, name: 'Harshika', scores: [] },
			{ index: 6, name: 'Rajesh', scores: [] }
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
