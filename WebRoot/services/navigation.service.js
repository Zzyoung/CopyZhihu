(function(){
	angular.module('zhihu').factory('NavigationSerivce',NavigationSerivce);
	
	NavigationSerivce.$inject = ['UtilsService'];
	
	function NavigationSerivce(UtilsService){
		var service = {};
		
		/*service.popup = {
			showTopNavLive:false
		};
		
		service.toggle = function(){
			service.popup.showTopNavLive = !service.popup.showTopNavLive;
		};*/
		
		service.tabs = [{
			name:'message',
			cls:'zm-notice-popup-tab-item message',
			current:true
		},{
			name:'user',
			cls:'zm-notice-popup-tab-item user',
			current:false
		},{
			name:'thanks',
			cls:'zm-notice-popup-tab-item thanks',
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
		
		service.userContents = [{
			name:'张阳',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:false
		},{
			name:'Leo',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:true
		},{
			name:'Henry',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:true
		},{
			name:'jed',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:true
		},{
			name:'steven',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:false
		},{
			name:'mark',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:true
		},{
			name:'vincent',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:false
		},{
			name:'sky',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:true
		},{
			name:'uzi',
			link:'http://www.zhihu.com/people/guairen',
			photoUrl:'images/172039268a15b62905e14f6c18f3cc9a_m.jpg',
			followed:true
		}];
		
		service.thanksContents = [{
			users:[{
				name:'张三',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'王武',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'赵柳',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'魑魅魍魉',
				link:'http://www.zhihu.com/people/guairen'
			},],
			voteThanksCount:{
				vote:3,
				thanks:7
			},
			question:'如何靠打游戏赚钱？',
			questionUrl:'/question',
			type:'VOTE_THANK'
		},{
			users:[{
				name:'张三',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/guairen'
			}],
			answer:'唐潮',
			answerLink:'http://www.zhihu.com/people/guairen',
			question:'如何评价全国人大代表陈伟才「你不能占用了国家最优秀的教育资源，最终又离开了培养你的国家」这个观点？',
			questionUrl:'/question',
			type:'ACOMMENT_LIKE'
		},{
			users:[{
				name:'张三',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'王武',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'赵柳',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'魑魅魍魉',
				link:'http://www.zhihu.com/people/guairen'
			},],
			voteThanksCount:{
				vote:3,
				thanks:7
			},
			question:'如何靠打游戏赚钱？',
			questionUrl:'/question',
			type:'VOTE_THANK'
		},{
			users:[{
				name:'张三',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/guairen'
			}],
			answer:'唐潮',
			answerLink:'http://www.zhihu.com/people/guairen',
			question:'如何评价全国人大代表陈伟才「你不能占用了国家最优秀的教育资源，最终又离开了培养你的国家」这个观点？',
			questionUrl:'/question',
			type:'ACOMMENT_LIKE'
		},{
			users:[{
				name:'张三',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'王武',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'赵柳',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'魑魅魍魉',
				link:'http://www.zhihu.com/people/guairen'
			},],
			voteThanksCount:{
				vote:3,
				thanks:7
			},
			question:'如何靠打游戏赚钱？',
			questionUrl:'/question',
			type:'VOTE_THANK'
		},{
			users:[{
				name:'张三',
				link:'http://www.zhihu.com/people/guairen'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/guairen'
			}],
			answer:'唐潮',
			answerLink:'http://www.zhihu.com/people/guairen',
			question:'如何评价全国人大代表陈伟才「你不能占用了国家最优秀的教育资源，最终又离开了培养你的国家」这个观点？',
			questionUrl:'/question',
			type:'ACOMMENT_LIKE'
		}];
		
		return service;
	}
})();