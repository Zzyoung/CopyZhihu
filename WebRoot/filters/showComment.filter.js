(function(){
	angular.module('zhihu').filter('showComment',function(){
		return function(length){
			if(length === 0){
				return "添加评论";
			}else{
				return ""+length+" 条评论";
			}
		};
	});
})();