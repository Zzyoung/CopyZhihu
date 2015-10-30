<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" class="js flexbox no-touch cssanimations csstransforms csstransitions no-mobile"  ng-app="zhihu">
<head>
<meta charset="UTF-8">
<title>最近有哪些好看的动漫新番？</title>
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="styles/reset.css">
<link rel="stylesheet" href="styles/index.css">
</head>
<body class="zhi">
	<%@ include file="navigation.jsp" %>
	<div ng-controller="QuestionController" class="zg-wrap zu-main question-page" id="zh-single-question-page"
		data-urltoken="36767166">
		<meta itemprop="isTopQuestion" content="false" />
		<meta itemprop="visitsCount" content="1" />
		<div class="zu-main-content">
			<div class="zu-main-content-inner with-indention-votebar">
				<div class="zm-tag-editor zg-section">
					<div class="zm-tag-editor-labels zg-clear">

						<a class="zm-item-tag" href="/topic/19591985"
							data-tip="t$b$19591985" data-token="19591985"
							data-topicid="13908"> 动漫 </a> <a class="zm-item-tag"
							href="/topic/19665348" data-tip="t$b$19665348"
							data-token="19665348" data-topicid="38458"> 动漫推荐 </a> <a
							href="javascript:;" class="zu-edit-button"><i
							class="zu-edit-button-icon"></i>修改</a>
					</div>
				</div>
				<div id="zh-question-title" data-editable="true">

					<h2 class="zm-item-title zm-editable-content">
						最近有哪些好看的动漫新番？<a href="javascript:;" class="zu-edit-button"><i
							class="zu-edit-button-icon"></i>修改</a>
					</h2>
				</div>
				<div id="zh-question-detail" class="zm-item-rich-text"
					data-resourceid="6914051" data-action="/question/detail">

					<div class="zm-editable-content">
						热血冒险类型<a href="javascript:;" class="zu-edit-button"><i
							class="zu-edit-button-icon"></i>修改</a>
					</div>


				</div>
				<div class="zm-item-meta zm-item-comment-el clearfix"
					id="zh-question-meta-wrap">
					<div class="zm-meta-panel">

						<a href="#" name="report-question" class="report zg-right"> <i
							class="z-icon-no-help"></i>举报</a> <a href="#" name="addcomment"
							class="toggle-comment meta-item"> <i class="z-icon-comment"></i>添加评论
						</a> <a href="#" name="share" class="share meta-item"> <i
							class="z-icon-share"></i>分享 </a> <span class="zg-bull">&bull;</span>
						<a href="#" name="invite" class="meta-item" ng-click="ctrl.toggleInvitePanel()">{{ctrl.showInvitePanel?'收起邀请':'邀请回答'}}</a> <span
							class="zg-bull">&bull;</span> <a href="#" name="remove"
							class="meta-item">删除问题</a>
					</div>
					<div class="panel-container" ng-show="ctrl.showInvitePanel">
						<div class="question-invite-panel" id="question-invite-panel"
							data-showsearch="true" style="display: block;">
							<i class="icon icon-spike"></i>

							<div class="invite-title">
								<span class="input-wrapper"> <input type="text"
									placeholder="搜索你想邀请的人" class="search-input zg-form-text-input"
									data-tip="s$t$也可以搜索职业、公司等资料" aria-haspopup="true"
									autocomplete="off" aria-label="搜索你想邀请的人"><i
									class="zg-icon icon-magnify"></i></span><i class="spinner-gray"></i>
								<span class="invite-status"> 你可以邀请 6 人回答该问题 </span>
							</div>

							<div class="suggest-persons-wrapper">
								<ul class="suggest-persons">

									<li class="person"><a title="陈冯"
										data-tip="p$t$chen-feng-47-65-6" class="zm-item-link-avatar"
										href="/people/chen-feng-47-65-6"> <img
											src="images/0a0c041d2047f75e9ed5709dc6f89ec8_is.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="ac29d173f9b2d1ad5e58ea0b308204a8"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$chen-feng-47-65-6"
													href="http://www.zhihu.com/people/chen-feng-47-65-6"
													class="zg-link" data-original_title="陈冯">陈冯</a><span
													class="bio hidden-phone" title="一旦开始思考，便会显露自己的浅薄">，一旦开始思考，便会显露自己的浅薄</span>
											</div>
											<div class="reason">
												在 <a href="/people/chen-feng-47-65-6/topic/19665348/answers"
													data-tip="t$t$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 13 个回答
											</div>
										</div></li>

									<li class="person"><a title="王昊"
										data-tip="p$t$xie-luo-99-67" class="zm-item-link-avatar"
										href="/people/xie-luo-99-67"> <img
											src="images/5b35a64aaa807dc2065d42bf24dc9d18_is.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="192d15d051d9527e6ee50a802e4a2354"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$xie-luo-99-67"
													href="http://www.zhihu.com/people/xie-luo-99-67"
													class="zg-link" title="王昊">王昊</a><span
													class="bio hidden-phone" title="与君初相识，犹如故人归">，与君初相识，犹如故人归</span>
											</div>
											<div class="reason">
												在 <a href="/people/xie-luo-99-67/topic/19591985/answers"
													data-tip="t$t$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 36 个回答
											</div>
										</div></li>

									<li class="person"><a data-tip="p$t$kagamichan"
										class="zm-item-link-avatar" href="/people/kagamichan"
										data-original_title="明镜止水"> <img
											src="images/379c55be0527f1eec3185fa5ef665ffa_is.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="1731b489e3b25d5a94430388bde61d82"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$kagamichan"
													href="http://www.zhihu.com/people/kagamichan"
													class="zg-link" title="明镜止水">明镜止水</a><span
													class="bio hidden-phone" title="那个烤秋刀鱼的小姐姐，请到我的碗里来">，那个烤秋刀鱼的小姐姐，请到我的碗里来</span>
											</div>
											<div class="reason">
												在 <a href="/people/kagamichan/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 159 个回答
											</div>
										</div></li>

									<li class="person"><a title="花菌子"
										data-tip="p$t$hua-jun-zi-27" class="zm-item-link-avatar"
										href="/people/hua-jun-zi-27"> <img
											src="images/cca2c5f6670035553534903c4bc9ebed_is.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="b634edcbc68c57df59ccb37174c9f29c"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$hua-jun-zi-27"
													href="http://www.zhihu.com/people/hua-jun-zi-27"
													class="zg-link" title="花菌子">花菌子</a><span
													class="bio hidden-phone" title="蘑菇">，蘑菇</span>
											</div>
											<div class="reason">
												在 <a href="/people/hua-jun-zi-27/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 1 个回答
											</div>
										</div></li>

									<li class="person"><a title="孟德尔"
										data-tip="p$t$meng-de-er" class="zm-item-link-avatar"
										href="/people/meng-de-er"> <img
											src="images/8a0f51296_is.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="5b4c4c40369aa3294b09f8e4bd715f23"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$meng-de-er"
													href="http://www.zhihu.com/people/meng-de-er"
													class="zg-link" title="孟德尔">孟德尔</a><span
													class="bio hidden-phone" title="不玩游戏的游戏迷">，不玩游戏的游戏迷</span>
											</div>
											<div class="reason">
												在 <a href="/people/meng-de-er/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 177 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="苏沉船"
										data-tip="p$t$su-chen-chuan" class="zm-item-link-avatar"
										href="/people/su-chen-chuan"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="c93586c3a5ebf9e8bddf836184e8ad13"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$su-chen-chuan"
													href="http://www.zhihu.com/people/su-chen-chuan"
													class="zg-link" title="苏沉船">苏沉船</a>
											</div>
											<div class="reason">
												在 <a href="/people/su-chen-chuan/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 95 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="蜗牛君"
										data-tip="p$t$gua-niu-91-90" class="zm-item-link-avatar"
										href="/people/gua-niu-91-90"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="4940c884b087b53c8deef8dde7f09944"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$gua-niu-91-90"
													href="http://www.zhihu.com/people/gua-niu-91-90"
													class="zg-link" title="蜗牛君">蜗牛君</a><span
													class="bio hidden-phone" title="不入流吉他手\不务正业建筑男">，不入流吉他手\不务正业建筑男</span>
											</div>
											<div class="reason">
												在 <a href="/people/gua-niu-91-90/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 5 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="目目大法好"
										data-tip="p$t$wayne-tong" class="zm-item-link-avatar"
										href="/people/wayne-tong"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="c8708a6a4a669d2d077a9695686f739e"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$wayne-tong"
													href="http://www.zhihu.com/people/wayne-tong"
													class="zg-link" title="目目大法好">目目大法好</a><span
													class="bio hidden-phone" title="动画加漫画，就是动漫">，动画加漫画，就是动漫</span>
											</div>
											<div class="reason">
												在 <a href="/people/wayne-tong/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 206 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a
										title="JX Consp" data-tip="p$t$JX-Consp"
										class="zm-item-link-avatar" href="/people/JX-Consp"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="ace55bee53f65086ccd880bf9c94018e"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$JX-Consp"
													href="http://www.zhihu.com/people/JX-Consp" class="zg-link"
													title="JX Consp">JX Consp</a><span class="bio hidden-phone"
													title="朱门酒肉臭，路有克苏鲁">，朱门酒肉臭，路有克苏鲁</span>
											</div>
											<div class="reason">
												在 <a href="/people/JX-Consp/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 1 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a
										title="queen red" data-tip="p$t$queen-red-76"
										class="zm-item-link-avatar" href="/people/queen-red-76"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="1a2f725bf1348e3278081f27923c724f"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$queen-red-76"
													href="http://www.zhihu.com/people/queen-red-76"
													class="zg-link" title="queen red">queen red</a><span
													class="bio hidden-phone" title="擅长话题是哆啦A梦">，擅长话题是哆啦A梦</span>
											</div>
											<div class="reason">
												在 <a href="/people/queen-red-76/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 38 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="范大凯"
										data-tip="p$t$fcukdk" class="zm-item-link-avatar"
										href="/people/fcukdk"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="4f8ccd945f357116113895922095d4c5"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$fcukdk"
													href="http://www.zhihu.com/people/fcukdk" class="zg-link"
													title="范大凯">范大凯</a><span class="bio hidden-phone"
													title="友善度五星，资料完善度62%">，友善度五星，资料完善度62%</span>
											</div>
											<div class="reason">
												在 <a href="/people/fcukdk/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 1 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a
										title="Scottewanckigham" data-tip="p$t$klhscott"
										class="zm-item-link-avatar" href="/people/klhscott"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="412ce593bfa3aa7724c4ccbb5ed8153a"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$klhscott"
													href="http://www.zhihu.com/people/klhscott" class="zg-link"
													title="Scottewanckigham">Scottewanckigham</a><span
													class="bio hidden-phone" title="Cosmopolitan">，Cosmopolitan</span>
											</div>
											<div class="reason">
												在 <a href="/people/klhscott/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 1 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="戴亦舒"
										data-tip="p$t$dai-yi-shu" class="zm-item-link-avatar"
										href="/people/dai-yi-shu"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="aa7bd59f2309f8613b701908f5361111"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$dai-yi-shu"
													href="http://www.zhihu.com/people/dai-yi-shu"
													class="zg-link" title="戴亦舒">戴亦舒</a><span
													class="bio hidden-phone" title="足球/ACG/金融">，足球/ACG/金融</span>
											</div>
											<div class="reason">
												在 <a href="/people/dai-yi-shu/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 29 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="zecy"
										data-tip="p$t$zecy" class="zm-item-link-avatar"
										href="/people/zecy"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="00c0e955b58805c94bd6983ec1a387c6"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$zecy"
													href="http://www.zhihu.com/people/zecy" class="zg-link"
													title="zecy">zecy</a><span class="bio hidden-phone"
													title="「动漫」问题请别问我，我只是动画宅">，「动漫」问题请别问我，我只是动画宅</span>
											</div>
											<div class="reason">
												在 <a href="/people/zecy/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 331 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="lushark"
										data-tip="p$t$lushark" class="zm-item-link-avatar"
										href="/people/lushark"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="7a6e606c8d70f8c8a3edeb693eb62450"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$lushark"
													href="http://www.zhihu.com/people/lushark" class="zg-link"
													title="lushark">lushark</a><span class="bio hidden-phone"
													title="我不是你想的那种人。">，我不是你想的那种人。</span>
											</div>
											<div class="reason">
												在 <a href="/people/lushark/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 32 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="沂琳"
										data-tip="p$t$irinwind" class="zm-item-link-avatar"
										href="/people/irinwind"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="c4a5f2c3ae963e6e07823c36443c335d"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$irinwind"
													href="http://www.zhihu.com/people/irinwind" class="zg-link"
													title="沂琳">沂琳</a><span class="bio hidden-phone"
													title="游戏策划 / 产品设计">，游戏策划 / 产品设计</span>
											</div>
											<div class="reason">
												在 <a href="/people/irinwind/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 39 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="赵欣"
										data-tip="p$t$kqx1987" class="zm-item-link-avatar"
										href="/people/kqx1987"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="4647934a63817b6f7d1e92d7769a9845"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$kqx1987"
													href="http://www.zhihu.com/people/kqx1987" class="zg-link"
													title="赵欣">赵欣</a><span class="bio hidden-phone"
													title="地税征管 / 宅胖 / 且答且跑题">，地税征管 / 宅胖 / 且答且跑题</span>
											</div>
											<div class="reason">
												在 <a href="/people/kqx1987/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 43 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="丁勾"
										data-tip="p$t$ding-gou" class="zm-item-link-avatar"
										href="/people/ding-gou"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="3f211b29914f9651c7dfa2fe4ab73ea3"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$ding-gou"
													href="http://www.zhihu.com/people/ding-gou" class="zg-link"
													title="丁勾">丁勾</a><span class="bio hidden-phone"
													title="死宅和射孔，没头脑和不高兴">，死宅和射孔，没头脑和不高兴</span>
											</div>
											<div class="reason">
												在 <a href="/people/ding-gou/topic/19591985/answers"
													data-tip="t$b$19591985" data-token="19591985"
													data-topicid="13908"> 动漫 </a> 话题下有 11 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="重闱"
										data-tip="p$t$li-feng-4-80" class="zm-item-link-avatar"
										href="/people/li-feng-4-80"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="100156670123af490ef847bcb3eee0a1"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$li-feng-4-80"
													href="http://www.zhihu.com/people/li-feng-4-80"
													class="zg-link" title="重闱">重闱</a><span
													class="bio hidden-phone" title="画师">，画师</span>
											</div>
											<div class="reason">
												在 <a href="/people/li-feng-4-80/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 2 个回答
											</div>
										</div></li>

									<li class="person" style="display:none"><a title="Sakura"
										data-tip="p$t$sakura.moe" class="zm-item-link-avatar"
										href="/people/sakura.moe"> <img
											src="images/touxiang.jpg"
											class="zm-item-img-avatar"> </a>
										<div class="content">

											<button class="invite-button zg-btn zg-btn-green"
												data-uid="88de38fc855cf1c99b02f3ba9caec11c"
												data-type="recommended">邀请回答</button>

											<div class="describe">
												<a data-tip="p$t$sakura.moe"
													href="http://www.zhihu.com/people/sakura.moe"
													class="zg-link" title="Sakura">Sakura</a><span
													class="bio hidden-phone" title="♡トマラシ♡">，♡トマラシ♡</span>
											</div>
											<div class="reason">
												在 <a href="/people/sakura.moe/topic/19665348/answers"
													data-tip="t$b$19665348" data-token="19665348"
													data-topicid="38458"> 动漫推荐 </a> 话题下有 3 个回答
											</div>
										</div></li>

								</ul>

								<a class="js-more" href="#">更多推荐结果</a>

							</div>


						</div>
					</div>
				</div>

				<div class="first-question-tip" style="display: none;">
					<h4>欢迎在知乎写下你的疑问，你的问题已经成功提交。</h4>
					在知乎，一个表意清晰、说明完整的问题得到首个回答的平均时间是 12 分钟。为让问题更快获得精彩的回答，你可以：
					<ul>
						<li><strong>邀请作答：</strong>用「邀请回答」功能邀请可能对这个问题感兴趣的其他用户来回答。</li>
						<li><strong>改进问题：</strong>具体地描述问题背景和提问原因，分享你在试图解决这个问题的过程中已经收集到的信息，都有助于其他用户更准更快了解你的疑惑、写下他们的回答。</li>
					</ul>
				</div>
				<div class="zh-question-answer-summary-wrap zm-item-rich-text"
					id="zh-question-answer-summary-wrap" style="display:none;">
					<h3>
						<a href="http://www.zhihu.com/question/20014415" target="_blank"
							class="zg-right zg-link-litblue" style="font-weight:normal">什么是答案总结？</a>
						答案总结
					</h3>
					<div id="zh-question-answer-summary" class="zg-section"
						data-resourceid="6914051" data-action="/question/summary">

						<div class="zm-editable-content"></div>

					</div>
				</div>

				<div id="zh-question-answer-form-wrap" class="zh-question-answer-form-wrap" style="display:none;">
					<div class="zm-editable-tip zu-answer-form-disabled-wrap">添加回答：<a href="javascript:;" name="answer_my_question">回答自己的提问</a></div>
					<div class="zm-editable-content" style="display: none;"><a href="javascript:;" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a></div>
				</div>
				<div id="zh-question-answer-wrap" data-pagesize="50" class="zh-question-answer-wrapper navigable" data-widget="navigable" data-navigable-options="{&quot;items&quot;: &quot;>.zm-item-answer&quot;}" data-init="{&quot;params&quot;: {&quot;url_token&quot;: 36767166, &quot;pagesize&quot;: 50, &quot;offset&quot;: 0}, &quot;nodename&quot;: &quot;QuestionAnswerListV2&quot;}">
					<answer></answer>
				</div>

				<a aria-role="button" class="zg-btn-white zu-button-more" style="display: none;">更多</a>
				<div id="zh-question-collapsed-link"
					class="zu-question-collap-title" style="display:none">
					<a href="javascript:;" name="expand" class="zg-link-gray"
						id="zh-question-collapsed-switcher"> <span
						id="zh-question-collapsed-num">0</span> 个回答被折叠 </a> （<a
						target="_blank" href="http://www.zhihu.com/question/20120168"
						class="zg-link-gray">为什么？</a>）
				</div>
				<div id="zh-question-collapsed-wrap"
					class="zh-question-answer-wrapper" style="display:none"></div>
				<a name="draft"></a>
				<div id="zh-question-answer-form-wrap" class="zh-question-answer-form-wrap">
					<div class="zm-editable-tip zu-answer-form-disabled-wrap" style="display: none;">undefined</div><div class="question-tip-box-bottom" style="display: none;">确定想要回答你自己提出的问题吗？<br>如果需要对问题做出更多的解释和说明，请编辑问题描述。 如果需要对其他回答做出回应，请在相应回答下通过评论发布。<br><div class="zg-clear"><a href="javascript:;" class="zg-right zg-btn zg-btn-blue" name="confirm">确定</a><a href="javascript:;" class="zg-right zg-link-gray " name="cancel">取消</a></div></div>
					<div class="zm-editable-content" style="display: none;"><a href="javascript:;" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a></div><div class="zm-editable-editor-wrap" style=""><div class="zh-answer-form clearfix"><a href="/people/zhang-yang-07-01" title="张阳" class="zm-item-link-avatar" data-tip="p$t$zhang-yang-07-01"><img src="images/touxiang.jpg" class="zm-list-avatar"></a><div><div class="zu-answer-form-title"><a href="/people/zhang-yang-07-01" title="张阳" data-tip="p$t$zhang-yang-07-01">张阳</a><span>，前端新手<a name="edit_bio" class="zu-edit-button" href="javascript:;"><i class="zu-edit-button-icon"></i>修改话题经验</a></span></div></div></div><div class="zm-editable-editor-outer"><div class="zm-editable-toolbar-container goog-scrollfloater"><div class="goog-toolbar goog-toolbar-horizontal" role="toolbar" tabindex="-1" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button" title="写作模式" role="button" id="toggleFullScreen" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-max" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="粗体 (ctrl+b)" role="button" aria-pressed="false" id="+bold" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-bold" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="斜体 (ctrl+i)" role="button" aria-pressed="false" id="+italic" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-italic" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="下划线 (ctrl+u)" role="button" aria-pressed="false" id="+underline" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-underline" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block" aria-disabled="true" role="separator" id=":k" style="-webkit-user-select: none;">&nbsp;</div><div class="goog-inline-block goog-toolbar-button" title="引用内容" role="button" aria-pressed="false" id="+blockquote" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-blockquote" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="插入代码" role="button" aria-pressed="false" id="+code" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-code" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="有序列表" role="button" aria-pressed="false" id="+insertOrderedList" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-insertOrderedList" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="无序列表" role="button" aria-pressed="false" id="+insertUnorderedList" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-insertUnorderedList" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="插入公式" role="button" id="+equation" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-equation" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block" aria-disabled="true" role="separator" id=":l" style="-webkit-user-select: none;">&nbsp;</div><div class="goog-inline-block goog-toolbar-button" title="插入图片" role="button" id="image" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-image" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-inline-block goog-toolbar-button" title="插入视频" role="button" id="video" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-video" style="-webkit-user-select: none;"></div></div></div></div><div class="goog-toolbar-separator goog-toolbar-separator-disabled goog-inline-block" aria-disabled="true" role="separator" id=":m" style="-webkit-user-select: none;">&nbsp;</div><div class="goog-inline-block goog-toolbar-button" title="清除格式" role="button" id="+removeFormat" aria-disabled="false" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-outer-box" style="-webkit-user-select: none;"><div class="goog-inline-block goog-toolbar-button-inner-box" style="-webkit-user-select: none;"><div class="tr-icon tr-removeFormat" style="-webkit-user-select: none;"></div></div></div></div><div class="tr-spinner spinner-gray" style="display: none;"></div></div></div><div class="zm-editable-editor-field-wrap"><div id="mock:i" class="zm-editable-editor-field-element editable" g_editable="true" role="textbox" contenteditable="true"><br></div><div class="editable-dropzone"><div class="row"><div class="cell"><div>拖拽至此处上传</div></div></div></div></div><div class="mention-popup" style="display: none;"><div class="writing-bg"><input aria-haspopup="true" autocomplete="off"></div><div class="tip">想用 @ 提到谁？</div></div></div><div class="zm-command clearfix"><label class="zg-left anno-box" style="-webkit-user-select: none;"><input name="anno-checkbox" type="checkbox" style="-webkit-user-select: none;"> 匿名 <span style="-webkit-user-select: none;">&nbsp;</span></label> <label class="zg-left copyright-box"><input name="copyright-checkbox" type="checkbox">未经许可，禁止转载<a href="/terms#sec-licence-6" target="_blank"><i class="zg-icon zg-icon-question-mark" style="margin-left: 5px;" id="copyright_question_mark" data-copyright-demo="true"></i></a></label> <span class=" zg-right"><a class="submit-button zg-btn-blue" name="save" href="javascript:;">发布回答</a></span><div class="draft-controls zg-right "><span class="draft-saved-info" style="display: none;"><a class="draft-clear-button goog-inline-block" href="#" data-tip="s$b$删除草稿"><i class="zg-icon zg-icon-bin"></i><span class="hide-text">清除草稿</span></a><span class="draft-saved-time">已保存</span></span></div></div></div>
				</div>
				<!-- end of content -->
			</div>
		</div>
		<div class="zu-main-sidebar">




			<div class="zm-side-section">
				<div class="zm-side-section-inner" id="zh-question-side-header-wrap">
					<button data-follow="q:m:button"
						class="follow-button zg-unfollow zg-btn-white" data-id="6914051">取消关注</button>

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

			<div class="zm-side-section shameimaru-section" id="shameimaru-question-up-e68c0213f" data-location="question_up" data-id="e68c0213f">
					<div class="zm-side-section-inner">
						<div class="zh-shameimaru">
						    <a class="shameimaru-link" target="_blank" rel="nofollow" href="/shameimaru/click?id=e68c0213f&amp;location=question_up"></a>
						    <a class="shameimaru-close z-ico-shameimaru-close" data-tip="s$b$不再显示" rel="nofollow"></a>
						</div>
					</div>
				</div>
			<div class="zm-side-section">
				<div class="zm-side-section-inner">
					<div id="zh-question-related-questions"
						class="zh-question-related-questions clearfix">

						<h3>相关问题</h3>
						<ul itemprop="relatedQuestion" itemscope
							itemtype="http://schema.org/ItemList">

							<li itemprop="itemListElement" itemscope
								itemtype="http://schema.org/Question"><a
								class="question_link" href="/question/24175626">如何评价 2014 年
									7 月新番《美少女战士 Crystal》？</a> <span class="num">22 个回答</span>
								<meta itemprop="followerCount" content="200" /></li>

							<li itemprop="itemListElement" itemscope
								itemtype="http://schema.org/Question"><a
								class="question_link" href="/question/20724682">如何评价日本动漫《甲贺忍法帖》？</a>
								<span class="num">12 个回答</span>
								<meta itemprop="followerCount" content="80" /></li>

							<li itemprop="itemListElement" itemscope
								itemtype="http://schema.org/Question"><a
								class="question_link" href="/question/20376463">动漫手办为什么这么贵？</a>
								<span class="num">44 个回答</span>
								<meta itemprop="followerCount" content="825" /></li>

							<li itemprop="itemListElement" itemscope
								itemtype="http://schema.org/Question"><a
								class="question_link" href="/question/23479288">中国动漫为何难有强大的吸引力？</a>
								<span class="num">222 个回答</span>
								<meta itemprop="followerCount" content="2006" /></li>

							<li itemprop="itemListElement" itemscope
								itemtype="http://schema.org/Question"><a
								class="question_link" href="/question/22830385">为什么现在的新番多是季番而以前的多是半年番？</a>
								<span class="num">11 个回答</span>
								<meta itemprop="followerCount" content="98" /></li>

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
				<li><a href="https://liukanshan.zhihu.com" target="_blank">刘看山</a>
				</li>

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
		                	id:<%= request.getAttribute("questionId")%>
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
	<script type="text/javascript" src="services/question.service.js"></script>
	<script type="text/javascript" src="services/topic.service.js"></script>

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
</body>
</html>