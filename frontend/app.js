require("bootstrap/dist/css/bootstrap.css");
require("font-awesome-webpack");
require("./sass/common.scss");
require('angular');


let app = angular.module('app', [require('angular-ui-router')]);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
    	.state('index', {
     		 url: "",
      		 templateUrl: require('ngtemplate!html!./index.html')
    	});
});
require('./login/login-form-directive.js');
require('./add-participants/add-participants.js');