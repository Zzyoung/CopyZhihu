(function() {
	angular.module('zhihu').controller('LoginController', LoginController);

	LoginController.$inject = [ '$location', 'AuthenticationService',
			'FlashService', 'UserService' , '$scope' , 'ConstantService' ];

	function LoginController($location, AuthenticationService, FlashService,
			UserService, $scope, ConstantService) {
		var vm = this, prompts;

		vm.removePrompt = UserService.removePrompt;
		
		$scope.removePromptByType = UserService.removePromptByType;
		
		$scope.focus = {};
		
		vm.login = function() {
			prompts = UserService.validate(vm.user, false);
			$scope.prompts = prompts;
			if (prompts.length === 0) {
				console.log(vm.user.loginName, vm.user.password);
				AuthenticationService.login(vm.user.loginName, vm.user.password, function (response) {
					console.log(response);
	                if (response.status>=200 && response.status < 300) {
	                	if(response.data.errorCode === ConstantService.constant.UNKNOWN_LOGINNAME){
	                		$scope.prompts = [{type : 'loginName',msg:'该帐号尚未注册知乎'}];
	                	}else if (response.data.errorCode === ConstantService.constant.ERROR_PASSWORD_LOGINNAME){
	                		$scope.prompts = [{type : 'loginName',msg:'登录名或密码输入错误'}];
	                	}else{
	                		console.log("login success");
	                	}
//	                    AuthenticationService.setCredentials(vm.username, vm.password);
//	                    $location.path('/');
	                } else {
	                	
	                }
	            });
			}
		};
	}
})();