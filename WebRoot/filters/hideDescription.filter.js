(function(){
	angular.module('zhihu').filter('hideDescription',function(){
		return function(answer){
			if(answer.length>15){
				return answer.substr(0,15)+'...';
			}else{
				return answer;
			}
		};
	});
})();