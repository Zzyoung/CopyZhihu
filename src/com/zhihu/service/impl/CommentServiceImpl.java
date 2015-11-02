package com.zhihu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.CommentMapper;
import com.zhihu.pojo.Comment;
import com.zhihu.service.CommentService;
@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	private CommentMapper commentMapper;
	
	@Override
	public List<Comment> getCommentsByAnswerId(int id) throws Exception {
		return commentMapper.getCommentsByAnswerId(id);
	}

	@Override
	public int insertCommentForAnswer(Comment comment) throws Exception {
		return commentMapper.insertCommentForAnswer(comment);
	}

}
