(function(){
	angular.module('zhihu').directive('story', function(){
		return {
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<a target="_blank" href="{{story.profile}}" class="rep current" ng-repeat="story in stories">'+
						'<span class="info-card">{{story.name}}</span>'+
						'<img ng-src="{{story.photo}}" alt="MrToyy" />'+
					  '</a>',
			link: function($scope, iElm, iAttrs, controller) {
				iElm.bind('mouseenter',function(){
					console.log('mouse enter!');
				});
			}
		};
	});
})();