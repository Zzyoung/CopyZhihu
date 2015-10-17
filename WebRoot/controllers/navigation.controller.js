(function(){
	angular.module('zhihu').controller('NavigationController',NavigationController);
	
	NavigationController.$inject = ['$scope' ,'NavigationSerivce'];
	
	function NavigationController($scope ,NavigationSerivce){
		$scope.ctrl = {};
		
		var ctrl = $scope.ctrl, i, len;
		
		ctrl.popup = NavigationSerivce.popup;
		
		ctrl.toggle = NavigationSerivce.toggle;
		
		ctrl.tabs = NavigationSerivce.tabs;
		
		ctrl.getTabClass = function(index){
			var tab = this.tabs[index];
			if(tab.current){
				return tab.cls + " current";
			}else{
				return tab.cls;
			}
		};
		
		ctrl.clickTab = function(index){
			var tab = this.tabs[index];
			if(tab.current){
				return;
			}else{
				for(i = 0,len = this.tabs.length;i < len;i++){
					this.tabs[i].current = false;
				}
				tab.current = true;
			}
		};
		
		//内容区的显示与隐藏和上方按钮同步
		ctrl.isShowContent = function(index){
			return this.tabs[index].current;
		};
		
		ctrl.msgContents = NavigationSerivce.msgContents;
		
	};
})();