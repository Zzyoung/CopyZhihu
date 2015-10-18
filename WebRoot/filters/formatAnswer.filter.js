(function(){
	angular.module('zhihu').filter('formatAnswer',function(){
		return function(answer){
			if(answer.length>145){
				return answer.substr(0,145)+'...';
			}else{
				return answer;
			}
		};
	});
})();