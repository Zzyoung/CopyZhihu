package com.zhihu.dao;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;

public interface AnswerMapper {

	Answer selectAnswerByQuestionId(Question question) throws Exception;
	
}
