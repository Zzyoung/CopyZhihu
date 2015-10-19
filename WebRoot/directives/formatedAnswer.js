(function(){
	angular.module('zhihu').directive('formatedAnswer',function(){
		return {
			restrict:'A',
//			template:'<div formated-answer="" ng-show="feed.answerExpanded" class="zm-editable-content ng-binding">	{{feed.answer}}	<span class="answer-date-link-wrap"><a class="answer-date-link meta-item" target="_blank" href="/question/21321123/answer/68448516">发布于 20:10</a>	</span>	</div>',
//			replace:true,
			link:function($scope,element,attribute){
				var strBefore = '<div formated-answer="" ng-show="feed.answerExpanded" class="zm-editable-content ng-binding">';
				var strAfter = '</div>';
				element.bind('click',function(){
					console.log(element.children('textarea')[0].defaultValue);
					var answer = element.children('textarea')[0].defaultValue;
					var tpl = $compile(strBefore + answer + strAfter);
					var e = tpl($scope);
					element.append(e);
				});
			}
		};
	});
})();