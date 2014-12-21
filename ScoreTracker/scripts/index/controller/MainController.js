(function () {'use strict';
    angular.module("ScoreKeeper", ['ngRoute']).controller('MainController', ['$scope', function($scope) {
        $scope.total = {};
        $scope.score = {};
        $scope.users = [
            {index:1, name:'Player1', scores:[]},
            {index:2, name:'Player2', scores:[]},
			{index:3, name:'Player3', scores:[]},
			{index:4, name:'Player4', scores:[]},
			{index:5, name:'Player5', scores:[]},
			{index:6, name:'Player6', scores:[]}
        ];
	
        $scope.rounds = $scope.users[0].scores.length;
        $scope.score.doneEntering = function(data, index) {
			if (index === 0 && $scope.score[index].length>0) {
				$scope.rounds++;
			}
            if ($scope.score[index] && $scope.score[index].length>0) {
                data.scores.push({round:$scope.rounds, value: $scope.score[index]});
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
		
		$scope.getTotal = function(scores) {
			var total =0;
            for (var i = 0; i < scores.length; i++) {
                total = total + parseInt(scores[i].value);
            }
            return total;
        }
		
		$scope.clearRounds = function() {
			$scope.users = [
				{index:1, name:'Player1', scores:[]},
				{index:2, name:'Player2', scores:[]},
				{index:3, name:'Player3', scores:[]},
				{index:4, name:'Player4', scores:[]},
				{index:5, name:'Player5', scores:[]},
				{index:6, name:'Player6', scores:[]}
			];
			$scope.rounds = 0;
		}
	
    }]);
})();