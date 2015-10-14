(function() {
	angular.module('zhihu')
			.controller('RegisterController', RegisterController);

	RegisterController.$inject = [ 'UserService', '$location', '$rootScope',
			'FlashService', '$scope' , '$timeout' ,'ConstantService'];

	function RegisterController(UserService, $location, $rootScope,
			FlashService , $scope , $timeout ,ConstantService ) {
		var vm = this, prompts;
		
		vm.removePrompt = UserService.removePrompt;
		
		$scope.removePromptByType = UserService.removePromptByType;
		
		$scope.focus = {};
		
		vm.register = function() {
			prompts = UserService.validate(vm.user,true);
			$scope.prompts = prompts;
			if (prompts.length === 0) {
				UserService.Create(vm.user).then(function(response){
					console.log(response);
					if(response.status>=200 && response.status < 300){
						if(response.data.errorCode === ConstantService.constant.ERROR_USER_EXIST){
							$scope.prompts = [{type : 'loginName',msg:'该帐号已注册'}];
						}else{
							prompts.push({
								msg : "注册成功！"
							},{
								msg : "3秒后自动跳转到登录界面"
							});
							$timeout(function(){
								$location.path('/login');
							},3000);
						}
					}else{
						prompts.push({
							msg : "注册失败！"
						},{
							msg : "请稍后再试"
						});
					}
				});
			}
		};
	}

})();
