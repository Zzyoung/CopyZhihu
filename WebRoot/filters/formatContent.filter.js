(function(){
	angular.module('zhihu').filter('formatContent',function(){
		return function(content,type){
			if(content){
				var maxLength = 0 ;
				if(type==='answer'){
					maxLength = 145;
				}else if(type==='questionDesc'){
					maxLength = 24;
				}
				if(content.length>maxLength){
					return content.replace(/<br>|<blockquote>|<\/blockquote>/g,'').substr(0,maxLength)+'...';
				}else{
					return content.replace(/<br>|<blockquote>|<\/blockquote>/g,'');
				}
			}
		};
	});
})();