package com.zhihu.dao;

import java.util.List;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;
import com.zhihu.pojo.User;

public interface AnswerMapper {

	Answer selectAnswerByQuestionId(Question question) throws Exception;
	
	List<Answer> selectAnswerListByQuestionId(int id) throws Exception;
	
	List<User> selectWhoLikeAnswer(int id) throws Exception;
}
