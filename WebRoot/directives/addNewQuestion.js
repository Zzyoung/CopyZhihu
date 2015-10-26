//切换到提问新问题的面板
(function(){
	angular.module('zhihu').directive('addNewQuestion',['UtilsService','QuestionService',function(UtilsService,QuestionService){
		return {
			restrict:'A',
			link:function(scope,element,attribute){
				element.bind('click',function(){
					QuestionService.queryQuestion.firstAsk = false;
					QuestionService.queryQuestion.results = [];
					QuestionService.queryQuestion.queryString = '';
					$('.add-question-splash-page')[0].style.display = "none";
					$('.js-add-question-form')[0].style.display = "block";
				});
			}
		};
	}]);
})();