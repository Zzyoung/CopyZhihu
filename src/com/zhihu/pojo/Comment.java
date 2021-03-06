package com.zhihu.pojo;

import java.util.Date;
import java.util.List;

public class Comment {
	private Integer id;
	private String authorName;
	private String authorPhoto;
	private String authorUrl;
	private Integer authorId;
	private String content;
	private Integer voteCount;
	private Integer replyId = 0;
	private String replyName;
	private String replyUrl;
	private Integer answerId;
	private Integer questionId;
	private Date time;
	private List<Integer> voterIds;
	
	public List<Integer> getVoterIds() {
		return voterIds;
	}
	public void setVoterIds(List<Integer> voterIds) {
		this.voterIds = voterIds;
	}
	public String getReplyName() {
		return replyName;
	}
	public void setReplyName(String replyName) {
		this.replyName = replyName;
	}
	public String getReplyUrl() {
		return replyUrl;
	}
	public void setReplyUrl(String replyUrl) {
		this.replyUrl = replyUrl;
	}
	public String getAuthorUrl() {
		return authorUrl;
	}
	public void setAuthorUrl(String authorUrl) {
		this.authorUrl = authorUrl;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getAuthorPhoto() {
		return authorPhoto;
	}
	public void setAuthorPhoto(String authorPhoto) {
		this.authorPhoto = authorPhoto;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public Integer getAnswerId() {
		return answerId;
	}
	public void setAnswerId(Integer answerId) {
		this.answerId = answerId;
	}
	public Integer getQuestionId() {
		return questionId;
	}
	public void setQuestionId(Integer questionId) {
		this.questionId = questionId;
	}
	
	public Integer getReplyId() {
		return replyId;
	}
	public void setReplyId(Integer replyId) {
		this.replyId = replyId;
	}
	public Integer getAuthorId() {
		return authorId;
	}
	public void setAuthorId(Integer authorId) {
		this.authorId = authorId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getVoteCount() {
		return voteCount;
	}
	public void setVoteCount(Integer voteCount) {
		this.voteCount = voteCount;
	}
	
}
