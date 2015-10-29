package com.zhihu.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
}
