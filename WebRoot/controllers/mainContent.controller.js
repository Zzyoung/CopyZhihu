(function(){
	angular.module('zhihu').controller('MainContentController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'MainContentService' ,'$compile'];
	
	function MainContentController($scope, MainContentService, $compile){
		$scope.mainCtrl = {};
		
		var mainCtrl = $scope.mainCtrl;
		
		mainCtrl.compile = $compile;
		
		mainCtrl.feeds = MainContentService.feeds;
		
		mainCtrl.isShowComments = false;
		
		mainCtrl.toggleComments = function(feed){
			feed.isShowComments = !feed.isShowComments;
		};
		
		mainCtrl.expandAnswer = function(feed){
			if(!feed.answerExpanded){
				feed.answerExpanded = true;
			}
		};
		
		mainCtrl.hideAnswer = function(feed){
			feed.answerExpanded = false;
		};
		
	}
	
})();