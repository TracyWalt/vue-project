webpackJsonp([1],{25:function(e,t,n){var a=n(4)(n(90),n(79),null,null,null);e.exports=a.exports},26:function(e,t){},27:function(e,t){},28:function(e,t,n){"use strict";var a=n(2),r=n(85),o=n(69),s=n.n(o),l=n(70),i=n.n(l),c=n(68),u=n.n(c),m=n(72),d=n.n(m),p=n(71),f=n.n(p),v=n(73),_=n.n(v);a.default.use(r.a),t.a=new r.a({routes:[{path:"/",name:"首页",component:s.a,children:[{path:"/form",name:"表单",component:u.a},{path:"/table",name:"表格",component:d.a},{path:"/setting",name:"设置",component:f.a},{path:"/wellcom",component:_.a}]},{path:"/login",name:"登陆",component:i.a}]})},68:function(e,t,n){var a=n(4)(n(91),n(78),null,null,null);e.exports=a.exports},69:function(e,t,n){var a=n(4)(n(92),n(80),null,null,null);e.exports=a.exports},70:function(e,t,n){var a=n(4)(n(93),n(75),null,null,null);e.exports=a.exports},71:function(e,t,n){var a=n(4)(null,n(77),null,null,null);e.exports=a.exports},72:function(e,t,n){var a=n(4)(n(94),n(76),null,null,null);e.exports=a.exports},73:function(e,t,n){function a(e){n(82)}var r=n(4)(n(95),n(74),a,null,null);e.exports=r.exports},74:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",e._l(2,function(t,a){return n("el-col",{key:t,attrs:{span:8,offset:a>0?2:0}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:"http://element.eleme.io/static/hamburger.50e4091.png"}}),e._v(" "),n("div",{staticStyle:{padding:"14px"}},[n("span",[e._v("好吃的汉堡")]),e._v(" "),n("div",{staticClass:"bottom clearfix"},[n("time",{staticClass:"time"},[e._v(e._s(e.currentDate))]),e._v(" "),n("el-button",{staticClass:"button",attrs:{type:"text"}},[e._v("操作按钮")])],1)])])],1)}))},staticRenderFns:[]}},75:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticClass:"login-container"},[n("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.userinfo.username,callback:function(t){e.userinfo.username=t},expression:"userinfo.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.userinfo.password,callback:function(t){e.userinfo.password=t},expression:"userinfo.password"}})],1),e._v(" "),n("el-checkbox",{staticClass:"remember",attrs:{checked:""}},[e._v("记住密码")]),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("登录")])],1)],1)},staticRenderFns:[]}},76:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[n("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-icon",{attrs:{name:"time"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.date))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{trigger:"hover",placement:"top"}},[n("p",[e._v("姓名: "+e._s(t.row.name))]),e._v(" "),n("p",[e._v("住址: "+e._s(t.row.address))]),e._v(" "),n("div",{staticClass:"name-wrapper",slot:"reference"},[n("el-tag",[e._v(e._s(t.row.name))])],1)])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)},staticRenderFns:[]}},77:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tag",[e._v("标签一")]),e._v(" "),n("el-tag",{attrs:{type:"gray"}},[e._v("标签二")]),e._v(" "),n("el-tag",{attrs:{type:"primary"}},[e._v("标签三")]),e._v(" "),n("el-tag",{attrs:{type:"success"}},[e._v("标签四")]),e._v(" "),n("el-tag",{attrs:{type:"warning"}},[e._v("标签五")]),e._v(" "),n("el-tag",{attrs:{type:"danger"}},[e._v("标签六")])],1)},staticRenderFns:[]}},78:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"活动名称"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.form.name=t},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动区域"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:e.form.region,callback:function(t){e.form.region=t},expression:"form.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"活动时间"}},[n("el-col",{attrs:{span:11}},[n("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.form.date1=t},expression:"form.date1"}})],1),e._v(" "),n("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),n("el-col",{attrs:{span:11}},[n("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:e.form.date2,callback:function(t){e.form.date2=t},expression:"form.date2"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"即时配送"}},[n("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.form.delivery,callback:function(t){e.form.delivery=t},expression:"form.delivery"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动性质"}},[n("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.form.type=t},expression:"form.type"}},[n("el-checkbox",{attrs:{label:"美食/餐厅线上活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"线下主题活动",name:"type"}}),e._v(" "),n("el-checkbox",{attrs:{label:"单纯品牌曝光",name:"type"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"特殊资源"}},[n("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.form.resource=t},expression:"form.resource"}},[n("el-radio",{attrs:{label:"线上品牌商赞助"}}),e._v(" "),n("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"活动形式"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.form.desc=t},expression:"form.desc"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),n("el-button",[e._v("取消")])],1)],1)},staticRenderFns:[]}},79:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},80:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("span",{staticClass:"title"},[e._v("后台管理系统")]),e._v(" "),n("el-dropdown",{staticClass:"userinfo",attrs:{trigger:"hover"},on:{command:e.menuLink}},[n("span",{staticClass:"el-dropdown-link"},[e._v("\n          "+e._s(e.userinfo.username)+" "),n("img",{attrs:{src:"https://img3.banggood.com/thumb/grid/oaupload/banggood/images/D6/B6/2e250f15-a711-4470-8c81-ef1809b67ca5.jpg"}})]),e._v(" "),n("el-dropdown-menu",{slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"/wellcom"}},[e._v("欢迎页")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"/setting"}},[e._v("系统设置")]),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){e.loginOut(t)}}},[e._v("退出")])],1)],1)],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""}},[n("el-submenu",{attrs:{index:"/form"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("通用组件")]),e._v(" "),n("el-menu-item",{attrs:{index:"/form"}},[e._v("Form")]),e._v(" "),n("el-menu-item",{attrs:{index:"/table"}},[e._v("Table")])],2),e._v(" "),n("el-menu-item",{attrs:{index:"/setting"}},[n("i",{staticClass:"el-icon-menu"}),e._v("系统设置")])],1)],1),e._v(" "),n("section",{staticClass:"content-container"},[n("el-breadcrumb",{class:e.$route.name?"navpath":"navpath onepath",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path,attrs:{to:{path:t.path||"/wellcom"}}},[e._v("\n          "+e._s(t.name)+"\n        ")])})),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)]),e._v(" "),n("el-col",{staticClass:"footer",attrs:{span:24}},[e._v("\n      Copyright © 2006-2017 Banggood Ltd. All Rights Reserved.\n  ")])],1)},staticRenderFns:[]}},82:function(e,t){},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=n(25),o=n.n(r),s=n(28),l=n(24),i=n.n(l),c=n(27),u=(n.n(c),n(26));n.n(u);a.default.use(i.a),a.default.config.productionTip=!1,s.a.beforeEach(function(e,t,n){"/login"===e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"===e.path?n():n({path:"/login"})}),new a.default({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},90:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}}},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{userinfo:{}}},created:function(){this.getUserInfo()},methods:{getUserInfo:function(){this.userinfo=JSON.parse(sessionStorage.getItem("user"))},loginOut:function(){var e=this;this.$confirm("是否真要退出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){sessionStorage.removeItem("user"),e.$router.push({path:"/login"})}).catch(function(){e.$message({type:"info",message:"取消输入"})})},menuLink:function(e){e&&this.$router.push({path:e})}}}},93:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(88),r=n.n(a);t.default={data:function(){return{userinfo:{username:"test_admin",password:"123456"}}},methods:{handleSubmit:function(){if(""!==this.userinfo.username&&""!==this.userinfo.password){sessionStorage.setItem("user",r()(this.userinfo));var e=this.$route.query.redirect;e?this.$router.push({path:"/"+e}):this.$router.push({path:"/wellcom"})}}}}},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],loading:!0}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)}},created:function(){var e=this;setTimeout(function(){e.loading=!1},1e3)}}},95:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{currentDate:new Date}}}}},[89]);
//# sourceMappingURL=app.ed66c0be4d8053c892fa.js.map