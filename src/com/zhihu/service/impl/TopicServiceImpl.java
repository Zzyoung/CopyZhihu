package com.zhihu.service.impl;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.zhihu.dao.TopicMapper;
import com.zhihu.pojo.Topic;
import com.zhihu.service.TopicService;
@Service
public class TopicServiceImpl implements TopicService {

	@Autowired
	private TopicMapper topicMapper;
	
	private final static Logger logger = LoggerFactory.getLogger(TopicServiceImpl.class);
	
	@Override
	public String selectTopicsLikeName(String name, String selectedTopicNames) throws Exception {
		logger.info("查询参数为："+name);
		HashMap<String, String> param = new HashMap<String,String>();
		name = name.replace("'", "");
		param.put("name", name);
		//A,B,C-->A','B','C
		selectedTopicNames = selectedTopicNames.replace(",", "','");
		param.put("filter", "'"+selectedTopicNames+"'");
		List<Topic> topics = topicMapper.selectTopicsLikeName(param );
		//下拉列表最多显示5条记录
		if(topics.size()>5){
			topics = topics.subList(0, 5);
		}
		return JSON.toJSONString(topics);
	}

}
