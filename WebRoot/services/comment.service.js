(function(){
	angular.module('zhihu').factory('CommentService',CommentService);
	
	CommentService.$inject = ['UtilsService', '$http', 'ConstantService'];
	
	function CommentService(UtilsService, $http, ConstantService){
		var service = {};
		
		function querySuccess(response){
			return response.data;
		}
		
		function queryError(){
			console.log('error');
		}
		
		service.addNewComment = function(comment, answerId){
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
		
		service.getCommentsByAnswerId = function(answerId){
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
		
		
		return service;
	}
})();