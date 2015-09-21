(function(){
	angular.module('zhihu').factory('StoryService',StoryService);

	function StoryService(){
		var service = {};
		var database = {};
		service.database = database;
		database.stories = [{
			name:'MrToyy',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'袁浩瀚',
			profile:'/people/袁浩瀚',
			photo:'images/1.jpg'
		},{
			name:'投资',
			profile:'/topic/19551404',
			photo:'images/1.jpg'
		},{
			name:'王义之',
			profile:'/people/王义之',
			photo:'images/1.jpg'
		},{
			name:'创业',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'谷歌 (Google)',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'冯晗',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'FantasticCathy',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'iOS 应用',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'体育',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'张亮',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'Luo Patrick',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		},{
			name:'尹小二',
			profile:'/people/猪小宝',
			photo:'images/1.jpg'
		},{
			name:'猪小宝',
			profile:'/people/猪小宝',
			photo:'images/1.jpg'
		},{
			name:'电影',
			profile:'/people/MrToyy',
			photo:'images/1.jpg'
		}];

		return service;
	}
})();