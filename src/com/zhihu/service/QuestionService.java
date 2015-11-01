package com.zhihu.service;

import java.util.List;

import com.zhihu.pojo.Feed;
import com.zhihu.pojo.Question;


public interface QuestionService {
	String selectQuestionNamesAndAnswerCounts(String name) throws Exception;
	
	int insertQuestion(Question question) throws Exception;

	Question selectQuestionById(String questionId) throws Exception;
	
	List<Feed> getMainContents() throws Exception;
}
