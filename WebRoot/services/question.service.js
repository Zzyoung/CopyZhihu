(function(){
	angular.module('zhihu').factory('QuestionService',QuestionService);
	
	QuestionService.$inject = ['UtilsService', '$http', 'TopicService', '$rootScope' ,'ConstantService'];
	
	function QuestionService(UtilsService, $http, TopicService, $rootScope, ConstantService){
		var service = {};
		
		service.answers = [{
			people:'大漠',
			peopleDesc:'前端码农',
			photo:'https://pic1.zhimg.com/eb7f2fe18_s.jpg',
			answerTime:'昨天 22:52',
			content:'要和设计图一模一样，使用模拟表单吧。原生控件很难处理样式的，每个浏览器的渲染效果都不一样，仅CSS无法破解',
			voters:[{
				name:'勒布吒卡'
			},{
				name:'董琪'
			},{
				name:'陈启明'
			}]
		}];
		
		
		function querySuccess(response){
			var results = response.data;
			if(results.length!=0 && results != 'error'){
				results.unshift({name:'你想问的是不是：'});
				results.push({name:'不是，我要提一个新问题 »'});
				service.queryQuestion.results = results;
			}else{
				service.queryQuestion.results = [];
			}
		}
		
		function queryError(){
			console.log('query error');
		}
		
		service.queryQuestion = {
			query : function(questionName) {
				service.addQuestion.errorName = false;
				$http({
					method : 'GET',
					url : '/Zhihu/getQuestionNames',
					params : {
						'name' : questionName
					},
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					}
				}).then(querySuccess, queryError);
			},
			results : [],
			firstAsk : true,
			questionName : '',
			changePanel:function(){
				this.firstAsk = false;
				this.results = [];
				this.questionName = '';
			}
		};
		
		function addSuccess(response){
			//跳转到问题页面
			service.showQuestion(response.data.id);
		}
		
		function addError(){
			//do something when add failed
		}
		
		service.addQuestion = {
				questionDesc : '',
				errorName:false,
				errorTopics:false,
				insert : function(){
					if(service.queryQuestion.questionName.length<5){
						this.errorName = true;
						return;
					}
					if(TopicService.queryTopic.selectedTopics.length===0){
						this.errorTopics = true;
						return;
					}
					$http({
						method : 'POST',
						url : '/Zhihu/addQuestion',
						params : {
							'id' : $rootScope.globals.currentUser.id,
							'name' : service.queryQuestion.questionName,
							'questionDesc' : this.questionDesc,
							'selected' : TopicService.queryTopic.selectedTopicNames
						},
						headers : {
							'Content-Type' : 'application/x-www-form-urlencoded'
						}
					}).then(addSuccess,addError);
				}
		};
		
		service.showQuestion = function(id){
			var location = window.location;
			window.location = location.origin + ConstantService.ContextPath + "question?id="+id;
		};
		
		return service;
	}
})();