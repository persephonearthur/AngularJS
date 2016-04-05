var pageModule = angular.module("pageModule", []);
pageModule.controller('pageCtrl', function($scope, $http, $state, $stateParams) {
	$http.get('data/items.json')
        .success(function(data) {
			$scope.items = data;
			    console.log(data);
			$scope.amount = 100;
        });
});