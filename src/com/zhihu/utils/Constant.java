package com.zhihu.utils;

public class Constant {
	//错误代码(1:尚未注册,2:登录名或密码错误,3:用户已存在,4:验证码错误)
	public static final int UNKNOWN_LOGINNAME = 1;
	public static final int ERROR_PASSWORD_LOGINNAME = 2;
	public static final int ERROR_USER_EXIST = 3;
	public static final int ERROR_CAPTCHA = 4;
	
	public static final String APP_CONTEXT = "/Zhihu";
	
	public static final int USER_LIKE_COMMENT = 1;
	
	public static final int DEFAULT_USER_ANSWER_RELATION = 0;
	public static final int USER_LIKE_ANSWER = 1;
	public static final int USER_OPPOSE_ANSWER = 2;
	
}
