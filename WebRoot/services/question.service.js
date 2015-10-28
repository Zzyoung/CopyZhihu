(function(){
	angular.module('zhihu').factory('QuestionService',QuestionService);
	
	QuestionService.$inject = ['UtilsService','$http'];
	
	function QuestionService(UtilsService,$http){
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
			if(response.data.length!=0 && response.data != 'error'){
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
		
		service.queryQuestion = {};
		service.queryQuestion.query = function(queryString){
			$http({
				method : 'GET',
				url : '/Zhihu/getQuestionNames',
				params:{'name':queryString},
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(querySuccess,queryError);
		};
		
		service.queryQuestion.results = [];
		
		service.queryQuestion.firstAsk = true;
		
		service.queryQuestion.queryString = '';
		return service;
	}
})();