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
		
		service.isArrayContainItem = function(array,item){
			return array.indexOf(item)>=0;
		};
		
		service.removeItemFromArray = function(array,item){
			return array.filter(function(x){
				return x !== item;
			});
		};
		
		service.addClass = function(element,cls){
			if(element.classList){
				element.classList.add(cls);
			}else{
				var classList = element.className.split(/\s+/);
				classList.push(cls);
				element.className = classList.join(' ');
			}
		};
		
		service.containClass = function(element,cls){
			if(element.classList){
				return element.classList.contains(cls);
			}else{
				var classList = element.className.split(/\s+/);	
				return this.isArrayContainItem(classList, cls);
			}
		};
		
		service.removeClass = function(element,cls){
			if(element.classList){
				element.classList.remove(cls);
			}else{
				var classList = element.className.split(/\s+/);
				classList = this.removeItemFromArray(classList,cls);
				element.className = classList.join(" ");
			}
		};
		
		return service;
	}
})();