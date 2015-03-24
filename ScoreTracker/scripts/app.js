/// <reference path="services/game-service.js" />

// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

"use strict";
angular.module("ScoreKeeper", ['ngRoute']);

var Umbrella = Umbrella || {};

Umbrella.App = (function () {

    //angular.element(document).ready(function () {
    //    onDeviceReady();
    //});

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        //Initialize app service and get the data.
        //var umbService = new Umbrella.Service({});
        //umbService.initialize();

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        //scoreKeeperApp.service("appService", Umbrella.Service);
        var $injector = angular.bootstrap(document, ['ScoreKeeper']);

        //var $controller = $injector.get('$controller');
        //var AngularCtrl = $controller('AngularCtrl');
        //AngularCtrl.setUserName();

        //umbService.getDbServerURL(function (url) {
        //    logMessage("Couchbase Lite running at " + url);
        //}, function (err) {
        //    logMessage("error launching Couchbase Lite: " + err)
        //});

    };

    function onPause() {
        //Save the current game to db
    };

    function onResume() {
        //Ensure the last saved game is displayed
    };

    function logMessage(message) {
        var p = document.createElement("p");
        p.innerHTML = message;
        document.body.appendChild(p)
        console.log(message)
    };
})();