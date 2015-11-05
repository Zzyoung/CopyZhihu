package com.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.AnswerMapper;
import com.zhihu.dao.CommentMapper;
import com.zhihu.dao.UserMapper;
import com.zhihu.pojo.Answer;
import com.zhihu.pojo.User;
import com.zhihu.service.AnswerService;

@Service
public class AnswerServiceImpl implements AnswerService {

	@Autowired
	private AnswerMapper mapper;
	
	@Autowired 
	private UserMapper userMapper;
	
	@Autowired 
	private CommentMapper commentMapper;
	
	@Override
	public List<Answer> selectAnswerListByQuestionId(int id) throws Exception {
		List<Answer> answers = mapper.selectAnswerListByQuestionId(id);
		for (Answer answer : answers) {
			User author = userMapper.getUserById(answer.getAuthorId());
			author.setPassword("");
			answer.setAuthor(author);
			List<User> voters = mapper.selectWhoLikeAnswer(answer.getId());
			answer.setVoters(voters);
			answer.setCommentsCount(commentMapper.getCommentsCountByAnswerId(answer.getId()));
			answer.setAnswerId(answer.getId());
		}
		return answers;
	}

}
