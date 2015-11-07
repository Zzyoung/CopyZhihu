//修改答案
(function(){
	angular.module('zhihu').directive('editAnswer',function($compile){
		return {
			restrict:'A',
			link:function(scope,element,attribute){
				element.bind('click',function(){
					var movedEditPanel = element[0].parentNode.nextSibling.nextSibling;
					if(movedEditPanel){
						//已经移动过了，只需要设置显示状态
						movedEditPanel.style.display = 'block';
						element[0].parentNode.style.display = "none";
					}else{
						var editPanel = document.getElementById('editPanel');
						editPanel.removeAttribute('ng-hide');
						editPanel.removeChild(editPanel.firstElementChild);
						editPanel.classList.remove('ng-hide');
						//复制答案
						document.getElementById('answerEditor').innerHTML = element[0].parentNode.firstChild.innerHTML;
						//重写clone方法
						var original = editPanel.cloneNode;
						function patch(deep){
							var clone = original.call(editPanel,deep);
							
							$compile(clone)(scope);
							return clone;
						};
						editPanel.cloneNode = patch;
						
						var newPanel = editPanel.cloneNode(true);
						//隐藏现在的答案
						element[0].parentNode.style.display = "none";
						//移动答案输入框
						element[0].parentNode.parentNode.appendChild(newPanel);
						//去掉原来的答案输入框
						editPanel.parentNode.removeChild(editPanel);
					}
				});
			}
		};
	});
})();