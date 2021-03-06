<%@ page language="java" pageEncoding="UTF-8"%>
<div class="modal-dialog-bg"></div>
	<div ng-controller="AddQuestionController" class="modal-wrapper">
		<div class="modal-dialog absolute-position" style="width:550px;">
			<div class="modal-dialog-title">
				<span class="modal-dialog-title-text">提问</span>
				<span close-modal class="modal-dialog-title-close"></span>
			</div>
			<div class="modal-dialog-content">
				<div class="zh-add-question-form">
					<div ng-if="addQuestionCtrl.queryQuestion.firstAsk" class="js-add-question-splash add-question-splash-page" >
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
					<form class="js-add-question-form" ng-show="!addQuestionCtrl.queryQuestion.firstAsk">
						<div class="zg-section-big clearfix">
							<div id="zm-modal-dialog-info-wrapper"></div>
							<div ng-show="addQuestionCtrl.addQuestion.errorName" style="position: relative;" id="zm-modal-dialog-warnmsg-wrapper">
								<div class="zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px">问题字数太少了吧</div>
								<span class="zm-modal-dialog-guide-title-msg"></span>
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
								<span class="zg-gray zg-right hidden-phone">话题越精准，越容易让相关领域专业人士看到你的问题</span>选择话题：<span ng-show="addQuestionCtrl.addQuestion.errorTopics" id="zh-question-form-tag-err">至少添加一个话题</span>
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