(function(){
	angular.module('zhihu').factory('CommentService',CommentService);
	
	CommentService.$inject = ['UtilsService', '$http', 'ConstantService', '$rootScope'];
	
	function CommentService(UtilsService, $http, ConstantService, $rootScope){
		var service = {};
		
		function querySuccess(response){
			return response.data;
		}
		
		function queryError(){
			console.log('error');
		}
		
		service.addNewCommentRequest = function(comment, answerId){
			return $http({
				method : 'POST',
				url : '/Zhihu/addNewComment',
				params : {
					'comment' : comment,
					'answerId' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.getCommentsByAnswerIdRequest = function(answerId){
			console.log('getCommentsByAnswerId',answerId);
			return $http({
				method : 'GET',
				url : '/Zhihu/getComments',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.getAllCommentsByAnswerIdRequest = function(answerId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getAllComments',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.replyCommentRequest = function(content,commentId,answerId){
			return $http({
				method : 'POST',
				url : '/Zhihu/replyComment',
				params : {
					'id' : commentId,
					'content' : content,
					'answerId' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.likeCommentRequest = function(commentId){
			return $http({
				method : 'POST',
				url : '/Zhihu/likeComment',
				params : {
					'id' : commentId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.unlikeCommentRequest = function(commentId){
			return $http({
				method : 'POST',
				url : '/Zhihu/unlikeComment',
				params : {
					'id' : commentId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.getVoterIdsRequest = function(commentId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getVoterIds',
				params : {
					'id' : commentId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.getVoteCountRequest = function(commentId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getVoteCount',
				params : {
					'id' : commentId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		//--------------------------------
		service.addNewComment = function(feed){
			if(!feed.newComment || feed.newComment === ''){
				return;
			}
			service.addNewCommentRequest(feed.newComment,feed.id).then(function(){
				//添加评论之后查出新的评论，显示在页面上
				service.getCommentsByAnswerIdRequest(feed.id).then(function(comments){
					feed.comments = comments;
					feed.commentsCount = comments.length;
					feed.newComment = '';
				});
			});
		};
		
		service.openReplyBox = function(comment){
			comment.isReplying ? comment.isReplying = false : comment.isReplying = true;
		};
		
		service.replyComment = function(comment,feed){
			service.replyCommentRequest(comment.replyContent, comment.id, feed.answerId).then(function(){
				comment.isReplying = false;
				comment.replyContent = "";
				service.getCommentsByAnswerIdRequest(feed.answerId).then(function(comments){
					feed.comments = comments;
					feed.commentsCount = comments.length;
				});
			});
		};
		
		service.likeComment = function(comment){
			service.likeCommentRequest(comment.id).then(function(){
				//获取已经赞过的人的id列表
				service.getVoterIdsRequest(comment.id).then(function(voterIds){
					comment.voterIds = voterIds;
				});
				service.getVoteCountRequest(comment.id).then(function(voteCount){
					comment.voteCount = voteCount;
				});
			});
		};
		
		service.unlikeComment = function(comment){
			service.unlikeCommentRequest(comment.id).then(function(){
				//获取已经赞过的人的id列表
				service.getVoterIdsRequest(comment.id).then(function(voterIds){
					comment.voterIds = voterIds;
				});
				service.getVoteCountRequest(comment.id).then(function(voteCount){
					comment.voteCount = voteCount;
				});
			});
		};
		
		service.haveLiked = function(comment){
			var currentUserId = $rootScope.globals.currentUser.id;
			return comment.voterIds.indexOf(currentUserId) >= 0;
		};
		
		return service;
	}
})();