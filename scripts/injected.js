function mergeAndUnique(arr1, arr2) {
  const arr = [...arr1, ...arr2];

  const uniqueArr = [...new Set(arr.map((item) => item.screen_name))];

  const result = uniqueArr.map((name) => {
    const item1 = arr1.find((item) => item.screen_name === name);
    const item2 = arr2.find((item) => item.screen_name === name);
    return { ...item1, ...item2 };
  });

  return result;
}

// excute once
const words = (function () {
  const keywordsString =
    "！|弟弟小|昂撒|台独|小日本|找死|主子|数典忘祖|假新闻|挑事|哟|天塌不下来|绿党|圣母|种性别|保姆级|单亲|线下|同城|已婚|一面之词|贱民|哈哈哈|呵呵呵|上天|婊|鸟样|什么逼|什么傻|装什么|装TM|牛批|呆蛙|妓|妓者|有毛病|有病|😄|粪|牛b|它妈|献忠|东亚病夫|https://t.co|他娘|怎么不|这孙子|下地狱|你哪里来的|你哪来的|霉国|米国|宰割|我tm|奶奶个球|狠狠|握草|丑国|今天星期|今天周|个逼|留岛|老实|死绝|死路|造谣|nm的|CNM|蹦哒|个锤子|哔哔|炮制|世纪谎言|支人|暖心|大纪元|应得的|脑子|二逼|二货|台湾省|是中国的|管好|脸都|狗|去你|关你|抹黑|💞|老鸨|嫂子|裱子|境外势力|屁|带节奏|有故事|双标|织女|没事干|滞纳|逼逼|b脸|逼脸|小编|瞎|扯淡|灯塔|白皮|鬼子|老美|磨叽|几把|咋呼|煽风点火|美帝|J8|阳痿|呵呵|啥|嘿嘿|丫的|你丫|他娘|蛆|个吊|特么|老不死|实锤|🐸|蛙蛙|口嗨|嘴炮|✊ ✊ ✊‏|笑死|有一说一|意淫|牛逼|毛线|胡说|我擦|我靠|呸|蛙编|看不到的新闻|个屁|MLGB|交友|性瘾|电报|已婚|代开发票|学信网黑客|变性|傀儡|白左|黄左|政治正确|黑命贵|🇨🇳🇭🇰🇲🇴🏁|🇨🇳|qnmlgb|尼玛|🤮|滚蛋|黑鬼|畜牲|你大|畜生|傻逼|死全家|狗东西|脑残|废物|妈的|草泥马|操你妈|日你妈|狗日的|河南银行|村镇银行|呸|中国河南|王八蛋|煞笔|二逼|贱人|狗屎|滚蛋|死全家|傻叉|装B|王八蛋|贱货|狗屎|垃圾|个P|狗P|个鬼|被你吃了|狗屁|丢人现眼|去死|垃圾|废物|白痴|蠢货|傻逼|滚蛋|草泥马|二百五|王八蛋|贱货|婊子|绿茶婊|神经病|死鬼|杂种|妈逼|日你妈|操你妈|操你祖宗十八代|操你全家|干你娘|草你妈|草泥马的|操蛋|操屄|操逼|吃屎|日死你|日你祖宗十八代|日你全家|干死你|干你祖宗十八代|干你全家|草死你|草你祖宗十八代|草你全家|艹你妈|艹死你|混蛋|败类|烂人|贱人|恶心|变态|不要脸|下流|死全家|王八蛋|傻逼|装B|妓女|卖淫|婊子|毒瘤|垃圾|垃圾人|死基佬|人妖|阴阳人|娘娘腔|假小子|娘们|娘娘们|婊子|骚货|屎|滥交|狗日|操你|妓女|鸡巴|屁眼|烂货|贱人|滚蛋|死开|傻逼|煞笔|妈的|操你妈|草你妈|王八蛋|贱货|二逼|白痴|脑残|傻瓜|混蛋|变态|搞基|同性恋|基佬|蕾丝边|妖姬|妖精|妖娆|妖艳|妖冶|妖异|妖孽|妖魔|妖狐|妖怪|太监|人渣|狗娘养的|傻屌|神经病|白痴|脑残|懒猪|傻瓜|笨蛋|憨批|瘪三|傻子|二逼|呆子|蠢货|煞笔|懒鬼|废物|懒汉|猪头|下流|草泥马|操你妈|脑残|神经病|白痴|混蛋|人渣|骗子|假货|欺诈|弱智|无耻|恶心|坏蛋|败类|流氓|恶棍|别废话|窝囊|颜色革命|毒瘤|卑鄙|阴险|险恶|肮脏|龌龊|恶劣|牛屎|之阴|大外宣|劣等|民逗|左棍|人类之癌|造孽|蛆虫|牛鬼神蛇|不男不女|畜生|卖国贼|汉奸|叛徒|狗娘养的|狗屎|垃圾|混蛋|败类|烂人|贱人|鬼佬|尼哥|恶心|变态|不要脸|下流|死全家|王八蛋|傻逼|娘炮|变态|变性人|垃圾|傻逼|煞笔|狗屎|狗日的|王八蛋|贱人|婊子|滚开|滚粗|去死|死了|死掉|死人|肏|屌|鸡巴|妓女|骚货|放屁|傻子|白痴|脑残|弱智|没脑子|懒得理你|不想理你|不爱理你|不理你|闭嘴|低能|一辈子出不了头|天生犯贱|一无是处|不自量力|支那|黑鬼|阿三|台巴子|台蛙|个SB|个sb|煞笔|妈的|操|草泥马|傻逼|贱人|货色|作孽|左逼|左B|左b|屁话|P话|吊样|阿鸡|阿猫|阿狗|垃圾|畜生|死全家|混蛋|苟且偷安|过河拆桥|反面教材|背影般离去|笨蛋|废物|无能|蠢驴|畜生|混蛋|家伙|庸才|二五仔|小丑|败家子|败家玩意|败家东西|笨蛋|魏家鼠|害人精|害群之马|无赖|屁精|饭桶|笨猪|带病的|异类|不三不四|人渣|好色之徒|死变态|异类|太自私|最讨厌你|恶心死了|滚回你妈肚子里去|滚回你家|走开|别来烦我|滚出|别在我面前出现|离我远点|消失|消失吧|装B|妓女|卖淫|婊子|毒瘤|垃圾|垃圾人|人渣|神经病|白痴|脑残|懒猪|傻瓜|笨蛋|憨批|瘪三|傻子|二逼|呆子|蠢货|丧尽天良|狗眼看人低|不要脸|小人|奸商|败家子|傻缺|脸皮厚|煞笔|懒鬼|废物|懒汉|猪头|反人类|反动派|恶霸|走狗|大忽悠|国贼|独裁者|专制者|暴君|伪君子|黑鬼|支那|毛子|阿三|鬼佬|阿巴|窝囊废|二逼|煞笔|傻逼|脑残|白痴|废物|没用|死全家|滚蛋|去死|死了|死掉|死人|劣人|烂人|骚货|婊子|支那|你妈|活该|该死|杂交|变态|#代孕|#侮辱|#妈妈|#抚摸|#磕头|#秘书|#蒙眼|10天1cm|18禁|amateur|anal|av|a片|gay片|g点|g片|h动漫|h动画|porn|sm|telegram下载|tg下载|tg：|xing伴侣|yin荡|➕✈️|➕电报|一ye情|一ye欢|一夜情|一夜欢|万人斩|万艾可|三件套|三级|三陪|下体|不谈情|不走进生活|丝袜|丝诱|两性知识|中学老师一枚|主页私信|乖乖粉|买春|乱交|乱伦|乱奸|乳交|乳头|乳房|乳晕|乳沟|乳爆|乳神|互相倾诉一下|互相倾诉下|互相认识一下|互相认识下|亚情|人体摄影|人兽|人妻|人皮面具|从前面捅|从后面捅|代孕机构|伟哥|伦图|伦理片|伦理电影|体位|体制内老师|体制秘书|体奸|体质秘书|作爱|供卵|做爱|偷拍|偷欢|偷窥|催情药|催情辅助用品|入驻平台|全国可飞|全裸|兽交|兽奸|兽性|兽欲|内射|写真|凌辱|几吧|出轨|前凸后翘|加微信|加我主页|助勃|助孕|劲爆内容|勃起|包二奶|包选性别|千人斩|单亲|卖淫|印度三哥|厕奴|原味内衣|去衣|双乳|双峰|双性恋|双效款|双臀|反差|发情|发泄|发浪|发生关系|口交|口令|口射|口活|口淫|口爆|叫床|可以互相认识|可约|吃精|各种姿势|同城|同房|后庭|后穴|吞精|听话水|听话狗|听话的来|听话的狗|听话的🐕|听话🐕|吸精|呻吟|咪咪|哟啪|唯一 telegram|唯一 tg|唯一telegram|唯一tg|喜欢刺激|喜踩踏|喷水机|喷精|四房色播|国产AV|在主页|在编中学老师|在编小学教师|在编教师|在职中学老师|在职小学教师|在职教师|坐脸|增大|增粗|壮阳|处女|处男|多人轮|多人运动|大乳|大波|天然补品|套弄|女M|女S|女m|女s|女主人|女优|女公关|女奴|女王|女私教|女空姐|女郎|奶子|奸情|好嫩|好痒|妓女|妖娆|婊|婬|媚外|嫖娼|嫖客|嫩B|嫩b|嫩女|嫩比|嫩穴|嫩逼|学生妹|实战|客户反馈看媒体|寂寞女|寂寞男|密穴|寻m|寻s|射爽|射精|射颜|小xue|小姐姐一枚|小学教师一枚|小学语文老师|小电影|小穴|小视频|小逼|少修正|少儿不宜|少妇|少男少女|屁眼|屁股|巨乳|巨奶|巨屌|希爱力|干你|干死|干穴|年龄要求|幼b|幼交|幼女|幼师|幼比|幼男|幼逼|应召|延时|开苞|强j|强制up主|强奸|强暴|御姐资源|微密圈|必利劲|忠诚的狗狗|忠诚的🐕|快感|思想开放|性交|性伴|性器|性奴|性息|性愛|性感|性技|性服务|性欲|性爱|性生活|性瘾|性癖|性福|性虎|性虐|性行为|性运动|性饥渴|性骚扰|情欲|情色|情趣|惹火身材|懂的来|成人小说|成人文学|成人杂志|成人游戏|成人片|成人用品|成人电影|成人网站|成人论坛|成年小说|成年文学|成年杂志|成年游戏|成年片|成年用品|成年电影|成年网站|成年论坛|手淫|扌由插|打桩|打炮|扮狗|扮🐕|找个狗|找个🐕|找狗狗|找🐕|抓胸|投资孩子最好尝试|护士|抽一插|抽插|抽送|拔出来|招妓|招鸡|拳交|按摩上门|按摩棒|捆绑|捏弄|换妻|换媳|换脸|换装|接推广|推油|揉乳|插b|插你|插我|插暴|插比|插进|插逼|插阴|援交|援助交际|摸奶|摸胸|撩拔|操我|操死|操烂|操肏|操逼|操黑|放尿|无修正|无码|日烂|日逼|春宫|春药|暴乳|暴奸|暴干|暴操|暴淫|暴肏|暴艹|暴草|暴露|有点寂寞|有码|来主页|来场性|极品美女|欠干|欧美bt|欲仙欲死|欲女|欲望|欲火|死逼|母奸|每日大赛|每日疯狂大赛|洗精|流出|流淫|浪叫|浪女|浪妇|浪逼|淫书|淫乱|淫乳|淫亵|淫兽|淫叫|淫声|淫女|淫妇|淫妻|淫姐|淫威|淫娃|淫媚|淫师|淫情|淫教师|淫样|淫母|淫水|淫河|淫浪|淫液|淫照|淫片|淫电影|淫秽|淫穴|淫糜|淫肉|淫色|淫荡|淫蕩|淫虐|淫虫|淫贱|淫赶|淫靡|淫騷|淫魔|深喉|滚一滚|滚床单|滥交|漏乳|潮吹|潮喷|激情|火辣|炮友|熟女|熟妇|熟母|爆乳|爆操|爆肏|爆艹|爆草|爱液|爱爱|爽死我了|爽片|狂插|狂操|狼友|猛男|猥亵|瑜伽老师|瑟瑟|生殖器|男m|男s|男优|男公关|男奴|白嫩|白虎|百人斩|盗撮|直男醇|相奸|看主页|看我主页|砲友|破处|确定下单|福利视频|福利资源|私信主人|私信主页|私信告诉我|私信女|私信领福利|秘唇|穴口|穴图|粉嫩|粉穴|精卵|精子|精液|素人|素质男|素质约|约啪|约炮|约跑|线下|结婚|绿奴|绿帽|美乳|美女上门|美女图片|美女斗地主|美女裸体|美妇|美幼|美穴|美腿|美逼|羞羞|羞辱|群交|老司机|聊性|联系方式:|联系方式：|联系电报|肉体|肉具|肉唇|肉弹|肉棍|肉棒|肉欲|肉洞|肉穴|肉缝|肉茎|肉逼|肏你|肏死|肛交|肛洞|肛门|肥臀|肥逼|背德|胸推|胸部|脚交|脱光|脱内裤|脱衣|脱裤|腋毛女|自慰|自拍|舔脚|舔阴|舞女|色b|色区|色即是空|色妹妹|色小说|色情|色欲|色比|色狼|色猫|色电影|色界|色盟|色色|色视频|色诱|色逼|艳情|艳照|艳舞|艹死|艾力达|草死|荡女|荡妇|菊穴|菊花|菊门|萌妹资源|萝莉资源|蓝P|薄码|虎骑|蜜液|蜜穴|被干|被插|被操|裙底|裤袜|裸体照片|裸照|裸聊|裸舞|裸陪|裸露|要射了|视频美女|视频聊|视频资源|认证|试管|诱奸|诱惑|调教|谜奸药|豪乳|赤裸|足交|足控|踩头|踩背|车震|轮奸|轮操|轮暴|迷奸|迷幻药|迷幻藥|迷情水|迷情粉|迷情药|迷昏口|迷昏药|迷昏藥|迷药|迷藥|迷魂药|迷魂藥|迷魂香|逼奸|酒瓶插入|酥痒|释放|释欲|金马胶囊|针孔|针对所有男性问题|铃木麻|长期m|长期s|长期固定|长期的m|长期的s|门槛|阳具|阴b|阴唇|阴囊|阴户|阴核|阴比|阴毛|阴精|阴茎|阴蒂|阴逼|阴道|阴部|阴阜|阿姨|附近加我电报|陰唇|陰戶|陰核|陰道|集体淫|需要的主页简介|露b|靠谱狗|靠谱的狗|靠谱的🐕|靠谱🐕|鞭打|领取福利|颜射|风骚|食精|骚b|骚嘴|骚女|骚妇|骚水|骚浪|骚穴|骚货|骚贱贱|骚逼|高潮|鬼畜抄|魅惑|鸡吧|鸡奸|鸡巴|黄片|黄网|黄色网站|黑丝|黑逼|龟头|🐶🐶|🔞|🫦🫦🫦";
  const words = keywordsString.split("|");
  return words;
})();

// GPT 给出的关键词，我啥也不知道
function isPornography(str) {
  return words.some((s) => str.includes(s));
}

function parseTwitterResponserInfo(response) {
  const entries = response.data.threaded_conversation_with_injections_v2.instructions[0].entries;
  const conversationEntries = entries.filter((entry) => entry.entryId.includes("conversationthread-"));
  const resultList = conversationEntries.map((entry) => {
    const result = entry.content.items[0].item.itemContent.tweet_results.result;
    return result;
  });

  const userInfo = resultList
    .map((result) => {
      // "TweetWithVisibilityResults" | "Tweet"
      if (result.__typename !== "Tweet") return;

      const full_text = result.legacy.full_text;
      const following = result.core.user_results.result.legacy.following;
      const description = result.core.user_results.result.legacy.description;
      const name = result.core.user_results.result.legacy.name;
      const screen_name = result.core.user_results.result.legacy.screen_name;
      const avatar = result.core.user_results.result.legacy.profile_image_url_https;
      const restId = result.core.user_results.result.rest_id;

      let isPorn = false;
      let field = "";
      if (isPornography(full_text)) {
        isPorn = true;
        field = "full_text";
      } else if (isPornography(description)) {
        isPorn = true;
        field = "description";
      } else if (isPornography(name)) {
        isPorn = true;
        field = "name";
      } else if (isPornography(screen_name)) {
        isPorn = true;
        field = "screen_name";
      }

      // whitelist
      const whiteList = localStorage.getItem("twitter_responser_whitelist")
        ? JSON.parse(localStorage.getItem("twitter_responser_whitelist"))
        : [];
      const matchedWhiteList = whiteList.some((item) => item.screen_name === screen_name);
      if (matchedWhiteList) {
        isPorn = false;
      }

      // `user` who you are `following`
      if (following) {
        isPorn = false;
      }

      const user = {
        full_text,
        description,
        name,
        screen_name,
        isPorn,
        field,
        restId,
        avatar,
      };

      return user;
    })
    .filter(Boolean);

  return userInfo;
}

function hijackXHR() {
  const XHR = XMLHttpRequest.prototype;
  const open = XHR.open;
  const send = XHR.send;
  const setRequestHeader = XHR.setRequestHeader;

  XHR.open = function () {
    return open.apply(this, arguments);
  };

  XHR.setRequestHeader = function () {
    return setRequestHeader.apply(this, arguments);
  };

  XHR.send = function () {
    this.addEventListener("load", function () {
      const url = this.responseURL;
      try {
        if (this.responseType != "blob") {
          let responseBody;
          if (this.responseType === "" || this.responseType === "text") {
            responseBody = JSON.parse(this.responseText);
          } else {
            responseBody = this.response;
          }

          // only hijack TweetDetail API
          if (url.includes("TweetDetail")) {
            const responserInfo = parseTwitterResponserInfo(responseBody);

            const pornList = responserInfo.filter((item) => item.isPorn);

            let list = localStorage.getItem("twitter_responser_porn_list")
              ? JSON.parse(localStorage.getItem("twitter_responser_porn_list"))
              : [];

            if (list.length > 5000) {
              // 防止数据过大
              list = [];
            }
            const newList = mergeAndUnique(list, pornList);
            localStorage.setItem("twitter_responser_porn_list", JSON.stringify(newList));
          }
        }
      } catch (err) {
        console.debug("Error reading or processing response.", err);
      }
    });

    return send.apply(this, arguments);
  };
}
hijackXHR();
