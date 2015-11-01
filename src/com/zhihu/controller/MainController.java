package com.zhihu.controller;

import java.util.ArrayList;
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
import com.zhihu.pojo.FeedSourcePeople;
import com.zhihu.pojo.User;
import com.zhihu.service.QuestionService;

@Controller("mainController")
@RequestMapping(value = "/")
public class MainController {
	
	@Autowired
	private QuestionService questionService;
	
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
}
