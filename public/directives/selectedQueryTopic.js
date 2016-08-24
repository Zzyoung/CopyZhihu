(function(){
	angular.module('zhihu').directive('selectedQueryTop',function(){
		return {
			restrict:'E',
			template:'<div ng-repeat="topic in addQuestionCtrl.queryTopic.selectedTopics" class="zg-inline">'+
						'<div class="zm-tag-editor-edit-item">'+
							'<span>{{topic.name}}</span><a ng-click="addQuestionCtrl.unselectTopic($index)" href="#" class="zg-r3px zm-tag-editor-remove-button"></a>'+
						'</div>'+
					'</div>',
			link:function(scope,element,attribute){
				
			}
		};
	});
})();