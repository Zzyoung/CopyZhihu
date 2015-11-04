package com.zhihu.dao;

import java.util.List;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;

public interface AnswerMapper {

	Answer selectAnswerByQuestionId(Question question) throws Exception;
	
	List<Answer> selectAnswerListByQuestionId(int id) throws Exception;
	
}
