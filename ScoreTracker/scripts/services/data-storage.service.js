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

    Umbrella.Service.prototype.createDbIfNotExists = function (success, fail) {
        //Check if db exists

        //Create Db If not exists
    };

    Umbrella.Service.prototype.createDb = function (success, fail) {

    };

    Umbrella.Service.prototype.dbExists = function (success, fail) {
        this.getDbURL();
    };
}]);
