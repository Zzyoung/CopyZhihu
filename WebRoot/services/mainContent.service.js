(function(){
	angular.module('zhihu').factory('MainContentService',MainContentService);
	
	MainContentService.$inject = ['UtilsService'];
	
	function MainContentService(UtilsService){
		var service = {};
		
		service.feeds = [{
			people:'小爝1',
			avatarPicture:'images/173df7a79b5a5f003fd5445bf72da99d_m.jpg',
			peopleDesc:'http://www.tuer.me',
			answerTime:'57 分钟前',
			question:'如何在前端技术面试中回答“你遇到过最有挑战的技术问题”？',
			questionUrl:'/question',
			questionDesc:'平时没遇到过很有挑战的技术问题？想一想，google一下，stackoverflow一下基本就解决了。所以每次都会打“没有遇到过什么有挑战的问题”。不知道怎么回答比较好。请各位大牛指点一下。谢谢＼(*T▽T*)／',
			voteCount:2,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'&gt;解决了 不一定是最优解。说实话现在对于工程师来说这么难吗。',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			},{
				name:'王五',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'people',
				name:'小爝',
				action:'回答了问题',
				link:'',
				time:'57 分钟前'
			}
		},{
			people:'小爝',
			avatarPicture:'images/173df7a79b5a5f003fd5445bf72da99d_m.jpg',
			peopleDesc:'http://www.tuer.me',
			answerTime:'1 小时前',
			question:'你所管理的手下是一群技术牛人，你如果给到压力他们反正也不怕找不到工作，觉得不爽就走，离职率暴涨怎么办？',
			questionUrl:'/question',
			questionDesc:'看到大家很多的认为这里所说的压力是工作压力，或者是因为工资跟工作不匹配等等的原因，其实这里所说的压力并不是指这个，也不仅仅是管理上给到的压力，不知道大伙对itil是否了解，了解应该知道，itil在最起初实施的时候总是给人增加麻烦的感觉，所以有一些技术的牛人觉得给他们增加了麻烦，感觉内心不爽而产生离职的想法。',
			voteCount:1,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'团队组成不合理，全是牛人根本无法干活…真的。',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			},{
				name:'王五',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[],
			source:{
				type:'people',
				name:'小爝',
				action:'回答了问题',
				link:'',
				time:'1 小时前'
			}
		},{
			people:'Roc Lee',
			avatarPicture:'images/a10e881801e4b057446928ef723dbe88_m.jpg',
			peopleDesc:'微信公众号 anotherroclee',
			answerTime:'1 小时前',
			question:'为什么几乎所有好莱坞动画片的口型都与台词一致？',
			questionUrl:'/question',
			questionDesc:'这个问题我已经发现很久了，应该是我看1995年拍摄的Toy Story时偶然间静音了几秒之后。接下来我只要看动画片就比较关注这个，然后我翻了一些的老一点动画片，例如小美人鱼，发现那个时代的动画片也是口型和台词一致的，也就是说如果读得懂英文唇语，就能知道台词了。一开始我也仅仅认为是好莱坞的工匠作风，连动画片的口型都一丝不苟，但是后来我想，这种做法是不是便于听觉障碍的人也能顺利读懂动画片的台词。 然而种作风我看个别欧陆的动画片也在这么做，所以我想了解一下这背后的意义，是有什么法律法规强制执行或是好莱坞制定过行业规章，让几乎所有的动画片厂都一致采用这种做法？还有这种做法是不是应该推广到中国，毕竟中国是万年的张嘴闭嘴式啊！',
			voteCount:1,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'希望知乎日报可以让作者选择自己的文字是否开放评论。那样的话，Magasa先生也会把回答授权给日报吧。<br><br>-<br><br>与其说好莱坞在一开始就「选择」了严谨的风格，我更相信是在动画片发展的初期，那些先驱没有想过「对不上的口型」也是一种可选的解决方案。<br><br>Magasa先生说的Max Fleischer也好，直接启发沃尔特·迪士尼的Eadweard Muybridge也好，他们在时代的最前面琢磨动画的时候，还在玩转描机的时候，脑海里首先是把这种新事物定位成动态照片、早期电影的新形态。动画片的雏形，也就是把摇篮里的电影进行漫画化的过程。<br><br>当有声电影兴起的时候，因为电影里的角色是对得上口型的，所以早期的动画师也会默认动画片里的角色也应该对得上口型。<br><br>他们不是放弃了「不对口型」的选择，而是一开始就不知道这个选项存在过。等到精益求精成了行业标准，想退步都难了。<br><br>-<br><br>在中国、日本流行的「不对口型」风格，当然不能用「东方写意」来文过饰非。「写意」和「对口型」之间是完全没有冲突的。<br><br>中国的「不对口型」，当然是从日本学来的。但是日本人的动画片，又是受了中国人的动画片影响而发展起来的。<br><br>真是相爱相杀。<br><br>先说激励了手冢治虫的万氏兄弟作品《铁扇公主》。<br><br><img src=&quot;images/f88ba0d7c24221cc8fa4f3712bbec79f_b.jpg&quot; data-rawwidth=&quot;720&quot; data-rawheight=&quot;576&quot; class=&quot;origin_image zh-lightbox-thumb&quot; width=&quot;720&quot; data-original=&quot;images/f88ba0d7c24221cc8fa4f3712bbec79f_r.jpg&quot;><br>《铁扇公主》其实是认真做了口型的，风格和好莱坞动画片一样，口型对到了每一个音节。这在唐僧、铁扇公主等人类角色身上特别明显。留意看唐僧的嘴唇，你会发现作者连撮口、合口的细节都做得很细心。<br><br>但是如果不留意，你不太能意识到这部动画片是对了口型的，因为，音频和画面对不上。<br><br>抱着科学严谨的态度，我在视频编辑软件里把视频和音频错开，用各种方法尝试左右微调，证明了这片子确实在制作初期就是音频与画面口型对不上。<br><br>《铁扇公主》的很多画面，是实拍了京剧视频以后，再转绘而成的。而后期的配音，用的不是实拍京剧时的录音，所以，是先做好了口型画面，再叫配音演员去对。考虑到那是1941年的中国，在这样一部先驱级的动画片里，配音演员对不上口型实在是很可理解的。<br><br>经过二十年的发展后，万氏兄弟在制作《大闹天宫》时对这个问题已经做了设计上的改进。这个改进，倒不是去努力对好口型，而是一种打太极般的东方智慧。考虑到时间成本、资金成本和人才能力的制约，在明知不太可能把对口型做到完美的情况下，《大闹天宫》采取了「关键帧对口型」的办法。<br><br>具体操作方法，就是把台词里口型夸张的部分做出来，把其它部分含糊带过。比如说，「吃俺老孙一棒」这句台词：在「俺」字上做又大又圆的口型；在「老」字上收一点；后面的「孙一」二字只是口型小即可，是圆是扁，合口齐齿，都不用计较；然后在「棒」字上再来一个又大又圆的口型。<br><br>做过配音的朋友都会明白，这种解决方案多么巧妙。配音的时候，只要口型的「关键帧」对上了，普通观众是看不出蹊跷的。<br><br>就像我把「you think you\'re better than me」翻译成「你觉得你比我牛逼」来配音，细拆来看口型根本不对，但是这一串嘴形小的音节里，只要「better」的「be-」和「比」字、「me」和「逼」字的双唇音对上了（特别是最后一个音节口型一样），普通观众就完全不会产生「口型没对上」的感觉。<br><br>当然，最后《大闹天宫》的口型还是没对上，因为后期配音还是很写意。<br><br>-<br><br>这些不太成功的努力启发了手冢治虫，让日本人看到了一条新的出路。<br><br>原来，口型对不好的动画片，也可以取得成功。日本人索性把口型扔在一旁，瞬间把制作成本省了一大笔，产业门槛被大幅拉低，日本动画也跟着新漫画一起，噌噌地发展起来了。<br><br>我看过的一本普及级别的电影书籍里（忘了是哪本，刚刚在书架上翻了半天没找到，也许是大学时在图书馆看的），花了极大的篇幅来讲解对口型的重要性。里面有很多危言耸听的话语，大意就是，如果你的片子里口型对不上，你这辈子就别想在电影产业里混出半点名堂。<br><br>这书的作者当然是美国人。<br><br>关于对口型这个问题，我觉得作者应该去采访一下徐克……<br><br>不管怎样，作为在动漫领域唯一能与美国抗衡的国家，日本确实在很大程度上仰仗了「不对口型」这架过墙梯。能让一种缺陷变成一种风格——正是这种制定标准的霸气，让我们在观看《千与千寻》时完全忘记角色的嘴巴与台词的声音之间的不和谐，而完全沉入到宫崎骏打造的魔幻与温情的世界里。<br><br>-',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			},{
				name:'李四',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			},{
				name:'王五',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'topic',
				topic:'电影',
				hot:true
			}
		},{
			people:'陆仁贾',
			avatarPicture:'images/a71e0ad8f6fbe604a9c60ea4aad7ff1f_m.png',
			peopleDesc:'算我半个大V吧...三分之一也行... 六分之…',
			answerTime:'1 小时前',
			question:'BAT 中哪家公司消失对中国人影响最小？',
			questionUrl:'/question',
			questionDesc:'我是在世界三巨头微软谷歌苹果后想到这个姊妹题的，我感觉他们仨的中国地位就像世界上的微软谷歌苹果，哪个对中国的“控制”“支撑”程度更深？',
			voteCount:180,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'阿里巴巴：掌握了中国大半的电子商务如果消失，对中国互联网经济的冲击巨大。腾讯：即时通讯巨头，游戏巨头，互联网社交媒体巨头如果消失，对中国这几大领域的影响也是空前绝后。百度如果消失，影响大于前两者之和。大部分人下载软件不会再被安装百度全家；…',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'winter',
				content:'good'
			}],
			source:{
				type:'people',
				name:'恶魔的奶爸Sam',
				action:'赞同了回答',
				link:'',
				time:'1 小时前'
			}
		},{
			avatarPicture:'images/1abb11bdd_m.jpg',
			question:'刚毕业，无处可逃无从下手?',
			questionUrl:'',
			unnamed:false,
			isShowComments:false,
			voteCount:180,
			withoutAnswer:true,
			answerExpanded:false,
			answerCount:9,
			comments:[{
				name:'winter',
				content:'good'
			}],
			source:{
				type:'topic',
				topic:'职业规划',
				hot:false
			}
		},{
			people:'花吃了那女孩',
			avatarPicture:'images/a77af6b1c79b56c415125a2a1b185b83_m.jpg',
			peopleDesc:'渣渣大学汪，汪汪考研狗。',
			answerTime:'1 小时前',
			question:'为什么部分女人总喜欢说男人幼稚？',
			questionUrl:'/question',
			questionDesc:'我只知道女人多了半条染色体，其它的真不知道。<br>所以我认为没有任何根据表明男性比女性幼稚。<br>我所感受到的男女差异主要在于：<br>大多数情况，<br>女性往往很确切地以自身的、眼前的短期利益为中心，对过分纠结对错反感；<br>男性往往有很明确的是非观、以大局或长远利益为重，对行为不守逻辑反感。<br><br>而且，很多时候女人指责男人幼稚的原因总是那么说不过去。<br>例如：<br>我不过就跟前男友聊得开了点，男朋友就看不下去了他怎么这么幼稚?<br>今天在咖啡厅面试了个男的，结账的时候竟然要AA他怎么这么幼稚？<br>男朋友跟我相处了这么长时间，连我不喜欢帮人取快递都不知道，不会自己安排时间啊，非让我帮你取，怎么可以这么幼稚？<br>虽然我肤白貌美温柔贤惠，但却一直没找到我的王子，男人们总是对小婊砸趋之若鹜，怎么全都这么幼稚？<br><br>但很有趣的一点是，女性对男性的声讨总会包含“幼稚”这个词，<br>而男性却的确很少说女性幼稚，男性声讨女性时往往跟“自私”有关。<br><br>那么问题来了，<br>为什么一个群体看待另一个群体会出现如此雷同的认识呢？<br><br><br>-------------------------------------------------------------------------------------------------------------------------<br>那几个例子，其实吧……<br>1是以前知乎上一个女生问的问题的内容，遭到回答者的大举围攻<br>2是过去的一条微博，女HR不在自己公司面试却约到了咖啡厅，付账后很不满<br>3是我的亲身经历，我自己换成对第三方的口吻复述了一遍<br>4是社交网络看到的日常吐槽<br>我只是恰巧发现这些来源不同的内容巧合性的跟“幼稚”有关。故有此问。<br><br>另外我的问题中关于性别差异的描述的确存在主观倾向，所以我说了是“我所感受到的”。<br>如果让部分人感到反感或不适，我向各位道歉。<br><br>不过还有一点我很诧异：1、2两个例子的链接时间太久，我都找不到了，但是记忆中网络评价都是一边倒得批评甚至攻击当事人的。为什么在这个问题的答案中这些做法却普遍被说得理所当然呢？（是我的描述方式误导了各位答主了么= =|||）',
			voteCount:6,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'不要说你身边的男生都是这样幼稚。<br>也许他在另一个女生眼中是成熟的，也许你自以为你是成熟的，其实在别人眼里却是幼稚，而自己却你不知。评判一个人的性格带有太多主观意向。<br><br><br>所以会有这么多上学并没有什么卵用的言论，无外乎幸存者偏差。99%钻研学业的走上人生巅峰，似乎并没有被人所熟知，唯有那1%辍学下海奋斗并且成功的被写进励志故事，被大肆宣扬，他们的故事让你读起来舒服，然后成为你不好好学习的借口。<br><br><br>一叶障目、以偏概全。可是为什么有这么多人持有这种思考方式呢？<br>因为对你有利，转发天津爆炸事件并且为其祈福的空间朋友圈动态，你看，别人会觉得你善良；把《南山南》挂在嘴边，别人会觉得你文艺；口口声声评论说那人太幼稚了，别人会觉得你成熟。这种无成本的利好，以人类趋利避害的天性，何乐而不为？ 可是你真的有真正关心天灾？你真的能听懂《南山南》文艺在何处？你真的有足够了解那个所谓幼稚的人？ 可怕的是，以别人痛苦为自己牟利。<br><br>不少男生都被冠之以“幼稚”和“没有安全感”吧？这是多么好的借口啊，一切矛头指向对方，将自己置于高高在上的圣坛，一副圣母玛利亚的模样。殊不知伤害的是一颗善良炽热的心。当发现对她来说所谓成熟富有安全感的另一半甚至根本不具备那些特质的时候，会发现“幼稚”这个词真的很可笑。<br>女生看到这的时候，面红耳赤，怒斥道“你这些偏见也不是幸存者偏差？”<br>或许我说错了，又或许说到你们心里了。',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'topic',
				topic:'两性关系',
				hot:false
			}
		},{
			people:'james xu',
			avatarPicture:'images/8186aa168_m.jpg',
			peopleDesc:'不务正业的石油工程师、前职业德州扑克牌手',
			answerTime:'1 小时前',
			question:'你期待的盛世是什么样子的？',
			questionUrl:'/question',
			questionDesc:'',
			voteCount:3,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'Everybody care about their own fking business, cuz we trust our leader gonna always make the right choice. <br><br>So kids plz,<br><br> It\'s not that complicated.',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'topic',
				topic:'经济',
				hot:false
			}
		},{
			avatarPicture:'images/386dc566a_m.jpg',
			question:'我到底要不要辞公务员？',
			questionUrl:'',
			voteCount:180,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			withoutAnswer:true,
			answerCount:12,
			comments:[{
				name:'winter',
				content:'good'
			}],
			source:{
				type:'topic',
				topic:'职场',
				hot:false
			}
		},{
			people:'',
			avatarPicture:'images/e6dafdb34_m.jpg',
			peopleDesc:'',
			answerTime:'',
			question:'中国真的有很多穷人吗？',
			questionUrl:'/question',
			questionDesc:'26 岁了，三观也正常，但是长到现在从学校到社会，在从朋友圈子到陌生人，也没有真正的看到过几次真正的穷困人家，求解疑。<br>———————————————————————————————————————————<br>穷人的相关官方定义：<br><ol><li>经济合作与发展组织在1976年组织了对其成员国的一次大规模调查后提出了一个贫困标准，即<b>以一个国家或地区社会中位收入或平均收入的50%作为这个国家或地区的贫困线</b>，这就是后来被广泛运用的国际贫困标准。<br></li><li>世界银行 2008 年颁布的贫困线标准为<b>每人每天消费 1.25 美元</b><br></li><li>在我国，<b>年收入在 2300 元以下的人群（折合约1.017美元/日）</b>，将被算作贫困人口。<br></li></ol>相关报道：<br><a href="http://finance.qq.com/a/20111130/001503.htm" class=" wrap external" target="_blank" rel="nofollow noreferrer">贫困线上调至2300元 贫困人口将过亿<i class="icon-external"></i></a><br><a href="http://www.chinanews.com/cj/2011/11-29/3495569.shtml" class=" wrap external" target="_blank" rel="nofollow noreferrer">中国贫困线上调接近世行名义标准――中新网<i class="icon-external"></i></a><br><a href="http://money.163.com/11/1130/02/7K2S6UCE00253B0H.html" class=" wrap external" target="_blank" rel="nofollow noreferrer">年收入2300元成贫困线新标准<i class="icon-external"></i></a>',
			voteCount:3,
			unnamed:true,
			isShowComments:false,
			answerExpanded:false,
			answer:'上小学六年级的时候，家里出了变故，爸爸生意失败，我从一个上学放学有专车接送的小公主变成了连学费都交不起的穷孩子（那时学费一个学期才500块），整个初中我印象最深的就是每次交学费的时候，我都会想出各种借口拖延，印象最深的一次拖了一周多，我跟我妈说再交不上学费我不去读书了，第二天我一早醒来看见我妈头发一夜之间白了一大半，真的一点也不夸张，还看见放在我枕头边的学费，瞬间我眼泪就下来了。后来家里一直在还债中度过，大学第一年考上了我放弃了，但是第二年爸爸不知从哪借来的钱非要让我复读，复读后考了一个211大学，学费依然是大问题，我记得很清楚，我入学时老爸把我送到火车站那一刻跟我说，车票太贵了，我就不送你了，我相信你自己能搞定（车程是大连到长沙，没有直达火车，要辗转30个小时才能到），我自己真的就搞定了，入学第一件事是找助学贷款处，别人在憧憬美好的大学，我在为大学四年的学费担忧。那时很自卑，有人追也不敢谈恋爱，同学约着一起去旅游也会找借口推掉，曾经在全程无座的情况下站了30多个小时回家，只带一瓶矿泉水和两根棒棒糖…',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'topic',
				topic:'人文',
				hot:false
			}
		},{
			people:'Coke',
			avatarPicture:'images/3f30afdfc_m.jpg',
			peopleDesc:'以前是文科生的码农',
			answerTime:'',
			question:'有哪些书的结尾让你印象深刻？',
			questionUrl:'/question',
			questionDesc:'我先说一个，金庸的《神雕侠侣》：<blockquote>       其实明月在天，清风吹叶，树巅乌鸦啊啊而鸣，郭襄再也忍耐不住，泪珠夺眶而出。正是：“秋风消，秋月明；落叶聚还散，寒鸦栖复惊。相思相见知何日，此时此夜难为情。”</blockquote>       第一次读完神雕时正值夜深，万籁俱静，全书在这里戛然而止，说不出的惆怅，辗转反侧，难以入眠。',
			voteCount:3,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'<blockquote>天渐渐黑了，道路开始急转弯爬高。<br><br>    他们来到镇上径直开到旅馆。特丽莎和托马斯从未到过这里。他们下到地下室，找到了酒吧、舞厅以及几张桌子。有一位大概六十来岁的人在弹着钢琴，年纪与他差不多的一位妇人拉着小提琴。演奏的名曲已有四十年历史了。有五、六对舞伴飘在舞池的地板上。<br><br>    “这里没有人跟我跳。”小伙子朝四周扫了一眼，立即邀特丽莎跳舞。<br><br>    集体农庄主席和托马斯坐在一张空桌旁边，要了一瓶葡萄酒。<br><br>    “我不能喝，”托马斯提醒他，“我要开车。”<br><br>    “别傻，”他说，“我们在这里过夜。”他起身去服务台，订两个房间。<br><br>    特丽莎与小伙子从舞池里归来，主席接着邀她，最后才轮到托马斯。<br><br>    “托马斯，”她在舞池里对他说，“你生活中的一切，都是我的错。由于我的错，你的句号打在这里，低得不可能再低了。”<br><br>    “低？你说什么？”<br><br>    “要是我们呆在苏黎世，你仍然会是一位外科医生。”<br><br>    “你会是一位摄影师。”<br><br>    “这是作一种愚蠢的比较，”特丽莎说，“你的工作对你来说意昧着一切；我不在乎我干什么，我什么都能干。我只失去了一样东西，你失去了所有的东西。”<br><br>    “你没注意到我在这里很快乐？特丽莎？”托马斯说。<br><br>    “外科是你的事业。”她说。<br><br>    “追求事业是愚蠢的，特丽莎，我没有事业。任何人也没有。认识到你是自由的，不被所有的事业束缚，这才是一种极度的解脱。”<br><br>    他坦率的声音不容怀疑。特丽莎回想起几个小时前他修理卡车时的一幕，想起自己亲眼看到他如此老态。她已经达到了自己的目标：一直希望他变得老一些。她再次回想起自己儿时的房间里那只紧紧贴着自己面颊的小兔。<br><br>    变成一只兔子意味着什么？这意昧着丧失所有的力量，意昧着一个人比任何人都虚弱。<br><br>    他们随着钢琴和小提琴的旋律翩翩飘舞。特丽莎把头靠着托马斯的肩膀，正如他们在飞机中一起飞过浓浓雨云时一样。她体验到奇异的快乐和同样奇异的悲凉。悲凉意昧着：我们处在最后一站。快乐意味着：我们在一起。悲凉是形式，快乐是内容。快乐注入在悲凉之中。<br><br>    他们回到桌边。特丽莎又同集体农庄主席和小伙子跳了两三轮，小伙子喝得太多，以至同她一起摔倒在舞池中。<br><br>    接着，他们上楼去，找到了他们那两间分开了的房间。<br><br>    托马斯转动钥匙，扭开了吊灯。特丽莎看见两张床并排挨在一起，其中一张靠着一张小桌和一盏灯。灯罩下的一只巨大的蝴蝶，被头顶的光吓得一惊，扑扑飞起，开始在夜晚的房间里盘旋。钢琴和小提琴的旋律依稀可闻，从楼下丝丝缕缕地升上来。</blockquote>',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'topic',
				topic:'阅读',
				hot:false
			}
		},{
			people:'胡兄',
			avatarPicture:'images/07af95234_m.jpg',
			peopleDesc:'深圳一站式户外/户外用品租赁/户外店/户…',
			answerTime:'',
			question:'中国这几年，电商对实体店的冲击有多大？',
			questionUrl:'/question',
			questionDesc:'中国这两三年，淘宝等电商的发展可谓是突飞猛进，那么电商对实体店的冲击有多大呢？可从生活所见，经济，市场等进行探讨。',
			voteCount:3,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			answer:'电商对实体店的冲击在一线城市，大中型城市表现特别明显。慢慢地会延续到下面的城市。<br>很多商场被迫搞起来了常年打折的活动，一倍换三倍四倍五倍的都出来了，以前感觉电商是常见的清库存的地盘，现在实体店也是被迫卷入，深圳的商场如果说搞一个促销，才打个五折，那基本上可以死翘翘，怎么着也都得三折起。不过下面的中小城市商场生意还是不错，可能跟常年的习惯有关系，比如茂业在深圳的店常年打折扣，消费者已经麻木了，但是他们在河北某个城市的店，生意非常火爆，还是八折。这个和黄金位置，竞争对手，市场规模，消费习惯都有一些关系。<br>言归正传，从周边的情况聊一下电商对实体的冲击。<br>时间久的商场还没有特别大的冲击，新的空白区域新建的商场影响很大。比如某深圳本土百货，他在龙岗店以及在宝安店，生意都比较一般。听说现在在走资本市场，可眼下资本市场也有点冷，股市也震荡不止。不知道他如何解决眼下商户的退租潮。<br>超市这块，更是竞争白热化。一号店，天猫超市等这些让我们这些年轻人开始了鼠标购物的过程，与此同时，线下超市之间的竞争也趋向白热化。新开的大型楼盘都匹配了超市，一条街几十米有几家超市，还有N多家美宜佳等便利店，还有一些社区的卖水果的店，卖蔬菜的店，菜市场，真不知道怎么够分的。龙岗中心城附近有三家以上的沃尔玛超市，几公里范围内而已。龙岗COCOPARK一家山姆会员店，宝能有一家沃尔玛，龙平东路有家沃尔玛，相聚才一点点距离。华润万家在沃尔玛布局的这些范围内，估计又有十几家超市，感觉大家都是疯了。租金那么贵，人工那么贵的，电商在冲击，周边的商户也在冲击，不知道怎么来盈利。更可怕的是，新开的楼盘都在招超市入驻。一些小的超市已经经营不下去了，都在转行。卖水果可能利润比较高，一条街不知道多少家开始卖水果了，各种招数，问题是人只有这么多，大家都在辛苦和煎熬。<br>类似的情况太多了，我分析一下现在路边商铺的属性，大多数改为了本地化服务属性。比如吃饭，比如剪头发等等，那些卖衣服的，越来越少。想想都可怕，现在淘宝上一件T恤，9块9包邮，某段时间还出现了5块钱全国包邮，一件T恤。当电商都在亏的时候，实体怎么赚钱。你可能说不卖便宜的，当然可以，可是这么多便宜货在你眼前，你也会习惯最多花几十买一件T恤或者POLO或衬衫。<br>本质上来说，消费者因为电商是获利的。从长远来说，都是在伤害。越来越单薄的利润，使得社会的每个环节都在极其恐怖地控制成本，大家会偏向于价格更低更低更更低，最后拿到的就是很差的产品质量，很不好的服务。大家都不能获利，最后变成了人人都是受害者。<br>当然了，社会肯定是要往前发展，不能因为电商现在的问题而否定电商。电商只有充分的尊重产品的价值，整个社会的经济才会更健康。好的毛利的产品，可以通过电商销售，也可以通过线下的O2O提供更好的服务，消费者也开心，厂家也开心，最终会有利润进行更好的产品开发，才可以实现良性循环。',
			voters:[{
				name:'张三',
				link:'http://www.zhihu.com/people/song-ying-3-25'
			}],
			comments:[{
				name:'',
				content:''
			}],
			source:{
				type:'topic',
				topic:'电子商务',
				hot:false
			}
		},{
			avatarPicture:'images/5bda61313f8e3767edaa6134941e207b_m.jpg',
			question:'成年人的肩膀可以练的更宽吗？',
			questionUrl:'',
			voteCount:180,
			unnamed:false,
			isShowComments:false,
			answerExpanded:false,
			withoutAnswer:true,
			answerCount:12,
			comments:[{
				name:'winter',
				content:'good'
			}],
			source:{
				type:'topic',
				topic:'健身',
				hot:false
			}
		}];
		
		return service;
	}
})();