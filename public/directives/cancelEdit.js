(function(){
	angular.module('zhihu').directive('cancelEdit',function(){
		return {
			restrict:'A',
			link:function(scope,element,attribute){
				element.bind('click',function(){
					var editPanel = document.getElementById('editPanel');
					editPanel.style.display = "none";
					element[0].parentNode.parentNode.previousSibling.previousSibling.style.display = "block";
				});
			}
		};
	});
})();