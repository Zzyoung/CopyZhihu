(function(){
	angular.module('zhihu').factory('MainContentService',MainContentService);
	
	MainContentService.$inject = ['UtilsService','$http'];
	
	function MainContentService(UtilsService, $http){
		var service = {};
		
		service.mainContents = {};
        function querySuccess(response){
        	return response.data;
		};
		
		function queryError(){
			console.log('请求失败');
		}
		
		service.loadMainContents = function (){
			var request = $http({
				method : 'GET',
				url : '/Zhihu/loadMainContents',
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			});
			return (request.then(querySuccess,queryError));
		};
		
		return service;
	}
})();