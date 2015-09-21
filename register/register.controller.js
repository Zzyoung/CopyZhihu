(function(){
	angular.module('zhihu').controller('RegisterController',RegisterController);

	RegisterController.$inject = ['UserService','$location','$rootScope','FlashService'];

	function RegisterController(UserService, $location, $rootScope, FlashService) {

	}
})();