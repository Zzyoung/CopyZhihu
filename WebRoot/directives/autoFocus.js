(function(){
	angular.module('zhihu').directive('autoFocus',['$timeout',function($timeout){
		return {
			restrict:'A',
			scope:{
				autoFocus:'=',
				remove:'&',
				prompts:'='
			},
			controller:function($scope){
				
			},
			link:function($scope,element,attribute){
				$scope.$watch('autoFocus',function(newVal){
					if(newVal === attribute.name){
						$timeout(function(){
							element[0].focus();
						});
					}
				});
			}
		};
	}]);
})();