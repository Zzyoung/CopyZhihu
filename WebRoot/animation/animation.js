(function(){
  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
 
  this.Class = function(){};
 
  Class.extend = function(prop) {
    var _super = this.prototype;
   
    initializing = true;
    var prototype = new this();
    initializing = false;
   
    for (var name in prop) {
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;
           
            this._super = _super[name];
           
            var ret = fn.apply(this, arguments);        
            this._super = tmp;
           
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }
   
    function Class() {
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }
   
    Class.prototype = prototype;
   
    Class.prototype.constructor = Class;
 
    Class.extend = arguments.callee;
   
    return Class;
  };
})();
var Base = Class.extend({
	init : function(config){
		this._config = config;
		this.bind();
		this.render();
	},
	get : function(key){
		return this._config[key];
	},
	set : function(key,value){
		this._config[key] = value;
	},
	bind : function(){
		//绑定事件
	},
	render : function(){
		//渲染
	},
	destory : function(){
		//销毁
	},
	//观察者模式
	on : function(type, fn, context){
		type = type || 'any';
		fn = typeof fn === 'function' ? fn : context[fn];
		
		if(typeof this.subscribers[type] === 'undefined'){
			this.subscribers[type] = [];
		} 
		this.subscribers[type].push({fn : fn, context : context || this});
	},
	off : function(type, fn, context){
		this.visitSubscribers('unsubscribe', type, fn, context);
	},
	fire : function(type, publication) {
		this.visitSubscribers('publish', type, publication);
	},
	visitSubscribers: function(action, type, arg, context){
		var pubtype = type || 'any',
			subscribers = this.subscribers[pubtype],
			i,
			count = subscribers ? subscribers.length : 0;
		for(i = 0; i < count; i += 1){
			if(action === 'publish'){
				subscribers[i].fn.call(subscribers[i].context, arg);
			} else {
				if(subscribers[i].fn === arg && subscribers[i].context === context){
					subscribers.splice(i, 1);
				}
			}
		}
	}
});
var Doc = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		var me = this;
		window.onscroll = function(){
			me.fire('scroll');
		};
		document.onclick = function(){
			me.fire('click');
		};
	},
	scrollToTop:function(){
		var body = null;
		body = document.body.scrollTop ? body = document.body : document.documentElement;
		setTimeout(function(){
			if (body.scrollTop < 200) {
				body.scrollTop = 0;
			}else{
				body.scrollTop -= 200;
			}
			if (body.scrollTop>0) {
				setTimeout(arguments.callee,30);
			};
		},30);
	},
	bindMouseEvent:function(){
		var me = this;
		document.onmousemove = function(event){
			event = Utils.getEvent(event);
			me.set('eventClientY',event.clientY);
			me.calculateModifiedY();
			me.fire(me.get('current')+'-move');
			Utils.preventDefault(event);
		};
		
		document.onmouseup = function(){
			document.onmousemove = null;
			me.fire(me.get('current')+'-up');
		};
	},
	calculateModifiedY:function(){
		var modifiedY = this.get('eventClientY') - this.get('scrollerBar').get('oriClientY');
		this.get('scrollerBar').set('modifiedY', modifiedY);
	}
});
var BackToTop = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		var me = this;
		this.get('button').onclick = function(){
			me.fire('click');
		};
	},
	toggle:function(){
		if(Utils.getBodyScrollTop()>1200){
			if(!this.get('isShow')){
				this.show();
			}
		}else{
			if(this.get('isShow')){
				this.hide();
			}
		}
	},
	hide:function(){
		this.get('button').style.display = "none";
		this.set('isShow',false);
	},
	show:function(){
		this.get('button').style.display = "block";
		this.set('isShow',true);
	}
});
var MsgBox = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		var me = this;
		this.get('button').onclick = function(event){
			me.fire('click');
			Utils.stopPropagation(Utils.getEvent(event));
		};
	}
});
var Panel = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		me = this;
		this.get('panel').onclick = function(event){
			me.fire('click');
			Utils.stopPropagation(Utils.getEvent(event));
		};
	},
	toggle:function(){
		if(!this.get('isShow')){
			this.show();
		}else{
			this.hide();
		}
	},
	hide:function(){
		this.get('panel').style.display = "none";
		this.set('isShow',false);
	},
	show:function(){
		this.get('panel').style.display = "block";
		this.set('isShow',true);
	}
});
var InnerPanel = Panel.extend({
	subscribers:{
		any:[]
	},
	render:function(){
		if(this.get('isShow')){
			this.show();
		}
	},
	bind:function(){
		var me = this;
		(function(me){
			me.get('scrollPanel').onmouseenter = function(){
				me.fire(me.get('type')+'-panel-mouseenter');
			};
			
			me.get('scrollPanel').onmouseout = function(event){
				var scrollPanel = me.get('scrollPanel');
				event = Utils.getEvent(event);
				if(scrollPanel.compareDocumentPosition(event.relatedTarget) !== 20){//scrollPanel 不包含relatedTarget
					me.fire(me.get('type')+'-panel-mouseout');
				}
				Utils.stopPropagation(event);
			};
			
		})(me);
	},
	show:function(){
		this.get('panel').style.display = "block";
		this.set('isShow',true);
		//初始化的时候还没有设置滚动条，不调用它的隐藏方法
		if(this.get('scrollerBar')){
			this.get('scrollerBar').shadowHide();
		}
	},
	scroll:function(modifiedY){
		if(!modifiedY){
			modifiedY = this.get('scrollerBar').get('modifiedY');
		}
		var scrollHeight = this.get('scrollPanel').scrollHeight;
		var offsetHeight = this.get('scrollPanel').offsetHeight;
		var oriPanelTop = this.get('oriPanelTop');
		this.get('scrollPanel').scrollTop = oriPanelTop + parseInt((scrollHeight - offsetHeight)/(this.get('scrollerBar').get('wrapper').offsetHeight - this.get('scrollerBar').get('bar').offsetHeight) *modifiedY,10);
	},
	calculateModifiedY:function(direction){
		var scrollHeight = this.get('scrollPanel').scrollHeight;
		var offsetHeight = this.get('scrollPanel').offsetHeight;
		var modifiedY = direction * (offsetHeight * 120/scrollHeight);
		this.get('scrollerBar').set('modifiedY',modifiedY);
	},
	saveOriPanelTop:function(){
		this.set('oriPanelTop',this.get('scrollPanel').scrollTop);
	}
});
var TabButton = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		me = this;
		(function(me){
			me.get('button').onclick = function(event){
				me.fire(me.get('type')+'-click');
				Utils.stopPropagation(Utils.getEvent(event));
			};
		})(me);
	},
	render : function(){
		if(this.get('isCurrent')){
			this.setCurrent();
		}
	},
	setCurrent:function(){
		Utils.addClass(this.get('button'),'current');
	},
	removeCurrent:function(){
		Utils.removeClass(this.get('button'),'current');
	}
});

var ScrollerBar = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		me = this;
		(function(me){
			me.get('wrapper').onclick = function(event){
				event = Utils.getEvent(event);
				var	barHeight = me.get('bar').offsetHeight,
					oriOffsetTop = me.get('bar').offsetTop,
					modifiedY = event.clientY - Utils.calculateTop(me.get('wrapper')) - oriOffsetTop - barHeight / 2;
				me.set('modifiedY',modifiedY);
//				me.set('oriOffsetTop',oriOffsetTop);
				me.saveBarOriOffsetTop();
				me.move();
				me.fire(me.get('type')+'-wrapper-click');
				Utils.stopPropagation(event);
			};
			
			me.get('bar').onmouseover = function(){
				me.clearShadowHide();
				me.show();
				Utils.stopPropagation(Utils.getEvent(event));
				
				me.get('bar').onmouseout = function(){
					event = Utils.getEvent(event);
					if(event.relatedTarget == me.get('wrapper')){
						return;
					}
					me.hide();
					Utils.stopPropagation(Utils.getEvent(event));
				};
			};
			
			me.get('bar').onmousedown = function(event){
				//按下鼠标拖动，由document的来控制隐藏
				me.get('bar').onmouseout = null;
				me.get('wrapper').onmouseout = null;
				me.set('oriClientY',event.clientY);
//				me.set('oriOffsetTop',me.get('bar').offsetTop);
				me.saveBarOriOffsetTop();
				me.fire(me.get('type')+'-bar-mousedown');
				Utils.stopPropagation(Utils.getEvent(event));
			};
			
			me.get('wrapper').onmouseover = function(event){
				me.clearShadowHide();
				me.show();
				Utils.stopPropagation(Utils.getEvent(event));
				me.get('wrapper').onmouseout = function(event){
					event = Utils.getEvent(event);
					if(event.relatedTarget == me.get('bar')){
						return;
					}
					
					me.hide();
					Utils.stopPropagation(Utils.getEvent(event));
				};
			};
			
		})(me);
	},
	move : function(){
		var	modifiedY = this.get('modifiedY');
		var barOffsetHeight = this.get('bar').offsetHeight;
		var oriOffsetTop = this.get('oriOffsetTop');
		
		if(oriOffsetTop + modifiedY <= 2){
			this.get('bar').style.top = "2px";	
		}else if(oriOffsetTop + modifiedY + barOffsetHeight >=298){
			this.get('bar').style.top = 298 - barOffsetHeight + "px";
		}else{
			this.get('bar').style.top = oriOffsetTop + modifiedY + "px"; 
		}
		
		this.shadowHide();
	},
	shadowHide:function(){
		var me = this;
		var i = 1;
		this.clearShadowHide();
		this.showBar();
		var opacity = Utils.getComputedStyle(me.get('bar')).opacity;
		var timeout = setTimeout(function(){
			me.set('interval',setTimeout(function(){
				me.get('bar').style.opacity = opacity - 0.08 * i;
				if(opacity - 0.08 * i <= 0){
					me.get('bar').style.opacity = 0;
				}else{
					i += 1;
					me.set('interval',setTimeout(arguments.callee,50));
				}
			},50));
		}, this.get('delay'));
		me.set('interval',timeout);
	},
	clearShadowHide : function(){
		clearTimeout(this.get('interval'));
	},
	showBar:function(){
		this.get('bar').style.display = "block";
		this.get('bar').style.opacity = 0.6;
	},
	show:function(){
		this.get('bar').style.display = "block";
		this.get('bar').style.opacity = 0.6;
		this.get('wrapper').style.display = "block";
		this.get('wrapper').style.opacity = 0.2;
	},
	hide:function(){
		this.shadowHide();
		this.get('wrapper').style.opacity = 0;
	},
	saveBarOriOffsetTop:function(){
		this.set('oriOffsetTop',this.get('bar').offsetTop);
	}
});
window.onload = function(){
	var doc = new Doc({
		current : 'message'
	});
	
	function handleWheel (event){
		event = Utils.getEvent(event);
		var scrollerBar = doc.get('scrollerBar');
		var scrollerPanel = doc.get('scrollPanel');
		scrollerBar.clearShadowHide();
		
		scrollerBar.saveBarOriOffsetTop();
		scrollerPanel.saveOriPanelTop();
		if(Utils.getWheelDelta(event)<0){
			//向下滚动
			scrollerPanel.calculateModifiedY(1);
		}else if(Utils.getWheelDelta(event)>0){
			//向上滚动
			scrollerPanel.calculateModifiedY(-1);
		}
		scrollerBar.move();
		scrollerPanel.scroll();
		doc.fire('domWheel');
		Utils.preventDefault(event);
	};
	
	function bindWheelEvent(currentBar, currentPanel){
		doc.set('scrollerBar', currentBar);
		doc.set('scrollPanel', currentPanel);
		Utils.addEventListener(document,"mousewheel",handleWheel);
		Utils.addEventListener(document,"DOMMouseScroll",handleWheel);
	}
	
	var backToTop = new BackToTop({
		button : document.querySelector('.zh-backtotop'),
		isShow : false
	});
	//点击回到顶部按钮时调用文档的scrollToTop方法
	backToTop.on('click', 'scrollToTop', doc);
	//滚动文档的时候判断时候需要开关回到顶部按钮的显示
	doc.on('scroll', 'toggle', backToTop);
	
	var msgBox = new MsgBox({
		button:document.getElementById('zh-top-nav-count-wrap')
	});
	var panel = new Panel({
		panel:document.getElementById('zh-top-nav-live-new'),
		isShow:false
	});
	//点击消息按钮时开关显示消息面板
	msgBox.on('click','toggle',panel);
	
	//点击消息面板外面时关闭面板
	doc.on('click','hide',panel);
	
	//三个按钮、三个面板、三个滚动条一一对应进行切换
	var messageTabBtn = new TabButton({
		button : document.getElementById("message-tab"),
		isCurrent : true,
		type : 'message'
	});
	
	var innerMsgPanel = new InnerPanel({
		panel:document.getElementById('message-notice-content'),
		scrollPanel : document.getElementById('message-notice-content').querySelector('.zh-scroller-inner'),
		isShow:true,
		type : 'message'
	});
	
	var msgScrollerBar = new ScrollerBar({
		bar : document.getElementById('message-notice-content').querySelector('.zh-scroller-bar'),
		wrapper : document.getElementById('message-notice-content').querySelector('.zh-scroller-bar-container'),
		delay : 500,
		type : 'message'
	});
	
	innerMsgPanel.set('scrollerBar', msgScrollerBar);
	
	//记录初始位置信息,设置关联关系
	msgScrollerBar.on('message-bar-mousedown',function(){
		doc.set('scrollerBar',msgScrollerBar);
		
		innerMsgPanel.saveOriPanelTop();
	});
	//拖动滚动条，移动对应的面板
	doc.on('message-move', msgScrollerBar.move, msgScrollerBar);
	doc.on('message-move', innerMsgPanel.scroll, innerMsgPanel);
	doc.on('message-up', 'hide', msgScrollerBar);
	
	//点击滚动条时绑定鼠标事件
	msgScrollerBar.on('message-bar-mousedown', 'bindMouseEvent', doc);
	
	//鼠标移入消息面板的时候绑定滚动事件
	innerMsgPanel.on('message-panel-mouseenter',function(){
		bindWheelEvent(msgScrollerBar,innerMsgPanel);
	});
	
	innerMsgPanel.on('message-panel-mouseout',function(){
		Utils.removeEventListener(document,"mousewheel",handleWheel);
		Utils.removeEventListener(document,"DOMMouseScroll",handleWheel);
	});
	
	msgScrollerBar.on('message-wrapper-click',function(){
		innerMsgPanel.saveOriPanelTop();
		innerMsgPanel.scroll();
	});
	
	var userTabBtn = new TabButton({
		button : document.getElementById("user-tab"),
		isCurrent : false,
		type : 'user'
	});
	
	var innerUserPanel = new InnerPanel({
		panel:document.getElementById('user-notice-content'),
		scrollPanel:document.getElementById('user-notice-content').querySelector('.zh-scroller-inner'),
		isShow:false,
		type:'user'
	});
	
	var userScrollerBar = new ScrollerBar({
		bar : document.getElementById('user-notice-content').querySelector('.zh-scroller-bar'),
		wrapper : document.getElementById('user-notice-content').querySelector('.zh-scroller-bar-container'),
		delay : 500,
		type:'user'
	});
	
	innerUserPanel.set('scrollerBar', userScrollerBar);
	
	userScrollerBar.on('user-bar-mousedown',function(){
		doc.set('isFireMouseMove', true);
		doc.set('scrollerBar', userScrollerBar);
		
		innerUserPanel.saveOriPanelTop();
	});
	doc.on('user-move', 'move', userScrollerBar);
	doc.on('user-up', 'hide', userScrollerBar);
	doc.on('user-move', 'scroll', innerUserPanel);
	
	userScrollerBar.on('user-bar-mousedown', 'bindMouseEvent', doc);
	
	//鼠标移入消息面板的时候绑定滚动事件
	innerMsgPanel.on('user-panel-mouseenter', function(){
		bindWheelEvent(userScrollerBar, innerUserPanel);
	});
	
	innerMsgPanel.on('user-panel-mouseout', function(){
		Utils.removeEventListener(document, "mousewheel", handleWheel);
		Utils.removeEventListener(document, "DOMMouseScroll", handleWheel);
	});
	
	userScrollerBar.on('user-wrapper-click',function(){
		innerUserPanel.saveOriPanelTop();
		innerUserPanel.scroll();
	});
	
	var thanksTabBtn = new TabButton({
		button : document.getElementById("thanks-tab"),
		isCurrent : false,
		type : 'thanks'
	});
	
	var innerThanksPanel = new InnerPanel({
		panel : document.getElementById('thanks-notice-content'),
		scrollPanel : document.getElementById('thanks-notice-content').querySelector('.zh-scroller-inner'),
		isShow : false,
		type : 'thanks'
	});
	
	var thanksScrollerBar = new ScrollerBar({
		bar : document.getElementById('thanks-notice-content').querySelector('.zh-scroller-bar'),
		wrapper : document.getElementById('thanks-notice-content').querySelector('.zh-scroller-bar-container'),
		delay : 500,
		type : 'thanks'
	});
	
	innerThanksPanel.set('scrollerBar', thanksScrollerBar);
	
	thanksScrollerBar.on('thanks-bar-mousedown', function(){
		doc.set('isFireMouseMove', true);
		doc.set('scrollerBar', thanksScrollerBar);
		
		innerThanksPanel.saveOriPanelTop();
	});
	thanksScrollerBar.on('thanks-bar-mousedown', 'bindMouseEvent', doc);
	
	doc.on('thanks-move', 'move', thanksScrollerBar);
	doc.on('thanks-move', 'scroll', innerThanksPanel);
	doc.on('thanks-up','hide', thanksScrollerBar);
	
	
	//鼠标移入消息面板的时候绑定滚动事件
	innerThanksPanel.on('thanks-panel-mouseenter', function(){
		bindWheelEvent(thanksScrollerBar, innerThanksPanel);
	});
	
	innerThanksPanel.on('thanks-panel-mouseout', function(){
		Utils.removeEventListener(document, "mousewheel", handleWheel);
		Utils.removeEventListener(document, "DOMMouseScroll", handleWheel);
	});
	
	thanksScrollerBar.on('thanks-wrapper-click',function(){
		innerThanksPanel.saveOriPanelTop();
		innerThanksPanel.scroll();
	});
	
	//设置按钮面板之间的关联显示
	messageTabBtn.on('message-click',function(){
		innerUserPanel.hide();
		innerThanksPanel.hide();
		innerMsgPanel.show();
		messageTabBtn.setCurrent();
		userTabBtn.removeCurrent();
		thanksTabBtn.removeCurrent();
		doc.set('current','message');
	});
	
	userTabBtn.on('user-click',function(){
		innerUserPanel.show();
		innerThanksPanel.hide();
		innerMsgPanel.hide();
		messageTabBtn.removeCurrent();
		userTabBtn.setCurrent();
		thanksTabBtn.removeCurrent();
		doc.set('current','user');
	});
	
	thanksTabBtn.on('thanks-click',function(){
		innerUserPanel.hide();
		innerThanksPanel.show();
		innerMsgPanel.hide();
		messageTabBtn.removeCurrent();
		userTabBtn.removeCurrent();
		thanksTabBtn.setCurrent();
		doc.set('current','thanks');
	});
	
};

