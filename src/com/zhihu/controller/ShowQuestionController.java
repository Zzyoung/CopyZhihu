package com.zhihu.controller;

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

@Controller("ShowQuestionController")
@RequestMapping(value = "/")
public class ShowQuestionController {
	@Autowired
	private QuestionService questionService;
	
	@Autowired
	private TopicService topicService;
	
	private final static Logger logger = LoggerFactory.getLogger(ShowQuestionController.class);
	
	@RequestMapping(value="question",method = RequestMethod.GET)
	public void showQuestion(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		response.setContentType("text/html");
		request.setCharacterEncoding("UTF-8");
		String questionId = request.getParameter("id");
		request.setAttribute("id", request.getSession().getAttribute("id"));
		request.setAttribute("photoUrl", request.getSession().getAttribute("photoUrl"));
		request.setAttribute("userName", request.getSession().getAttribute("userName"));
		
		if(Utils.isEmpty(questionId)){
			response.sendRedirect(request.getContextPath()+"/404.html");
		}else{
			Question question = questionService.selectQuestionById(questionId);
			request.setAttribute("question", question);
			request.getRequestDispatcher("/WEB-INF/view/question.jsp").forward(request, response);
		}
		
	}
	
	@RequestMapping(value="getAnswerList",method = RequestMethod.GET)
	public void getAnswerList(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		
	}
}
