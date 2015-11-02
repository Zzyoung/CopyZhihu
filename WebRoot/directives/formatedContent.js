(function(){
	angular.module('zhihu').directive('formatedContent',['$timeout',function($timeout){
		return {
			restrict:'A',
			link:function($scope,element,attribute){
				$timeout(function(){
					var text =  element[0].firstChild.innerHTML;
					text = text.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
					element[0].firstChild.innerHTML = text;
				},200);
			}
		};
	}]);
})();