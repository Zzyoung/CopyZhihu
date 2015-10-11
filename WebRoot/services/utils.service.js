(function(){
	angular.module('zhihu').factory('UtilsService',UtilsService);
	
	function UtilsService(){
		var service = {};
		
		service.trim = function(str){
			return str.replace(/(^\s*)|(\s*$)/g,"");
		};
		
		service.isEmail = function(email){
			return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email);
		};
		
		service.containStr = function(str,dest){
			return str.indexOf(dest) !== -1;
		};
		
		return service;
	}
})();