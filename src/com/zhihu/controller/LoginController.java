package com.zhihu.controller;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URLDecoder;
import java.util.Date;
import java.util.HashMap;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zhihu.pojo.User;
import com.zhihu.service.UserService;
import com.zhihu.utils.Constant;
import com.zhihu.utils.Utils;

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
		String captcha = request.getParameter("captcha");
		HttpSession session = request.getSession();
		logger.info("用户["+name+"]进行了注册");
		
		newUser.setLoginName(loginName);
		newUser.setName(name);
		newUser.setPassword(password);
		//目前不支持修改个人资料，启用默认样式
		
		newUser.setHomeUrl("/people/tester");
		newUser.setDescription("前端工程师");
		newUser.setSummary("前端工程师");
		newUser.setPhotoUrl("images/default.jpg");
		
		try {
			if(!validateCaptcha(captcha, session)){
				logger.info("验证码错误");
				response.getWriter().write("{\"errorCode\":"+Constant.ERROR_CAPTCHA+",\"msg\":\"error captcha\"}");
				return;
			}
			if(userService.findUserByLoginName(newUser) > 0){
				logger.warn("登录名["+loginName+"]已经注册过了");
				response.getWriter().write("{\"errorCode\":"+Constant.ERROR_USER_EXIST+",\"msg\":\"error password or loginName\"}");
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
	
	private boolean validateCaptcha(String captcha,HttpSession session){
		logger.info(captcha);
		logger.info(session.getAttribute("captcha").toString());
		if(captcha==null || !captcha.toLowerCase().equals(session.getAttribute("captcha").toString().toLowerCase())){
			return false;
		}
		return true;
	}
	
	@RequestMapping(value="login",method = RequestMethod.POST)
	public void login(HttpServletRequest request,HttpServletResponse response){
		response.setHeader("content-type", "text/html;charset=UTF-8");
		String loginName = request.getParameter("loginName");
		String password = request.getParameter("password");
		String captcha = request.getParameter("captcha");
		HttpSession session = request.getSession();
		logger.info("password:"+password);
		logger.info("帐号为["+loginName+"]的用户进行了登录操作");
		logger.info("验证码为:"+captcha);
		
		try {
			if(!validateCaptcha(captcha, session)){
				logger.info("验证码错误");
				response.getWriter().write("{\"errorCode\":"+Constant.ERROR_CAPTCHA+",\"msg\":\"error captcha\"}");
				return;
			}
			User user = userService.getByLoginName(loginName);
			if(user == null){
				response.getWriter().write("{\"errorCode\":"+Constant.UNKNOWN_LOGINNAME+",\"msg\":\"unknown loginName\"}");
			}else{
				logger.info("数据库中的密码：",user.getPassword());
				if(password.equals(user.getPassword())){
					//登录成功
					logger.info(loginName+" 登录成功");
					request.getSession().setAttribute("loginName", loginName);
					request.getSession().setAttribute("password", password);
				}else{
					response.getWriter().write("{\"errorCode\":"+Constant.ERROR_PASSWORD_LOGINNAME+",\"msg\":\"error password or loginName\"}");
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
	
	@RequestMapping(value="/index",method = RequestMethod.GET)
	public void redirectToMain(HttpServletRequest request,HttpServletResponse response) throws Exception{
		request.setCharacterEncoding("UTF-8");
		//判断cookie
		Cookie[] cookies = request.getCookies();
		String cookieLoginName = null;
		String cookiePassword = null;
		Object sessionLoginName = request.getSession().getAttribute("loginName");
		Object sessionPassword = request.getSession().getAttribute("password");
		logger.info("进入index控制器");
		if(sessionPassword != null || sessionLoginName != null){
			//火狐登陆时第一次登陆是cookie验证有问题，改用session验证
			logger.info("session中的密码"+sessionPassword);
			logger.info("session中的姓名"+sessionLoginName);
			
			User user = userService.getByLoginName(sessionLoginName.toString());
			logger.info("session判断数据库密码："+user.getPassword());
			if(user != null && sessionPassword.toString().equals(user.getPassword())){
				request.getSession().removeAttribute("loginName");
				request.getSession().removeAttribute("password");
				setCredential(request, user);
				request.getRequestDispatcher("/WEB-INF/view/main.jsp").forward(request, response);
			}else{
				logger.info("数据库密码和session密码不相等，返回");
				response.sendRedirect(request.getContextPath()+"/index.html");
			}
			return;
		}
		if(cookies==null || cookies.length==0){
			logger.info("cookie为空，跳转到登录界面...");
			response.sendRedirect(request.getContextPath()+"/index.html");
		}
		for (int i = 0; i < cookies.length; i++) {
			if(cookies[i].getName().equals("loginName")){
				cookieLoginName = URLDecoder.decode(cookies[i].getValue(),"UTF-8");
				cookieLoginName = cookieLoginName.replace("%40", "@");
				//去掉值两端的双引号
				cookieLoginName = cookieLoginName.replace("\"", "");
				logger.info("cookie中的登录名为："+cookieLoginName);
			}
			if(cookies[i].getName().equals("password")){
				cookiePassword = URLDecoder.decode(cookies[i].getValue(),"UTF-8");
				cookiePassword = cookiePassword.replace("\"", "");
				logger.info("cookie中的密码为："+cookiePassword);
			}
		}
		if(Utils.isEmpty(cookieLoginName) || Utils.isEmpty(cookiePassword)){
			response.sendRedirect(request.getContextPath()+"/index.html");
			return;
		}
		
		User user = userService.getByLoginName(cookieLoginName);
		if(user != null && cookiePassword.equals(user.getPassword())){
			setCredential(request, user);
			request.getRequestDispatcher("/WEB-INF/view/main.jsp").forward(request, response);
		}else{
			logger.info("cookie中的密码"+cookiePassword+"与数据库中的密码不同...");
			response.sendRedirect(request.getContextPath()+"/index.html");
		}
		
	}

	private void setCredential(HttpServletRequest request, User user) {
		request.setAttribute("id", user.getId());
		request.setAttribute("photoUrl", user.getPhotoUrl());
		request.setAttribute("userName", user.getName());
		request.getSession().setAttribute("id", user.getId());
		request.getSession().setAttribute("photoUrl", user.getPhotoUrl());
		request.getSession().setAttribute("userName", user.getName());
	}
	
	@RequestMapping(value="/logout",method = RequestMethod.GET)
	public void logout(HttpServletRequest request,HttpServletResponse response) throws Exception{
		//do something here
		request.getSession().removeAttribute("id");
		request.getSession().removeAttribute("photoUrl");
		request.getSession().removeAttribute("userName");
		request.getSession().removeAttribute("loginName");
		request.getSession().removeAttribute("password");
		response.sendRedirect(request.getContextPath()+"/index.html");
	}
	
	@RequestMapping(value="/captcha",method = RequestMethod.GET)
	public void createCaptcha(HttpServletRequest request,HttpServletResponse response){
//		String random2 = request.getParameter("r"); 
		response.setContentType("image/jpeg");
        response.setHeader("Pragma", "No-cache");
        response.setHeader("Cache-Control", "no-cache");
        response.setDateHeader("Expires", 0);
        HttpSession session = request.getSession();
 
        // 在内存中创建图象
        BufferedImage image = new BufferedImage(80, 40,
                BufferedImage.TYPE_INT_RGB);
 
        // 获取图形上下文
        Graphics2D g = image.createGraphics();
 
        // 生成随机类
        Random random = new Random();
 
        // 设定背景色
        g.setColor(Color.WHITE);
        g.fillRect(0, 0, 80, 40);
 
        // 设定字体
        g.setFont(new Font(Font.SANS_SERIF, Font.PLAIN + Font.ITALIC, 30));
 
        // 画边框
        g.setColor(new Color(55, 55, 12));
        g.drawRect(0, 0, 80 - 1, 40 - 1);
 
        // 随机产生干扰线，使图象中的认证码不易被其它程序探测到
        g.setColor(getRandColor(160, 200));
        for (int i = 0; i < 60; i++) {
            int x = random.nextInt(80);
            int y = random.nextInt(40);
            int xl = random.nextInt(12);
            int yl = random.nextInt(12);
            g.drawLine(x, y, x + xl, y + yl);
        }
 
        // 取随机产生的认证码(4位数字)
        String sRand = "";
        int red = 0, green = 0, blue = 0;
        for (int i = 0; i < 4; i++) {
            red = random.nextInt(127);
            green = random.nextInt(255);
            blue = random.nextInt(255);
            int wordType = random.nextInt(3);
            char retWord = 0;
            switch (wordType) {
            case 0:
                retWord = this.getSingleNumberChar();
                break;
            case 1:
                retWord = this.getLowerOrUpperChar(0);
                break;
            case 2:
                retWord = this.getLowerOrUpperChar(1);
                break;
            }
            sRand += String.valueOf(retWord);
            g.setColor(new Color(red, green, blue));
            g.drawString(String.valueOf(retWord), (i) * 16, 28);
 
        }
        // 将认证码存入SESSION
        session.setAttribute("captcha", sRand);
        // 图象生效
        g.dispose();
        ServletOutputStream responseOutputStream = null;
		try {
			responseOutputStream = response.getOutputStream();
			// 输出图象到页面
			ImageIO.write(image, "JPEG", responseOutputStream);
		} catch (IOException e) {
			logger.error("生成验证码图片失败");
		} finally{
			 try {
				responseOutputStream.flush();
				responseOutputStream.close();
			} catch (IOException e) {
				logger.error("关闭输出流失败",e);
			}
		}
 
        // 以下关闭输入流！
       
	}

	private Color getRandColor(int fc, int bc) {
        Random random = new Random();
        if (fc > 255)
            fc = 255;
        if (bc > 255)
            bc = 255;
        int r = fc + random.nextInt(bc - fc);
        int g = fc + random.nextInt(bc - fc);
        int b = fc + random.nextInt(bc - fc);
        return new Color(r, g, b);
	}
	
	private char getSingleNumberChar() {
        Random random = new Random();
        int numberResult = random.nextInt(10);
        int ret = numberResult + 48;
        return (char) ret;
    }
 
    private char getLowerOrUpperChar(int upper) {
        Random random = new Random();
        int numberResult = random.nextInt(26);
        int ret = 0;
        if (upper == 0) {// 小写
            ret = numberResult + 97;
        } else if (upper == 1) {// 大写
            ret = numberResult + 65;
        }
        return (char) ret;
    }
}
