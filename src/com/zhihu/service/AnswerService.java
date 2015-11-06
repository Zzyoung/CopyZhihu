package com.zhihu.service;

import java.util.List;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;

public interface AnswerService {
	List<Answer> selectAnswerListByQuestionId(int id) throws Exception;

	boolean likeAnswer(Integer answerId, int userId) throws Exception;
	
	boolean unlikeAnswer(Integer answerId, int userId) throws Exception;
	
	boolean opposeAnswer(Integer answerId, int userId) throws Exception;
	
	boolean unopposeAnswer(Integer answerId, int userId) throws Exception;
	
}
