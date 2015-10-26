(function(){
	angular.module('zhihu').factory('QuestionService',QuestionService);
	
	QuestionService.$inject = ['UtilsService'];
	
	function QuestionService(UtilsService){
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
		service.queryQuestion = {};
		service.queryQuestion.query = function(queryString){
			console.log(queryString);
			service.queryQuestion.results = [{
				name:'你想问的是不是：'
			},{
				name:'怎么进入BAT的安全部门？',
				answerCount:1
			},{
				name:'文科生，校招想进BAT需要什么样的水平？',
				answerCount:0
			},{
				name:'不是，我要提一个新问题 »'
			}];
		};
		
		service.queryQuestion.results = [];
		
		service.queryQuestion.firstAsk = true;
		
		service.queryQuestion.queryString = '';
		return service;
	}
})();