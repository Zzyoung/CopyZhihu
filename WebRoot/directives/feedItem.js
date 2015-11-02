(function(){
	angular.module('zhihu').directive('feedItem',function(){
		return {
			restrict:'E',
			replace:true,
			templateUrl:'templates/feedItem.view.html',
			link:function(scope,element,attribute){
				
			}
		};
	});
})();