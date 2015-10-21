(function(){
	angular.module('zhihu').directive('closeModal',['UtilsService',function(UtilsService){
		return {
			restrict:'A',
			link:function(scope,element,attribute){
				element.bind('click',function(){
					$('.modal-wrapper')[0].style.display = "none";
					$('.modal-dialog-bg')[0].style.display = "none";
					UtilsService.removeClass(document.documentElement,'modal-open');
					UtilsService.removeClass(document.documentElement,'modal-doc-overflow');
					
				});
			}
		};
	}]);
})();