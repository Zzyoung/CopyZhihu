//更新答案
(function(){
	angular.module('zhihu').directive('updateAnswer',function(){
		return {
			restrict:'A',
			scope:{
				question:'@question',
				update:'&'
			},
			link:function(scope,element,attribute){
				element.bind('click',function(){
					var answerEditor = document.getElementById('answerEditor');
					var answerContent = answerEditor.innerHTML;
					var answerArea = element[0].parentNode.parentNode.previousSibling.previousSibling;
					scope.update()(scope.question,answerContent);
					answerArea.firstElementChild.innerHTML = answerContent;
					editPanel.style.display = "none";
					answerArea.style.display = "block";
				});
			}
		};
	});
})();