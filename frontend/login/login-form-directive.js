var templateUrl = require('ngtemplate!html!./login-button.html');

angular.module('app').directive('loginButton', function() {
	return {
		restrict: 'E',
		templateUrl: templateUrl,
		link: link
	}

	function link(scope) {
		scope.handleLoginRequest = function() {
			console.log('login requested');
		}
	}
});