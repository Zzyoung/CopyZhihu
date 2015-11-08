<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" class="no-touch">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="renderer" content="webkit" />
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
			<div class="zm-side-section">
				<div class="zm-side-section-inner">
					<div class="zm-side-nav-group">
						<ul class="zm-side-nav">
							<li>
								<a href="/draft">
									<i class="zg-icon zg-icon-sidenav-draft"></i>
									我的草稿
								</a>
							</li>
							<li>
								<a href="/collections">
									<i class="zg-icon zg-icon-sidenav-fav"></i>
									我的收藏
								</a>
							</li>
							<li>
								<a href="/question/following">
									<i class="zg-icon zg-icon-sidenav-follow"></i>
									我关注的问题
								</a>
							</li>
							<li>
								<a href="/question/invited">
									<i class="zg-icon zg-icon-sidenav-invite"></i>
									邀请我回答的问题
								</a>
							</li>
						</ul>
					</div>
					<div class="zm-side-nav-group">
						<ul class="zm-side-nav">
							<li>
								<a href="/log/questions">
									<i class="zg-icon zg-icon-sidenav-all"></i>
									所有问题
								</a>
							</li>
							<li>
								<a href="/topics">
									<i class="zg-icon zg-icon-sidenav-plaza"></i>
									话题广场
								</a>
							</li>
							<li>
								<a href="/watch">
									<i class="zg-icon zg-icon-sidenav-publicedit"></i>
									公共编辑动态
								</a>
							</li>
							<li>
								<a href="/community">
									<i class="zg-icon z-ico-community"></i>
									社区服务中心
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="zm-side-section zm-side-list-content zm-side-pinned-topics">
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
			<footer>
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
					<span class="copyright">© 2015 知乎</span>
				</div>
			</footer>	
		</div>
	</div>
	<div class="zh-backtotop" style="opacity:1;">
		<button type="button" class="btn-backtotop">
			<div class="arrow"></div>
			<div class="stick"></div>
		</button>
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