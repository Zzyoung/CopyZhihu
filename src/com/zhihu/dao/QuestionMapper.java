package com.zhihu.dao;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.zhihu.pojo.Question;

public interface QuestionMapper {
	Question selectQuestionsLikeName(Question question) throws Exception;
	
	ArrayList<Question> selectQuestionNamesAndAnswerCounts(Question question) throws Exception;
	
	int insertQuestion(Question question) throws Exception;

	Question selectQuestionById(HashMap<String,String> param) throws Exception;
	
	List<Question> selectHotterQuestion() throws Exception;
}
