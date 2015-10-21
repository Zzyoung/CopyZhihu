(function(){
	angular.module('zhihu').directive('addNewQuestion',['UtilsService',function(UtilsService){
		return {
			restrict:'A',
			link:function(scope,element,attribute){
				element.bind('click',function(){
					$('.add-question-splash-page')[0].style.display = "none";
					$('.js-add-question-form')[0].style.display = "block";
				});
			}
		};
	}]);
})();