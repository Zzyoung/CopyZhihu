(function(){
	angular.module('zhihu').factory('AuthenticationService',AuthenticationService);

	AuthenticationService.$inject = ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService'];

	function AuthenticationService($http,$cookieStore,$rootScope,$timeout,UserService){
		var service = {};
		


		return service;
	}
})();