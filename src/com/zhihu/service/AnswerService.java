package com.zhihu.service;

import java.util.List;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;

public interface AnswerService {
	List<Answer> selectAnswerListByQuestionId(int id) throws Exception;
}
