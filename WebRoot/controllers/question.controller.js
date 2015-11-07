//问题界面控制器
(function(){
	angular.module('zhihu').controller('QuestionController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'QuestionService', 'AnswerService', 'CommentService', '$rootScope'];
	
	function MainContentController($scope, QuestionService, AnswerService, CommentService, $rootScope){
		$scope.ctrl = {};
		
		var ctrl = $scope.ctrl;
		
		ctrl.currentQuestionId = $rootScope.globals.currentQuestion.id;
		
		ctrl.currentUserId = $rootScope.globals.currentUser.id;
		
		ctrl.answers = QuestionService.answers;
		
		ctrl.isAnswered = false;
		function isAnsweredQuestion(questionId){
			AnswerService.isAnsweredQuestion(questionId).then(function(flag){
				ctrl.isAnswered = flag;
			});
		}
		isAnsweredQuestion(ctrl.currentQuestionId);
		
		ctrl.showInvitePanel = false;
		
		ctrl.toggleInvitePanel = function(){
			this.showInvitePanel = !this.showInvitePanel;
		};
		
		function getAnswerList(questionId){
			AnswerService.getAnswerList(questionId).then(function(answers){
				ctrl.answers = answers;
			});
		}
		getAnswerList(ctrl.currentQuestionId);
		
		ctrl.toggleComments = function(answer){
			answer.isShowComments = !answer.isShowComments;
			if(!answer.comments || answer.comments.length===0){
				//根据answerId查询评论
				CommentService.getCommentsByAnswerIdRequest(answer.id).then(function(comments){
					answer.comments = comments;
				});
			}
		};
		
		ctrl.closeForm = function(feed,$event){
			feed.isAddingComment = false;
			$event.stopPropagation();
			$event.preventDefault();
		};
		
		ctrl.addNewComment = CommentService.addNewComment;
		
		ctrl.openReplyBox = CommentService.openReplyBox;
		
		ctrl.replyComment = CommentService.replyComment;
		
		ctrl.likeComment = CommentService.likeComment;
		
		ctrl.unlikeComment = CommentService.unlikeComment;
		
		ctrl.haveLiked = CommentService.haveLiked;
		
		ctrl.toggleLikeAnswer = AnswerService.toggleLikeAnswer;
		
		ctrl.toggleOpposeAnswer = AnswerService.toggleOpposeAnswer;
		
		ctrl.saveAnswer = function(questionId,answerContent){
			AnswerService.addAnswer(questionId,answerContent).then(function(){
				getAnswerList(ctrl.currentQuestionId);
				ctrl.isAnswered = true;
			});
		};
		
	}
	
})();