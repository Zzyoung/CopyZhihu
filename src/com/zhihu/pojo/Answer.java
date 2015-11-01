package com.zhihu.pojo;

import java.util.Date;

public class Answer {
	private Integer id;
	private Integer authorId;
	private String content;
	private Date answerTime;
	private Integer questionId;
	private Integer votes;
	private String thanks;
	private String oppose;
	private String unhelpful;
	private boolean unnamed;
	
	public boolean isUnnamed() {
		return unnamed;
	}
	public void setUnnamed(boolean unnamed) {
		this.unnamed = unnamed;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getAuthorId() {
		return authorId;
	}
	public void setAuthorId(Integer authorId) {
		this.authorId = authorId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getAnswerTime() {
		return answerTime;
	}
	public void setAnswerTime(Date answerTime) {
		this.answerTime = answerTime;
	}
	public Integer getQuestionId() {
		return questionId;
	}
	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}
	public Integer getVotes() {
		return votes;
	}
	public void setVotes(Integer votes) {
		this.votes = votes;
	}
	public String getThanks() {
		return thanks;
	}
	public void setThanks(String thanks) {
		this.thanks = thanks;
	}
	public String getOppose() {
		return oppose;
	}
	public void setOppose(String oppose) {
		this.oppose = oppose;
	}
	public String getUnhelpful() {
		return unhelpful;
	}
	public void setUnhelpful(String unhelpful) {
		this.unhelpful = unhelpful;
	}
	
}
