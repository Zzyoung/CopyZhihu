package com.zhihu.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.controller.MainController;
import com.zhihu.dao.AnswerMapper;
import com.zhihu.dao.CommentMapper;
import com.zhihu.dao.UserMapper;
import com.zhihu.pojo.Answer;
import com.zhihu.pojo.User;
import com.zhihu.pojo.UserAnswerRelation;
import com.zhihu.service.AnswerService;
import com.zhihu.utils.Constant;

@Service
public class AnswerServiceImpl implements AnswerService {

	@Autowired
	private AnswerMapper mapper;
	
	@Autowired 
	private UserMapper userMapper;
	
	@Autowired 
	private CommentMapper commentMapper;
	
	private final static Logger logger = LoggerFactory.getLogger(AnswerServiceImpl.class);
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

	@Override
	public boolean likeAnswer(Integer answerId, int userId)
			throws Exception {
		UserAnswerRelation relation = new UserAnswerRelation();
		relation.setAction(Constant.USER_OPPOSE_ANSWER);
		relation.setUserId(userId);
		relation.setAnswerId(answerId);
		try {
			//如果用户已经反对该答案，撤销反对
			mapper.deleteUserAnswerRelation(relation);
			//赞成答案，添加user_answer_relation
			relation.setAction(Constant.USER_LIKE_ANSWER);
			relation.setTime(new Date());
			mapper.insertUserAnswerRelation(relation);
			mapper.addVoteCount(relation);
		} catch (Exception e) {
			logger.error("用户赞同答案时出错",e);
			return false;
		}
		return true;
	}

	@Override
	public boolean unlikeAnswer(Integer answerId, int userId) throws Exception {
		UserAnswerRelation relation = new UserAnswerRelation();
		relation.setAction(Constant.USER_LIKE_ANSWER);
		relation.setUserId(userId);
		relation.setAnswerId(answerId);
		try{
			mapper.deleteUserAnswerRelation(relation);
			mapper.subVoteCount(relation);
		}catch (Exception e){
			logger.error("用户取消赞同答案时出错",e);
			return false;
		}
		return true;
	}

	@Override
	public boolean opposeAnswer(Integer answerId, int userId) throws Exception {
		UserAnswerRelation relation = new UserAnswerRelation();
		relation.setAction(Constant.USER_LIKE_ANSWER);
		relation.setUserId(userId);
		relation.setAnswerId(answerId);
		try{
			int count = mapper.deleteUserAnswerRelation(relation);
			if(count == 1){//如果该用户曾经赞同过，赞同数量-1
				mapper.subVoteCount(relation);
			}
			relation.setAction(Constant.USER_OPPOSE_ANSWER);
			relation.setTime(new Date());
			mapper.insertUserAnswerRelation(relation);
		}catch (Exception e){
			logger.error("用户反对同答案时出错",e);
			return false;
		}
		return true;
	}

	@Override
	public boolean unopposeAnswer(Integer answerId, int userId)	throws Exception {
		UserAnswerRelation relation = new UserAnswerRelation();
		relation.setAction(Constant.USER_OPPOSE_ANSWER);
		relation.setUserId(userId);
		relation.setAnswerId(answerId);
		try{
			mapper.deleteUserAnswerRelation(relation);
		}catch (Exception e){
			logger.error("用户撤销反对同答案时出错",e);
			return false;
		}
		return true;
	}

}
