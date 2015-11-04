(function(){
	angular.module('zhihu').controller('MainContentController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'MainContentService' ,'$compile', 'CommentService' ,'$rootScope'];
	
	function MainContentController($scope, MainContentService, $compile, CommentService, $rootScope){
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
				CommentService.getCommentsByAnswerId(feed.answerId).then(function(comments){
					feed.comments = comments;
				});
			}
		};
		
		mainCtrl.getAllComments = function(feed){
			CommentService.getAllCommentsByAnswerId(feed.answerId).then(function(comments){
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
		
		mainCtrl.addNewComment = function(feed){
			if(!feed.newComment || feed.newComment === ''){
				return;
			}
			CommentService.addNewComment(feed.newComment,feed.answerId).then(function(){
				//添加评论之后查出新的评论，显示在页面上
				CommentService.getCommentsByAnswerId(feed.answerId).then(function(comments){
					feed.comments = comments;
					feed.commentsCount = comments.length;
					feed.newComment = '';
				});
			});
		};
		
		mainCtrl.openReplyBox = function(comment){
			comment.isReplying ? comment.isReplying = false : comment.isReplying = true;
		};
		
		mainCtrl.replyComment = function(comment,feed){
			CommentService.replyComment(comment.replyContent, comment.id, feed.answerId).then(function(){
				comment.isReplying = false;
				comment.replyContent = "";
				CommentService.getCommentsByAnswerId(feed.answerId).then(function(comments){
					feed.comments = comments;
					feed.commentsCount = comments.length;
				});
			});
		};
		
		mainCtrl.likeComment = function(comment){
			CommentService.likeComment(comment.id).then(function(){
				//获取已经赞过的人的id列表
				CommentService.getVoterIds(comment.id).then(function(voterIds){
					comment.voterIds = voterIds;
				});
				CommentService.getVoteCount(comment.id).then(function(voteCount){
					comment.voteCount = voteCount;
				});
			});
		};
		
		mainCtrl.unlikeComment = function(comment){
			CommentService.unlikeComment(comment.id).then(function(){
				//获取已经赞过的人的id列表
				CommentService.getVoterIds(comment.id).then(function(voterIds){
					comment.voterIds = voterIds;
				});
				CommentService.getVoteCount(comment.id).then(function(voteCount){
					comment.voteCount = voteCount;
				});
			});
		};
		
		mainCtrl.haveLiked = function(comment){
			var currentUserId = $rootScope.globals.currentUser.id;
			return comment.voterIds.indexOf(currentUserId) >= 0;
		};
		
		
		
	}
	
})();