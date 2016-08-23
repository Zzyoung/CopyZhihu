//保存答案
(function(){
	angular.module('zhihu').directive('saveAnswer',['UtilsService',function(UtilsService){
		return {
			restrict:'A',
			scope:{
				question:'@question',
				save:'&'
			},
			link:function(scope,element,attribute){
				element.bind('click',function(){
					var answerEditor = document.getElementById('answerEditor');
					var answerContent = answerEditor.innerHTML;
					scope.save()(scope.question,answerContent);
					answerEditor.innerHTML = "";
				});
			}
		};
	}]);
})();