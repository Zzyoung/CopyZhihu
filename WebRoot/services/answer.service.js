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
			//do something here
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
		
		service.getLatest3Voter = function(answerId){
			return $http({
				method : 'GET',
				url : '/Zhihu/getLatest3Voter',
				params : {
					'id' : answerId
				},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess, queryError);
		};
		
		service.toggleLikeAnswer = function(answer){
			if(answer.relationWithCurrentUser == 1){
				service.unlikeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.voters = answer.voters.filter(function(voter){
							return voter.id != currentUserId;
						});
						answer.relationWithCurrentUser = 0;
						service.getAnswerVoterCount(answer.id).then(function(count){
							answer.voteCount = count;
						});
						service.getLatest3Voter(answer.id).then(function(voters){
							answer.voters = voters;
						});
					}
				});
			}else{
				service.likeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.relationWithCurrentUser = 1;
						answer.voters.unshift({id:currentUserId,name:currentUserName});
						if(answer.voters.length>3){
							answer.voters.length = 3;
						}
						service.getAnswerVoterCount(answer.id).then(function(count){
							answer.voteCount = count;
						});
					}
				});
			}
		};
		
		service.toggleOpposeAnswer = function(answer){
			if(answer.relationWithCurrentUser == 2){
				service.unopposeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						answer.relationWithCurrentUser = 0;
					}
				});
			}else{
				service.opposeAnswer(answer.id).then(function(isSuccess){
					if(isSuccess) {
						service.getLatest3Voter(answer.id).then(function(voters){
							answer.voters = voters;
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