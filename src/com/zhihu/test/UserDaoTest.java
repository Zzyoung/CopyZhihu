package com.zhihu.test;

import org.slf4j.Logger;  
import org.slf4j.LoggerFactory; 
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.zhihu.pojo.User;
import com.zhihu.service.UserService;

public class UserDaoTest {
	private static UserService service;
	private final static Logger log = LoggerFactory.getLogger(UserDaoTest.class);
	@BeforeClass
	public static void init() {
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:/spring*.xml");
		service = (UserService) context.getBean("userService");
	}

	@Test
	public void test() throws Exception {
		User user = new User();
		user.setLoginName("skybabby@qq.com");
		user.setName("leo");
		user.setPassword("123123");
		log.info("log info");
		log.error("log error");
//		int count = service.insertUser(user);
		
//		Assert.assertTrue("应该插入一条记录", count == 1);
	}

}
