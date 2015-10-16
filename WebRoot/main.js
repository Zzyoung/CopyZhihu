(function(){
	angular.module('zhihu',['ngRoute','ngCookies']).config(config).run(run);
	
	config.$inject = ['$routeProvider','$locationProvider'];
	
	function config($routeProvider,$locationProvider){
		
	}
	
	run.$inject = ['$rootScope','$location','$cookieStore','$http'];
	
	function run($rootScope, $location, $cookieStore, $http){
		
	}
})();