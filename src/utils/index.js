import axios from 'axios';

axios.interceptors.response.use((response) => {
    console.log('拦截响应')
    response = {name: 'dadada'}
    return response;
    },(err)=> {
        var response = {};
        console.log('处理error')
        switch(err.response.config.url){
            default:
            case '/api/detail.json':
                response.data = detail_json;
                break;
            case '/api/headerList.json':
                response.data = headerList_json;
                break;
            case '/api/home.json':
                response.data = home_json;
                break;
            case '/api/homeMoreList.json':
                response.data = homeMoreList_json;
                break;
            case '/api/login.json':
                response.data = login_json;
            
        }
        return Promise.resolve(response);
    }
);

var detail_json = {
	"success": true,
	"data": {
		"title": "旅行的意义",
		"content": "<p>有没有这种感觉，国内的主流视频网站都支持弹幕功能了。在弹幕出现之初觉得弹幕遮挡视频能关则关，但是用习惯了以后觉得，emm，真香！没有弹幕反而觉得看视频孤独了。但是全球最大的视频网站油管却没有这种功能，从国内转到国外看视频还真不习惯！但是，公众号的老粉都知道，没有什么功能是谷歌浏览器的插件解决不了的！</p>"
	}
};

var headerList_json = {
	"success": true,
	"data": ["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿",
		"手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友",
		"籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场",
		"考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅",
		"金融","木风杂谈","日更","成长","外婆是方言","docker","疯哥哥","梅西","时间管理","golang"]
};

var home_json = {
	"success": true,
	"data": {
		"topicList": [
		{"id":1, "title":"社会热点", "imgUrl":"https://upload.jianshu.io/book/image/6ae9fe68-9101-43d1-904e-80e7a2813625?imageMogr2/auto-orient/strip|imageView2/1/w/214/h/286"},
		{"id":2, "title":"旅行-在路上", "imgUrl":"https://upload.jianshu.io/book/image/1ba9a448-ce05-4b35-aedb-f33c1215768d?imageMogr2/auto-orient/strip|imageView2/1/w/214/h/286"},
		{"id":3, "title":"手绘", "imgUrl":"https://upload.jianshu.io/book/image/d12a11bd-4db3-4604-8e81-6026d9e1a1e9?imageMogr2/auto-orient/strip|imageView2/1/w/214/h/286"},
		{"id":4, "title":"简书电影", "imgUrl":"https://upload.jianshu.io/book/image/860b7aaf-c5f0-4297-9ae9-95d7ed22a309?imageMogr2/auto-orient/strip|imageView2/1/w/214/h/286"},
		{"id":5, "title":"读书", "imgUrl":"https://upload.jianshu.io/book/image/626591e9-540c-4446-b4b7-2bebd8216ab6?imageMogr2/auto-orient/strip|imageView2/1/w/214/h/286"},
		{"id":6, "title":"摄影", "imgUrl":"https://upload.jianshu.io/book/image/c326213b-6204-4718-9157-af86b6c91661?imageMogr2/auto-orient/strip|imageView2/1/w/214/h/286"}
	    ],
	    "articleList": [
            {"id":1,"title":"昨日青空，已是昨日","desc":"你有真心喜欢的东西，真好。 青春像是一场有去无回的风景，一页一页都印刻在我们脑海的相册之中，有欢乐，有悲伤。 当我们身在其中时，会放任自己的情绪...","imgUrl":"https://upload-images.jianshu.io/upload_images/4421206-467fe432832253f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
            {"id":2,"title":"《起风了》，你是无意穿堂风，偏偏孤倨引山洪","desc":"顺着少年漂流的痕迹 迈出车站的前一刻 竟有些犹豫 不禁笑这近乡情怯 仍无可避免 而长野的天 依旧那么暖 风吹起了从前 从前初识这世间 万般流连 ...","imgUrl":"https://upload-images.jianshu.io/upload_images/2259045-bb5354bb865231b9?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
            {"id":3,"title":"阅读的力量，不可估量","desc":"文 | 黑暗中的向日葵 记得梁文道曾说：“读一些无用的书，做一些无用的事，花一些无用的时间，都是为了在一切已知之外，保留一个超越自己的机会，人生...","imgUrl":"https://upload-images.jianshu.io/upload_images/15934130-e982fbe05438880a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
            {"id":4,"title":"程序员相亲，介绍自己：我是做底层架构的！女方：啥时候到中高级","desc":"在互联网如此发达的今天，人们之间的联系方式可以说是越来越便捷了，可是令很多人奇怪的是，为什么反而很多人都去相亲了。最关键的是，相亲就相亲吧，总是...","imgUrl":"https://upload-images.jianshu.io/upload_images/1095900-6a624946b11e0a30.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
            {"id":5,"title":"如何免翻墙使用谷歌搜索和Chrome应用商店","desc":"可能大家都听过或正在使用谷歌浏览器，但是由于某种原因只能在谷歌浏览器使用百度搜索引擎，至于什么谷歌搜索引擎、谷歌商城、Gmail邮箱统统都是浮云...","imgUrl":"https://upload-images.jianshu.io/upload_images/17855548-9f4f1329867760b4.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
            {"id":6,"title":"分不清是被歌曲感动了，还是被评论感动了","desc":"《仙剑奇侠传》是童年时记忆最深刻的一部电视剧，因为它的一首背景音乐总给我一种特别悲情的感觉！熟悉的旋律响起，感觉依旧悲凉！ 下面的评价是另一首歌的！","imgUrl":"https://upload-images.jianshu.io/upload_images/19471645-5a57e8f287663475?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
            {"id":7,"title":"写不出来，可以借助这3个工具","desc":"打开电脑却不知道写什么？好不容取了标题不知道怎么开头了？刚拧巴着开了个头又不知道怎么接了？ 出现这些卡顿在写作过程中很正常，只需要使用3个工具就...","imgUrl":"https://upload-images.jianshu.io/upload_images/15088407-906718fbd8a18513?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
            {"id":8,"title":"扎克伯格的女人真是不简单！没有好看的皮囊，却成功地嫁进豪门。她是怎么做到的？","desc":"01 普莉希拉·陈，长相真得很普通，不信你看： 她不但长相普通，而且身材平庸，虎背熊腰、粗胳膊粗腿，俨然一个女汉子： 这样的形象，完全颠覆了我们...","imgUrl":"https://upload-images.jianshu.io/upload_images/12831381-5328b1f5ad7d53d3?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"}
	    ],
	    "bandList": [
            {"id":1,"imgUrl":"https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"},
            {"id":2,"imgUrl":"https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"},
            {"id":3,"imgUrl":"https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"},
            {"id":4,"imgUrl":"https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"}
	    ]
	}
};

var homeMoreList_json = {
	"success": true,
	"data": [
		{"id":9,"title":"昨日青空，已是昨日","desc":"你有真心喜欢的东西，真好。 青春像是一场有去无回的风景，一页一页都印刻在我们脑海的相册之中，有欢乐，有悲伤。 当我们身在其中时，会放任自己的情绪...","imgUrl":"https://upload-images.jianshu.io/upload_images/8264652-f54b3fa2e050899f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
		{"id":10,"title":"《起风了》，你是无意穿堂风，偏偏孤倨引山洪","desc":"顺着少年漂流的痕迹 迈出车站的前一刻 竟有些犹豫 不禁笑这近乡情怯 仍无可避免 而长野的天 依旧那么暖 风吹起了从前 从前初识这世间 万般流连 ...","imgUrl":"https://upload-images.jianshu.io/upload_images/13118860-875d0aadfd4662f1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"},
		{"id":11,"title":"阅读的力量，不可估量","desc":"文 | 黑暗中的向日葵 记得梁文道曾说：“读一些无用的书，做一些无用的事，花一些无用的时间，都是为了在一切已知之外，保留一个超越自己的机会，人生...","imgUrl":"https://upload-images.jianshu.io/upload_images/781682-7e3ade18b650e342.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
		{"id":12,"title":"程序员相亲，介绍自己：我是做底层架构的！女方：啥时候到中高级","desc":"在互联网如此发达的今天，人们之间的联系方式可以说是越来越便捷了，可是令很多人奇怪的是，为什么反而很多人都去相亲了。最关键的是，相亲就相亲吧，总是...","imgUrl":"https://upload-images.jianshu.io/upload_images/13465705-f290ed286963659c.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
		{"id":13,"title":"如何免翻墙使用谷歌搜索和Chrome应用商店","desc":"可能大家都听过或正在使用谷歌浏览器，但是由于某种原因只能在谷歌浏览器使用百度搜索引擎，至于什么谷歌搜索引擎、谷歌商城、Gmail邮箱统统都是浮云...","imgUrl":"https://upload-images.jianshu.io/upload_images/858154-015a4b083685a3d1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
		{"id":14,"title":"分不清是被歌曲感动了，还是被评论感动了","desc":"《仙剑奇侠传》是童年时记忆最深刻的一部电视剧，因为它的一首背景音乐总给我一种特别悲情的感觉！熟悉的旋律响起，感觉依旧悲凉！ 下面的评价是另一首歌的！","imgUrl":"https://upload-images.jianshu.io/upload_images/7161024-545b259860dfed25.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
		{"id":15,"title":"写不出来，可以借助这3个工具","desc":"打开电脑却不知道写什么？好不容取了标题不知道怎么开头了？刚拧巴着开了个头又不知道怎么接了？ 出现这些卡顿在写作过程中很正常，只需要使用3个工具就...","imgUrl":"https://upload-images.jianshu.io/upload_images/7111023-b0053d158c10a60b.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"},
		{"id":16,"title":"扎克伯格的女人真是不简单！没有好看的皮囊，却成功地嫁进豪门。她是怎么做到的？","desc":"01 普莉希拉·陈，长相真得很普通，不信你看： 她不但长相普通，而且身材平庸，虎背熊腰、粗胳膊粗腿，俨然一个女汉子： 这样的形象，完全颠覆了我们...","imgUrl":"https://upload-images.jianshu.io/upload_images/14280689-7de04e3f892f6998.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"}
	]
};

var login_json = {
	"success": true,
	"data": true
};

export default axios;

