(function() {
	angular.module('zhihu').factory('UserService', UserService);

	UserService.$inject = [ '$http', 'UtilsService', 'ConstantService' ];

	function UserService($http, UtilsService, ConstantService) {
		var service = {};

		service.Create = function(user) {
			// .then(handleSuccess, handleError('Errorcreating user'));
			return $http({
				method : 'POST',
				url : '/Zhihu/register/',
				data : $.param(user),
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
		
		function addToPrompts(prompts, message) {
			prompts.push({
				msg : message
			});
		}
		
		function validateLoginName(loginName,loginNameLen,prompts,messages){
			if (loginNameLen === 0) {
				addToPrompts(prompts, messages.emptyLoginName);
			} else {
				// 如果包含@字符则认为输入的是邮箱格式
				if (UtilsService.containStr(loginName, '@')) {
					if (!UtilsService.isEmail(loginName)) {
						addToPrompts(prompts, messages.invalidEmail);
					}
				} else {
					if (loginNameLen !== 11) {
						addToPrompts(prompts, messages.invalidPhone);
					}
				}
			}
		}
		
		function validatePassword(passwordLen,prompts,messages){
			if (passwordLen === 0) {
				addToPrompts(prompts, messages.emptyPassword);
			} else if (passwordLen < 6 || passwordLen > 128) {
				addToPrompts(prompts, messages.invalidPassword);
			}
		}
		
		function validateCaptcha(captchaLen,prompts,messages){
			if (captchaLen === 0) {
				addToPrompts(prompts, messages.emptyCaptcha);
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
					addToPrompts(prompts, messages.emptyName);
				} else if (nameLen < 2 || nameLen > 10) {
					addToPrompts(prompts, messages.invalidName);
				}
			}
			
			
			loginNameLen = user.loginName ? trim(user.loginName).length : 0;
			passwordLen = user.password ? trim(user.password).length : 0;
			captchaLen = user.captcha ? trim(user.captcha).length : 0;

			validateLoginName(user.loginName,loginNameLen,prompts,messages);
			
			validatePassword(passwordLen,prompts,messages);
			
			validateCaptcha(captchaLen,prompts, messages);

			return prompts;
		};

		return service;

	}
})();