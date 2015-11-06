(function(){
	angular.module('zhihu').factory('AnswerService',AnswerService);
	
	AnswerService.$inject = ['$http', 'ConstantService'];
	
	function AnswerService($http, ConstantService){
		var service = {};
		
		function querySuccess(response){
			return response.data;
		}
		
		function queryError(){
			console.log('error');
		}
		
		service.getAnswerList = function(questionId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getAnswerList',
				params : {
					'id' : questionId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.likeAnswer = function(answerId){
			return $http({
				method : 'POST',
				url : '/Zhihu/likeAnswer',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.unlikeAnswer = function(answerId){
			return $http({
				method : 'POST',
				url : '/Zhihu/unlikeAnswer',
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