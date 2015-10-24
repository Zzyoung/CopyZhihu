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
		
		return service;
	}
})();