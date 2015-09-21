(function(){
	angular.module('zhihu').controller('StoryController',StoryController);

	StoryController.$inject = ['$scope','StoryService']

	function StoryController($scope,StoryService){
		$scope.stories = StoryService.database.stories;
		
	}
})();