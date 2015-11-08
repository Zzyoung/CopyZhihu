package com.zhihu.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.zhihu.pojo.Question;
import com.zhihu.service.QuestionService;
import com.zhihu.service.TopicService;
import com.zhihu.utils.Utils;

@Controller("addQuestionController")
@RequestMapping(value = "/")
public class AddQuestionController {
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private TopicService topicService;
	
	private final static Logger logger = LoggerFactory.getLogger(AddQuestionController.class);
	
	@RequestMapping(value="getQuestionNames",method = RequestMethod.GET)
	public void getQuestionNames(HttpServletRequest request,HttpServletResponse response) throws IOException{
		response.setHeader("content-type", "text/html;charset=UTF-8");
		String name = request.getParameter("name");
		name = new String(name.getBytes("ISO8859-1"),"UTF-8");
		if(Utils.isEmpty(name)){
			return;
		}
		
		try {
			String questionNames = questionService.selectQuestionNamesAndAnswerCounts(name);
			response.getWriter().write(questionNames);
		} catch (Exception e) {
			logger.error("查询问题名字出错",e);
			try {
				response.getWriter().write("error");
			} catch (IOException e1) {
				logger.error("关闭输出流失败",e);
			}
		}
		
	}
	
	@RequestMapping(value="getTopicNameAndPhoto",method = RequestMethod.GET)
	public void getTopicNameAndPhoto(HttpServletRequest request,HttpServletResponse response) throws IOException{
		response.setHeader("content-type", "text/html;charset=UTF-8");
		String name = request.getParameter("name");
		name = new String(name.getBytes("ISO8859-1"),"UTF-8");
		String selectedTopicNames = request.getParameter("selected");
		selectedTopicNames = new String(selectedTopicNames.getBytes("ISO8859-1"),"UTF-8");
		logger.info("已经选择（需要过滤）的话题名字："+selectedTopicNames);
		if(Utils.isEmpty(name)){
			return;
		}
		
		try {
			String topicNamePhotos = topicService.selectTopicsLikeName(name, selectedTopicNames);
			response.getWriter().write(topicNamePhotos);
		} catch (Exception e) {
			logger.error("查询话题名字、照片路径出错",e);
			try {
				response.getWriter().write("error");
			} catch (IOException e1) {
				logger.error("关闭输出流失败",e);
			}
		}
		
	}

	@RequestMapping(value="addQuestion",method = RequestMethod.POST)
	public void addQuestion(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		response.setContentType("text/html");
		request.setCharacterEncoding("UTF-8");
		String questionName = request.getParameter("name")==null ? "" : request.getParameter("name");
		String questionDesc = request.getParameter("questionDesc")==null ? "" : request.getParameter("questionDesc");
		String selectedTopicNames = request.getParameter("selected")==null ? "" : request.getParameter("selected");
		String authorId = request.getParameter("id");
		boolean unnamed = Boolean.valueOf(request.getParameter("unnamed"));
		questionName = new String(questionName.getBytes("ISO8859-1"),"UTF-8");
		questionDesc = new String(questionDesc.getBytes("ISO8859-1"),"UTF-8");
		selectedTopicNames = new String(selectedTopicNames.getBytes("ISO8859-1"),"UTF-8");
		
		Question question = new Question();
		question.setName(questionName);
		question.setAuthorId(Integer.parseInt(authorId));
		question.setDescription(questionDesc);
		question.setTopicNames(selectedTopicNames);
		question.setUnnamed(unnamed);
		
		int questionId = questionService.insertQuestion(question);
		logger.info("新添加的问题的id为："+questionId);
		if(questionId == -1){
			logger.error("添加问题失败");
		}else{
			question.setId(questionId);
			request.setAttribute("question", question);
			logger.info("跳转到问题页面...");
			response.getWriter().write("{\"id\":"+questionId+"}");
			return;
		}
		
	}

}
