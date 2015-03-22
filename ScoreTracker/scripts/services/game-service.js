'use strict';

var keeperModule = angular.module("ScoreKeeper");
keeperModule.service('gameService', ['dataStorageService', function (dataStorageService) {
    var self = this;
    var dbServerURL = dataStorageService.getDbServerURL();
    self.getDbServerURL = function () {
        return dbServerURL;
    };
}]);
