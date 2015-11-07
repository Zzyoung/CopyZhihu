package com.zhihu.dao;

import java.util.List;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;
import com.zhihu.pojo.User;
import com.zhihu.pojo.UserAnswerRelation;

public interface AnswerMapper {

	Answer selectAnswerByQuestionId(Question question) throws Exception;
	
	List<Answer> selectAnswerListByQuestionId(int id) throws Exception;
	
	List<User> selectWhoLikeAnswer(int id) throws Exception;
	
	int insertUserAnswerRelation(UserAnswerRelation relation) throws Exception;
	
	int deleteUserAnswerRelation(UserAnswerRelation relation) throws Exception;

	Integer selectAnswerUserRelation(UserAnswerRelation relation);
}
