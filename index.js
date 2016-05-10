/**
 * Created by tongqi on 4/20/16.
 */
// register the grid component
Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
})
var flag=0;
var data={
    searchQuery: '',
    gridColumns: ['title','content'],
    gridData: [
        { title: '4月17日与语训学校小朋友春游地点改为--花港观鱼', time: "2016-3-29 21:11",content:"4月17日与语训学校小朋友春游地点改为--花港观鱼时值四月好时节。让我们手拉手一起走进春天，慢慢欣赏百花争艳的美丽，细细聆听花开花落的声音。让我们再次亲密接触历史悠远的老杭州，再次用爱心带孩子领略大自然的精彩绝伦！本次的活动地点是复兴街白塔公园。白塔公园是西湖文化遗产的实证，是京杭大运河文化遗产的端点，还是108年前杭城第一条铁路的始发站所在地。它位于钱江一桥边老复兴路上，原是火车货栈，这两年对其进行改造，保留了很多原先老火车站的元素，将货栈仓库改造成餐厅，保留了一段铁轨，游人可在公园内体验乘坐绿皮火车。公园种植了很多樱花，每年3-4月，盛开的樱花和白塔交相辉映，非常好看。温馨提示：1、由于孩子们都配带助听器，届时请切勿与孩子过于激烈运动到孩子出汗，助听器一旦受潮维护是比较麻烦的，且会产生维护费用。另，请不要私自携带零食玩具给孩子带去，主办方将统一采购，如有此方面意图可以联系我们。谢谢配合！2、必须按照要求跟帖报名，同时必须穿义工服参加。若无义工服，活动现场有卖。"
        +"【活动时间】: 4月17日上午8:30集中——下午14:00"
        +"【集合地点】: 杨公堤花港公园西门"
        +"【交通线路】: 最近公交站名：浴鹄湾    公交线路： 51(内环)　52(外环)　197　318　　游2"
        +"附  近  站  名： 苏堤      公交路线： 4路　31　87　315　334　514B　822　　Y6"
        +"【活动名额】: 60名义工（名满即止）"
        +"【活动经费】: 15元/人 （义工中餐费用）"
        +"【组 织 者】: 王伟强：137 0571 1858（总负责）"
        +" 王   薇：153 5619 0196"
        +"【报名要求】: 1、为了保证活动安全，谢绝群外人员报名参与。"
        +" 2、所有参加活动人员必须穿着马甲义工服。需购买，跟帖注明。"
        +"3、参与人员必须按照要求跟帖报名，否则不与招募。"
        +"4、禁止私自给小朋友带食品与玩具。"
        +"【报名范例】: ZJ0105   葛燕琴  1人 15988898528   有马甲义工服"},
        { title: '4月16日断桥指路上午班开始报名啦！', time: " 2016-4-11 09:41 ", content:"随着旺季的到来，西湖边的游人越来越多，出游时间也越来越早，请大家积极报名..."},
        { title: '4月16日断桥指路下午班开始报名！！', time: "2016-4-11 09:42",content:"随着旺季的到来，西湖边的游人越来越多，出游时间也越来越早，请大家积极报名..." },
        { title: '4月16日断桥指路工时帖', time: "2016-4-18 17:07",content:"虽然天公不作美，但是有联盟那么多兄弟姐妹们的热情参与和爱心付出..." },
        { title: '4月16日，苏堤服务活动招募中---之活动名单！', time: " 2016-4-11 15:52 ",content:"春天最美的时刻，我们相约西湖，共沐杨柳春风，醉看桃花春雨..." },
        { title: '4月9日断桥指路全天工作人员名单！！',time:"2016-4-11 13:25",content:"天气开始慢慢炎热起来，西湖边游客越多，美丽的西子湖畔..."},
        { title: '4月9日断桥指路下午班开始报名！',time:"2016-4-5 10:27 ",content:"随着旺季的到来，西湖边的游人越来越多..."},
        { title: '4月9日上午西湖环保工时',time:"2016-3-28 09:33",content:"整整齐齐的出发。扛着大旗。拎着垃圾袋的我们自豪的行走在西湖边..."}
    ]
}
// bootstrap the demo
var demo = new Vue({
    el: '#demo',
    data: data
    //methods:{
    //    more:function(){
    //        console.log("hah");
    //    },
    //    delete:function(){
    //        console.log("bab");
    //    }
    //},
})

var vm = new Vue({
    el:'#show',
    data:data,
    computed:{
        selection:function(){
            for(var i=0;i<this.gridData.length;i++)
            {
                if(this.gridData[i].title === this.A)
                {
                    return this.gridData[i];
                }
            }
        }
    },
    methods:{
         getTime:function(){
            var selectTxt;
            if(window.getSelection){
                 //标准浏览器支持的方法
                 selectTxt=window.getSelection();
                 }else if(document.selection){
                //IE浏览器支持的方法
                 selectTxt=document.selection.createRange().text;
            }
             document.getElementById("input_time").value=selectTxt;
         },
        getTitle:function(){
            var selectTxt;
            if(window.getSelection){
                //标准浏览器支持的方法
                selectTxt=window.getSelection();
            }else if(document.selection){
                //IE浏览器支持的方法
                selectTxt=document.selection.createRange().text;
            }
            document.getElementById("input_title").value=selectTxt;
        },
        getPosition:function(){
            var selectTxt;
            if(window.getSelection){
                //标准浏览器支持的方法
                selectTxt=window.getSelection();
            }else if(document.selection){
                //IE浏览器支持的方法
                selectTxt=document.selection.createRange().text;
            }
            document.getElementById("input_Pos").value=selectTxt;
        }
    }
})

//function getSelectTxt(){
//    var selectTxt;
//    if(window.getSelection){
//        //标准浏览器支持的方法
//        selectTxt=window.getSelection();
//    }else if(document.selection){
//        //IE浏览器支持的方法
//        selectTxt=document.selection.createRange().text;
//    }
//    return selectTxt;
//}


