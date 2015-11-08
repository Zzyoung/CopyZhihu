//弹出提问框
(function(){
	angular.module('zhihu').directive('addQuestion',['UtilsService',function(UtilsService){
		return {
			restrict:'A',
			link:function(scope,element,attribute){
				element.bind('click',function(){
//					$('.modal-wrapper')[0].style.display = "flex";
					$('.modal-dialog-bg')[0].style.display = "block";
					UtilsService.addClass(document.documentElement,'modal-open');
					UtilsService.addClass(document.documentElement,'modal-doc-overflow');
				});
			}
		};
	}]);
})();