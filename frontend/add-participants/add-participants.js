var template = require('./add-participants.html');

angular.module('app').directive('addParticipants', function() {
	return {
		restrict: 'E',
		scope: {},
		template: template,
		link: link
	}

	function link(scope) {
	}
});