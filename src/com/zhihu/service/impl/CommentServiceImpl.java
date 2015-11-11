package com.zhihu.service.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.CommentMapper;
import com.zhihu.pojo.Comment;
import com.zhihu.pojo.UserCommentRelation;
import com.zhihu.service.CommentService;
import com.zhihu.utils.Constant;
import com.zhihu.utils.Utils;
@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentMapper commentMapper;
	
	@Override
	public List<Comment> getCommentsByAnswerId(int id) throws Exception {
		List<Comment> comments = commentMapper.getCommentsByAnswerId(id);
		for (Comment comment : comments) {
			comment.setVoterIds(commentMapper.selectWhoLikeComment(comment.getId()));
		}
		return comments;
	}
	
	@Override
	public List<Comment> getAllCommentsByAnswerId(int id) throws Exception {
		List<Comment> comments = commentMapper.getAllCommentsByAnswerId(id);
		for (Comment comment : comments) {
			comment.setVoterIds(commentMapper.selectWhoLikeComment(comment.getId()));
		}
		return comments;
	}
	
	@Override
	public List<Integer> getVoterIds(int commentId) throws Exception {
		return commentMapper.selectWhoLikeComment(commentId);
	}
	
	@Override
	public int insertComment(Comment comment) throws Exception {
		comment.setContent(Utils.filterBr(comment.getContent()));
		return commentMapper.insertComment(comment);
	}

	@Override
	public void likeComment(int commentId, int currentUserId) throws Exception {
		//检查关系表，如果已经赞过了，则返回
		UserCommentRelation relation = new UserCommentRelation();
		relation.setAction(Constant.USER_LIKE_COMMENT);
		relation.setUserId(currentUserId);
		relation.setCommentId(commentId);
		relation.setTime(new Date());
		boolean haveLiked = checkUserHaveLikedComment(relation);
		if(haveLiked){
			return;
		}
		HashMap<String,Integer> param = new HashMap<String, Integer>();
		param.put("commentId", commentId);
		commentMapper.addVoteCount(param);
		
		commentMapper.insertUserCommentRelation(relation);
	}

	@Override
	public void unlikeComment(int commentId, int currentUserId)
			throws Exception {
		//检查关系表，如果还没有赞过，则返回
		UserCommentRelation relation = new UserCommentRelation();
		relation.setAction(Constant.USER_LIKE_COMMENT);
		relation.setUserId(currentUserId);
		relation.setCommentId(commentId);
		relation.setTime(new Date());
		boolean haveLiked = checkUserHaveLikedComment(relation);
		if(!haveLiked){
			return;
		}
		HashMap<String,Integer> param = new HashMap<String, Integer>();
		param.put("commentId", commentId);
		commentMapper.subVoteCount(param);
		
		commentMapper.deleteUserCommentRelation(relation);
	}
	
	private boolean checkUserHaveLikedComment(UserCommentRelation relation) throws Exception{
		int count = commentMapper.selectUserCountFromRelation(relation);
		return count > 0;
	}

	@Override
	public int selectVoteCountByCommentId(int id) throws Exception {
		return commentMapper.selectVoteCountByCommentId(id);
	}

	@Override
	public boolean deleteComment(int commentId, int currentUserId)
			throws Exception {
		Comment comment = new Comment();
		comment.setId(commentId);
		comment.setAuthorId(currentUserId);
		int count = commentMapper.deleteComment(comment);
		return count == 1;
	}


}
