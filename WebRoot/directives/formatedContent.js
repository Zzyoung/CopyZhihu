(function(){
	angular.module('zhihu').directive('formatedContent',['$timeout',function($timeout){
		return {
			restrict:'A',
			link:function($scope,element,attribute){
				$timeout(function(){
					element[0].innerHTML = element[0].firstChild.wholeText;
				},200);
			}
		};
	}]);
})();