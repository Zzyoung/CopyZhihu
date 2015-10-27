package com.zhihu.dao;

import com.zhihu.pojo.Question;

public interface QuestionMapper {
	Question selectQuestionsLikeName(String name) throws Exception;
}
