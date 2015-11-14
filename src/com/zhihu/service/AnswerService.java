package com.zhihu.service;

import java.util.List;

import com.zhihu.pojo.Answer;
import com.zhihu.pojo.Question;
import com.zhihu.pojo.User;

public interface AnswerService {
	List<Answer> selectAnswerListByQuestionId(int id,int currentUserId) throws Exception;

	boolean likeAnswer(Integer answerId, int userId) throws Exception;
	
	boolean unlikeAnswer(Integer answerId, int userId) throws Exception;
	
	boolean opposeAnswer(Integer answerId, int userId) throws Exception;
	
	boolean unopposeAnswer(Integer answerId, int userId) throws Exception;

	List<Integer> getVoterIds(int parseInt) throws Exception;

	boolean addAnswer(int questionId, int currentUserId, String answer) throws Exception;

	boolean isAnsweredQuestion(int parseInt, int currentUserId) throws Exception;
	
	boolean updateAnswer(int questionId,int userid,String answer) throws Exception;

	List<User> getLatest3Voter(int parseInt) throws Exception;
}
