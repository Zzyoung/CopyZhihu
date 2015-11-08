<%@ page language="java" pageEncoding="UTF-8"%>
<div ng-controller="NavigationController" class="zu-top">
	<div class="zg-wrap modal-shifting" id="zh-top-inner">
		<a href="/Zhihu/index" class="zu-top-link-logo" id="zh-top-link-logo">知乎</a>
		<div class="top-nav-profile">
			<a href="/people/zhang-yang-07-01" class="zu-top-nav-userinfo ">
				<span class="name"><%=request.getAttribute("userName") %></span>
				<img class="avatar avatar-s" alt="<%=request.getAttribute("userName") %>" src="<%=request.getAttribute("photoUrl") %>"/>
				<span id="zh-top-nav-new-pm" class="zg-noti-number zu-top-nav-pm-count" data-count="0">2</span>
			</a>
			<ul class="top-nav-dropdown" id="top-nav-profile-dropdown">
				<li><a href="/people/zhang-yang-07-01"><i class="zg-icon zg-icon-dd-home"></i>我的主页</a></li>
				<li>
					<a href="/inbox">
						<i class="zg-icon zg-icon-dd-pm"></i>私信
						<span id="zh-top-nav-pm-count" class="zu-top-nav-pm-count zg-noti-number" style="visibility:hidden" data-count="0"></span>
					</a>
				</li>
				<li><a href="/settings"><i class="zg-icon zg-icon-dd-settings"></i>设置</a></li>
				<li ng-click="ctrl.logout($event)"><a><i class="zg-icon zg-icon-dd-logout"></i>退出</a></li>
			</ul>
		</div>
		<div id="zh-top-search" class="zu-top-search">
			<form method="GET" action="/search" id="zh-top-search-form" class="zu-top-search-form form-with-magnify">
				<input type="text" class="zu-top-search-input" id="q" name="q" autocomplete="off" value="" placeholder="搜索话题、问题或人…" />
				<input type="hidden" name="type" value="question" />
				<label for="q" class="hide-text">知乎搜索</label>
				<button type="submit" class="magnify-button"><i class="icon icon-magnify-q"></i><span class="hide-text">搜索</span></button>
			</form>
			<button add-question class="zu-top-add-question" id="zu-top-add-question">提问</button>
		</div>
		<nav class="zu-top-nav">
			<ul class="zu-top-nav-ul zg-clear">
				<li class="zu-top-nav-li current" id="zh-top-nav-home">
					<a class="zu-top-nav-link" href="/" id="zh-top-link-home">首页</a>
				</li>
				<li class="top-nav-topic-selector zu-top-nav-li " id="zh-top-nav-topic">
					<a class="zu-top-nav-link" href="/topic" id="top-nav-dd-topic">话题</a>
				</li>
				<li class="zu-top-nav-li " id="zh-top-nav-explore">
					<a class="zu-top-nav-link" href="/explore">发现</a>
				</li>
				<li class="top-nav-noti zu-top-nav-li">
					<a class="zu-top-nav-link" href="" id="zh-top-nav-count-wrap" role="button"><span class="mobi-arrow"></span>消息<span id="zh-top-nav-count" class="zu-top-nav-count zg-noti-number">1</span></a>
				</li>
			</ul>
			<div class="zu-top-nav-live zu-noti7-popup zg-r5px no-hovercard" id="zh-top-nav-live-new">
				<div class="zu-top-nav-live-inner zg-r5px">
					<div class="zu-top-live-icon">&nbsp;</div>
					<div class="zu-home-noti-inner" id="zh-top-nav-live-new-inner">
						<div class="zm-noti7-popup-tab-container clearfix">
							<button ng-click="ctrl.clickTab(0)" ng-class="ctrl.getTabClass(0)">
								<span class="icon">消息</span>
							</button>
							<button ng-click="ctrl.clickTab(1)" ng-class="ctrl.getTabClass(1)">
								<span class="icon">用户</span>
							</button>
							<button ng-click="ctrl.clickTab(2)" ng-class="ctrl.getTabClass(2)">
								<span class="icon">赞同和感谢</span>
							</button>
						</div>
					</div>
					<div class="zm-noti7-frame-border top"></div>
					<div class="zm-noti7-frame">
						<div ng-show="ctrl.isShowContent(0)" class="zm-noti7-content zh-sroller">
							<div class="zh-scroller-inner">
								<div class="zh-scroller-content">
									<div class="zm-noti7-content-inner">
										<div class="zm-noti7-popup-refresh">
											<img src="images/spinner2.gif" alt="" class="noti-spinner">
										</div>
										<div class="zm-noti7-content-body">
											<div ng-class="msg.unread ? 'zm-noti7-content-item unread':'zm-noti7-content-item'" ng-repeat="msg in ctrl.msgContents">
												<span class="author-list">
													<span class="user-block" ng-repeat="answer in msg.answers">
														<span ng-show="answer.unnamed">匿名用户</span>
														<a ng-hide="answer.unnamed" href="{{answer.link}}" class="zg-link" title="子柳">{{answer.name}}</a>
														<span ng-hide="$last">、</span>
													</span>
													回答了问题 <a href="{{msg.questionUrl}}" class="question_link">{{msg.questionName}}</a>
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="zh-scroller-bar-container">
								<div style=""></div>
							</div>
							<div class="zh-scroller-bar"></div>
						</div>
						<div ng-show="ctrl.isShowContent(1)" class="zm-noti7-content zh-sroller">
							<div class="zh-scroller-inner">
								<div class="zh-scroller-content">
									<div class="zm-noti7-content-inner">
										<div class="zm-noti7-popup-refresh">
											<img src="images/spinner2.gif" alt="" class="noti-spinner">
										</div>
										<div class="zm-noti7-content-body">
											<div class="zm-noti-content-body">
												<div class="zm-noti7-content-head-item">
													<span class="zg-gray-normal">这些人最近关注了你</span>
												</div>
												<div class="zm-noti7-content-item" ng-repeat="user in ctrl.userContents">
													<div class="zm-profile-section-item zg-clear no-hovercard">
														<div class="zg-right">
															<a ng-hide="{{user.followed}}" href="/follow" class="zg-follow">关注</a>
															<a ng-show="{{user.followed}}" href="/unfollow" class="zg-follow">取消关注</a>
														</div>
														<a href="/people" class="zm-item-link-avatar" title="人名">
															<img ng-src="{{user.photoUrl}}" alt="" class="zm-item-img-avatar">
														</a>
														<div class="zm-list-content-medium">
															<a href="{{user.link}}" class="zg-link">{{user.name}}</a>
															<div class="zg-gray-normal">
																<span></span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="zh-scroller-bar-container">
								<div></div>
							</div>
							<div class="zh-scroller-bar"></div>
						</div>
						<div ng-show="ctrl.isShowContent(2)" class="zm-noti7-content zh-sroller">
							<div class="zh-scroller-inner">
								<div class="zh-scroller-content">
									<div class="zm-noti7-content-inner">
										<div class="zm-noti7-popup-refresh">
											<img src="images/spinner2.gif" alt="" class="noti-spinner">
										</div>
										<div class="zm-noti7-content-body">
											<div class="zm-noti7-content-item" ng-repeat="thanks in ctrl.thanksContents" data-notigroupname="VOTE_THANK" data-type="upvote" data-count="10">
												<span ng-if="thanks.type == 'VOTE_THANK'">{{ thanks.voteThanksCount | voteThank}}:
													<a href="{{thanks.questionUrl}}" class="question_link">{{thanks.question}}</a> 来自
													<span class="author-list">
														<span class="user-block" ng-repeat="user in thanks.users">
															<a href="{{user.link}}" class="zg-link">{{user.name}}</a>
															<span ng-hide="$last">、</span>
														</span>
														等 {{thanks.users.length}} 人
													</span>
												</span>
												<span ng-if="thanks.type == 'ACOMMENT_LIKE'" class="author-list">
													<span class="user-block" ng-repeat="user in thanks.users">
														<a href="{{user.link}}" class="zg-link">{{user.name}}</a>
														<span ng-hide="$last">、</span>
													</span>
													觉得你在
													<a href="{{thanks.questionUrl}}" class="question_link">{{thanks.question}}</a> 中 
													<a href="{{thanks.answerLink}}" class="zg-link" title="唐潮">{{thanks.answer}}</a>
													 的答案下评论很赞
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="zh-scroller-bar-container">
								<div></div>
							</div>
							<div class="zh-scroller-bar"></div>
						</div>
					</div>
					<div class="zm-noti7-frame-border bottom"></div>
					<div class="zm-noti7-popup-footer">
						<a href="/notifications" class="zm-noti7-popup-footer-all zg-right">查看全部 &raquo;</a>
						<a href="/settings/notification" class="zm-noti7-popup-footer-set" title="通知设置" ><i class="icon zg-icon-settings"></i></a>
					</div>
				</div>
			</div>
		</nav>
	</div>
</div>