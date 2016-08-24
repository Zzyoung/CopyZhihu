(function() {
    angular.module('zhihu').controller('LoginController', LoginController);

    LoginController.$inject = [ '$location', 'AuthenticationService',
             'UserService' , '$scope' , 'ConstantService' ];

    function LoginController($location, AuthenticationService, 
            UserService, $scope, ConstantService) {
        var vm = this, prompts;
        var randomKey = ConstantService.randomKey;
        vm.removePrompt = UserService.removePrompt;
        
        $scope.removePromptByType = UserService.removePromptByType;
        
        $scope.focus = {};
        
        vm.timeStamp = +new Date();
        
        $scope.refresh = UserService.refresh;
        
        vm.login = function() {
            prompts = UserService.validate(vm.user, false);
            $scope.prompts = prompts;
            if (prompts.length === 0) {
                var password = vm.user.password;
                password = CryptoJS.PBKDF2(password, randomKey, { keySize: 512/32 }).toString();
                AuthenticationService.login(vm.user.loginName, password,vm.user.captcha, function (response) {
                    if (response.status>=200 && response.status < 300) {
                        if(response.data.errorCode === ConstantService.constant.UNKNOWN_LOGINNAME){
                            $scope.prompts = [{type : 'loginName',msg:'该帐号尚未注册知乎'}];
                        }else if (response.data.errorCode === ConstantService.constant.ERROR_PASSWORD_LOGINNAME){
                            $scope.prompts = [{type : 'loginName',msg:'登录名或密码输入错误'}];
                        }else{
                            console.log('登陆成功');
                            AuthenticationService.setCredentials(vm.user.loginName, password);
                            window.location.herf = window.location.hostname+'/';
                        }
                    } else {
                        
                    }
                });
            }
        };
    }
})();