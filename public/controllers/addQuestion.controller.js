//提问面板里的控制器
(function(){
	angular.module('zhihu').controller('AddQuestionController',AddQuestionController);
	
	AddQuestionController.$inject = ['$scope', 'QuestionService','TopicService'];
	
	function AddQuestionController($scope, QuestionService, TopicService){
		$scope.addQuestionCtrl = {};
		
		var addQuestionCtrl = $scope.addQuestionCtrl;
		
		addQuestionCtrl.queryQuestion = QuestionService.queryQuestion;
		
		addQuestionCtrl.queryTopic = TopicService.queryTopic;
		
		addQuestionCtrl.selectTopic = function(topicName){
			//选中话题，取消提示
			QuestionService.addQuestion.errorTopics = false;
			TopicService.selectTopic(topicName);
		};
		
		addQuestionCtrl.unselectTopic = TopicService.unselectTopic;
		
		addQuestionCtrl.addQuestion = QuestionService.addQuestion;
		
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