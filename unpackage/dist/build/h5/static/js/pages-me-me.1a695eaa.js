(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-me"],{"1de5":function(t,e,a){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"33f7":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"me-head"},[a("v-uni-view",{staticClass:"me-head-pic"},[a("v-uni-image",{attrs:{src:t.avatarUrl}})],1),a("v-uni-view",{staticClass:"me-head-id"},[t._v(t._s(t.userName))]),a("v-uni-view",{staticClass:"me-head-wave-1"}),a("v-uni-view",{staticClass:"me-head-wave-2"})],1),a("v-uni-view",{staticClass:"me-menu"},[a("v-uni-view",{staticClass:"me-menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProfile()}}},[t._v("编辑个人资料")]),a("v-uni-view",{staticClass:"me-menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAbout()}}},[t._v("关于我们")]),a("v-uni-view",{staticClass:"me-menu-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toContact()}}},[t._v("问题反馈")]),a("v-uni-view",{staticClass:"me-menu-item red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cleanCache()}}},[t._v("清除缓存")]),a("v-uni-view",{staticClass:"me-menu-line"})],1)],1)},o=[]},5152:function(t,e,a){"use strict";a.r(e);var n=a("ff21"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"61d0":function(t,e,a){var n=a("24fb"),i=a("1de5"),o=a("69e1");e=n(!1);var c=i(o);e.push([t.i,'.uni-list-cell[data-v-6c8ad7cb]{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.uni-list-cell-hover[data-v-6c8ad7cb]{background-color:#eee}.uni-list-cell-pd[data-v-6c8ad7cb]{padding:%?22?% %?30?%}.uni-list-cell-left[data-v-6c8ad7cb]{white-space:nowrap;font-size:%?34?%;font-weight:600;padding:10px %?30?%}.uni-list-cell-left-2[data-v-6c8ad7cb]{display:inline-flex;white-space:nowrap;font-size:%?34?%;font-weight:600;padding:10px %?30?%}.uni-list-cell-db[data-v-6c8ad7cb],\n.uni-list-cell-right[data-v-6c8ad7cb]{margin-left:45px;flex:1}.uni-list-cell[data-v-6c8ad7cb]::after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.me-head[data-v-6c8ad7cb]{width:100vw;height:200px;text-align:center;background-image:url('+c+');background-size:100% 100%}.me-head-pic[data-v-6c8ad7cb]{margin-top:5vh;display:inline-flex;width:80px;height:80px;\n\t/* border: 2px solid #000000; */border-radius:40px}.me-head-pic uni-image[data-v-6c8ad7cb]{width:80px;height:80px;\n\t/* \t\twidth: 100%;\n\theight: 100%; */\n\t/* border: 2px solid #000000; */\n\t/* background-color: #ffffff; */border-radius:50px}.me-head-id[data-v-6c8ad7cb]{font-size:20px;padding-top:5px;font-weight:400;color:#fff}.me-head-wave-1[data-v-6c8ad7cb]{height:40px;background:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png) repeat-x;_filter:alpha(opacity=80);position:absolute;top:160px;width:1000%;left:0;z-index:5;opacity:1;transiton-property:opacity,bottom;transition-duration:.4s,.4s;-webkit-animation:wave-data-v-6c8ad7cb 250s alternate infinite;animation:wave-data-v-6c8ad7cb 250s alternate infinite}@-webkit-keyframes wave-data-v-6c8ad7cb{from{left:0}to{left:-2500px}}@keyframes wave-data-v-6c8ad7cb{from{left:0}to{left:-2500px}}.me-head-wave-2[data-v-6c8ad7cb]{height:35px;background:url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.1/img/Sakura/images/wave1.png) repeat-x;_filter:alpha(opacity=80);position:absolute;top:165px;width:1000%;left:-50px;z-index:5;opacity:1;transiton-property:opacity,bottom;transition-duration:.4s,.4s;-webkit-animation:wave2-data-v-6c8ad7cb 250s alternate infinite;animation:wave2-data-v-6c8ad7cb 250s alternate infinite}@-webkit-keyframes wave2-data-v-6c8ad7cb{from{left:-50px}to{left:-3500px}}@keyframes wave2-data-v-6c8ad7cb{from{left:-50px}to{left:-3500px}}.me-menu[data-v-6c8ad7cb]{margin-top:20px}.me-menu-item[data-v-6c8ad7cb]{padding:15px;padding-left:10px;font-size:17px;line-height:17px}.me-menu-item[data-v-6c8ad7cb]::before{content:"";height:1px;width:100vw;position:absolute;left:0;margin-top:-17px;background-color:rgba(0,0,0,.07)}.me-menu-line[data-v-6c8ad7cb]{content:"";height:1px;width:100vw;background-color:rgba(0,0,0,.07)}.red[data-v-6c8ad7cb]{color:red}.login[data-v-6c8ad7cb]{width:100vw;height:50px;\n\t/* position: absolute; */\n\t/* bo.loginttom: 0rpx; */text-align:center;padding-top:10px;font-size:%?60?%;background-color:orange;color:#fff}',""]),t.exports=e},"69e1":function(t,e,a){t.exports=a.p+"static/img/Small.429c348e.png"},aded:function(t,e,a){"use strict";var n=a("e7c3"),i=a.n(n);i.a},d8db:function(t,e,a){"use strict";a.r(e);var n=a("33f7"),i=a("5152");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("aded");var c,d=a("f0c5"),r=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"6c8ad7cb",null,!1,n["a"],c);e["default"]=r.exports},e7c3:function(t,e,a){var n=a("61d0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7cde6f98",n,!0,{sourceMap:!1,shadowMode:!1})},ff21:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{userID:"123",userName:"测试",avatarUrl:"../../static/image/Small.png",codeurl:"#",code:"",username:"",headImage:""}},onReady:function(){console.log("onReady")},onload:function(){console.log("onload")},onShow:function(){console.log("onShow")},methods:{toProfile:function(){uni.navigateTo({url:"profile/profile"})},toAbout:function(){uni.navigateTo({url:"about/about"})},toContact:function(){uni.navigateTo({url:"contact/contact"})},cleanCache:function(){uni.showModal({title:"不好！",content:"您似乎是要清除缓存\n这合理吗？",confirmText:"合理！",cancelText:"不对！",success:function(t){t.confirm&&(uni.clearStorage(),uni.showToast({title:"EXEC_CLEAN"}))}})}}};e.default=n}}]);