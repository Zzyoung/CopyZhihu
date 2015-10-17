(function(){
	angular.module('zhihu').factory('NavigationSerivce',NavigationSerivce);
	
	NavigationSerivce.$inject = ['UtilsService'];
	
	function NavigationSerivce(UtilsService){
		var service = {};
		
		service.popup = {
			showTopNavLive:false
		};
		
		service.toggle = function(){
			service.popup.showTopNavLive = !service.popup.showTopNavLive;
		};
		
		service.tabs = [{
			name:'message',
			cls:'zm-noti7-popup-tab-item message',
			current:true
		},{
			name:'user',
			cls:'zm-noti7-popup-tab-item user',
			current:false
		},{
			name:'thanks',
			cls:'zm-noti7-popup-tab-item thanks',
			current:false
		}];
		
		service.msgContents = [{
			answers:[{
				name:'张云龙',
				link:'http://www.zhihu.com/people/fouber'
			},{
				name:'子柳',
				link:'http://www.zhihu.com/people/fouber'
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'前端实习做了个坦克大战的项目够吗？',
			tyep:'ANSWER',
			unread:false
		},{
			answers:[{
				name:'丹尼尔',
				link:'http://www.zhihu.com/people/fouber'
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'富人的思考方式是什么？',
			tyep:'ANSWER',
			unread:true
		},{
			answers:[{
				name:'张云龙',
				link:'http://www.zhihu.com/people/fouber'
			},{
				name:'子柳',
				link:'http://www.zhihu.com/people/fouber'
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'怎么成为一个优秀的程序员，而不是一个优秀的码农？',
			tyep:'ANSWER',
			unread:true
		},{
			answers:[{
				name:'张云龙',
				link:'http://www.zhihu.com/people/fouber'
			},{
				name:'子柳',
				link:'http://www.zhihu.com/people/fouber'
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'一个人的周末可以做些什么？',
			tyep:'ANSWER',
			unread:false
		},{
			answers:[{
				name:'李运华',
				link:'http://www.zhihu.com/people/fouber'
			},{
				name:'子柳',
				link:'http://www.zhihu.com/people/fouber'
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'前端实习做了个坦克大战的项目够吗？',
			tyep:'ANSWER',
			unread:true
		},{
			answers:[{
				name:'张云龙',
				link:'http://www.zhihu.com/people/fouber'
			},{
				name:'子柳',
				link:'http://www.zhihu.com/people/fouber'
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'前端实习做了个坦克大战的项目够吗？',
			tyep:'ANSWER',
			unread:true
		},{
			answers:[{
				unnamed:true
			}],
			questionUrl:'/question/31224639/answer/63117495?group_id=123',
			questionName:'前端实习做了个坦克大战的项目够吗？',
			tyep:'ANSWER',
			unread:true
		}];
		
		return service;
	}
})();