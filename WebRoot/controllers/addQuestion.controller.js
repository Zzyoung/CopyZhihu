//提问面板里的控制器
(function(){
	angular.module('zhihu').controller('AddQuestionController',AddQuestionController);
	
	AddQuestionController.$inject = ['$scope', 'QuestionService','TopicService'];
	
	function AddQuestionController($scope, QuestionService, TopicService){
		$scope.addQuestionCtrl = {};
		
		var addQuestionCtrl = $scope.addQuestionCtrl;
		
		addQuestionCtrl.queryQuestion = QuestionService.queryQuestion;
		
		addQuestionCtrl.queryTopic = TopicService.queryTopic;
		
		addQuestionCtrl.selectTopic = TopicService.selectTopic;
		
		addQuestionCtrl.unselectTopic = TopicService.unselectTopic;
		
		addQuestionCtrl.getQueryQuestionCls = function($first){
			if($first){
				if(this.queryQuestion.firstAsk){
					return 'ac-row';
				}else{
					return 'ac-head zg-gray';
				}
			}else{
				return 'ac-row goog-zippy-header goog-zippy-collapsed';
			}
		};
	}
	
})();