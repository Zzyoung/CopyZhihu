package com.zhihu.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.alibaba.fastjson.JSON;
import com.zhihu.pojo.Comment;
import com.zhihu.pojo.Feed;
import com.zhihu.pojo.FeedSourcePeople;
import com.zhihu.pojo.User;

@Controller("mainController")
@RequestMapping(value = "/")
public class MainController {

	//loadMainContents
	@RequestMapping(value="loadMainContents",method = RequestMethod.GET)
	public void showQuestion(HttpServletRequest request,HttpServletResponse response) throws NumberFormatException, Exception {
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		List<Feed> feeds = new ArrayList<Feed>();
		for (int i = 0; i < 10; i++) {
			Feed feed = new Feed();
			FeedSourcePeople source = new FeedSourcePeople();
			source.setAction("回答了问题");
			source.setAvatarPicture("images/173df7a79b5a5f003fd5445bf72da99d_m.jpg");
			source.setName("小爝");
			source.setTime(new Date());
			source.setType("people");
			feed.setSource(source);
			feed.setPeople("小爝");
			feed.setPeopleDesc("http://www.tuer.me");
			feed.setAnswerTime(new Date());
			feed.setQuestion("如何在前端技术面试中回答“你遇到过最有挑战的技术问题”？");
			feed.setQuestionUrl("/Zhihu/question?id=22");
			feed.setQuestionDesc("平时没遇到过很有挑战的技术问题？想一想，google一下，stackoverflow一下基本就解决了。所以每次都会打“没有遇到过什么有挑战的问题”。不知道怎么回答比较好。请各位大牛指点一下。谢谢＼(*T▽T*)／");
			feed.setVoteCount(3);
			feed.setAnswer("解决了 不一定是最优解。说实话现在对于工程师来说这么难吗。");
			List<User> voters = new ArrayList<User>();
			for (int j = 0; j < 3; j++) {
				User user = new User();
				user.setName("张三"+j);
				user.setPhotoUrl("http://www.zhihu.com/people/song-ying-3-25");
			}
			List<Comment> comments = new ArrayList<Comment>();
			for (int j = 0; j < 3; j++) {
				Comment comment = new Comment();
				comment.setAuthor("李四"+j);
				comment.setContent("我是评论");
				comment.setVoteCount(2);
			}
			feeds.add(feed);
		}
		
		String results = JSON.toJSONString(feeds);
		response.getWriter().write(results);
	}
}
