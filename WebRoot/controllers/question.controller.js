//问题界面控制器
(function(){
	angular.module('zhihu').controller('QuestionController',MainContentController);
	
	MainContentController.$inject = ['$scope', 'QuestionService' ,'$compile'];
	
	function MainContentController($scope, QuestionService, $compile){
		$scope.ctrl = {};
		
		var ctrl = $scope.ctrl;
		
		ctrl.answers = QuestionService.answers;
		
		ctrl.showInvitePanel = false;
		
		ctrl.toggleInvitePanel = function(){
			this.showInvitePanel = !this.showInvitePanel;
		};
		
	}
	
})();