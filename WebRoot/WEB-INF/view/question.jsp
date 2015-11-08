<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" class="no-touch"  ng-app="zhihu">
<head>
<meta charset="UTF-8">
<title>${question.name }</title>
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="styles/reset.css">
<link rel="stylesheet" href="styles/index.css">
</head>
<body class="zhi">
	<%@ include file="navigation.jsp" %>
	<div ng-controller="QuestionController" class="zg-wrap zu-main question-page" id="zh-single-question-page">
		<div class="zu-main-content">
			<div class="zu-main-content-inner with-indention-votebar">
				<div class="zm-tag-editor zg-section">
					<div class="zm-tag-editor-labels zg-clear">
						<a class="zm-item-tag" href="/topic/19591985" ng-repeat="topic in ctrl.currentQuestionTopicNames"> {{topic}} </a> 
						<a href="javascript:;" class="zu-edit-button"><i class="zu-edit-button-icon"></i>修改</a>
					</div>
				</div>
				<div id="zh-question-title">
					<h2 class="zm-item-title zm-editable-content">
						${question.name }<a href="javascript:;" class="zu-edit-button"><i class="zu-edit-button-icon"></i>修改</a>
					</h2>
				</div>
				<div id="zh-question-detail" class="zm-item-rich-text">
					<div class="zm-editable-content">
						${question.description }<a href="javascript:;" class="zu-edit-button"><i class="zu-edit-button-icon"></i>修改</a>
					</div>
				</div>
				<div class="zm-item-meta zm-item-comment-el clearfix" id="zh-question-meta-wrap">
					<div class="zm-meta-panel">
						<a href="#" name="report-question" class="report zg-right"> <i class="z-icon-no-help"></i>举报</a> 
						<a href="#" name="addcomment" class="toggle-comment meta-item"> <i class="z-icon-comment"></i>添加评论</a> 
						<a href="#" name="share" class="share meta-item"> <i class="z-icon-share"></i>分享 </a> 
						<span class="zg-bull">&bull;</span>
						<a href="#" name="invite" class="meta-item" ng-click="ctrl.toggleInvitePanel()">{{ctrl.showInvitePanel?'收起邀请':'邀请回答'}}</a> 
						<span class="zg-bull">&bull;</span> 
						<a href="#" name="remove" class="meta-item">删除问题</a>
					</div>
					<div class="panel-container" ng-show="ctrl.showInvitePanel">
						<div class="question-invite-panel" id="question-invite-panel" style="display: block;">
							<i class="icon icon-spike"></i>
							<div class="invite-title">
								<span class="input-wrapper"> 
									<input type="text" placeholder="搜索你想邀请的人" class="search-input zg-form-text-input" data-tip="s$t$也可以搜索职业、公司等资料" autocomplete="off" >
									<i class="zg-icon icon-magnify"></i>
								</span>
								<i class="spinner-gray"></i>
								<span class="invite-status"> 你可以邀请 6 人回答该问题 </span>
							</div>
							<div class="suggest-persons-wrapper">
								<ul class="suggest-persons">
									<li class="person">
										<a title="陈冯" data-tip="p$t$chen-feng-47-65-6" class="zm-item-link-avatar" href="/people/chen-feng-47-65-6"> 
											<img src="images/0a0c041d2047f75e9ed5709dc6f89ec8_is.jpg" class="zm-item-img-avatar"> 
										</a>
										<div class="content">
											<button class="invite-button zg-btn zg-btn-green">邀请回答</button>
											<div class="describe">
												<a data-tip="p$t$chen-feng-47-65-6" href="http://www.zhihu.com/people/chen-feng-47-65-6" class="zg-link">陈冯</a>
												<span class="bio hidden-phone" title="一旦开始思考，便会显露自己的浅薄">，一旦开始思考，便会显露自己的浅薄</span>
											</div>
											<div class="reason">
												在 <a href="/people/chen-feng-47-65-6/topic/19665348/answers" data-tip="t$t$19665348" > 动漫推荐 </a> 话题下有 13 个回答
											</div>
										</div>
									</li>
									<li class="person">
										<a title="王昊" data-tip="p$t$xie-luo-99-67" class="zm-item-link-avatar" href="/people/xie-luo-99-67"> 
											<img src="images/5b35a64aaa807dc2065d42bf24dc9d18_is.jpg" class="zm-item-img-avatar"> 
										</a>
										<div class="content">
											<button class="invite-button zg-btn zg-btn-green">邀请回答</button>
											<div class="describe">
												<a data-tip="p$t$xie-luo-99-67" href="http://www.zhihu.com/people/xie-luo-99-67" class="zg-link" title="王昊">王昊</a>
												<span class="bio hidden-phone" title="与君初相识，犹如故人归">，与君初相识，犹如故人归</span>
											</div>
											<div class="reason">
												在 <a href="/people/xie-luo-99-67/topic/19591985/answers" data-tip="t$t$19591985"> 动漫 </a> 话题下有 36 个回答
											</div>
										</div>
									</li>
									<li class="person">
										<a data-tip="p$t$kagamichan" class="zm-item-link-avatar" href="/people/kagamichan"> 
											<img src="images/379c55be0527f1eec3185fa5ef665ffa_is.jpg" class="zm-item-img-avatar"> 
										</a>
										<div class="content">
											<button class="invite-button zg-btn zg-btn-green">邀请回答</button>
											<div class="describe">
												<a data-tip="p$t$kagamichan" href="http://www.zhihu.com/people/kagamichan" class="zg-link" title="明镜止水">明镜止水</a>
												<span class="bio hidden-phone" title="那个烤秋刀鱼的小姐姐，请到我的碗里来">，那个烤秋刀鱼的小姐姐，请到我的碗里来</span>
											</div>
											<div class="reason">
												在 <a href="/people/kagamichan/topic/19591985/answers" data-tip="t$b$19591985"> 动漫 </a> 话题下有 159 个回答
											</div>
										</div>
									</li>
									<li class="person">
										<a title="花菌子" data-tip="p$t$hua-jun-zi-27" class="zm-item-link-avatar" href="/people/hua-jun-zi-27"> 
											<img src="images/cca2c5f6670035553534903c4bc9ebed_is.jpg" class="zm-item-img-avatar"> 
										</a>
										<div class="content">
											<button class="invite-button zg-btn zg-btn-green">邀请回答</button>
											<div class="describe">
												<a data-tip="p$t$hua-jun-zi-27" href="http://www.zhihu.com/people/hua-jun-zi-27" class="zg-link" title="花菌子">花菌子</a>
												<span class="bio hidden-phone" title="蘑菇">，蘑菇</span>
											</div>
											<div class="reason">
												在 <a href="/people/hua-jun-zi-27/topic/19665348/answers" data-tip="t$b$19665348"> 动漫推荐 </a> 话题下有 1 个回答
											</div>
										</div>
									</li>
									<li class="person">
										<a title="孟德尔" data-tip="p$t$meng-de-er" class="zm-item-link-avatar" href="/people/meng-de-er"> 
											<img src="images/8a0f51296_is.jpg" class="zm-item-img-avatar"> 
										</a>
										<div class="content">
											<button class="invite-button zg-btn zg-btn-green">邀请回答</button>
											<div class="describe">
												<a data-tip="p$t$meng-de-er" href="http://www.zhihu.com/people/meng-de-er" class="zg-link" title="孟德尔">孟德尔</a>
												<span class="bio hidden-phone" title="不玩游戏的游戏迷">，不玩游戏的游戏迷</span>
											</div>
											<div class="reason">
												在 <a href="/people/meng-de-er/topic/19591985/answers" data-tip="t$b$19591985"> 动漫 </a> 话题下有 177 个回答
											</div>
										</div>
									</li>
								</ul>
								<a class="js-more" href="#">更多推荐结果</a>
							</div>
						</div>
					</div>
				</div>
				<div id="zh-question-answer-wrap" class="zh-question-answer-wrapper navigable" >
					<answer></answer>
				</div>
				<a class="zg-btn-white zu-button-more" style="display: none;">更多</a>
				<div id="zh-question-collapsed-wrap" class="zh-question-answer-wrapper" style="display:none"></div>
				<a name="draft"></a>
				<div id="zh-question-answer-form-wrap" class="zh-question-answer-form-wrap">
					<div class="zm-editable-tip zu-answer-form-disabled-wrap" style="display: none;">undefined</div><div class="question-tip-box-bottom" style="display: none;">确定想要回答你自己提出的问题吗？<br>如果需要对问题做出更多的解释和说明，请编辑问题描述。 如果需要对其他回答做出回应，请在相应回答下通过评论发布。<br><div class="zg-clear"><a href="javascript:;" class="zg-right zg-btn zg-btn-blue" name="confirm">确定</a><a href="javascript:;" class="zg-right zg-link-gray " name="cancel">取消</a></div></div>
					<div class="zm-editable-content" style="display: none;">
						<a href="javascript:;" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a>
					</div>
					<div id="editPanel" class="zm-editable-editor-wrap" ng-hide="ctrl.isAnswered">
						<div class="zh-answer-form clearfix">
							<a href="/people/zhang-yang-07-01" title="张阳" class="zm-item-link-avatar" data-tip="p$t$zhang-yang-07-01">
								<img src="images/touxiang.jpg" class="zm-list-avatar">
							</a>
							<div>
								<div class="zu-answer-form-title">
									<a href="/people/zhang-yang-07-01" title="张阳" data-tip="p$t$zhang-yang-07-01">张阳</a>
									<span>，前端新手待修改
										<a class="zu-edit-button" href="javascript:;">
										<i class="zu-edit-button-icon"></i>修改话题经验</a>
									</span>
								</div>
							</div>
						</div>
						<div class="zm-editable-editor-outer">
							<div class="zm-editable-toolbar-container goog-scrollfloater">
								<div class="goog-toolbar goog-toolbar-horizontal" style="-webkit-user-select: none;">
									<div class="goog-inline-block goog-toolbar-button" id="toggleFullScreen" title="写作模式" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-max" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="粗体 (ctrl+b)" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-bold" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="斜体 (ctrl+i)" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-italic" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="下划线 (ctrl+u)" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-underline" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block" style="-webkit-user-select: none;">&nbsp;</div>
									<div class="goog-inline-block goog-toolbar-button" title="引用内容" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-blockquote" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="插入代码" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-code" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="有序列表" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-insertOrderedList" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="无序列表" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-insertUnorderedList" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="插入公式" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-equation" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block" style="-webkit-user-select: none;">&nbsp;</div>
									<div class="goog-inline-block goog-toolbar-button" title="插入图片" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-image" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-inline-block goog-toolbar-button" title="插入视频" id="video" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-video" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
									<div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block" id=":m" style="-webkit-user-select: none;">&nbsp;</div>
									<div class="goog-inline-block goog-toolbar-button" title="清除格式" id="+removeFormat" style="-webkit-user-select: none;">
										<div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;">
											<div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;">
												<div class="tr-icon tr-removeFormat" style="-webkit-user-select: none;"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="zm-editable-editor-field-wrap">
								<div id="answerEditor" class="zm-editable-editor-field-element editable" contenteditable="true"></div>
							</div>
						</div>
						<div class="zm-command clearfix">
							<label ng-hide="ctrl.isAnswered" class="zg-left anno-box" style="-webkit-user-select: none;">
								<input name="anno-checkbox" type="checkbox" style="-webkit-user-select: none;"> 匿名 
								<span style="-webkit-user-select: none;">&nbsp;</span>
							</label> 
							<label ng-hide="ctrl.isAnswered" class="zg-left copyright-box">
								<input name="copyright-checkbox" type="checkbox">未经许可，禁止转载
								<a href="/terms#sec-licence-6" target="_blank">
									<i class="zg-icon zg-icon-question-mark" style="margin-left: 5px;" id="copyright_question_mark"></i>
								</a>
							</label> 
							<span ng-hide="ctrl.isAnswered" class="zg-right" save-answer data-save="ctrl.saveAnswer" data-question="{{ctrl.currentQuestionId}}">
								<a class="submit-button zg-btn-blue" href="javascript:;">发布回答</a>
							</span>
							<div class="draft-controls zg-right ">
								<span class="draft-saved-info" style="display: none;">
									<a class="draft-clear-button goog-inline-block" href="#" data-tip="s$b$删除草稿"><i class="zg-icon zg-icon-bin"></i>
										<span class="hide-text">清除草稿</span>
									</a>
									<span class="draft-saved-time">已保存</span>
								</span>
							</div>
							<a ng-show="ctrl.isAnswered" cancel-edit class="zm-command-cancel" href="#">取消</a>
							<a ng-show="ctrl.isAnswered" class="zg-r3px zg-btn-blue" update-answer data-update="ctrl.updateAnswer" data-question="{{ctrl.currentQuestionId}}" href="#">发布</a>
						</div>
					</div>
				</div>
				<div id="zh-question-answer-form-wrap" class="zh-question-answer-form-wrap" ng-show="ctrl.isAnswered">
					<div class="zm-editable-tip zu-answer-form-disabled-wrap">一个问题你只能回答一次，但你可以对 <a href="#">现有的回答</a> 进行修改</div>
				</div>
				<!-- end of content -->
			</div>
		</div>
		<div class="zu-main-sidebar">
			<div class="zm-side-section">
				<div class="zm-side-section-inner" id="zh-question-side-header-wrap">
					<button class="follow-button zg-unfollow zg-btn-white">取消关注</button>
					<div class="zg-btn-white" id="zh-question-operation-menu">
						<i class="zg-icon-dropdown-menu zg-icon"></i><b class="hide-text">设置</b>
					</div>
					<div class="zh-question-followers-sidebar">
						<div class="zg-gray-normal">
							<a href="/question/36767166/followers"><strong>1</strong> </a>
							人关注该问题
						</div>
						<div class="list zu-small-avatar-list zg-clear">
							<a title="张阳" data-tip="p$t$zhang-yang-07-01"
								class="zm-item-link-avatar" href="/people/zhang-yang-07-01">
								<img src="images/touxiang.jpg" class="zm-item-img-avatar">
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="zm-side-section">
				<div class="zm-side-section-inner">
					<div id="zh-question-related-questions"
						class="zh-question-related-questions clearfix">
						<h3>相关问题</h3>
						<ul>
							<li>
								<a class="question_link" href="/question/24175626">如何评价 2014 年 7 月新番《美少女战士 Crystal》？</a> 
								<span class="num">22 个回答</span>
							</li>
							<li>
								<a class="question_link" href="/question/20724682">如何评价日本动漫《甲贺忍法帖》？</a>
								<span class="num">12 个回答</span>
							</li>
							<li>
								<a class="question_link" href="/question/20376463">动漫手办为什么这么贵？</a>
								<span class="num">44 个回答</span>
							</li>
							<li>
								<a class="question_link" href="/question/23479288">中国动漫为何难有强大的吸引力？</a>
								<span class="num">222 个回答</span>
							</li>
							<li>
								<a class="question_link" href="/question/22830385">为什么现在的新番多是季番而以前的多是半年番？</a>
								<span class="num">11 个回答</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="zm-side-section">
				<div class="zm-side-section-inner">
					<h3>问题状态</h3>
					<div class="zg-gray-normal">
						最近活动于 <span class="time">20:21</span> <span class="zg-bull">&bull;</span>
						<a href="/question/36767166/log">查看问题日志</a>
					</div>
					<div class="zg-gray-normal">
						被浏览 <strong>1</strong> 次，相关话题关注者 <strong>394409</strong> 人
					</div>
				</div>
			</div>
		</div>
		<div class="zg-clear"></div>
		<!-- 版权演示 -->
	</div>
	<%@ include file="addQuestionPanel.jsp" %>
	<div id="zh-footer" class="zh-footer">
		<div class="zg-wrap clearfix">
			<ul>
				<li><a href="https://liukanshan.zhihu.com" target="_blank">刘看山</a></li>
				<li><a href="/question/19581624" target="_blank">知乎指南</a></li>
				<li><a href="javascript:;" id="js-feedback-button">建议反馈</a></li>
				<li><a href="/app" target="_blank">移动应用</a></li>
				<li><a href="/careers">加入知乎</a></li>
				<li><a href="/terms" target="_blank">知乎协议</a></li>
				<li><a href="mailto:bd@zhihu.com">商务合作</a></li>
			</ul>
			<span class="copy">&copy; 2015 知乎</span>
		</div>
	</div>
	<div class="zh-backtotop" style="opacity:1;">
		<a href="javascript:;" class="btn-backtotop btn-action">
			<div class="arrow"></div>
			<div class="stick"></div>
		</a>
	</div>
	<script src="vendor/jquery-2.0.3.min.js"></script>
	<script src="vendor/angular.js"></script>
	<script src="vendor/angular-route.js"></script>
	<script src="vendor/angular-cookies.js"></script>

	<script type="text/javascript">
            (function(){
				angular.module('zhihu',['ngRoute','ngCookies']).config(config).run(run);
				
				config.$inject = ['$routeProvider','$locationProvider'];
				
				function config($routeProvider,$locationProvider){
					
				}
				
				run.$inject = ['$rootScope','$location','$cookieStore','$http'];
				
				function run($rootScope, $location, $cookieStore, $http){
					$rootScope.globals = {
		                currentUser: {
		                    id: <%= request.getAttribute("id")%>,
		                    username: '<%= request.getAttribute("userName")%>'
		                },
		                currentQuestion:{
		                	id:'${question.id }',
		                	topicNames:'${question.topicNames}'
		                }
		            };
				}
			})();
	</script>
	<!-- services -->
	<script type="text/javascript" src="services/utils.service.js"></script>
 	<script type="text/javascript" src="services/authentication.service.js"></script>
 	<script type="text/javascript" src="services/user.service.js"></script>
 	<script type="text/javascript" src="services/constant.service.js"></script>	
	<script type="text/javascript" src="services/navigation.service.js"></script>
	<script type="text/javascript" src="services/question.service.js"></script>
	<script type="text/javascript" src="services/topic.service.js"></script>
	<script type="text/javascript" src="services/answer.service.js"></script>
	<script type="text/javascript" src="services/comment.service.js"></script>

	<!-- controllers -->
	<script type="text/javascript" src="controllers/navigation.controller.js"></script>
	<script type="text/javascript" src="controllers/question.controller.js"></script>
	<script type="text/javascript" src="controllers/addQuestion.controller.js"></script>
	
	<!-- directives -->
	<script type="text/javascript" src="directives/answer.js"></script>
	<script type="text/javascript" src="directives/addQuestion.js"></script>
	<script type="text/javascript" src="directives/closeModal.js"></script>
	<script type="text/javascript" src="directives/queryQuestionResult.js"></script>
	<script type="text/javascript" src="directives/queryTopic.js"></script>
	<script type="text/javascript" src="directives/selectedQueryTopic.js"></script>
	<script type="text/javascript" src="directives/formatedContent.js"></script>
	<script type="text/javascript" src="directives/saveAnswer.js"></script>
	<script type="text/javascript" src="directives/updateAnswer.js"></script>
	<script type="text/javascript" src="directives/editAnswer.js"></script>
	<script type="text/javascript" src="directives/cancelEdit.js"></script>
	<!-- filter -->
	<script type="text/javascript" src="filters/voteThank.filter.js"></script>
	<!-- animation -->
	<script type="text/javascript" src="vendor/Utils.js"></script>
	<script type="text/javascript" src="animation/animation.js"></script>
</body>
</html>