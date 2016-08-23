(function(){
	angular.module('zhihu').factory('TopicService',TopicService);
	
	TopicService.$inject = ['UtilsService','$http'];
	
	function TopicService(UtilsService, $http){
		var service = {};
		service.queryTopic = {
				topicName:'',//查询字符串
				results:[],//查询话题的结果集
				selectedTopics:[],//已选择的话题
				get selectedTopicNames(){//已选择的话题的名字
					var temp = [];
					for ( var i = 0, len = this.selectedTopics.length; i < len; i++) {
						temp.push(this.selectedTopics[i].name);
					}
					return temp.join();
				}
		};
		
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
			$http({
				method : 'GET',
				url : '/Zhihu/getTopicNameAndPhoto',
				params:{'name':topicName,'selected':this.selectedTopicNames},
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