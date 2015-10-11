(function() {
	angular.module('zhihu')
			.controller('RegisterController', RegisterController);

	RegisterController.$inject = [ 'UserService', '$location', '$rootScope',
			'FlashService', '$scope' ];

	function RegisterController(UserService, $location, $rootScope,
			FlashService, $scope) {
		var vm = this, prompts;

		vm.register = function() {
			prompts = UserService.validate(vm.user);
			$scope.prompts = prompts;
			if (prompts.length === 0) {
				// UserService.Create(vm.user);
				console.log("create user");
			}
		};
	}

})();
