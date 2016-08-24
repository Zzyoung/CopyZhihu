(function() {
    angular.module('zhihu')
            .controller('RegisterController', RegisterController);

    RegisterController.$inject = [ 'UserService', '$location', '$rootScope',
             '$scope' , '$timeout' ,'ConstantService'];

    function RegisterController(UserService, $location, $rootScope,
             $scope , $timeout ,ConstantService ) {
        var vm = this, prompts;
        
        var randomKey = ConstantService.randomKey;
        
        vm.removePrompt = UserService.removePrompt;
        
        vm.timeStamp = +new Date();
        
        $scope.removePromptByType = UserService.removePromptByType;
        
        $scope.focus = {};
        
        $scope.refresh = UserService.refresh;
        
        vm.register = function() {
            prompts = UserService.validate(vm.user,true);
            $scope.prompts = prompts;
            if (prompts.length === 0) {
                var password = CryptoJS.PBKDF2(vm.user.password, randomKey, { keySize: 512/32 }).toString();
                UserService.Create(vm.user,password).then(function(response){
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
