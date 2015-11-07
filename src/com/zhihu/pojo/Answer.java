package com.zhihu.pojo;

import java.util.Date;
import java.util.List;

public class Answer {
	private Integer id;
	private Integer authorId;
	private String content;
	private Date answerTime;
	private Integer questionId;
	private Integer voteCount;
	private String thanks;
	private String oppose;
	private String unhelpful;
	private boolean unnamed;
	private User author;
	private List<User> voters;
	private Integer relationWithCurrentUser;
	private Integer commentsCount;
	
	public Integer getRelationWithCurrentUser() {
		return relationWithCurrentUser;
	}
	public void setRelationWithCurrentUser(Integer relationWithCurrentUser) {
		this.relationWithCurrentUser = relationWithCurrentUser;
	}
	public Integer getCommentsCount() {
		return commentsCount;
	}
	public void setCommentsCount(Integer commentsCount) {
		this.commentsCount = commentsCount;
	}
	public List<User> getVoters() {
		return voters;
	}
	public void setVoters(List<User> voters) {
		this.voters = voters;
	}
	public User getAuthor() {
		return author;
	}
	public void setAuthor(User author) {
		this.author = author;
	}
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
	public Integer getVoteCount() {
		return voteCount;
	}
	public void setVoteCount(Integer voteCount) {
		this.voteCount = voteCount;
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
