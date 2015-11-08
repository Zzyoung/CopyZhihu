var Utils = {
	getEvent:function(event){
		return event || window.event;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	addClass:function(element,cls){
		if(element.classList){
			element.classList.add(cls);
		}else{
			var classList = element.className.split(/\s+/);
			classList.push(cls);
			element.className = classList.join(" ");
		}
	},
	containsClass:function(element,cls){
		if(element.classList){
			return element.classList.contains(cls);
		}else{
			var classList = element.className.split(/\s+/);
			return Utils.arrayContains(classList,cls);
		}
	},
	removeClass:function(element,cls){
		if(element.classList){
			element.classList.remove(cls);
		}else{
			var classList = element.className.split(/\s+/);
			classList = Utils.arrayRemove(classList,cls);
			element.className = classList.join(" ");
		}
	},
	arrayContains:function(arr,item){
		return arr.indexOf(item)>=0;
	},
	arrayRemove:function(arr,item){
		return arr.filter(function(x){
			return x !== item;
		});
	},
	getComputedStyle:function(element){
		return document.defaultView.getComputedStyle(element,null) || element.currentStyle;
	},
	addEventListener:function(element,type,handler,isBubble){
		if(element.addEventListener){
			element.addEventListener(type,handler,isBubble);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type] = handler;
		}
	},
	removeEventListener:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		} else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type] = null;
		}
	},
	getWheelDelta:function(event){
		if(event.wheelDelta){
			return event.wheelDelta;
		}else{
			return -event.detail * 40;
		}
	},
	hideBar:function(bar){
		var opacity = Utils.getComputedStyle(bar).opacity;
		bar.style.opacity = opacity - 0.07;
		if(bar.style.opacity<=0.05){
			bar.style.display = "none";
			bar.style.opacity = 0.5;
		}
	},
	calculateTop:function (self){
		var top = self.offsetTop;
		var parent = self.parentNode;
		while(parent = parent.offsetParent){
			top+=parent.offsetTop;
		}
		return top;
	},
	calculateLeft:function(self){
		var left = self.offsetLeft;
		var parent = self.parentNode;
		while(parent = parent.offsetParent){
			left += parent.offsetLeft;
		}
		return left;
	},
	getBodyScrollTop:function(){
		return document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
	},
	getClientHeight:function(){
		return document.body.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
	},
	getNodeText:function(node){
		for(child = node.firstChild;child!=null;child=child.nextSibling){
			var type = child.nodeType;
			if(type === 3){
				return child.nodeValue;
			}
		}
	},
	getParentByCls:function(node,clsName){
		var parent = node.parentNode;
		while(parent!=null){
			if(Utils.containsClass(parent,clsName)){
				return parent;
			}
			parent = parent.parentNode;
		}
	},
	createElement:function(nodeName,clsNames){
		var element = document.createElement(nodeName);
		for (var i = clsNames.length - 1; i >= 0; i--) {
			Utils.addClass(element,clsNames[i]);
		};
		return element;
	}
};
