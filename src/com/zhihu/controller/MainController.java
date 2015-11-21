package com.zhihu.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.zhihu.pojo.Comment;
import com.zhihu.pojo.Feed;
import com.zhihu.pojo.User;
import com.zhihu.service.AnswerService;
import com.zhihu.service.CommentService;
import com.zhihu.service.QuestionService;
import com.zhihu.utils.Utils;

@Controller("mainController")
@RequestMapping(value = "/")
public class MainController {
	
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private AnswerService answerService;
	
	private final static Logger logger = LoggerFactory.getLogger(MainController.class);
	
	//loadMainContents
	@RequestMapping(value="loadMainContents",method = RequestMethod.GET)
	public void showQuestion(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		try {
			List<Feed> feeds = questionService.getMainContents(currentUserId);
			//关闭循环引用检测
			String results = JSON.toJSONString(feeds,SerializerFeature.DisableCircularReferenceDetect);
			response.getWriter().write(results);
			
		} catch (Exception e) {
			logger.error("获取主页内容出错",e);
		}
	}
	
	@RequestMapping(value="addNewComment",method = RequestMethod.POST)
	public void addNewComment(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String content = request.getParameter("comment");
		String answerId = request.getParameter("answerId");
		content = new String(content.getBytes("ISO8859-1"),"UTF-8");
		Comment comment = new Comment();
		comment.setAnswerId(Integer.parseInt(answerId));
		comment.setAuthorId(Integer.parseInt(request.getSession().getAttribute("id").toString()));
		comment.setContent(content);
		comment.setVoteCount(0);
		comment.setTime(new Date());
		commentService.insertComment(comment);
		
	}
	
	@RequestMapping(value="getComments",method = RequestMethod.GET)
	public void queryComments(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		String id = request.getParameter("id");
		if(Utils.isEmpty(id)){
			return;
		}
		List<Comment> comments = commentService.getCommentsByAnswerId(Integer.parseInt(id));
		response.getWriter().write(JSON.toJSONString(comments));
	}
	
	@RequestMapping(value="getAllComments",method = RequestMethod.GET)
	public void getAllComments(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		String id = request.getParameter("id");
		if(Utils.isEmpty(id)){
			return;
		}
		List<Comment> comments = commentService.getAllCommentsByAnswerId(Integer.parseInt(id));
		response.getWriter().write(JSON.toJSONString(comments));
	}
	
	@RequestMapping(value="replyComment",method = RequestMethod.POST)
	public void replyComment(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		String commentId = request.getParameter("id");
		String content = request.getParameter("content");
		String answerId = request.getParameter("answerId");
		
		if(Utils.isEmpty(commentId) || Utils.isEmpty(content) || Utils.isEmpty(answerId)){
			return;
		}
		
		content = new String(content.getBytes("ISO8859-1"),"UTF-8");
		Comment comment = new Comment();
		comment.setAuthorId(Integer.parseInt(request.getSession().getAttribute("id").toString()));
		comment.setContent(content);
		comment.setVoteCount(0);
		comment.setAnswerId(Integer.parseInt(answerId));
		comment.setReplyId(Integer.parseInt(commentId));
		comment.setTime(new Date());
		commentService.insertComment(comment);
	}
	
	@RequestMapping(value="likeComment",method = RequestMethod.POST)
	public void likeComment(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		String commentId = request.getParameter("id");
		if(Utils.isEmpty(commentId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		commentService.likeComment(Integer.parseInt(commentId),currentUserId);
	}

	@RequestMapping(value="unlikeComment",method = RequestMethod.POST)
	public void unlikeComment(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		String commentId = request.getParameter("id");
		if(Utils.isEmpty(commentId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		commentService.unlikeComment(Integer.parseInt(commentId),currentUserId);
	}
	
	@RequestMapping(value="getVoteCount",method = RequestMethod.GET)
	public void getVoteCount(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String commentId = request.getParameter("id");
		if(Utils.isEmpty(commentId)){
			return;
		}
		
		int voteCount = commentService.selectVoteCountByCommentId(Integer.parseInt(commentId));
		response.getWriter().write(JSON.toJSONString(voteCount));
	}
	
	@RequestMapping(value="getVoterIds",method = RequestMethod.GET)
	public void getVoterIds(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String commentId = request.getParameter("id");
		if(Utils.isEmpty(commentId)){
			return;
		}
		
		List<Integer> voterIds = commentService.getVoterIds(Integer.parseInt(commentId));
		response.getWriter().write(JSON.toJSONString(voterIds));
		
	}
	
	@RequestMapping(value="getLatest3Voter",method = RequestMethod.GET)
	public void getLatest3Voter(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		List<User> voters = answerService.getLatest3Voter(Integer.parseInt(answerId));
		response.getWriter().write(JSON.toJSONString(voters));
	}
	
	@RequestMapping(value="likeAnswer",method = RequestMethod.POST)
	public void likeAnswer(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		boolean isSuccess = answerService.likeAnswer(Integer.parseInt(answerId),currentUserId);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
	@RequestMapping(value="unlikeAnswer",method = RequestMethod.POST)
	public void unlikeAnswer(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		boolean isSuccess = answerService.unlikeAnswer(Integer.parseInt(answerId),currentUserId);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
	
	@RequestMapping(value="opposeAnswer",method = RequestMethod.POST)
	public void opposeAnswer(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		boolean isSuccess = answerService.opposeAnswer(Integer.parseInt(answerId),currentUserId);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
	
	@RequestMapping(value="unopposeAnswer",method = RequestMethod.POST)
	public void unopposeAnswer(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		boolean isSuccess = answerService.unopposeAnswer(Integer.parseInt(answerId),currentUserId);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
	
	@RequestMapping(value="getAnswerVoterIds",method = RequestMethod.GET)
	public void getAnswerVoterIds(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		List<Integer> voterIds = answerService.getVoterIds(Integer.parseInt(answerId));
		response.getWriter().write(JSON.toJSONString(voterIds));
	}
	
	@RequestMapping(value="getAnswerVoterCount",method = RequestMethod.GET)
	public void getAnswerVoterCount(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String answerId = request.getParameter("id");
		if(Utils.isEmpty(answerId)){
			return;
		}
		
		List<Integer> voterIds = answerService.getVoterIds(Integer.parseInt(answerId));
		int voterCount = voterIds.size();
		response.getWriter().write(JSON.toJSONString(voterCount));
	}
	
	@RequestMapping(value="addAnswer",method = RequestMethod.POST)
	public void addAnswer(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String questionId = request.getParameter("questionId");
		if(Utils.isEmpty(questionId)){
			return;
		}
		String answer = request.getParameter("answer");
		answer = new String(answer.getBytes("ISO8859-1"),"UTF-8");
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		logger.info("用户Id为["+currentUserId+"]的用户回答了ID为["+questionId+"]的问题，答案是："+answer);
		
		boolean isSuccess = answerService.addAnswer(Integer.parseInt(questionId),currentUserId,answer);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
	
	
	@RequestMapping(value="isAnsweredQuestion",method = RequestMethod.GET)
	public void isAnsweredQuestion(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String questionId = request.getParameter("questionId");
		if(Utils.isEmpty(questionId)){
			return;
		}
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		boolean isAnswered = answerService.isAnsweredQuestion(Integer.parseInt(questionId),currentUserId);
		response.getWriter().write(JSON.toJSONString(isAnswered));
	}
	
	@RequestMapping(value="updateAnswer",method = RequestMethod.POST)
	public void updateAnswer(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String questionId = request.getParameter("questionId");
		if(Utils.isEmpty(questionId)){
			return;
		}
		String answer = request.getParameter("answer");
		answer = new String(answer.getBytes("ISO8859-1"),"UTF-8");
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		
		boolean isSuccess = answerService.updateAnswer(Integer.parseInt(questionId),currentUserId,answer);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
	
	@RequestMapping(value="deleteComment",method = RequestMethod.POST)
	public void deleteComment(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		String commentId = request.getParameter("id");
		if(Utils.isEmpty(commentId)){
			return;
		}
		
		int currentUserId = Integer.parseInt(request.getSession().getAttribute("id").toString());
		
		boolean isSuccess = commentService.deleteComment(Integer.parseInt(commentId),currentUserId);
		response.getWriter().write(JSON.toJSONString(isSuccess));
	}
}

