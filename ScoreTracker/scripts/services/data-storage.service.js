'use strict';
var keeperModule = angular.module("ScoreKeeper");
keeperModule.service('dataStorageService', ['$resource', function ($resource) {
    var self = this;
    var DB_NAME = "score_keeper";
    self.getDbServerURL = function (success, fail) {
        //cordova.exec(function (url) {
        //    success(url);
        //}, function (err) {
        //    fail(err);
        //}, "CBLite", "getURL", []);
         return success("http://127.0.0.1:5984/");//https://kumards.cloudant.com/");
    };

    self.createDbIfNotExists = function (success, fail) {
        //Check if db exists

        //Create Db If not exists
    };

    self.createDb = function (success, fail) {

    };

    self.dbExists = function (success, fail) {
        self.getDbServerURL(function (dbUrl) {
            var allDbs = $resource(dbUrl + '_all_dbs');
            allDbs.get(function (dbs) {
                if (dbs && dbs.length > 0) {
                    var dbs = [];
                    var dbExists = (dbs.indexOf(DB_NAME) >= 0)
                    if (isFunction(success)) {
                        success(dbExists);
                    }
                }
            }, function (error) {
                if (isFunction(fail)) {
                    fail(error);
                }
            });
        });
    }
    function isFunction(possibleFunction) {
        return typeof (possibleFunction) === typeof (Function);
    }
}]);
