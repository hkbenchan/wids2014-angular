'use strict';

angular.module('MyApp', []);

// angular.module('MyApp.services', []);

angular.module('MyApp').
	controller('TodoCtrl', function($scope) {
		$scope.helloMessage = "Hi Everyone";
	});

angular.module('MyApp').
	directive('taskList' , function() {
		return {
			scope: true,
			controller: function($scope, $attrs) {
				$scope.taskListName = $attrs.listName || "My tasks";
				$scope.taskList = [
					{ name: "My first task", completed: true },
					{ name: "My second task", completed: false },
					{ name: "My third task", completed: false}			
				];

				$scope.addTask = function() {
					if (!($scope.newTaskName === undefined || $scope.newTaskName === '')) {
						$scope.taskList.push({name:$scope.newTaskName, completed: false});
						$scope.newTaskName = undefined;
					} 
				}

				$scope.removeTask = function(index) {
					$scope.taskList.splice(index, 1);
				}
			},
			templateUrl: 'task-list.html'
		};
	});