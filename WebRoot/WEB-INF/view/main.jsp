<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" class="js flexbox no-touch cssanimations csstransforms csstransitions no-mobile">
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
					<input type="hidden" id="is-topstory2">
					<span class="zg-right zm-noti-cleaner-setting">
						<a href="#" class="zg-link-gray-normal">
							<i class="zg-icon zg-icon-settings"></i>设置
						</a>
					</span>
				</div>
				<div class="zu-main-feed-con navigable" id="zh-question-list">
					<a href="javascript:;" class="zu-main-feed-fresh-button" id="zh-main-feed-fresh-button" style="display:none;"></a>
					<div id="js-home-feed-list" class="zh-general-list topstory2 clearfix" data-init="{&quot;params&quot;: {}, &quot;nodename&quot;: &quot;TopStory2FeedList&quot;}">
						<feed-item></feed-item>
					</div>
                    <a href="javascript:;" id="zh-load-more" class="zg-btn-white zg-r3px zu-button-more">更多</a>
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
				<i class="zg-icon zg-icon-sidenav-draft"></i>
				我的草稿

				</a>
				</li>
				<li class="zm-side-nav-li">
				<a class="zm-side-nav-link" href="/collections">
				<i class="zg-icon zg-icon-sidenav-fav"></i>
				我的收藏

				</a>
				</li>
				<li class="zm-side-nav-li">
				<a class="zm-side-nav-link" href="/question/following">
				<i class="zg-icon zg-icon-sidenav-follow"></i>
				我关注的问题
				</a>
				</li>
				<li class="zm-side-nav-li">
				<a class="zm-side-nav-link" href="/question/invited">
				<i class="zg-icon zg-icon-sidenav-invite"></i>
				邀请我回答的问题

				</a>
				</li>
				</ul>
				</div>
				<div class="zm-side-nav-group">
				<ul class="zm-side-nav">
				<li class="zm-side-nav-li">
				<a class="zm-side-nav-link" href="/log/questions">
				<i class="zg-icon zg-icon-sidenav-all"></i>
				所有问题
				</a>
				</li>
				<li class="zm-side-nav-li">
				<a class="zm-side-nav-link" href="/topics">
				<i class="zg-icon zg-icon-sidenav-plaza"></i>
				话题广场
				</a>
				</li>
				<li class="zm-side-nav-li rq3-publiceditlink" id="rq3-sidenav-link">
				<a class="zm-side-nav-link" href="/watch">
				<i class="zg-icon zg-icon-sidenav-publicedit"></i>
				公共编辑动态
				<span class="zg-num hidden">0</span>
				</a>
				</li>
				<li class="zm-side-nav-li">
				<a class="zm-side-nav-link z-ico-container" href="/community">
				<i class="z-ico-community"></i>
				社区服务中心
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
					<img class="avatar avatar-s" alt="动画电影动画人" data-tip="r$b$anime" src="images/80d998fcfa116c2b200bb9aa617d5064_s.png" srcset="images/80d998fcfa116c2b200bb9aa617d5064_xs.png 2x">
					<span data-tip="r$t$anime">
					动画电影动画人
					</span>

					<span class="zg-right side-roundtable-hint">还有 15 小时开始</span>

					</a>

					<a data-follow="rt:link" class="follow-link zg-follow meta-item" href="javascript:;" id="sfb-anime"><i class="z-icon-follow"></i>关注圆桌</a>

					</li>

					<li class="zm-side-nav-li zm-side-nav-roundtable">
					<a class="photo zm-side-nav-link" href="/roundtable/urbanization">
					<img class="avatar avatar-s" alt="离不开城市" data-tip="r$t$urbanization" src="images/00a7c1f7321a57fb0a5a069256494da7_s.png" srcset="images/00a7c1f7321a57fb0a5a069256494da7_xs.png 2x">
					<span data-tip="r$b$urbanization">
					离不开城市
					</span>

					<span class="zg-right side-roundtable-hint">还有 3 天结束</span>

					</a>

					<a data-follow="rt:link" class="follow-link zg-follow meta-item" href="javascript:;" id="sfb-urbanization"><i class="z-icon-follow"></i>关注圆桌</a>

					</li>

					<li class="zm-side-nav-li zm-side-nav-roundtable">
					<a class="photo zm-side-nav-link" href="/roundtable/family">
					<img class="avatar avatar-s" alt="以家的名义" data-tip="r$b$family" src="images/b9fc5eaea083bab81273f89f878adac5_s.png" srcset="images/b9fc5eaea083bab81273f89f878adac5_xs.png 2x">
					<span data-tip="r$t$family">
					以家的名义
					</span>

					<span class="zg-right side-roundtable-hint">还有 3 天结束</span>

					</a>

					<a data-follow="rt:link" class="follow-link zg-follow meta-item" href="javascript:;" id="sfb-family"><i class="z-icon-follow"></i>关注圆桌</a>

					</li>

					</ul>
					</div>
				<!---->
					<div class="zm-side-section zm-side-list-content hidden">
						<h3 class="zu-trending-title"><a href="/lookup/people" class="zg-link-litblue zg-right">更多推荐 »</a>你可能感兴趣的人</h3>
						<div id="zh-trendings" class="zh-trendings"><ul></ul></div>
					</div>
				<!---->
                    <div class="zm-side-section shameimaru-section" id="shameimaru-home-bottom-5aeee4c1b" data-location="home_bottom" data-id="5aeee4c1b">
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
						</ul>
						<span class="copy">© 2015 知乎</span>
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
	<div class="modal-dialog-bg"></div>
	<div ng-controller="AddQuestionController" class="modal-wrapper" style="display:none;">
		<div class="modal-dialog absolute-position" style="width:550px;">
			<div class="modal-dialog-title">
				<span class="modal-dialog-title-text">提问</span>
				<span close-modal class="modal-dialog-title-close"></span>
			</div>
			<div class="modal-dialog-content">
				<div class="zh-add-question-form">
					<div class="js-add-question-splash add-question-splash-page" >
						<p>知乎是一个真诚、友善、认真、互助的社区<br>我们希望每一个疑惑都有解答，好的问题更容易得到好答案 <a href="//www.zhihu.com/question/19555761">如何提一个好问题？</a></p>
						<p><b>提问应遵循真实、客观、简洁、明确、规范的原则</b><br>1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。<br>2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。<br>3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由<br>4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。<br></p>
						<p><b>知乎禁止这些提问</b><br>1、和已有问题完全重复的问题，<b>为避免重复，提问前可以先进行搜索</b><br>2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容<br>3、投票类问题。例如：你支持方舟子还是韩寒？<br>4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题<br>完整的提问建议可查看 <a href="//www.zhihu.com/question/19806261">知乎的提问规范有哪些？</a><br></p>
						<div class="before-ask-form" >
							<b>提问前请先搜索</b>
							<div style="position:relative;margin-top:18px;">
								<input ng-change="addQuestionCtrl.queryQuestion.query(addQuestionCtrl.queryQuestion.questionName)" ng-model="addQuestionCtrl.queryQuestion.questionName" type="text" class="zg-form-text-input" id="js-before-ask" placeholder="请输入你的问题" autocomplete="off">
								<div class="ac-renderer" style="-webkit-user-select: none; display: none;"></div>
								<query-question-result></query-question-result>
							</div>
						</div>
					</div>
					<form class="js-add-question-form" style="display: none;">
						<div class="zg-section-big clearfix">
							<div id="zm-modal-dialog-info-wrapper"></div>
							<div style="display: none;position: relative;" id="zm-modal-dialog-warnmsg-wrapper">
								<div class="zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"></div>
								<a title="关闭" href="javascript:;" class="zu-global-notify-close" style="display:none">x</a><span class="zm-modal-dialog-guide-title-msg"></span>
							</div>
							<div class="zg-form-text-input add-question-title-form" style="position: relative;">
								<textarea ng-change="addQuestionCtrl.queryQuestion.query(addQuestionCtrl.queryQuestion.questionName)" ng-model="addQuestionCtrl.queryQuestion.questionName" class="zg-editor-input zu-seamless-input-origin-element"
									title="在这里输入问题" id="zh-question-suggest-title-content" placeholder="写下你的问题" autocomplete="off" style="white-space: pre-wrap; height: 22px; min-height: 22px;"></textarea>
							</div>
							<span id="js-title-length-err-msg" class="title-length-err-msg zg-right"></span>
							<div id="zh-question-suggest-ac-wrap" class="question-suggest-ac-wrap">
								<div class="ac-renderer" role="listbox" id=":7n" style="-webkit-user-select: none;">
									<query-question-result></query-question-result>
								</div>
							</div>
						</div>
						<div class="zg-section-big">
							<div style="display: none;position: relative;"
								class="zm-modal-dialog-warnmsg-wrapper">
								<div class="zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"></div>
								<a name="close" title="关闭" href="javascript:;" class="zu-global-notify-close" style="display:none">x</a><span
									class="zm-modal-dialog-guide-title-msg"></span>
							</div>
							<div class="add-question-section-title">
								<span class="zg-right extra-editor-toolbar hidden-phone"><div class="js-toggle-editor-toolbar goog-inline-block goog-link-button" role="button" title="切换工具栏" style="-webkit-user-select: none;"><i class="tr-inline-icon z-ico-textedit"></i></div><div class="js-editor-add-pic goog-inline-block goog-link-button" role="button" title="添加图片" style="-webkit-user-select: none;"><i class="tr-inline-icon tr-image"></i></div><div class="js-editor-add-video goog-inline-block goog-link-button" role="button" title="添加视频" style="-webkit-user-select: none;"><i class="tr-inline-icon tr-video"></i></div></span>问题说明（可选）：<span id="zh-question-form-detail-err"></span>
							</div>
							<div id="zh-question-suggest-detail-container" class="zm-editable-status-editing">
								<div class="zm-editable-content" data-disabled="1"
									style="display: none;"></div>
								<div class="zm-editable-editor-wrap no-toolbar" style="">
									<div class="zm-editable-editor-outer">
										<div class="zm-editable-toolbar-container goog-scrollfloater"
											style="display: none;">
											<div class="goog-toolbar goog-toolbar-horizontal"
												role="toolbar" tabindex="-1"
												style="-webkit-user-select: none;">
												<div class="goog-inline-block goog-toolbar-button"
													title="粗体 (ctrl+b)" role="button" aria-pressed="false"
													id="+bold" style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-bold"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="斜体 (ctrl+i)" role="button" aria-pressed="false"
													id="+italic" style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-italic"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="下划线 (ctrl+u)" role="button" aria-pressed="false"
													id="+underline" style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-underline"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div
													class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block"
													aria-disabled="true" role="separator" id=":7k"
													style="-webkit-user-select: none;">&nbsp;</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="引用内容" role="button" aria-pressed="false"
													id="+blockquote" style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-blockquote"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="插入代码" role="button" aria-pressed="false" id="+code"
													style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-code"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="有序列表" role="button" aria-pressed="false"
													id="+insertOrderedList" style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-insertOrderedList"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="无序列表" role="button" aria-pressed="false"
													id="+insertUnorderedList" style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-insertUnorderedList"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="插入公式" role="button" id="+equation"
													style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-equation"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block"
													aria-disabled="true" role="separator" id=":7l"
													style="-webkit-user-select: none;">&nbsp;</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="插入图片" role="button" id="image"
													style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-image"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="插入视频" role="button" id="video"
													style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-video"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div
													class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block"
													aria-disabled="true" role="separator" id=":7m"
													style="-webkit-user-select: none;">&nbsp;</div>
												<div class="goog-inline-block goog-toolbar-button"
													title="清除格式" role="button" id="+removeFormat"
													style="-webkit-user-select: none;">
													<div class="goog-inline-block goog-toolbar-button-outer-box"
														style="-webkit-user-select: none;">
														<div class="goog-inline-block goog-toolbar-button-inner-box"
															style="-webkit-user-select: none;">
															<div class="tr-icon tr-removeFormat"
																style="-webkit-user-select: none;"></div>
														</div>
													</div>
												</div>
												<div class="tr-spinner spinner-gray" style="display: none;"></div>
											</div>
										</div>
										<div class="zm-editable-editor-field-wrap">
											<textarea ng-model="addQuestionCtrl.addQuestion.questionDesc" class="zm-editable-editor-field-element editable" placeholder="问题背景、条件等详细信息"></textarea>
											<div class="editable-dropzone">
												<div class="row">
													<div class="cell">
														<div>拖拽至此处上传</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="zm-command">
										<a class="zm-command-cancel" name="cancel" href="javascript:;">取消</a><a
											class="zg-r3px zg-btn-blue" name="save" href="javascript:;">保存</a>
									</div>
								</div>
							</div>
						</div>
						<div class="zm-add-question-form-topic-wrap">
							<div class="add-question-section-title">
								<span class="zg-gray zg-right hidden-phone">话题越精准，越容易让相关领域专业人士看到你的问题</span>选择话题：<span
									id="zh-question-form-tag-err" style="display: none;"></span>
							</div>
							<div id="zh-question-suggest-topic-container" class="zm-tag-editor zg-section">
								<div class="zm-tag-editor-editor zg-clear">
									<selected-query-top></selected-query-top>
									<div class="zm-tag-editor-command-buttons-wrap zg-left">
										<label for="topic" class="zg-icon icon-magnify"></label>
										<input ng-model="addQuestionCtrl.queryTopic.topicName" ng-change="addQuestionCtrl.queryTopic.query(addQuestionCtrl.queryTopic.topicName)" class="zu-question-suggest-topic-input label-input-label" type="text" placeholder="搜索话题">
										<a class="zg-mr15 zg-btn-blue" href="#" style="display: none;">添加</a>
										<a href="#" style="display: none;">完成</a>
										<label class="err-tip" style="display:none;">最多添加五个话题</label>
										<div class="ac-renderer" id="dropdwon-topic" style="-webkit-user-select: none;">
											<query-topic></query-topic>
										</div>
									</div>
									<div class="zm-tag-editor-maxcount zg-section"
										style="display: none;">
										<span>最多只能为一个问题绑定 5 个话题</span><a href="#" name="close"
											style="display: none;">完成</a>
									</div>
								</div>
								<div id="zh-question-suggest-autocomplete-container"></div>
							</div>
							<div class="sug-con zg-clear" style="display: none;">
								<span class="zg-gray-normal zg-left tip">推荐添加</span><span
									class="sugs zg-clear zg-inline"></span><img
									data-src="http://static.zhihu.com/static/img/spinner2.gif"
									style="display: none;">
							</div>
						</div>
						<div class="zm-command">
							<label class="zm-question-form-hide-in-about-question-el zg-left"><input
								type="checkbox" value="1" class="zg-addq-isanon">匿名</label><a
								href="javascript:;" close-modal class="zm-command-cancel">取消</a><a
								href="javascript:;" ng-click="addQuestionCtrl.addQuestion.insert()" class="zg-r5px zu-question-form-add zg-btn-blue">发布</a><a
								name="jumpq" class="zg-r5px zg-btn-blue zu-question-form-jump"
								style="display:none;">查看问题</a>
						</div>
					</form>
				</div>
			</div>
			<div class="modal-dialog-buttons" style="display:none;"></div>
		</div>
	</div>
	
	<script src="vendor/jquery-2.0.3.min.js"></script>
    <script src="vendor/angular.js"></script>
    <script src="vendor/angular-route.js"></script>
    <script src="vendor/angular-cookies.js"></script>

    <script type="text/javascript" src="main.js"></script>
    
    <!-- services -->
    <script type="text/javascript" src="services/utils.service.js"></script>
    <script type="text/javascript" src="services/navigation.service.js"></script>
    <script type="text/javascript" src="services/mainContent.service.js"></script>
    <script type="text/javascript" src="services/authentication.service.js"></script>
    <script type="text/javascript" src="services/user.service.js"></script>
	<script type="text/javascript" src="services/constant.service.js"></script>
	<script type="text/javascript" src="services/question.service.js"></script>
	<script type="text/javascript" src="services/topic.service.js"></script>
	    
    <!-- controllers -->
    <script type="text/javascript" src="controllers/navigation.controller.js"></script>
    <script type="text/javascript" src="controllers/mainContent.controller.js"></script>
    <script type="text/javascript" src="controllers/addQuestion.controller.js"></script>
    
	<!-- directives -->
	<script type="text/javascript" src="directives/msgContent.js"></script>
	<script type="text/javascript" src="directives/userContent.js"></script>
	<script type="text/javascript" src="directives/thanksContent.js"></script>
	<script type="text/javascript" src="directives/feedItem.js"></script>
	<script type="text/javascript" src="directives/formatedContent.js"></script>
	<script type="text/javascript" src="directives/addQuestion.js"></script>
	<script type="text/javascript" src="directives/closeModal.js"></script>
	<script type="text/javascript" src="directives/addNewQuestion.js"></script>
	<script type="text/javascript" src="directives/queryQuestionResult.js"></script>
	<script type="text/javascript" src="directives/queryTopic.js"></script>
	<script type="text/javascript" src="directives/selectedQueryTopic.js"></script>
	<!-- filters -->
	<script type="text/javascript" src="filters/voteThank.filter.js"></script>
	<script type="text/javascript" src="filters/formatContent.filter.js"></script>
	<script type="text/javascript" src="filters/hideDescription.filter.js"></script>
	
</body>
</html>