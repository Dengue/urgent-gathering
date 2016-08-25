var template = require('./add-participants.html');
angular.module('app').controller('AddParticipantsController',function($scope,$element,$attrs){
	$scope.processAddParticipantsByClick = function ($event) {
		
	}
});
angular.module('app').directive('addParticipants', function() {
	return {
		controller: 'AddParticipantsController',
		restrict: 'E',
		scope: {},
		template: template,
		link: link
	}

	function link(scope) {
	}
});


