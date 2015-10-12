(function() {
	angular.module('zhihu').controller('LoginController', LoginController);

	LoginController.$inject = [ '$location', 'AuthenticationService',
			'FlashService', 'UserService' , '$scope' ];

	function LoginController($location, AuthenticationService, FlashService,
			UserService, $scope) {
		var vm = this, prompts;

		vm.login = function() {
			prompts = UserService.validate(vm.user, false);
			$scope.prompts = prompts;
			if (prompts.length === 0) {
				console.log(vm.user.loginName, vm.user.password);
				AuthenticationService.login(vm.user.loginName, vm.user.password, function (response) {
	                if (response.status>=200 && response.status < 300) {
//	                    AuthenticationService.setCredentials(vm.username, vm.password);
//	                    $location.path('/');
	                	console.log("login success");
	                } else {
	                	console.log("login failed");
	                }
	            });
			}
		};
	}
})();