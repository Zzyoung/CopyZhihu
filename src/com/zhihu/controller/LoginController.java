package com.zhihu.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhihu.pojo.User;
import com.zhihu.service.UserService;

@Controller("loginController")
@RequestMapping(value = "/")
public class LoginController {
	@Autowired
	private UserService userService;
	
	private final static Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@RequestMapping(value="register",method = RequestMethod.POST)
	@ResponseBody
	public void register(HttpServletRequest request){
		User newUser = new User();
		
		String name = request.getParameter("name");
		String loginName = request.getParameter("loginName");
		String password = request.getParameter("password");
		
		logger.info("用户:"+name+" 进行了注册");
		
		newUser.setLoginName(loginName);
		newUser.setName(name);
		newUser.setPassword(password);
		try {
			userService.insertUser(newUser);
		} catch (Exception e) {
			logger.error("用户注册失败",e);
		}
	}
	
}
