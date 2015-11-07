package com.zhihu.pojo;

import java.util.Date;
import java.util.List;

public class Feed {
	private FeedSource source;//来源
	private String question;//问题
	private String questionUrl;//问题url
	private String questionDesc;//问题描述
	private Integer voteCount;//答案赞同数量
	private Answer answer;//答案
	private boolean isShowComments = false;
	private boolean isAddingComment = false;
	private boolean hideQuestionDesc = true;
	private boolean answerExpanded = false;
	private List<User> voters;//赞同者
	private List<Comment> comments;//评论
	
	
	public FeedSource getSource() {
		return source;
	}
	public void setSource(FeedSource source) {
		this.source = source;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getQuestionUrl() {
		return questionUrl;
	}
	public void setQuestionUrl(String questionUrl) {
		this.questionUrl = questionUrl;
	}
	public String getQuestionDesc() {
		return questionDesc;
	}
	public void setQuestionDesc(String questionDesc) {
		this.questionDesc = questionDesc;
	}
	public Integer getVoteCount() {
		return voteCount;
	}
	public void setVoteCount(Integer voteCount) {
		this.voteCount = voteCount;
	}
	public Answer getAnswer() {
		return answer;
	}
	public void setAnswer(Answer answer) {
		this.answer = answer;
	}
	public boolean isShowComments() {
		return isShowComments;
	}
	public void setShowComments(boolean isShowComments) {
		this.isShowComments = isShowComments;
	}
	public boolean isAddingComment() {
		return isAddingComment;
	}
	public void setAddingComment(boolean isAddingComment) {
		this.isAddingComment = isAddingComment;
	}
	public boolean isHideQuestionDesc() {
		return hideQuestionDesc;
	}
	public void setHideQuestionDesc(boolean hideQuestionDesc) {
		this.hideQuestionDesc = hideQuestionDesc;
	}
	public boolean isAnswerExpanded() {
		return answerExpanded;
	}
	public void setAnswerExpanded(boolean answerExpanded) {
		this.answerExpanded = answerExpanded;
	}
	public List<User> getVoters() {
		return voters;
	}
	public void setVoters(List<User> voters) {
		this.voters = voters;
	}
	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	
}
