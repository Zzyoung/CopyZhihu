(function() {
	angular.module('zhihu').factory('AuthenticationService',
			AuthenticationService);

	AuthenticationService.$inject = [ '$http', '$cookieStore', '$rootScope',
			'$timeout', 'UserService' ];

	function AuthenticationService($http, $cookieStore, $rootScope, $timeout,
			UserService) {
		var service = {};

		service.login = function(loginName, password,captcha, callback) {
			console.log(loginName, password);
			$http({
				method : 'POST',
				url : '/Zhihu/login/',
				data : $.param({
					loginName : loginName,
					password : password,
					captcha : captcha
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(callback);
		};

		service.setCredentials = function(loginName, password){
			var expireDate = new Date();
			expireDate.setMinutes(expireDate.getMinutes() + 30);
            $cookieStore.put('loginName', encodeURIComponent(loginName));
            $cookieStore.put('password', encodeURIComponent(password));
		};
		
		service.clearCredentials = function(){
            $cookieStore.remove('loginName');
            $cookieStore.remove('password');
		};
		
		return service;
	}
})();