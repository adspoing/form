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

var data={
    searchQuery: '',
    gridColumns: ['activity', 'time','content'],
    gridData: [
        { activity: '4月17日与语训学校小朋友春游地点改为--花港观鱼', time: "2016-3-29 21:11",content:"时值四月，春意盎然，万木吐翠，芳草茵茵..."},
        { activity: '4月16日断桥指路上午班开始报名啦！', time: " 2016-4-11 09:41 ", content:"随着旺季的到来，西湖边的游人越来越多，出游时间也越来越早，请大家积极报名..."},
        { activity: '4月16日断桥指路下午班开始报名！！', time: "2016-4-11 09:42",content:"随着旺季的到来，西湖边的游人越来越多，出游时间也越来越早，请大家积极报名..." },
        { activity: '4月16日断桥指路工时帖', time: "2016-4-18 17:07",content:"虽然天公不作美，但是有联盟那么多兄弟姐妹们的热情参与和爱心付出..." },
        { activity: '4月16日，苏堤服务活动招募中---之活动名单！', time: " 2016-4-11 15:52 ",content:"春天最美的时刻，我们相约西湖，共沐杨柳春风，醉看桃花春雨..." }

    ]
}
// bootstrap the demo
var demo = new Vue({
    el: '#demo',
    data: data
})

