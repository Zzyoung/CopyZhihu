package com.zhihu.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.zhihu.pojo.Topic;

public interface TopicMapper {
	ArrayList<Topic> selectTopicsLikeName(HashMap<String,String> param) throws Exception;

	Topic selectTopicByName(String name) throws Exception;
}
