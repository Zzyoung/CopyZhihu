package com.zhihu.pojo;

public class Topic {
	private Integer id;
	private String name;
	private String description;
	private String parentIds;
	private String childIds;
	private String bestAnswers;
	private String photoUrl;
	
	public String getPhotoUrl() {
		return photoUrl;
	}
	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getParentIds() {
		return parentIds;
	}
	public void setParentIds(String parentIds) {
		this.parentIds = parentIds;
	}
	public String getChildIds() {
		return childIds;
	}
	public void setChildIds(String childIds) {
		this.childIds = childIds;
	}
	public String getBestAnswers() {
		return bestAnswers;
	}
	public void setBestAnswers(String bestAnswers) {
		this.bestAnswers = bestAnswers;
	}
	
}
