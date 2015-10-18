(function(){
	angular.module('zhihu').controller('MainContentController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'MainContentService'];
	
	function MainContentController($scope, MainContentService){
		$scope.mainCtr = {};
		
		var mainCtr = $scope.mainCtr;
		
		mainCtr.feeds = MainContentService.feeds;
		
	}
	
})();