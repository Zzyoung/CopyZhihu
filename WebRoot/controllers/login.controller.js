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
		
		vm.timeStamp = +new Date();
		
		$scope.refresh = UserService.refresh;
		
		vm.login = function() {
			prompts = UserService.validate(vm.user, false);
			$scope.prompts = prompts;
			if (prompts.length === 0) {
				console.log(vm.user.loginName, vm.user.password);
				AuthenticationService.login(vm.user.loginName, vm.user.password,vm.user.captcha, function (response) {
	                if (response.status>=200 && response.status < 300) {
	                	if(response.data.errorCode === ConstantService.constant.UNKNOWN_LOGINNAME){
	                		$scope.prompts = [{type : 'loginName',msg:'该帐号尚未注册知乎'}];
	                	}else if (response.data.errorCode === ConstantService.constant.ERROR_PASSWORD_LOGINNAME){
	                		$scope.prompts = [{type : 'loginName',msg:'登录名或密码输入错误'}];
	                	}else if (response.data.errorCode === ConstantService.constant.ERROR_CAPTCHA){
	                		$scope.prompts = [{type : 'captcha',msg:'请输入正确的验证码'}];
	                	}else{
	                		var location = window.location;
	                		AuthenticationService.setCredentials(vm.username, vm.password);
	                		window.location = location.origin + location.pathname + "main.html";
	                	}
	                } else {
	                	
	                }
	            });
			}
		};
	}
})();