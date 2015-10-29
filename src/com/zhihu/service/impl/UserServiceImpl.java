package com.zhihu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.UserMapper;
import com.zhihu.pojo.User;
import com.zhihu.service.UserService;
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public int insertUser(User user) throws Exception {
		return userMapper.insertUser(user);
	}

	@Override
	public User getByLoginName(String loginName) throws Exception {
		User user = new User();
		user.setLoginName(loginName);
		
		return userMapper.getByLoginName(user);
	}

	@Override
	public int findUserByLoginName(User newUser) {
		return userMapper.findUserByLoginName(newUser);
	}

}
