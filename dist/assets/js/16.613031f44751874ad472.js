webpackJsonp([16],{"Wa/6":function(e,a,t){var s=t("dsCo");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t("FIqI")("ab6fa64a",s,!0,{})},dsCo:function(e,a,t){a=e.exports=t("XLS9")(!1),a.push([e.i,"\n.form-c.o-no-bgc>.row .text[data-v-b65d32b6]{\n\twidth: auto;\n}\n.m-sub-page>.fl[data-v-b65d32b6]{\n\tpadding: 20px;\n}\n.m-sub-page>.fl>.f-btn[data-v-b65d32b6]{\n\tpadding: 8px;\n}\n",""])},p8FM:function(e,a,t){"use strict";function s(e){t("Wa/6")}Object.defineProperty(a,"__esModule",{value:!0});var o=t("3cXf"),r=t.n(o),i=t("04Cm"),n=t("Gcvq"),d=t("R2SV");t("Ue0x"),t("V+BO");var p={data:function(){return{off:{type:1,isLoad:0},form:{orderId:"",idCardNo:"",phoneNo:"",operation:0,appType:0,userId:"",deviceId:0,terminalType:0,result:-1,startTime:"",endTime:""},list:"",total:0,pageNum:1,pageSize:10,maxpage:1,callback:Function}},components:{"my-page":n.a},created:function(){this.init(),this.changeRouter()},watch:{$route:"changeRouter"},methods:{init:function(){var e=this;e.form.startTime=laydate.now(0,"YYYY-MM-DD 00:00:00"),e.form.endTime=laydate.now(0,"YYYY-MM-DD 23:59:59")},searchList:function(e,a){var t,s=this,o={userId:s.form.userId,pageSize:s.pageSize,pageNum:a||1,startTime:s.form.startTime,endTime:s.form.endTime,terminalType:s.form.terminalType,deviceId:s.form.deviceId,result:s.form.result,orderId:s.form.orderId,idCardNo:s.form.idCardNo,phoneNo:s.form.phoneNo,operation:s.form.operation,appType:s.form.appType};if(1==s.off.type?t="km-ecs/w/statistics/identifier":2==s.off.type&&(t="km-ecs/w/statistics/identifierLive"),s.off.isLoad)return!1;s.off.isLoad=!0,Object(i.reqCommonMethod)(o,function(){s.off.isLoad=!1},t).then(function(t){s.list=t.data.list,s.total=t.data.total,s.maxpage=Math.ceil(parseInt(t.data.total)/10),s.pageNum=a||1,s.callback=function(a){s.searchList(e,a)}}).catch(function(){s.off.isLoad=!1})},downLoadList:function(){var e,a=this,t=Object(d.d)("KA_ECS_USER");if(!t)return layer.open({content:"登录已过期，请重新登录",style:"width:auto;",btn:["确定"],shadeClose:!1,yes:function(){Object(d.h)("KA_ECS_USER",""),window.location.href="#/login",layer.closeAll()}}),!1;var s={userId:a.form.userId,pageSize:a.pageSize,pageNum:a.page||1,startTime:a.form.startTime,endTime:a.form.endTime,terminalType:a.form.terminalType,deviceId:a.form.deviceId,result:a.form.result,customerId:t.customerId,codeId:t.codeId,orderId:a.form.orderId,idCardNo:a.form.idCardNo,phoneNo:a.form.phoneNo,operation:a.form.operation,appType:a.form.appType};1==a.off.type?e="km-ecs/w/statistics/identifierListdown":2==a.off.type&&(e="km-ecs/w/statistics/identifierLivedown"),a.off.load=!0,Object(d.a)(e,BASE64.encode(r()(s)),function(){a.off.load=!1})},to_laydate:function(e){var a=this;laydate({istime:!0,format:"YYYY-MM-DD hh:mm:ss",isclear:!1,choose:function(t){1==e?a.form.startTime=t:a.form.endTime=t}})},getDateTime:function(e){return Object(d.c)(e)},changeRouter:function(){var e=this.$route.params.type;"idCard"==e?this.off.type=1:"faceConfirm"==e&&(this.off.type=2),this.list=""}}},m=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"g-search-menu"},[t("div",{class:{active:e.off.details},attrs:{id:"search"}},[t("header",{staticClass:"m-scroll-bar animated infinite",class:{active:e.off.isLoad}}),e._v(" "),e.off.details?e._e():t("section",[t("div",{staticClass:"g-search-form"},[e._m(0),e._v(" "),t("section",{staticClass:"form-c"},[t("div",{staticClass:"row fullRow"},[t("span",{staticClass:"dp"},[e._v("系统类型：")]),e._v(" "),t("div",{staticClass:"m-form-radio"},[t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appType,expression:"form.appType"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.form.appType,"0")},on:{change:function(a){e.$set(e.form,"appType","0")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("全部")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appType,expression:"form.appType"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.appType,"1")},on:{change:function(a){e.$set(e.form,"appType","1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("卡盟APP")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appType,expression:"form.appType"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.appType,"2")},on:{change:function(a){e.$set(e.form,"appType","2")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("Dwatch")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appType,expression:"form.appType"}],attrs:{type:"radio",value:"3"},domProps:{checked:e._q(e.form.appType,"3")},on:{change:function(a){e.$set(e.form,"appType","3")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("Android Wear")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appType,expression:"form.appType"}],attrs:{type:"radio",value:"4"},domProps:{checked:e._q(e.form.appType,"4")},on:{change:function(a){e.$set(e.form,"appType","4")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("卡盟SDK")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appType,expression:"form.appType"}],attrs:{type:"radio",value:"5"},domProps:{checked:e._q(e.form.appType,"5")},on:{change:function(a){e.$set(e.form,"appType","5")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("卡盟通服")])])])]),e._v(" "),t("div",{staticClass:"row clr m-col-2"},[t("span",{staticClass:"dp col-l"},[e._v("操作人ID：")]),e._v(" "),t("div",{staticClass:"col-r"},[t("div",{staticClass:"input-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.userId,expression:"form.userId"}],attrs:{maxlength:"16",type:"tel",placeholder:"请输入查询的用户工号"},domProps:{value:e.form.userId},on:{input:function(a){a.target.composing||e.$set(e.form,"userId",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row clr m-col-2"},[t("span",{staticClass:"dp col-l"},[e._v("订单号码：")]),e._v(" "),t("div",{staticClass:"col-r"},[t("div",{staticClass:"input-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.orderId,expression:"form.orderId"}],attrs:{maxlength:"32",type:"tel",placeholder:"请输入查询的订单号码"},domProps:{value:e.form.orderId},on:{input:function(a){a.target.composing||e.$set(e.form,"orderId",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row clr m-col-2"},[t("span",{staticClass:"dp col-l"},[e._v("身份证号：")]),e._v(" "),t("div",{staticClass:"col-r"},[t("div",{staticClass:"input-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.idCardNo,expression:"form.idCardNo"}],attrs:{maxlength:"18",type:"tel",placeholder:"请输入查询的用户工号"},domProps:{value:e.form.idCardNo},on:{input:function(a){a.target.composing||e.$set(e.form,"idCardNo",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row clr m-col-2"},[t("span",{staticClass:"dp col-l"},[e._v("操作号码：")]),e._v(" "),t("div",{staticClass:"col-r"},[t("div",{staticClass:"input-box"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.phoneNo,expression:"form.phoneNo"}],attrs:{maxlength:"11",type:"tel",placeholder:"请输入查询的订单号码"},domProps:{value:e.form.phoneNo},on:{input:function(a){a.target.composing||e.$set(e.form,"phoneNo",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row"},[t("span",{staticClass:"dp"},[e._v("时间区间：")]),e._v(" "),t("div",{staticClass:"f-inline-block"},[t("span",{staticClass:"m-time-area"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.startTime,expression:"form.startTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:e.form.startTime},on:{click:function(a){e.to_laydate(1)},input:function(a){a.target.composing||e.$set(e.form,"startTime",a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.endTime,expression:"form.endTime"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:e.form.endTime},on:{click:function(a){e.to_laydate(2)},input:function(a){a.target.composing||e.$set(e.form,"endTime",a.target.value)}}})])])]),e._v(" "),t("div",{staticClass:"row"},[t("span",{staticClass:"dp"},[e._v("设备类型：")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.off.type,expression:"off.type==1"}],staticClass:"m-form-radio"},[t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deviceId,expression:"form.deviceId"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.form.deviceId,"0")},on:{change:function(a){e.$set(e.form,"deviceId","0")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("全部")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deviceId,expression:"form.deviceId"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.deviceId,"1")},on:{change:function(a){e.$set(e.form,"deviceId","1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("森锐")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deviceId,expression:"form.deviceId"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.deviceId,"2")},on:{change:function(a){e.$set(e.form,"deviceId","2")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("握奇")])])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:2==e.off.type,expression:"off.type==2"}],staticClass:"m-form-radio"},[t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deviceId,expression:"form.deviceId"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.form.deviceId,"0")},on:{change:function(a){e.$set(e.form,"deviceId","0")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("全部")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.deviceId,expression:"form.deviceId"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.deviceId,"1")},on:{change:function(a){e.$set(e.form,"deviceId","1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("旷视")])])])]),e._v(" "),t("div",{staticClass:"row"},[t("span",{staticClass:"dp"},[e._v("操作类型：")]),e._v(" "),t("div",{staticClass:"m-form-radio"},[t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.operation,expression:"form.operation"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.form.operation,"0")},on:{change:function(a){e.$set(e.form,"operation","0")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("全部")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.operation,expression:"form.operation"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.operation,"1")},on:{change:function(a){e.$set(e.form,"operation","1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("开卡")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.operation,expression:"form.operation"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.operation,"2")},on:{change:function(a){e.$set(e.form,"operation","2")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("激活商户")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.operation,expression:"form.operation"}],attrs:{type:"radio",value:"3"},domProps:{checked:e._q(e.form.operation,"3")},on:{change:function(a){e.$set(e.form,"operation","3")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("过户办理")])])])]),e._v(" "),t("div",{staticClass:"row"},[t("span",{staticClass:"dp"},[e._v("终端类型：")]),e._v(" "),t("div",{staticClass:"m-form-radio"},[t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.terminalType,expression:"form.terminalType"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.form.terminalType,"0")},on:{change:function(a){e.$set(e.form,"terminalType","0")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("全部")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.terminalType,expression:"form.terminalType"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.terminalType,"1")},on:{change:function(a){e.$set(e.form,"terminalType","1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("IOS")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.terminalType,expression:"form.terminalType"}],attrs:{type:"radio",value:"2"},domProps:{checked:e._q(e.form.terminalType,"2")},on:{change:function(a){e.$set(e.form,"terminalType","2")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("Android")])])])]),e._v(" "),t("div",{staticClass:"row"},[t("span",{staticClass:"dp"},[e._v("识别状态：")]),e._v(" "),t("div",{staticClass:"m-form-radio"},[t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.result,expression:"form.result"}],attrs:{type:"radio",value:"-1"},domProps:{checked:e._q(e.form.result,"-1")},on:{change:function(a){e.$set(e.form,"result","-1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("全部")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.result,expression:"form.result"}],attrs:{type:"radio",value:"1"},domProps:{checked:e._q(e.form.result,"1")},on:{change:function(a){e.$set(e.form,"result","1")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("成功")])]),e._v(" "),t("label",[t("span",{staticClass:"radio"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.result,expression:"form.result"}],attrs:{type:"radio",value:"0"},domProps:{checked:e._q(e.form.result,"0")},on:{change:function(a){e.$set(e.form,"result","0")}}}),t("span")]),t("span",{staticClass:"text"},[e._v("失败")])])])]),e._v(" "),t("button",{staticClass:"f-btn f-btn-line",on:{click:function(a){e.searchList(2)}}},[e._v("查询")])])]),e._v(" "),e.list?t("div",{staticClass:"m-total-table"},[t("div",{staticClass:"total-head"},[e._v("统计结果"),t("b",[e._v(e._s(e.total))])]),e._v(" "),t("table",[e._m(1),e._v(" "),t("tbody",e._l(e.list,function(a,s){return t("tr",[t("td",[e._v(e._s((e.pageNum-1)*e.pageSize+(s+1)))]),e._v(" "),t("td",[e._v(e._s(a.userId)),t("br"),e._v("（"+e._s(a.userName)+"）")]),e._v(" "),t("td",[e._v(e._s(e.getDateTime(a.readTime)[6]))]),e._v(" "),t("td",[t("span",{directives:[{name:"show",rawName:"v-show",value:1==a.terminalType,expression:"todo.terminalType==1"}]},[e._v("IOS")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2==a.terminalType,expression:"todo.terminalType==2"}]},[e._v("Android")])]),e._v(" "),t("td",[t("span",{directives:[{name:"show",rawName:"v-show",value:1==e.off.type,expression:"off.type==1"}]},[t("b",{directives:[{name:"show",rawName:"v-show",value:1==a.deviceId,expression:"todo.deviceId==1"}]},[e._v("森锐")]),e._v(" "),t("b",{directives:[{name:"show",rawName:"v-show",value:2==a.deviceId,expression:"todo.deviceId==2"}]},[e._v("握奇")])]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2==e.off.type,expression:"off.type==2"}]},[t("b",{directives:[{name:"show",rawName:"v-show",value:1==a.deviceId,expression:"todo.deviceId==1"}]},[e._v("旷视")])])]),e._v(" "),t("td",[e._v(e._s(a.orderId))]),e._v(" "),t("td",[t("span",{directives:[{name:"show",rawName:"v-show",value:1==a.appType,expression:"todo.appType==1"}]},[e._v("卡盟APP")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2==a.appType,expression:"todo.appType==2"}]},[e._v("Dwatch")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:3==a.appType,expression:"todo.appType==3"}]},[e._v("Android wear")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:4==a.appType,expression:"todo.appType==4"}]},[e._v("卡盟SDK")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:5==a.appType,expression:"todo.appType==5"}]},[e._v("卡盟通服")])]),e._v(" "),t("td",[t("span",{directives:[{name:"show",rawName:"v-show",value:1==a.operation,expression:"todo.operation==1"}]},[e._v("开卡")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:2==a.operation,expression:"todo.operation==2"}]},[e._v("激活商户")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:3==a.operation,expression:"todo.operation==3"}]},[e._v("过户办理")])]),e._v(" "),t("td",[e._v(e._s(a.idCardNo))]),e._v(" "),t("td",[e._v(e._s(a.phoneNo))]),e._v(" "),t("td",[t("span",{directives:[{name:"show",rawName:"v-show",value:0==a.result,expression:"todo.result==0"}],staticClass:"f-c-red"},[e._v("失败")]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:1==a.result,expression:"todo.result==1"}],staticClass:"f-c-green"},[e._v("成功")])])])}))]),e._v(" "),t("section",{staticClass:"m-sub-page clr"},[e.maxpage?t("div",{staticClass:"fl"},[t("a",{staticClass:"f-btn f-btn-success",attrs:{href:"javascript:void(0)"},on:{click:e.downLoadList}},[e._v("导出EXCEL")]),e._v(" "),t("iframe",{staticStyle:{padding:"0",margin:"0",width:"0",height:"0",opacity:"0"},attrs:{id:"loadIframe",src:"",frameborder:"0"}})]):e._e(),e._v(" "),t("my-page",{attrs:{page:e.pageNum,maxpage:e.maxpage,callback:e.callback}})],1)]):e._e()]),e._v(" "),e.off.details?t("list-details",{attrs:{list:e.detailsData,type:e.off.type,number:e.off.number}}):e._e()],1)])},l=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"m-tag"},[t("b"),e._v("条件查询")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("thead",[t("tr",[t("th",[e._v("序号")]),e._v(" "),t("th",[e._v("操作人\r\n\t\t\t\t\t")]),t("th",[e._v("识别时间")]),e._v(" "),t("th",[e._v("终端类型")]),e._v(" "),t("th",[e._v("设备类型")]),e._v(" "),t("th",[e._v("订单号码")]),e._v(" "),t("th",[e._v("系统类型")]),e._v(" "),t("th",[e._v("操作类型")]),e._v(" "),t("th",[e._v("身份证号码")]),e._v(" "),t("th",[e._v("用户号码")]),e._v(" "),t("th",[e._v("状态")])])])}],c={render:m,staticRenderFns:l},v=c,f=t("Z0/y"),u=s,_=f(p,v,!1,u,"data-v-b65d32b6",null);a.default=_.exports}});