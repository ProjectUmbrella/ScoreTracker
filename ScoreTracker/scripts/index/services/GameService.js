'use strict';
angular.module('ScoreKeeper').service('GameService',  function() {
	this.getData = function() {
        var users = [
            {index:1, name:'Hari', scores:[]},
            {index:2, name:'Radhika', scores:[]},
			{index:3, name:'Kumar', scores:[]},
			{index:4, name:'Venky', scores:[]},
			{index:5, name:'Harshika', scores:[]},
			{index:6, name:'Rajesh', scores:[]}
        ];
        return users;
	};
});