angular.module('sportsStore')
	.constant("dataUrl", "https://api.parse.com/1/classes/Products")
	.run(function($http){
		$http.defaults.headers.common["X-Parse-Application-Id"]="AMeeQgh6azzidQhfjrjq56hscgcidUfSKxatMi90";
		$http.defaults.headers.common["X-Parse-REST-API-Key"]="JuCbncI6PGy53B5UCvMZuUuGnxBxbeQ7HgjLToH9";
	})
	.controller('sportsStoreCtrl', function($scope, $http, dataUrl){
	$scope.data={};
		$http.get(dataUrl)
			.success(function (data) {
				$scope.data.products = data.results;
			})
			.error(function (error) {
				$scope.data.error = error;
});
});
