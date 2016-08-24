(function(){
    angular.module('zhihu').factory('ConstantService',ConstantService);
    
    function ConstantService(){
        var service = {};
        
        service.ContextPath = "/Zhihu/";
        
        service.messages = {
            invalidName:'姓名需在 2-10 个汉字之间',
            invalidPhone:'请输入正确的手机号',
            invalidPassword:'请输入 6-128 位的密码',
            invalidCaptcha:'验证码有误',
            invalidEmail:'邮箱地址不正确',
            emptyName:'请填写姓名',
            emptyPassword:'请填写密码',
            emptyLoginName:'请填写手机号或邮箱',
            emptyCaptcha:'请填写验证码',
            errorCaptcha:'请提交正确的验证码:('
        };
        
        service.constant = {
            UNKNOWN_LOGINNAME : 1,
            ERROR_PASSWORD_LOGINNAME : 2,
            ERROR_USER_EXIST :3,
            ERROR_CAPTCHA:4
        }; 
        
        service.randomKey = '2e5ds9a1f4w';
        
        return service;
    }
})();