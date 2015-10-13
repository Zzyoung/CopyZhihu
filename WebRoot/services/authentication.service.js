(function() {
	angular.module('zhihu').factory('AuthenticationService',
			AuthenticationService);

	AuthenticationService.$inject = [ '$http', '$cookieStore', '$rootScope',
			'$timeout', 'UserService' ];

	function AuthenticationService($http, $cookieStore, $rootScope, $timeout,
			UserService) {
		var service = {};

		service.login = function(loginName, password, callback) {
//			$http.post('/Zhihu/login', {
//				loginName : loginName,
//				password : password
//			}).success(function(response) {
//				callback(response);
//			});
			console.log(loginName, password);
			$http({
				method : 'POST',
				url : '/Zhihu/login/',
				data : $.param({
					loginName : loginName,
					password : password
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(callback);
		};

		service.setCredentials = function(loginName, password){
			var authdata = Base64.encode(loginName + ':' + password);

            $rootScope.globals = {
                currentUser: {
                	loginName: loginName,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
		};
		
		service.clearCredentials = function(){
			$rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
		};
		
		return service;
	}
})();