package com.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.AnswerMapper;
import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;
import com.zhihu.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService {

	@Autowired
	private AnswerMapper mapper;
	
	@Override
	public List<Answer> selectAnswerListByQuestionId(int id) throws Exception {
		return mapper.selectAnswerListByQuestionId(id);
	}

}
