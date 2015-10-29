package com.zhihu.dao;

import com.zhihu.pojo.User;

public interface UserMapper {
	int insertUser(User user) throws Exception;

	User getByLoginName(User user) throws Exception;

	int findUserByLoginName(User newUser);
}
