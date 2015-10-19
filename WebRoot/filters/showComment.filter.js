(function(){
	angular.module('zhihu').filter('showComment',function(){
		return function(length,isShowComment){
			if(!isShowComment){
				if(length === 0){
					return "添加评论";
				}else{
					return ""+length+" 条评论";
				}
			}else{
				return "收起评论";
			}
		};
	});
})();