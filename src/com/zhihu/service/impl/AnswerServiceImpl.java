package com.zhihu.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public List<Answer> selectAnswerListByQuestionId(int id,int currentUserId) throws Exception {
		List<Answer> answers = mapper.selectAnswerListByQuestionId(id);
		for (Answer answer : answers) {
			User user = userMapper.getUserById(answer.getAuthorId());
			user.setPassword("");
			answer.setAuthor(user);
			List<User> voters = mapper.selectWhoLikeAnswer(answer.getId());
			answer.setVoteCount(voters.size());
			answer.setVoters(voters);
			answer.setCommentsCount(commentMapper.getCommentsCountByAnswerId(answer.getId()));
			UserAnswerRelation relation = new UserAnswerRelation();
			relation.setAnswerId(answer.getId());
			relation.setUserId(currentUserId);
			Integer relationType = mapper.selectAnswerUserRelation(relation);
			if(relationType==null){
				relationType = Constant.DEFAULT_USER_ANSWER_RELATION;
			}
			answer.setRelationWithCurrentUser(relationType);
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
			mapper.deleteUserAnswerRelation(relation);
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

	@Override
	public List<Integer> getVoterIds(int answerId) throws Exception {
		List<User> voters = mapper.selectWhoLikeAnswer(answerId);
		List<Integer> voterIds = new ArrayList<Integer>();
		for (User voter : voters) {
			voterIds.add(voter.getId());
		}
		return voterIds;
	}

}
