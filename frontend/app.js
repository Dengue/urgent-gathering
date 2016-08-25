require("bootstrap/dist/css/bootstrap.css");
require("font-awesome-webpack");
require("./sass/common.scss");
require('angular');


let app = angular.module('app', [require('angular-ui-router')]);

require('./login/login-service.js');
require('./login/login-form-directive.js');
require('./add-participants/add-participants.js');

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
    	.state('index', {
     		 url: "",
      		 templateUrl: require('ngtemplate!html!./index.html')
    	});
}).
run(['loginService',function(loginService) {
	
}]);