(function(){
	angular.module('zhihu',['ngRoute','ngCookies']).config(config).run(run);

	config.$inject = ['$routeProvider','$locationProvider'];

	function config($routeProvider,$locationProvider){
		$routeProvider
			.when('/login',{
				controller:'LoginController',
				templateUrl:'templates/login.view.html',
				controllerAs:'vm'
			})
			.when('/register',{
				controller:'RegisterController',
				templateUrl:'templates/register.view.html',
				controllerAs:'vm'
			})
			.otherwise({
				redirectTo:'/login'
			});
	}

	run.$inject = ['$rootScope','$location','$cookieStore','$http'];
	function run($rootScope, $location, $cookieStore, $http){
		
	}

})();