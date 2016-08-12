require("./sass/common.scss");
require('angular');

angular.module('app', []);

angular.module('app').directive('user', function() {
	return {
		restrict: 'E',
		template: '<button ng-click = "handleLoginRequest()"></button>',
		link: link
	}

	function link(scope) {
		scope.handleLoginRequest = function() {
			console.log('login requested');
		}
	}
});