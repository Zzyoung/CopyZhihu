(function() {
	angular.module('zhihu').factory('UserService', UserService);

	UserService.$inject = [ '$http', 'UtilsService', 'ConstantService' ];

	function UserService($http, UtilsService, ConstantService) {
		var service = {};

		service.Create = function(user) {
			// .then(handleSuccess, handleError('Errorcreating user'));
			$http({
				method : 'POST',
				url : '/Zhihu/register/',
				data : $.param(user),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			});
		};

		function addToPrompts(prompts, message) {
			prompts.push({
				msg : message
			});
		}

		service.validate = function(user) {
			var messages = ConstantService.messages, trim = UtilsService.trim, prompts = [], nameLen, passwordLen, loginNameLen, captchaLen;

			user = user || {};
			nameLen = user.name ? trim(user.name).length : 0;
			loginNameLen = user.loginName ? trim(user.loginName).length : 0;
			passwordLen = user.password ? trim(user.password).length : 0;
			captchaLen = user.captcha ? trim(user.captcha).length : 0;

			if (nameLen === 0) {
				addToPrompts(prompts, messages.emptyName);
			} else if (nameLen < 2 || nameLen > 10) {
				addToPrompts(prompts, messages.invalidName);
			}

			if (loginNameLen === 0) {
				addToPrompts(prompts, messages.emptyLoginName);
			} else {
				// 如果包含@字符则认为输入的是邮箱格式
				if (UtilsService.containStr(user.loginName, '@')) {
					if (!UtilsService.isEmail(user.loginName)) {
						addToPrompts(prompts, messages.invalidEmail);
					}
				} else {
					if (loginNameLen !== 11) {
						addToPrompts(prompts, messages.invalidPhone);
					}
				}
			}

			if (passwordLen === 0) {
				addToPrompts(prompts, messages.emptyPassword);
			} else if (passwordLen < 6 || passwordLen > 128) {
				addToPrompts(prompts, messages.invalidPassword);
			}

			if (captchaLen === 0) {
				addToPrompts(prompts, messages.emptyCaptcha);
			}

			return prompts;
		};

		return service;

	}
})();