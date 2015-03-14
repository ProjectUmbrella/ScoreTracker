(function () {'use strict';
    angular.module("ScoreKeeper", ['ngRoute']).controller('MainController', ['$scope', function($scope) {
        $scope.total = {};
        $scope.score = {};
        $scope.users = [
            {index:1, name:'Hari', scores:[]},
            {index:2, name:'Radhika', scores:[]},
			{index:3, name:'Kumar', scores:[]},
			{index:4, name:'Venky', scores:[]},
			{index:5, name:'Harshika', scores:[]},
			{index:6, name:'Rajesh', scores:[]}
        ];
        $scope.DEFAULTVALUE = "-0.0001";
        $scope.rounds = $scope.users[0].scores.length;

        $scope.score.doneEntering = function () {
            var roundCompleted = 1;
            for (var i = 0; i < $scope.users.length; i++)
            {
                var currentFieldScore = parseInt($scope.score[i]);
                if (isNaN(currentFieldScore) || parseFloat($scope.score[i]) == parseFloat($scope.DEFAULTVALUE))
                    roundCompleted = 0;                
            }



			if (roundCompleted==1) {
                    for (var i = 0; i < $scope.users.length; i++)
			        {
                        $scope.users[i].scores.push({ round: $scope.rounds, value: $scope.score[i] });
                        $scope.score[i] = $scope.DEFAULTVALUE;
                    }
			    $scope.rounds++;
			}
            
        }

            $scope.score.doneEnteringUser = function () {
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
		
		$scope.clearRounds = function () {
            for (var i = 0; i < $scope.users.length; i++) {
                $scope.users[i].scores = [];
            }            
            $scope.rounds = 0;
		}

		$scope.addPlayer = function () {
		    $scope.users.push({ index: $scope.users.length, name: 'Player' + $scope.users.length, scores: [] });
		    for (var i = 0; i < $scope.rounds; i++) {
		        $scope.users[$scope.users.length-1].scores.push({
		            round: i, value: 0
		        });
		    }
		    
		}

		$scope.removePlayer = function (index) {
		    $scope.users.splice(index, 1);
		}
	
    }]);
})();