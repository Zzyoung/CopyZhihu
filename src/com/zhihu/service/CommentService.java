package com.zhihu.service;

import java.util.List;

import com.zhihu.pojo.Comment;

public interface CommentService {
	List<Comment> getCommentsByAnswerId(int id) throws Exception;
	
	List<Comment> getAllCommentsByAnswerId(int id) throws Exception;
	
	int insertComment(Comment comment) throws Exception;

	void likeComment(int commentId, int currentUserId) throws Exception;
	
	void unlikeComment(int commentId, int currentUserId) throws Exception;
	
	int selectVoteCountByCommentId(int id) throws Exception;

	List<Integer> getVoterIds(int commentId)throws Exception;
}
