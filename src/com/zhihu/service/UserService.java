package com.zhihu.service;

import com.zhihu.pojo.User;

public interface UserService {
	int insertUser(User user) throws Exception;

	User getByLoginName(String loginName) throws Exception;

	int findUserByLoginName(User newUser);

	User getUserById(int currentUserId) throws Exception;
}
