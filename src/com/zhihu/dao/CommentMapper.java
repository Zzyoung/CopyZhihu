package com.zhihu.dao;

import java.util.List;

import com.zhihu.pojo.Comment;

public interface CommentMapper {
	List<Comment> getCommentsByAnswerId(int id) throws Exception;
	
	int insertCommentForAnswer(Comment comment) throws Exception;
	
	int getCommentsCountByAnswerId(int id) throws Exception;
}
