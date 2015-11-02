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
	public List<Feed> getMainContents() throws Exception {
		List<Question> hotQuestions = questionMapper.selectHotterQuestion();
		List<Feed> mainContents = new ArrayList<Feed>();
		for (Question question : hotQuestions) {
			Feed feed = new Feed();
			FeedSourcePeople source = new FeedSourcePeople();
			feed.setQuestion(question.getName());
			feed.setQuestionUrl(Constant.APP_CONTEXT+"/question?id="+question.getId());
			feed.setQuestionDesc(question.getDescription());
			Answer answer = answerMapper.selectAnswerByQuestionId(question);
			feed.setAnswerTime(answer.getAnswerTime());
			feed.setVoteCount(answer.getVotes());
			feed.setAnswer(answer.getContent());
			feed.setUnnamed(answer.isUnnamed());
			feed.setAnswerId(answer.getId());
			User user = userMapper.getUserById(answer.getAuthorId());
			feed.setPeople(user.getName());
			feed.setPeopleDesc(user.getSummary());
			//设置消息来源
			source.setAction("回答了问题");
			source.setName(user.getName());
			source.setTime(answer.getAnswerTime());
			source.setType("people");
			source.setAvatarPicture(user.getPhotoUrl());
			source.setSourceUrl(user.getHomeUrl());
			feed.setSource(source);
			int commentsCount = commentMapper.getCommentsCountByAnswerId(answer.getId());
			feed.setCommentsCount(commentsCount);
//			List<Comment> comments = commentMapper.getCommentsByAnswerId(answer.getId());
//			if (comments != null && comments.size() > 0) {
//				feed.setComments(comments);
//			}
			mainContents.add(feed);
		}
		return mainContents;
	}
	
}
