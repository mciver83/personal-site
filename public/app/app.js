var app = angular.module('andrewResume', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/intro', {
		templateUrl: 'app/views/main.html',
		controller: 'mainCtrl'
	})

	.when('/resume', {
		templateUrl: '../resume.pdf'
	})

	.otherwise({
		redirectTo: '/intro'
	});

});
