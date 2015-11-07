(function(){
	angular.module('zhihu').controller('MainContentController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'MainContentService' ,'$compile', 'CommentService' ,'$rootScope' ,'AnswerService'];
	
	function MainContentController($scope, MainContentService, $compile, CommentService, $rootScope, AnswerService){
		$scope.mainCtrl = {};
		
		var mainCtrl = $scope.mainCtrl;
		
		mainCtrl.compile = $compile;
		mainCtrl.feeds = [];
		mainCtrl.isLoading = false;
		function loadMainContents(){
			MainContentService.loadMainContents().then(function(feeds){
				mainCtrl.feeds = feeds;
			});
		}
		loadMainContents();
		
		mainCtrl.loadMoreContents = function(){
			mainCtrl.isLoading = true;
			MainContentService.loadMainContents().then(function(feeds){
				mainCtrl.feeds = mainCtrl.feeds.concat(feeds);
				mainCtrl.isLoading = false;
			});
		};
		
		mainCtrl.isShowComments = false;
		
		mainCtrl.toggleComments = function(feed){
			feed.isShowComments = !feed.isShowComments;
			if(!feed.comments || feed.comments.length===0){
				//根据answerId查询评论
				CommentService.getCommentsByAnswerIdRequest(feed.answer.id).then(function(comments){
					feed.comments = comments;
				});
			}
		};
		
		mainCtrl.getAllComments = function(feed){
			CommentService.getCommentsByAnswerIdRequest(feed.answer.id).then(function(comments){
				feed.comments = comments;
				feed.loadAllComments = true;
			});
		};
		
		mainCtrl.expandAnswer = function(feed){
			feed.answerExpanded = true;
		};
		
		mainCtrl.hideAnswer = function(feed){
			feed.answerExpanded = false;
			feed.hideQuestionDesc = true;
		};
		
		mainCtrl.expandQuestionDesc = function(feed,$event){
			feed.hideQuestionDesc = false;
			$event.preventDefault();
		};
		
		mainCtrl.closeForm = function(feed,$event){
			feed.isAddingComment = false;
			$event.stopPropagation();
			$event.preventDefault();
		};
		
		mainCtrl.addNewComment = CommentService.addNewComment;
		
		mainCtrl.openReplyBox = CommentService.openReplyBox;
		
		mainCtrl.replyComment = CommentService.replyComment;
		
		mainCtrl.likeComment = CommentService.likeComment;
		
		mainCtrl.unlikeComment = CommentService.unlikeComment;
		
		mainCtrl.haveLiked = CommentService.haveLiked;
		
		mainCtrl.toggleLikeAnswer = AnswerService.toggleLikeAnswer;
		
		mainCtrl.toggleOpposeAnswer = AnswerService.toggleOpposeAnswer;
		
	}
	
})();