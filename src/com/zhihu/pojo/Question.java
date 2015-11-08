package com.zhihu.pojo;

import java.util.List;

public class Question {
	private int id;
	private String name;
	private Integer authorId;
	private String followed;
	private String description;
	private String topicNames;
	private boolean unnamed;
	private Integer answerCount;
	private List<Topic> topics;
	
	public List<Topic> getTopics() {
		return topics;
	}
	public void setTopics(List<Topic> topics) {
		this.topics = topics;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getAuthorId() {
		return authorId;
	}
	public void setAuthorId(Integer authorId) {
		this.authorId = authorId;
	}
	public String getFollowed() {
		return followed;
	}
	public void setFollowed(String followed) {
		this.followed = followed;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTopicNames() {
		return topicNames;
	}
	public void setTopicNames(String topicNames) {
		this.topicNames = topicNames;
	}
	public boolean isUnnamed() {
		return unnamed;
	}
	public void setUnnamed(boolean unnamed) {
		this.unnamed = unnamed;
	}
	public Integer getAnswerCount() {
		return answerCount;
	}
	public void setAnswerCount(Integer answerCount) {
		this.answerCount = answerCount;
	}
	
}
