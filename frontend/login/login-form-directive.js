var template = require('./login-button.html');

angular.module('app').directive('loginButton', function() {
	return {
		restrict: 'E',
		scope: {},
		template: template,
		link: link
	}

	function link(scope) {
		scope.redirectLink = 'https://oauth.vk.com/authorize?client_id=5474952&display=page&redirect_uri=http://localhost:1337/authorization/verify&scope=friends&response_type=code&v=5.53'
	}
});