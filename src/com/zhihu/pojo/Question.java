package com.zhihu.pojo;

public class Question {
	private int id;
	private String name;
	private String authorId;
	private String followed;
	private String description;
	private String topicIds;
	private boolean unnamed;
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
	public String getAuthorId() {
		return authorId;
	}
	public void setAuthorId(String authorId) {
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
	public String getTopicIds() {
		return topicIds;
	}
	public void setTopicIds(String topicIds) {
		this.topicIds = topicIds;
	}
	public boolean isUnnamed() {
		return unnamed;
	}
	public void setUnnamed(boolean unnamed) {
		this.unnamed = unnamed;
	}
}
