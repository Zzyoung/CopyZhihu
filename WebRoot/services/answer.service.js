(function(){
	angular.module('zhihu').factory('AnswerService',AnswerService);
	
	AnswerService.$inject = ['$http', 'ConstantService', '$rootScope'];
	
	function AnswerService($http, ConstantService, $rootScope){
		var service = {};
		var currentUserId = $rootScope.globals.currentUser.id;
		var currentUserName = $rootScope.globals.currentUser.username;
		
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
			console.log('likeAnswer',answerId);
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
		
		service.opposeAnswer = function(answerId){
			return $http({
				method : 'POST',
				url : '/Zhihu/opposeAnswer',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.unopposeAnswer = function(answerId){
			return $http({
				method : 'POST',
				url : '/Zhihu/unopposeAnswer',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.getVoterIds = function(answerId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getAnswerVoterIds',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.getAnswerVoterCount = function(answerId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getAnswerVoterCount',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.addAnswer = function(questionId,answerContent){
			return $http({
				method : 'POST',
				url : '/Zhihu/addAnswer',
				params : {
					'questionId' : questionId,
					'answer' :answerContent
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.updateAnswer = function(questionId,answerContent){
			return $http({
				method : 'POST',
				url : '/Zhihu/updateAnswer',
				params : {
					'questionId' : questionId,
					'answer' :answerContent
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.isAnsweredQuestion = function(questionId){
			return $http({
				method : 'GET',
				url : '/Zhihu/isAnsweredQuestion',
				params : {
					'questionId' : questionId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.toggleLikeAnswer = function(answer){
			if(answer.relationWithCurrentUser == 1){
				console.log('撤销赞同');
				service.unlikeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.voters = answer.voters.filter(function(voter){
							return voter.id != currentUserId;
						});
						answer.relationWithCurrentUser = 0;
						service.getAnswerVoterCount(answer.id).then(function(count){
							answer.voteCount = count;
						});
					}
				});
			}else{
				console.log('赞同');
				service.likeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.relationWithCurrentUser = 1;
						answer.voters.push({id:currentUserId,name:currentUserName});
						service.getAnswerVoterCount(answer.id).then(function(count){
							answer.voteCount = count;
						});
					}
				});
			}
		};
		
		service.toggleOpposeAnswer = function(answer){
			if(answer.relationWithCurrentUser == 2){
				console.log('撤销反对');
				service.unopposeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.relationWithCurrentUser = 0;
					}
				});
			}else{
				console.log('反对');
				service.opposeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.voters = answer.voters.filter(function(voter){
							return voter.id != currentUserId;
						});
						answer.relationWithCurrentUser = 2;
						service.getAnswerVoterCount(answer.id).then(function(count){
							answer.voteCount = count;
						});
					}
				});
			}
		};
		
		return service;
	}
	
})();