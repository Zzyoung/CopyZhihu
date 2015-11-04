package com.zhihu.dao;

import java.util.HashMap;
import java.util.List;

import com.zhihu.pojo.Comment;
import com.zhihu.pojo.UserCommentRelation;

public interface CommentMapper {
	List<Comment> getCommentsByAnswerId(int id) throws Exception;
	
	List<Comment> getAllCommentsByAnswerId(int id) throws Exception;
	
	int insertComment(Comment comment) throws Exception;
	
	int getCommentsCountByAnswerId(int id) throws Exception;

	int selectVoteCountByCommentId(int id) throws Exception;
	
	int addVoteCount(HashMap<String, Integer> param) throws Exception;
	
	int subVoteCount(HashMap<String, Integer> param) throws Exception;
	
	int insertUserCommentRelation(UserCommentRelation relation) throws Exception;
	
	int deleteUserCommentRelation(UserCommentRelation relation) throws Exception;
	
	int selectUserCountFromRelation(UserCommentRelation relation) throws Exception;
	
	List<Integer> selectWhoLikeComment(int commentId) throws Exception;
}
