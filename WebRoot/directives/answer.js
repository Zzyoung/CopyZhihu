(function(){
	angular.module('zhihu').directive('answer',function(){
		return {
			restrict:'E',
			replace:true,
			templateUrl:'templates/answer.view.html',
			link:function(scope,element,attribute){
				
			}
		};
	});
})();