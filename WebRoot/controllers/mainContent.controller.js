(function(){
	angular.module('zhihu').controller('MainContentController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'MainContentService' ,'$compile', 'CommentService'];
	
	function MainContentController($scope, MainContentService, $compile, CommentService){
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
		
	}
	
})();