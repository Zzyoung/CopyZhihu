<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" class="no-touch">
<head>
	<meta charset="UTF-8">
	<title>首页 - 知乎</title>
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="styles/reset.css">
	<link rel="stylesheet" href="styles/index.css">
</head>
<body class="zhi" ng-app="zhihu">
	<%@ include file="navigation.jsp" %>
	<div ng-controller="MainContentController" class="zg-wrap zu-main clearfix">
		<div class="zu-main-content">
			<div class="zu-main-content-inner">
				<div class="zg-section" id="zh-home-list-title">
					<i class="zg-icon zg-icon-feedlist"></i> 最新动态
					<span class="zg-right zm-noti-cleaner-setting">
						<a href="#" class="zg-link-gray-normal">
							<i class="zg-icon zg-icon-settings"></i>设置
						</a>
					</span>
				</div>
				<div class="zu-main-feed-con navigable" id="zh-question-list">
					<a href="javascript:;" class="zu-main-feed-fresh-button" id="zh-main-feed-fresh-button" style="display:none;"></a>
					<div id="js-home-feed-list" class="zh-general-list topstory2 clearfix">
						<feed-item></feed-item>
					</div>
                    <a href="javascript:;" load-more-feeds ng-hide="mainCtrl.isLoading" ng-click="mainCtrl.loadMoreContents()" class="zg-btn-white zg-r3px zu-button-more">更多</a>
					<a href="javascript:;" ng-show="mainCtrl.isLoading" data-method="next" class="zg-btn-white zg-r3px zu-button-more" style=""><i class="spinner-gray"></i>正在加载</a>                   
				</div>
			</div>
		</div>
		<div class="zu-main-sidebar">
			<div class="zm-side-section shameimaru-section" id="shameimaru-home-up">
				<div class="zm-side-section-inner">
					<div class="zh-shameimaru">
						<a href="/" target="_blank" rel="nofollow" class="shameimaru-link"></a>
						<a class="shameimaru-close z-ico-shameimaru-close" data-tip="s$b$不再显示" rel="nofollow"></a>
					</div>
				</div>
			</div>
				<div class="zm-side-section">
					<div class="zm-side-section-inner">
						<div class="zm-side-nav-group">
							<ul class="zm-side-nav" id="zg-sidebar-nav">
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link" href="/draft">
										<i class="zg-icon zg-icon-sidenav-draft"></i>我的草稿
									</a>
								</li>
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link" href="/collections">
										<i class="zg-icon zg-icon-sidenav-fav"></i>我的收藏
									</a>
								</li>
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link" href="/question/following">
										<i class="zg-icon zg-icon-sidenav-follow"></i>我关注的问题
									</a>
								</li>
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link" href="/question/invited">
										<i class="zg-icon zg-icon-sidenav-invite"></i>邀请我回答的问题
									</a>
								</li>
							</ul>
						</div>
						<div class="zm-side-nav-group">
							<ul class="zm-side-nav">
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link" href="/log/questions">
										<i class="zg-icon zg-icon-sidenav-all"></i>所有问题
									</a>
								</li>
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link" href="/topics">
										<i class="zg-icon zg-icon-sidenav-plaza"></i>话题广场
									</a>
								</li>
								<li class="zm-side-nav-li rq3-publiceditlink" id="rq3-sidenav-link">
									<a class="zm-side-nav-link" href="/watch">
										<i class="zg-icon zg-icon-sidenav-publicedit"></i>公共编辑动态
										<span class="zg-num hidden">0</span>
									</a>
								</li>
								<li class="zm-side-nav-li">
									<a class="zm-side-nav-link z-ico-container" href="/community">
										<i class="z-ico-community"></i>社区服务中心
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="zm-side-section zm-side-list-content zm-side-pinned-topics zm-side-latest-roundtable">
					<h3><a href="/roundtable" class="zg-link-litblue zg-right">查看全部 »</a>知乎圆桌</h3>
					<ul class="zm-side-nav">
						<li class="zm-side-nav-li zm-side-nav-roundtable">
							<a class="photo zm-side-nav-link" href="/roundtable/anime">
								<img class="avatar avatar-s" alt="动画电影动画人" data-tip="r$b$anime" src="images/80d998fcfa116c2b200bb9aa617d5064_s.png">
								<span data-tip="r$t$anime">动画电影动画人</span>
								<span class="zg-right side-roundtable-hint">还有 15 小时开始</span>
							</a>
							<a class="follow-link zg-follow meta-item" href="javascript:;"><i class="z-icon-follow"></i>关注圆桌</a>
						</li>
						<li class="zm-side-nav-li zm-side-nav-roundtable">
							<a class="photo zm-side-nav-link" href="/roundtable/urbanization">
								<img class="avatar avatar-s" alt="离不开城市" data-tip="r$t$urbanization" src="images/00a7c1f7321a57fb0a5a069256494da7_s.png" srcset="images/00a7c1f7321a57fb0a5a069256494da7_xs.png 2x">
								<span data-tip="r$b$urbanization">离不开城市</span>
								<span class="zg-right side-roundtable-hint">还有 3 天结束</span>
							</a>
							<a class="follow-link zg-follow meta-item" href="javascript:;"><i class="z-icon-follow"></i>关注圆桌</a>
						</li>
						<li class="zm-side-nav-li zm-side-nav-roundtable">
							<a class="photo zm-side-nav-link" href="/roundtable/family">
								<img class="avatar avatar-s" alt="以家的名义" data-tip="r$b$family" src="images/b9fc5eaea083bab81273f89f878adac5_s.png" srcset="images/b9fc5eaea083bab81273f89f878adac5_xs.png 2x">
								<span data-tip="r$t$family">以家的名义</span>
								<span class="zg-right side-roundtable-hint">还有 3 天结束</span>
							</a>
							<a class="follow-link zg-follow meta-item" href="javascript:;"><i class="z-icon-follow"></i>关注圆桌</a>
						</li>
					</ul>
					</div>
				<!---->
					<div class="zm-side-section zm-side-list-content hidden">
						<h3 class="zu-trending-title"><a href="/lookup/people" class="zg-link-litblue zg-right">更多推荐 »</a>你可能感兴趣的人</h3>
						<div id="zh-trendings" class="zh-trendings"><ul></ul></div>
					</div>
				<!---->
                    <div class="zm-side-section shameimaru-section" id="shameimaru-home-bottom-5aeee4c1b">
						<div class="zm-side-section-inner">
							<div class="zg-clear zh-shameimaru-5aeee4c1b">
							    <a class="shameimaru-link" target="_blank" rel="nofollow" href="/shameimaru/click?id=5aeee4c1b&amp;location=home_bottom"></a>
							    <a class="shameimaru-close zg-icon" data-tip="s$b$不再显示" rel="nofollow"></a>
							<img src="http://tracking.ad-survey.com/impression?420;1;2015;7829;;;;0;;%0D%0A" class="shameimaru-abs" alt="Advertisement"></div>
						</div>
					</div>
				<!---->
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
						</ul><span class="copy">© 2015 知乎</span>
						</div>
					</div>	
			
		</div>
	</div>
	<div class="zh-backtotop" style="opacity:1;">
		<a href="javascript:;" class="btn-backtotop btn-action">
			<div class="arrow"></div>
			<div class="stick"></div>
		</a>
	</div>
	<div id="zh-tooltip" class="goog-hovercard popover top" style="visibility:hidden;left:125px;top:231px;display:none;">
		<div class="popover-content no-hovercard">
			<div class="zh-profile-card topic">
				<div class="upper">
					<a href="/" class="avatar-link">
						<span class="name">职业规划</span>
						<img src="images/1abb11bdd_m.jpg" alt="" class="avatar avatar-xs">
					</a>
					<div class="tagline">职业规划=职业+规划：职业就是有收入的合法工作；规划就是按照职业发展的规律去做计划。职业规…</div>
				</div>
				<div class="lower clearfix">
					<div class="meta">
						<a href="/" class="item">
							<span class="value">46K</span>
							<span class="key">问题</span>
						</a>
						<a href="/" class="item">
							<span class="value">999</span>
							<span class="key">精华</span>
						</a>
						<a href="/" class="item">
							<span class="value">177K</span>
							<span class="key">关注者</span>
						</a>
					</div>
					<div class="operation">
						<button class="zg-btn zg-btn-unfollow zm-rich-follow-btn">取消关注</button>
					</div>
				</div>
			</div>
		</div>
		<div class="arrow" style="left:89px;"></div>
		<div class="arrow2" style="left:89px;"></div>
	</div>
	<%@ include file="addQuestionPanel.jsp" %>
	
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
				
				run.$inject = ['$rootScope','$location','$cookieStore','$http','MainContentService'];
				
				function run($rootScope, $location, $cookieStore, $http, MainContentService){
					$rootScope.globals = {
		                currentUser: {
		                    id: <%= request.getAttribute("id")%>,
		                    username: '<%= request.getAttribute("userName")%>'
		                }
		            };
				}
			})();
	</script>
    <!-- services -->
    <script type="text/javascript" src="services/utils.service.js"></script>
    <script type="text/javascript" src="services/navigation.service.js"></script>
    <script type="text/javascript" src="services/mainContent.service.js"></script>
    <script type="text/javascript" src="services/authentication.service.js"></script>
    <script type="text/javascript" src="services/user.service.js"></script>
	<script type="text/javascript" src="services/constant.service.js"></script>
	<script type="text/javascript" src="services/question.service.js"></script>
	<script type="text/javascript" src="services/topic.service.js"></script>
	<script type="text/javascript" src="services/comment.service.js"></script>
	<script type="text/javascript" src="services/answer.service.js"></script>
	    
    <!-- controllers -->
    <script type="text/javascript" src="controllers/navigation.controller.js"></script>
    <script type="text/javascript" src="controllers/mainContent.controller.js"></script>
    <script type="text/javascript" src="controllers/addQuestion.controller.js"></script>
    
	<!-- directives -->
	<script type="text/javascript" src="directives/feedItem.js"></script>
	<script type="text/javascript" src="directives/formatedContent.js"></script>
	<script type="text/javascript" src="directives/addQuestion.js"></script>
	<script type="text/javascript" src="directives/closeModal.js"></script>
	<script type="text/javascript" src="directives/queryQuestionResult.js"></script>
	<script type="text/javascript" src="directives/queryTopic.js"></script>
	<script type="text/javascript" src="directives/selectedQueryTopic.js"></script>
	<script type="text/javascript" src="directives/loadMoreFeeds.js"></script>
	
	<!-- filters -->
	<script type="text/javascript" src="filters/voteThank.filter.js"></script>
	<script type="text/javascript" src="filters/formatContent.filter.js"></script>
	<script type="text/javascript" src="filters/hideDescription.filter.js"></script>
	
	<!-- animation -->
	<script type="text/javascript" src="vendor/Utils.js"></script>
	<script type="text/javascript" src="animation/animation.js"></script>
	
</body>
</html>