(function(){
	angular.module('zhihu').factory('StoryService',StoryService);

	function StoryService(){
		var service = {};
		var database = {};
		service.database = database;
		database.stories = [{
			name:'生物学',
			profile:'/topic/19575492',
			photo:'images/1.jpg'
		},{
			name:'医学',
			profile:'/topic/19604128',
			photo:'images/2.jpg'
		},{
			name:'Raymond Wang',
			profile:'/people/raymond-wang',
			photo:'images/3.jpg'
		},{
			name:'Hi-iD',
			profile:'/people/hi-id',
			photo:'images/4.jpg'
		},{
			name:'潘欣',
			profile:'/people/panxin',
			photo:'images/5.jpg'
		},{
			name:'美股',
			profile:'/topic/19747151',
			photo:'images/6.jpg'
		},{
			name:'冯晗',
			profile:'/people/feng-han',
			photo:'images/7.jpg'
		},{
			name:'冯东',
			profile:'/people/MrToyy',
			photo:'images/8.jpg'
		},{
			name:'李松蔚',
			profile:'/people/MrToyy',
			photo:'images/9.jpg'
		},{
			name:'Eric Liu',
			profile:'/people/MrToyy',
			photo:'images/10.jpg'
		},{
			name:'体育',
			profile:'/people/MrToyy',
			photo:'images/11.jpg'
		},{
			name:'周晓农',
			profile:'/people/MrToyy',
			photo:'images/12.jpg'
		},{
			name:'NBA',
			profile:'/people/猪小宝',
			photo:'images/13.jpg'
		},{
			name:'郑金条',
			profile:'/people/猪小宝',
			photo:'images/14.jpg'
		},{
			name:'Android',
			profile:'/people/MrToyy',
			photo:'images/15.jpg'
		}];

		return service;
	}
})();