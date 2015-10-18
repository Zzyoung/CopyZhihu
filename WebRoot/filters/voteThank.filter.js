(function(){
	angular.module('zhihu').filter('voteThank',function(){
		return function(voteThanksCount){
			if(voteThanksCount.thanks === 0){
				return "获得 "+voteThanksCount.thanks+" 次赞同";
			}else if(voteThanksCount.vote === 0){
				return "获得 "+voteThanksCount.vote+" 次感谢";
			}else{
				return "获得 "+voteThanksCount.vote+" 次赞同 / "+voteThanksCount.thanks+" 次感谢";
			}
		};
	});
})();