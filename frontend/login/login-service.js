angular.module('app').service('loginService',function($http){
	$http({
		method: 'GET',
		url: 'http://localhost:1337/user'
	}).then(function (response) {
		debugger;
	});

	return {};

});