(function() {
    angular.module('zhihu').factory('UserService', UserService);

    UserService.$inject = [ '$http', 'UtilsService', 'ConstantService' ];

    function UserService($http, UtilsService, ConstantService) {
        var service = {};

        service.Create = function(user,password) {
            return $http({
                method : 'POST',
                url : '/user/register',
                data : 'name=' + user.name + '&loginName=' + user.loginName + '&password=' + password,
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                }
            }).then(handleSuccess,handleError("注册失败，请重试!"));
        };
        
        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
        
        function addToPrompts(prompts, message, type) {
            prompts.push({
                type : type,
                msg : message
            });
        }
        
        function validateLoginName(loginName,loginNameLen,prompts,messages){
            if (loginNameLen === 0) {
                addToPrompts(prompts, messages.emptyLoginName ,'loginName');
            } else {
                // 如果包含@字符则认为输入的是邮箱格式
                if (UtilsService.containStr(loginName, '@')) {
                    if (!UtilsService.isEmail(loginName)) {
                        addToPrompts(prompts, messages.invalidEmail,'loginName');
                    }
                } else {
                    if (loginNameLen !== 11) {
                        addToPrompts(prompts, messages.invalidPhone,'loginName');
                    }
                }
            }
        }
        
        function validatePassword(passwordLen,prompts,messages){
            if (passwordLen === 0) {
                addToPrompts(prompts, messages.emptyPassword,'password');
            } else if (passwordLen < 6 || passwordLen > 128) {
                addToPrompts(prompts, messages.invalidPassword,'password');
            }
        }
        
        function validateCaptcha(captchaLen,prompts,messages){
            if (captchaLen === 0) {
                addToPrompts(prompts, messages.emptyCaptcha,'captcha');
            }
        }
        
        service.validate = function(user,isRegister) {
            var messages = ConstantService.messages, 
                trim = UtilsService.trim,
                prompts = [], 
                nameLen, passwordLen, loginNameLen, captchaLen;
            
            user = user || {};
            
            if (isRegister){
                nameLen = user.name ? trim(user.name).length : 0;
                if (nameLen === 0) {
                    addToPrompts(prompts, messages.emptyName,'name');
                } else if (nameLen < 2 || nameLen > 10) {
                    addToPrompts(prompts, messages.invalidName,'name');
                }
            }
            
            
            loginNameLen = user.loginName ? trim(user.loginName).length : 0;
            passwordLen = user.password ? trim(user.password).length : 0;
            captchaLen = user.captcha ? trim(user.captcha).length : 0;

            validateLoginName(user.loginName,loginNameLen,prompts,messages);
            
            validatePassword(passwordLen,prompts,messages);
            
            // validateCaptcha(captchaLen,prompts, messages);

            return prompts;
        };
        
        service.removePrompt  = function(prompts,index,type,focus){
            focus.type = type;
            //将被点击的li去掉
            prompts.splice(index,1);
        };
        
        service.removePromptByType = function(prompts,type){
            //将光标移入和被点击的错误提示有关的输入框中,去掉提示
            if(prompts && prompts.length > 0){
                for(var i = 0;i<prompts.length;i++){
                    if(prompts[i].type === type){
                        prompts.splice(i,1);
                        return;
                    }
                }
            }
        };
        
        service.refresh = function(vm,event){
            vm.timeStamp = +new Date();
            event.preventDefault();
        };
        
        return service;

    }
})();