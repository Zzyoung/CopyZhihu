package com.zhihu.service.impl;

import java.util.ArrayList;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.zhihu.dao.QuestionMapper;
import com.zhihu.pojo.Question;
import com.zhihu.service.QuestionService;
@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionMapper questionMapper;
	
	private final static Logger logger = LoggerFactory.getLogger(QuestionServiceImpl.class);
	
	@Override
	public String selectQuestionNamesAndAnswerCounts(
			String name) throws Exception {
		logger.info("根据name:["+name+"]查询相似的问题");
		Question question = new Question();
		name = name.replace("'", "");
		question.setName(name);
		ArrayList<Question> questions = questionMapper.selectQuestionNamesAndAnswerCounts(question);
		return JSON.toJSONString(questions);
	}

	@Override
	public int insertQuestion(Question question) {
		try {
			questionMapper.insertQuestion(question);
			return question.getId(); 
		} catch (Exception e) {
			logger.error("添加问题失败",e);
			return -1;
		}
	}

	@Override
	public Question selectQuestionById(String questionId) throws Exception {
		HashMap<String, String> param = new HashMap<String,String>();
		param.put("id", questionId);
		return questionMapper.selectQuestionById(param);
	}
	
}
