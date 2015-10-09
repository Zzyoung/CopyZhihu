(function(){
	angular.module('zhihu').directive('story', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<a target="_blank" href="{{story.profile}}" class="rep current" ng-repeat="story in stories">'+
						'<span class="info-card">{{story.name}}</span>'+
						'<img ng-src="{{story.photo}}" alt="MrToyy" />'+
					  '</a>',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				iElm.bind('mouseenter',function(){
					console.log('mouse enter!')
				})
			}
		};
	});
})();