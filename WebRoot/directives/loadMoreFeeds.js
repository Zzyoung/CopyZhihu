//鼠标滚动到底部自动加载内容
(function(){
	angular.module('zhihu').directive('loadMoreFeeds',function(){
		return {
			restrict:'A',
			scope:{
				loadMore:'&ngClick'
			},
			link:function(scope,element,attribute){
				$(window).on('scroll',function(event){
					if($(document).scrollTop() + $(window).height() +30 > $(document).height()){
						scope.loadMore();
					};
				});
			}
		};
	});
})();