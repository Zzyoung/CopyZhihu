(function(){
	angular.module('zhihu').factory('TopicService',TopicService);
	
	TopicService.$inject = ['UtilsService','$http'];
	
	function TopicService(UtilsService,$http){
		var service = {};
		service.queryTopic = {};
		
		service.queryTopic.queryString ="";
		
		service.queryTopic.results = [];
		
		service.queryTopic.selectedTopics=[{
			name:'招聘'
		},{
			name:'前端入门'
		}];
		
		service.queryTopic.query = function(queryString){
			console.log(queryString);
			this.results = [{
					name:'招聘',
					imageUrl:'images/d57a38b96_s.jpg'
				},{
					name:'招聘技巧',
					imageUrl:'images/cc81c7562e2a7111e7a8e06bf8844ed3_s.jpg'
				},{
					name:'招聘网站',
					imageUrl:'images/e69da5323_s.jpg'
				},{
					name:'招聘行业'
				},{
					name:'招聘要求'
				}];
		};
		
		service.selectTopic = function(name){
			this.queryTopic.selectedTopics.push({'name':name});
		};
		
		service.unselectTopic = function(index){
			this.queryTopic.selectedTopics.splice(index, 1);
		};
		
		return service;
	};
})();