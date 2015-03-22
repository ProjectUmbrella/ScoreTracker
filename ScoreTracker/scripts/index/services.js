var Umbrella = Umbrella || {};

angular.module("ScoreKeeper").service('appService', function () {
    "use strict";
    var self = this;
    var appConfig = undefined;
    var couchDbServerUrl = undefined;
    var dbName = undefined;
    var httpService = undefined;

    //function Service(config) {
    //    appConfig = config;
    //    dbName = config.dbName || "scoreKeeperDb";
    //    httpService = config.httpService;
    //}

    self.initialize = function () {
        Umbrella.Service.prototype.getDbServerURL(function (url) {
            couchDbServerUrl = url;
        }, function (error) { });
    };

    ////DB related methods

    Umbrella.Service.prototype.getDbServerURL = function (success, fail) {
        //cordova.exec(function (url) {
        //    success(url);
        //}, function (err) {
        //    fail(err);
        //}, "CBLite", "getURL", []);
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

    ////Business related methods
    Umbrella.Service.prototype.getLastSavedGame = function () {
        //Get App Configuration

        //If not exist create one
        //Create a default game
        //Persist the game data
        //Update the App Configuration

        //Return the game data
    };

    Umbrella.Service.prototype.saveGame = function (gameObj) {

    };

    Umbrella.Service.prototype.getSavedGames = function (pageNo, pageSize) {

    };

    Umbrella.Service.prototype.getAppConfig = function () {

    };

    return self;
});