package com.zhihu.service;

import com.zhihu.pojo.Question;


public interface QuestionService {
	String selectQuestionNamesAndAnswerCounts(String name) throws Exception;
	
	int insertQuestion(Question question) throws Exception;

	Question selectQuestionById(String questionId) throws Exception;
}
