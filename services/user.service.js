(function(){
	angular.module('zhihu').factory('UserService',UserService);

	UserService.$inject = ['$http'];

	function UserService($http){
		var service = {};

		service.Create = Create;

		return service;

		function Create(user) {
            //return $http.post('/api/users', user).then(handleSuccess, handleError('Error creating user'));
            console.log('create user',user.name);
        }
	}
})();