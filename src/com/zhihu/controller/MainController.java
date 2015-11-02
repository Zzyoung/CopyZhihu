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
import com.zhihu.pojo.Comment;
import com.zhihu.pojo.Feed;
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
	
	private final static Logger logger = LoggerFactory.getLogger(MainController.class);
	
	//loadMainContents
	@RequestMapping(value="loadMainContents",method = RequestMethod.GET)
	public void showQuestion(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		List<Feed> feeds = questionService.getMainContents();
		
		String results = JSON.toJSONString(feeds);
		response.getWriter().write(results);
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
		commentService.insertCommentForAnswer(comment );
		
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
	
	
}
