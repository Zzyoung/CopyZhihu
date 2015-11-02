package com.zhihu.service;

import java.util.List;

import com.zhihu.pojo.Comment;

public interface CommentService {
	List<Comment> getCommentsByAnswerId(int id) throws Exception;
	
	int insertCommentForAnswer(Comment comment) throws Exception;
}
