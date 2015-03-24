'use strict';
var keeperModule = angular.module("ScoreKeeper");
keeperModule.service('dataStorageService', [function () {
    var self = this;
    self.getDbServerURL = function (success, fail) {
        //cordova.exec(function (url) {
        //    success(url);
        //}, function (err) {
        //    fail(err);
        //}, "CBLite", "getURL", []);
        return "http://someurl";
    };

    self.createDbIfNotExists = function (success, fail) {
        //Check if db exists

        //Create Db If not exists
    };

    self.createDb = function (success, fail) {

    };

    self.dbExists = function (success, fail) {
        this.getDbURL();
    };
}]);
