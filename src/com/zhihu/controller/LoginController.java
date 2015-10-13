package com.zhihu.controller;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	public void register(HttpServletRequest request,HttpServletResponse response){
		response.setHeader("content-type", "text/html;charset=UTF-8");
		User newUser = new User();
		String name = request.getParameter("name");
		String loginName = request.getParameter("loginName");
		String password = request.getParameter("password");
		
		logger.info("用户["+name+"]进行了注册");
		
		newUser.setLoginName(loginName);
		newUser.setName(name);
		newUser.setPassword(password);
		
		try {
			if(userService.findUserByLoginName(newUser) > 0){
				logger.warn("登录名["+loginName+"]已经注册过了");
				response.getWriter().write("{\"errorCode\":3,\"msg\":\"error password or loginName\"}");
			}else{
				userService.insertUser(newUser);
				response.getWriter().write("{\"msg\":\"register success\"}");
				logger.warn("用户["+name+"]注册成功");
			}
		} catch (Exception e) {
			logger.error("用户["+name+"]注册失败",e);
		} finally{
			try {
				response.getWriter().close();
			} catch (IOException e) {
				logger.error("关闭输出流失败",e);
			}
		}
	}
	
	@RequestMapping(value="login",method = RequestMethod.POST)
	public void login(HttpServletRequest request,HttpServletResponse response){
		response.setHeader("content-type", "text/html;charset=UTF-8");
		String loginName = request.getParameter("loginName");
		String password = request.getParameter("password");
		logger.info("password:"+password);
		logger.info("帐号为["+loginName+"]的用户进行了登录操作");
		
		try {
			User user = userService.getByLoginName(loginName);
			if(user == null){
				response.getWriter().write("{\"errorCode\":1,\"msg\":\"unknown loginName\"}");
			}else{
				if(password.equals(user.getPassword())){
					response.getWriter().write("{\"msg\":\"login success\"}");
				}else{
					response.getWriter().write("{\"errorCode\":2,\"msg\":\"error password or loginName\"}");
				}
			}
		} catch (Exception e) {
			logger.error("帐号为["+loginName+"]的用户登录失败",e);
		} finally{
			try {
				response.getWriter().close();
			} catch (IOException e) {
				logger.error("关闭输出流失败",e);
			}
		}
	}
}
