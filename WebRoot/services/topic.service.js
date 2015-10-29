(function(){
	angular.module('zhihu').factory('TopicService',TopicService);
	
	TopicService.$inject = ['UtilsService','$http'];
	
	function TopicService(UtilsService, $http){
		var service = {};
		service.queryTopic = {};
		
		service.queryTopic.topicName ='';
		
		service.queryTopic.results = [];
		
		service.queryTopic.selectedTopics=[];
		
		service.queryTopic.selectedTopicNames=[];
		
		function querySuccess(response){
			var results = response.data;
			if(results.length!=0 && results != 'error'){
				service.queryTopic.results = results;
			}else{
				service.queryTopic.results = [];
			}
		}
		
		function queryError(){
			console.log('query error');
		}
		
		service.queryTopic.query = function(topicName){
			for ( var i = 0, len = this.selectedTopics.length; i < len; i++) {
				this.selectedTopicNames.push(this.selectedTopics[i].name);
			}
			$http({
				method : 'GET',
				url : '/Zhihu/getTopicNameAndPhoto',
				params:{'name':topicName,'selected':this.selectedTopicNames.join(',')},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess,queryError);
		};
		
		service.selectTopic = function(name){
			this.queryTopic.selectedTopics.push({'name':name});
			this.queryTopic.results = [];
			this.queryTopic.topicName = '';
		};
		
		service.unselectTopic = function(index){
			this.queryTopic.selectedTopics.splice(index, 1);
		};
		
		return service;
	};
})();