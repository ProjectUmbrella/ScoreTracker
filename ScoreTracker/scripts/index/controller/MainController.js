'use strict';



	var app = angular.module('ScoreKeeper').controller('MainController', ['$scope', 'GameService', function($scope, GameService) {
        $scope.total = {};
        $scope.score = {};
        $scope.users = GameService.getData();
        $scope.DEFAULTVALUE = "-0.0001";
        $scope.rounds = $scope.users[0].scores.length;
        $scope.hideDel = true;

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
        
		$scope.PlayerRightClick = function () {
		    $scope.hideDel = false;
		}

		$scope.PlayerLeftClick = function () {
		    $scope.hideDel = true;
		}
		
	}]);

	app.directive('ngRightClick', function ($parse) {
	    return function (scope, element, attrs) {
	        var fn = $parse(attrs.ngRightClick);
	        element.bind('contextmenu', function (event) {
	            scope.$apply(function () {
	                event.preventDefault();
	                fn(scope, { $event: event });
	            });
	        });
	    };
	});
	
