(function(){
	angular.module('zhihu').directive('prompt',function(){
		return {
			restrict:'E',
			template:'<li ng-repeat="prompt in prompts" ng-click="vm.removePrompt(prompts,$index,prompt.type,focus)"><i class="icon-sign icon-sign-error"></i>{{prompt.msg}}</li>',
			link:function($scope,iElm,iAttrs,controller){
				
			}
		};
	});
})();