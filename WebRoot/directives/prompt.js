(function(){
	angular.module('zhihu').directive('prompt',function(){
		return {
			restrict:'E',
			template:'<li ng-repeat="prompt in prompts"><i class="icon-sign icon-sign-error"></i>{{prompt.msg}}</li>',
			link:function($scope,iElm,iAttrs,controller){
				
			}
		};
	});
})();