package com.zhihu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.UserDao;
import com.zhihu.pojo.User;
import com.zhihu.service.UserService;
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserDao userDao;
	
	@Override
	public int insertUser(User user) throws Exception {
		return userDao.insertUser(user);
	}

}
