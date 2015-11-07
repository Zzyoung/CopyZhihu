package com.zhihu.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.zhihu.dao.AnswerMapper;
import com.zhihu.dao.CommentMapper;
import com.zhihu.dao.QuestionMapper;
import com.zhihu.dao.UserMapper;
import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Comment;
import com.zhihu.pojo.Feed;
import com.zhihu.pojo.FeedSourcePeople;
import com.zhihu.pojo.Question;
import com.zhihu.pojo.User;
import com.zhihu.pojo.UserAnswerRelation;
import com.zhihu.service.QuestionService;
import com.zhihu.utils.Constant;
@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionMapper questionMapper;
	
	@Autowired
	private AnswerMapper answerMapper;
	
	@Autowired
	private UserMapper userMapper;
	
	@Autowired
	private CommentMapper commentMapper;
	
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

	@Override
	public List<Feed> getMainContents(int currentUserId) throws Exception {
		List<Question> hotQuestions = questionMapper.selectHotterQuestion();
		List<Feed> mainContents = new ArrayList<Feed>();
		for (Question question : hotQuestions) {
			Feed feed = new Feed();
			FeedSourcePeople source = new FeedSourcePeople();
			feed.setQuestion(question.getName());
			feed.setQuestionUrl(Constant.APP_CONTEXT+"/question?id="+question.getId());
			feed.setQuestionDesc(question.getDescription());
			//fill answer
			Answer answer = answerMapper.selectAnswerByQuestionId(question);
			UserAnswerRelation relation = new UserAnswerRelation();
			relation.setAnswerId(answer.getId());
			relation.setUserId(currentUserId);
			Integer relationType = answerMapper.selectAnswerUserRelation(relation);
			if(relationType==null){
				relationType = Constant.DEFAULT_USER_ANSWER_RELATION;
			}
			answer.setRelationWithCurrentUser(relationType);
			List<User> voters = answerMapper.selectWhoLikeAnswer(answer.getId());
			answer.setVoters(voters);
			answer.setVoteCount(voters.size());
			User author = userMapper.getUserById(answer.getAuthorId());
			author.setPassword("");
			answer.setAuthor(author);
			int commentsCount = commentMapper.getCommentsCountByAnswerId(answer.getId());
			answer.setCommentsCount(commentsCount);
			feed.setAnswer(answer);
			//fill source
			source.setAction("回答了问题");
			source.setName(author.getName());
			source.setTime(answer.getAnswerTime());
			source.setType("people");
			source.setAvatarPicture(author.getPhotoUrl());
			source.setSourceUrl(author.getHomeUrl());
			feed.setSource(source);
			mainContents.add(feed);
		}
		return mainContents;
	}
	
}
