(function () {'use strict';
    angular.module("ScoreKeeper", ['ngRoute']).controller('MainController', ['$scope', function($scope) {
        $scope.total = {};
        $scope.score = {};
        $scope.users = [
            {index:1, name:'Rad', scores:[{round:1, value:23}, {round:2, value:10}, {round:3, value:50}]},
            {index:2, name:'HK', scores:[{round:1, value:25},  {round:2, value:50}, {round:3, value:40}]}
        ];
	
        $scope.rounds = $scope.users[0].scores.length;
        $scope.score.doneEntering = function(data, index) {
            if ($scope.score[index] && $scope.score[index].length>0) {
                data.scores.push({round:$scope.rounds++, value: $scope.score[index]});
                $scope.score[index] = "";
            }
        }
	
        $scope.getRounds = function() {
            var roundsList = [];
            for (var i = 0; i < $scope.rounds; i++) {
                roundsList[i] = i;
            }
            return roundsList;
        }
	
    }]);
})();