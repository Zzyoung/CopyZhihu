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

var scrollerBar = Base.extend({
	subscribers:{
		any:[]
	},
	bind:function(){
		me = this;
		me.get('button').onclick = function(event){
			me.fire(me.get('type')+'-click');
			Utils.stopPropagation(Utils.getEvent(event));
		};
	}
});
window.onload = function(){
	var doc = new Doc();
	var backToTop = new BackToTop({
		button:document.querySelector('.zh-backtotop'),
		isShow:false
	});
	//点击回到顶部按钮时调用文档的scrollToTop方法
	backToTop.on('click','scrollToTop',doc);
	//滚动文档的时候判断时候需要开关回到顶部按钮的显示
	doc.on('scroll','toggle',backToTop);
	
	var msgBox = new MsgBox({
		button:document.getElementById("zh-top-nav-count-wrap")
	});
	var panel = new Panel({
		panel:document.getElementById("zh-top-nav-live-new"),
		isShow:false
	});
	//点击消息按钮时开关显示消息面板
	msgBox.on('click','toggle',panel);
	
	//点击消息面板外面时关闭面板
	doc.on('click','hide',panel);
	
	//三个按钮和三个面板一一对应进行切换
	var innerMsgPanel = new InnerPanel({
		panel:document.getElementById("message-notice-content"),
		isShow:true
	});
	
	var innerUserPanel = new InnerPanel({
		panel:document.getElementById("user-notice-content"),
		isShow:false
	});
	
	var innerThanksPanel = new InnerPanel({
		panel:document.getElementById("thanks-notice-content"),
		isShow:false
	});
	
	var messageTabBtn = new TabButton({
		button : document.getElementById("message-tab"),
		isCurrent : true,
		type : 'message'
	});
	
	var userTabBtn = new TabButton({
		button : document.getElementById("user-tab"),
		isCurrent : false,
		type : 'user'
	});
	var thanksTabBtn = new TabButton({
		button : document.getElementById("thanks-tab"),
		isCurrent : false,
		type : 'thanks'
	});
	
	messageTabBtn.on('message-click',function(){
		innerUserPanel.hide();
		innerThanksPanel.hide();
		innerMsgPanel.show();
		messageTabBtn.setCurrent();
		userTabBtn.removeCurrent();
		thanksTabBtn.removeCurrent();
	});
	
	userTabBtn.on('user-click',function(){
		innerUserPanel.show();
		innerThanksPanel.hide();
		innerMsgPanel.hide();
		messageTabBtn.removeCurrent();
		userTabBtn.setCurrent();
		thanksTabBtn.removeCurrent();
	});
	
	thanksTabBtn.on('thanks-click',function(){
		innerUserPanel.hide();
		innerThanksPanel.show();
		innerMsgPanel.hide();
		messageTabBtn.removeCurrent();
		userTabBtn.removeCurrent();
		thanksTabBtn.setCurrent();
	});
	
	
	
	var timeout = null;
//	var msgBox = document.getElementById("zh-top-nav-count-wrap");
	var buttons = document.querySelectorAll('.zm-notice-popup-tab-item');
	var scrollPanels = document.querySelectorAll('.zh-scroller-inner');
	var barContainers = document.querySelectorAll('.zh-scroller-bar-container');
//	var panel = document.getElementById("zh-top-nav-live-new");
	var panels = document.querySelectorAll(".zm-notice-content");
//	msgBox.onclick = function(event){
//		event = Utils.getEvent(event);
//		var panelStyle = Utils.getComputedStyle(panel);
//		if(panelStyle.display == "block"){
//			panel.style.display = "none";
//		}else if(panelStyle.display == "none"){
//			panel.style.display = "block";
//			//初始化滚动条长度
//			for (var i = 0; i < scrollPanels.length; i++) {
//				var scrollerBar = scrollPanels[i].parentNode.querySelector('.zh-scroller-bar');
//				var height = scrollPanels[i].scrollHeight;
//				scrollerBar.style.height = (300*296/height)+"px";
//			};
//		}
//		Utils.preventDefault(event);
//		Utils.stopPropagation(event);
//	};
//	document.onclick = function(event){
//		event = Utils.getEvent(event);
//		var panelStyle = Utils.getComputedStyle(panel);
//		if(panelStyle.display == "block"){
//			panel.style.display = "none";
//		}
//	};
//	document.querySelector('#zh-top-nav-live-new').onclick = function (event) {
//		event = Utils.getEvent(event);
//		Utils.stopPropagation(event);
//	};
	function hideBarTimer(scrollerBar,delay){
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			Utils.hideBar(scrollerBar);
			if(Utils.getComputedStyle(scrollerBar).display!=="none"){
				timeout = setTimeout(arguments.callee,50);
			}
		},delay);
	}
	function showBar (scrollerBar) {
		scrollerBar.style.opacity = 0.5;
		scrollerBar.style.display = "block";
	}
	function showBarContainer (container) {
		container.style.opacity = 0.2;
	}

//	for (var i = 0; i < buttons.length; i++) {
//		(function(i){
//			//三个小标签
//			var scrollerBar = panels[i].querySelector('.zh-scroller-bar');
//			buttons[i].onclick = function(event){
//				//显示滚动条
//				showBar(scrollerBar);
//				hideBarTimer(scrollerBar,500);
//				Utils.stopPropagation(event);
//			};
//			//显示面板
//			var handler = function (event){
//				event = Utils.getEvent(event);
//				showBar(scrollerBar);
//				var oriPanelTop = scrollPanels[i].scrollTop,
//					totalHeight = scrollPanels[i].scrollHeight,
//					oriOffsetTop = scrollerBar.offsetTop,
//					addTop =  (300*120/totalHeight),
//					subTop = (-1) * addTop;
//				if(Utils.getWheelDelta(event)<0){
//					//向下滚动
//					scroll(oriOffsetTop,addTop,oriPanelTop,scrollPanels[i].scrollHeight);
//				}else if(Utils.getWheelDelta(event)>0){
//					//向上滚动
//					scroll(oriOffsetTop,subTop,oriPanelTop,scrollPanels[i].scrollHeight);
//				}
//				hideBarTimer(scrollerBar,1200);
//				Utils.preventDefault(event);
//			};
//			var scroll = function (oriOffsetTop,scrollClientY,oriPanelTop,totalHeight) {
//				if(oriOffsetTop + scrollClientY <=2){
//					scrollerBar.style.top = "2px";	
//				}else if(oriOffsetTop + scrollClientY + scrollerBar.offsetHeight >=298){
//					scrollerBar.style.top = 298-scrollerBar.offsetHeight+"px";
//				}else{
//					scrollerBar.style.top = oriOffsetTop + scrollClientY + "px"; 
//				}
//				scrollPanels[i].scrollTop =oriPanelTop + parseInt((totalHeight -300)/(296-scrollerBar.offsetHeight)*scrollClientY,10);
//			};
//			scrollPanels[i].onmouseover = function(){
//				(function () {
//					Utils.addEventListener(document,"mousewheel",handler);
//					Utils.addEventListener(document,"DOMMouseScroll",handler);
//				})();
//			};
//			scrollPanels[i].onmouseout = function(){
//				Utils.removeEventListener(document,"mousewheel",handler);
//				Utils.removeEventListener(document,"DOMMouseScroll",handler);
//			};
//
//			//滚动条容器
//			scrollerBar.onmouseover = function(){
//				clearTimeout(timeout);
//				showBarContainer(barContainers[i]);
//				showBar(scrollerBar);
//				scrollerBar.onmouseout = function () {
//					barContainers[i].style.opacity = 0;
//					hideBarTimer(scrollerBar,1200);
//				};
//			};
//			scrollerBar.onmouseup = function(event){
//				Utils.stopPropagation(Utils.getEvent(event));
//				document.onmousemove = null;
//			};
//			scrollerBar.onmousedown = function(event){
//				event = Utils.getEvent(event);
//				var oriClientY = event.clientY,
//					oriOffsetTop = scrollerBar.offsetTop,
//					oriPanelTop = scrollPanels[i].scrollTop;
//				//拖动滚动条
//				document.onmousemove = function(e){
//					clearTimeout(timeout);
//					showBarContainer(barContainers[i]);
//					showBar(scrollerBar);
//					e = Utils.getEvent(e);
//					var scrollClientY = e.clientY-oriClientY;
//
//					scroll(oriOffsetTop,scrollClientY,oriPanelTop,scrollPanels[i].scrollHeight);
//				};
//				//松开鼠标，取消事件
//				document.onmouseup = function(event){
//					this.onmousemove = null;
//					barContainers[i].style.opacity = 0;
//					hideBarTimer(scrollerBar,1200);
//				};
//				Utils.preventDefault(event);
//			};
//			barContainers[i].onclick = function(event){
//				event = Utils.getEvent(event);
//				var	barHeight = scrollerBar.offsetHeight,
//					oriOffsetTop = scrollerBar.offsetTop,
//					oriPanelTop = scrollPanels[i].scrollTop,
//					scrollClientY = event.clientY - Utils.calculateTop(barContainers[i]) - oriOffsetTop - barHeight / 2;
//
//				scroll(oriOffsetTop,scrollClientY,oriPanelTop,scrollPanels[i].scrollHeight);
//				Utils.stopPropagation(event);
//			};
//			
//			barContainers[i].onmouseover = function () {
//				clearTimeout(timeout);
//				showBarContainer(barContainers[i]);
//				showBar(scrollerBar);
//				barContainers[i].onmouseout = function () {
//					barContainers[i].style.opacity = 0;
//					hideBarTimer(scrollerBar,1200);
//				};
//			};
//
//		})(i);
//	};
	
};

