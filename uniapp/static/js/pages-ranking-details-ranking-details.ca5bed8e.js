(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ranking-details-ranking-details"],{2909:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=s;var e=o(n("6005")),r=o(n("db90")),i=o(n("06c5")),l=o(n("3427"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return(0,e.default)(t)||(0,r.default)(t)||(0,i.default)(t)||(0,l.default)()}},3427:function(t,a,n){"use strict";function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(a,"__esModule",{value:!0}),a.default=e},"37c5":function(t,a,n){"use strict";n.r(a);var e=n("5c34"),r=n("4fba");for(var i in r)"default"!==i&&function(t){n.d(a,t,(function(){return r[t]}))}(i);n("4094");var l,o=n("f0c5"),s=Object(o["a"])(r["default"],e["b"],e["c"],!1,null,"5f2fd306",null,!1,e["a"],l);a["default"]=s.exports},4094:function(t,a,n){"use strict";var e=n("840e"),r=n.n(e);r.a},"4fba":function(t,a,n){"use strict";n.r(a);var e=n("5a6c"),r=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(a,t,(function(){return e[t]}))}(i);a["default"]=r.a},"5a6c":function(t,a,n){"use strict";var e=n("4ea4");n("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e(n("2909")),i={data:function(){return{footballArr:[],footballDataArr:[],fooArr:[],ball:"",leagueId:"",shortName:"",leagueImg:0}},onLoad:function(t){console.log(t,"ranking-details------"),this.leagueId=t.id;var a=t.type;this.shortName=t.shortName,this.leagueImg=t.logoPath,console.log(t.logoPath,"e.logoPath-------------"),"2"===a&&(this.ball="basketball"),"1"===a&&(this.ball="football"),this.getDetails()},onShow:function(){},onBackPress:function(t){"backbutton"===t&&(page.route(),console.log(page.route(),"backbutton "))},methods:{getDetails:function(){var t=this;uni.request({url:"https://cbs-u.sports.cctv.com/statistics/".concat(this.ball,"/team/rankings?leagueId=").concat(this.leagueId,"&ran=").concat(Date.now()),method:"GET",data:{},success:function(a){console.log(a.data.results),t.footballArr=a.data.results;for(var n=0;n<t.footballArr.length;n++){var e;(e=t.footballDataArr).push.apply(e,(0,r.default)(t.footballArr[n].rankings));for(var i=0;i<t.footballDataArr.length;i++){var l;(l=t.fooArr).push.apply(l,(0,r.default)(t.footballDataArr[i].ranking))}}console.log(t.fooArr,"fooArr---------")},fail:function(t){console.log(t)},complete:function(){}})}}};a.default=i},"5c34":function(t,a,n){"use strict";var e;n.d(a,"b",(function(){return r})),n.d(a,"c",(function(){return i})),n.d(a,"a",(function(){return e}));var r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",[n("v-uni-web-view",{staticClass:"webView",attrs:{src:"https://cbs-h5.sports.cctv.com/app_plus_new/league/"+t.ball+"_ranking.html?leagueid="+t.leagueId}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.fooArr.length,expression:"fooArr.length === 0"}],staticClass:"noData",staticStyle:{"text-align":"center","margin-top":"20px",color:"#767676"}},[t._v("暂无更多数据")])],1)},i=[]},6005:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=i;var e=r(n("6b75"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(Array.isArray(t))return(0,e.default)(t)}},"840e":function(t,a,n){var e=n("9f2a");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var r=n("4f06").default;r("59de3e4a",e,!0,{sourceMap:!1,shadowMode:!1})},"9f2a":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 导入图标文件 */\r\n/* @import "/static/icons/iconfont.css"; */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content .datails[data-v-5f2fd306]{\r\n  /* .dataTable {\r\n\t\t\ttable-layout: auto;\r\n\r\n\t\t\t.league-title {\r\n\t\t\t\tcolor: #000;\r\n\t\t\t\tfont-size: 32rpx;\t\t\t\t\r\n\t\t\t}\r\n\t\t\t.league-img{\r\n\t\t\t\twidth: 80rpx;\r\n\t\t\t\theight: 70rpx;\r\n\t\t\t}\r\n\r\n\t\t\t.league-th {\r\n\t\t\t\ttable-layout: auto;\r\n\t\t\t\tpadding: 0 !important;\r\n\t\t\t\theight: 80rpx;\r\n\t\t\t\tline-height: 80rpx;\r\n\r\n\t\t\t\t.league-td{\r\n\t\t\t\t\tpadding: 0 !important;\r\n\t\t\t\t\tline-height:80rpx;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&.number{\r\n\t\t\t\t\t\tbackground-color: #ff8e0c;\r\n\t\t\t\t\t\tborder-radius: 10%;\r\n\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.logo{\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\twidth: 60rpx;\r\n\t\t\t\t\t\theight: 60rpx;\r\n\t\t\t\t\t\tline-height: 80rpx;\r\n\t\t\t\t\t\tleft: 15px;\r\n\t\t\t\t\t\ttop: 8px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.league-tr{\r\n\t\t\t\ttable-layout: auto;\r\n\t\t\t\tpadding: 0 !important;\r\n\t\t\t\theight: 80rpx;\r\n\t\t\t\tline-height: 80rpx;\r\n\t\t\t\t.title {\r\n\t\t\t\t\tpadding: 0 !important;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t} */}.content .datails .football-title[data-v-5f2fd306]{display:flex;justify-content:center;align-items:center;margin-top:5px}.content .datails .football-title .football-title-img[data-v-5f2fd306]{width:36px;height:36px}.content .datails .football-title .title-text[data-v-5f2fd306]{font-size:%?36?%;font-weight:700}.content .datails .list-th[data-v-5f2fd306]{display:flex;justify-content:space-around;align-items:center;margin:5px 0}.content .datails .list-th .list-th-itme[data-v-5f2fd306]{font-size:%?32?%;color:#000}.content .datails .list-th .list-th-itme.basketball-wins[data-v-5f2fd306]{margin-left:8px}.content .datails .list-th .list-th-itme.basketball-losses[data-v-5f2fd306]{margin-right:10px}.content .datails .list-th .list-th-itme.basketball-winRate[data-v-5f2fd306]{margin-right:20px}.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-child(2),\r\n.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-child(4){-webkit-transform:translateX(50px);transform:translateX(50px)}.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-child(3){-webkit-transform:translateX(60px);transform:translateX(60px)}.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-child(5){-webkit-transform:translateX(40px);transform:translateX(40px)}.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-child(6){-webkit-transform:translateX(30px);transform:translateX(30px)}.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-child(7){-webkit-transform:translateX(18px);transform:translateX(18px)}.content .datails .list-th .list-th-itme[data-v-5f2fd306]:nth-last-child(1){-webkit-transform:translateX(8px);transform:translateX(8px)}.content .datails .list-data[data-v-5f2fd306]{display:flex;justify-content:space-between;align-items:center;border:#959595 1px solid;border-radius:10px;margin:10px 0}.content .datails .list-data .list-data-itme[data-v-5f2fd306]{margin:10px 0}.content .datails .list-data .list-data-itme .list-data-itme-img[data-v-5f2fd306]{width:30px;height:30px;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(1){width:25px;height:30px;background-color:#ff8e0c;border-radius:5px;color:#fff;text-align:center;line-height:30px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(9){position:absolute;right:15px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(8){position:absolute;right:55px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(7){position:absolute;right:110px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(6){position:absolute;right:135px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(5){position:absolute;right:168px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(4){position:absolute;right:205px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(3){position:absolute;left:70px}.content .datails .list-data .list-data-itme[data-v-5f2fd306]:nth-child(2){position:absolute;left:50px}',""]),t.exports=a},db90:function(t,a,n){"use strict";function e(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=e}}]);