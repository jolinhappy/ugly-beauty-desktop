(function(t){function i(i){for(var e,o,r=i[0],c=i[1],l=i[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(i);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,i=0;i<n.length;i++){for(var s=n[i],e=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(e=!1)}e&&(n.splice(i--,1),t=o(o.s=s[0]))}return t}var e={},a={app:0},n=[];function o(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=e,o.d=function(t,i,s){o.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,i){if(1&i&&(t=o(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var e in t)o.d(s,e,function(i){return t[i]}.bind(null,e));return s},o.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(i,"a",i),i},o.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},o.p="/ugly-beauty-desktop/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,i,s){t.exports=s("56d7")},"01a0":function(t,i,s){t.exports=s.p+"img/event.c727dd89.png"},"034f":function(t,i,s){"use strict";s("85ec")},"0f4d":function(t,i,s){"use strict";s("d078")},1531:function(t,i,s){t.exports=s.p+"media/uglyBeauty_cover.aa3dc47a.mp3"},"1cc2":function(t,i,s){"use strict";s("f86c")},2532:function(t,i,s){"use strict";s("7626")},"3fd6":function(t,i,s){t.exports=s.p+"img/option.1086f672.png"},4104:function(t,i,s){t.exports=s.p+"img/axe.85ae878b.png"},"48c5":function(t,i,s){t.exports=s.p+"img/computer.d9d1197a.png"},"56d7":function(t,i,s){"use strict";s.r(i);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("router-view",{on:{handleWallpaperChange:t.handleChange}})],1)},n=[],o={data:function(){return{}},methods:{handleChange:function(t){var i=document.querySelector("body");i.setAttribute("style","background-image:url(".concat(t,")"))}}},r=o,c=(s("034f"),s("2877")),l=Object(c["a"])(r,a,n,!1,null,null,null),u=l.exports,d=s("8c4f"),p=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"desktop"},[t.loading?s("Spinner",{on:{handleEndLoading:t.clickToEndLoad}}):t._e(),s("div",{staticClass:"desktop-app-section",on:{click:t.menuClose}},[s("div",{staticClass:"desktop-app-group"},[s("div",{staticClass:"desktop-app",on:{dblclick:t.openMyComputerWindow}},[t._m(0),s("div",{staticClass:"desktop-app-title"},[t._v("My Computer")])]),t._m(1)]),s("div",{staticClass:"desktop-app-group"},[s("div",{staticClass:"desktop-app",on:{dblclick:t.openMusicWindow}},[t._m(2),s("div",{staticClass:"desktop-app-title"},[t._v("Music Player")])]),s("div",{staticClass:"desktop-app",on:{dblclick:t.openEventWindow}},[t._m(3),s("div",{staticClass:"desktop-app-title"},[t._v("Jolin大紀事")])]),s("div",{staticClass:"desktop-app",on:{dblclick:t.openJolinProfileWindow}},[t._m(4),s("div",{staticClass:"desktop-app-title"},[t._v("Who is Jolin Tsai?")])])])]),s("MusicPlayerWindow",{directives:[{name:"show",rawName:"v-show",value:t.musicWindow,expression:"musicWindow"}],ref:"player",attrs:{"music-list":t.musicList,"max-z-index":t.maxZIndex},on:{close:t.closeMusicWindow,setMaxZIndex:t.handleSet}}),s("EventWindow",{directives:[{name:"show",rawName:"v-show",value:t.eventWindow,expression:"eventWindow"}],ref:"event",attrs:{"max-z-index":t.maxZIndex},on:{close:t.closeEventWindow,setMaxZIndex:t.handleSet}}),s("JolinProfileWindow",{directives:[{name:"show",rawName:"v-show",value:t.jolinProfileWindow,expression:"jolinProfileWindow"}],ref:"profile",attrs:{"max-z-index":t.maxZIndex},on:{close:t.closeJolinProfileWindow}}),s("MyComputerWindow",{directives:[{name:"show",rawName:"v-show",value:t.myComputerWindow,expression:"myComputerWindow"}],ref:"computer",attrs:{"max-z-index":t.maxZIndex},on:{close:t.closeMyComputerWindow}}),s("WallpaperWindow",{directives:[{name:"show",rawName:"v-show",value:t.wallpaperChangeWindow,expression:"wallpaperChangeWindow"}],ref:"wallpaper",attrs:{wallpapers:t.wallpapers,"max-z-index":t.maxZIndex},on:{close:t.closeWallpaperWindow,emitToHomePage:t.handleWallpaperChange}}),s("div",{staticClass:"desktop-footer"},[s("div",{staticClass:"footer-left",class:{active:t.active},on:{click:t.clickStart}},[t._m(5),s("div",{staticClass:"footer-start-text"},[t._v("Start")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuDisplay,expression:"menuDisplay"}],staticClass:"footer-menu"},[s("div",{staticClass:"menu-item",on:{click:t.openMusicWindow}},[t._m(6),s("div",{staticClass:"menu-item-title"},[t._v("Music Player")])]),s("div",{staticClass:"menu-item",on:{click:t.openEventWindow}},[t._m(7),s("div",{staticClass:"menu-item-title"},[t._v("Jolin大紀事")])]),s("div",{staticClass:"menu-item",on:{click:t.openJolinProfileWindow}},[t._m(8),s("div",{staticClass:"menu-item-title"},[t._v("Who is Jolin Tsai?")])]),s("div",{staticClass:"menu-item",on:{click:t.openWallpaperWindow}},[t._m(9),s("div",{staticClass:"menu-item-title"},[t._v("Wallpaper Change")])]),t._m(10),s("div",{staticClass:"menu-item",on:{click:t.openMyComputerWindow}},[t._m(11),s("div",{staticClass:"menu-item-title"},[t._v("My Computer")])])]),s("div",{staticClass:"footer-right"},[s("div",{staticClass:"footer-time"},[t._v(" "+t._s(t._f("hourFilter")(t.hour))+":"+t._s(t._f("minuteFilter")(t.minute))+":"+t._s(t._f("secondFilter")(t.second))+" ")])])])],1)},m=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"desktop-app-icon"},[e("img",{staticClass:"icon-img",attrs:{src:s("48c5"),alt:"app-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",{staticClass:"facebook-link",attrs:{href:"https://www.facebook.com/search/top?q=%E8%94%A1%E4%BE%9D%E6%9E%97%20jolin%20tsai",target:"_blank"}},[e("div",{staticClass:"desktop-app"},[e("div",{staticClass:"desktop-app-icon"},[e("img",{staticClass:"icon-img",attrs:{src:s("5d50"),alt:"app-icon"}})]),e("div",{staticClass:"desktop-app-title"},[t._v("Network Neighborhood")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"desktop-app-icon"},[e("img",{staticClass:"icon-img",attrs:{src:s("f2db"),alt:"app-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"desktop-app-icon"},[e("img",{staticClass:"icon-img",attrs:{src:s("01a0"),alt:"app-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"desktop-app-icon"},[e("img",{staticClass:"icon-img",attrs:{src:s("9a7b"),alt:"app-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"footer-start-icon"},[e("img",{staticClass:"footer-icon-img",attrs:{src:s("4104")}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"menu-item-icon"},[e("img",{staticClass:"menu-icon-img",attrs:{src:s("f2db"),alt:"menu-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"menu-item-icon"},[e("img",{staticClass:"menu-icon-img",attrs:{src:s("01a0"),alt:"menu-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"menu-item-icon"},[e("img",{staticClass:"menu-icon-img",attrs:{src:s("9a7b"),alt:"menu-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"menu-item-icon"},[e("img",{staticClass:"menu-icon-img",attrs:{src:s("3fd6"),alt:"menu-icon"}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",{staticClass:"facebook-link",attrs:{href:"https://www.facebook.com/hoo.jcai",target:"_blank"}},[e("div",{staticClass:"menu-item"},[e("div",{staticClass:"menu-item-icon"},[e("img",{staticClass:"menu-icon-img",attrs:{src:s("5d50"),alt:"menu-icon"}})]),e("div",{staticClass:"menu-item-title"},[t._v("Network Neighborhood")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"menu-item-icon"},[e("img",{staticClass:"menu-icon-img",attrs:{src:s("48c5"),alt:"menu-icon"}})])}],v=(s("b0c0"),s("11c1")),h=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"window",staticClass:"window-wrap event-window",on:{mousedown:t.clickWindow,mousemove:t.moveWindow,mouseup:t.finishMove}},[s("div",{staticClass:"window-header"},[t._m(0),s("div",{staticClass:"cross-icon",on:{click:t.handleCloseWindow}},[s("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),t._m(1)])},f=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header-title-wrap"},[e("div",{staticClass:"window-header-icon"},[e("img",{staticClass:"header-icon-img",attrs:{src:s("01a0"),alt:"header-icon"}})]),e("div",{staticClass:"window-title"},[t._v("Jolin大紀事")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"window-content"},[s("div",{staticClass:"content-title"},[t._v("Jolin大紀事")]),s("div",{staticClass:"history-content"},[s("div",{staticClass:"year"},[t._v("1999年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("發行首張個人專輯«1019»")])]),s("div",{staticClass:"year"},[t._v("2000年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("同年4月發行專輯«Don't Stop»")]),s("li",{staticClass:"history-event"},[t._v("同年5月發行個人首本寫真集«19歲»")]),s("li",{staticClass:"history-event"},[t._v("同年12月發行第3張專輯«Show Your Love»")])]),s("div",{staticClass:"year"},[t._v("2001年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("7月發行專輯«Lucky Number»")])]),s("div",{staticClass:"year"},[t._v("2002年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v(" 8月發行第二本寫真集«假面公主．騎士精神»與單曲«騎士精神» ")])]),s("div",{staticClass:"year"},[t._v("2003年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("3月發行第五張專輯«看我72變»")]),s("li",{staticClass:"history-event"},[t._v("3月主演的«Hi! 上班女郎»於中視上映")])]),s("div",{staticClass:"year"},[t._v("2004年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("2月發行專輯«城堡»")])]),s("div",{staticClass:"year"},[t._v("2005年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v(" 3月發行個人首本英文工具書«Jolin的24堂英文日記課» ")]),s("li",{staticClass:"history-event"},[t._v("4月發行第7張專輯«J-Game»")]),s("li",{staticClass:"history-event"},[t._v(" 12月發行第二本英文工具書«Jolin的6場單字派對» ")])]),s("div",{staticClass:"year"},[t._v("2006年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("5月發行個人專輯«舞孃»")]),s("li",{staticClass:"history-event"},[t._v("同年5月入圍最佳國語女歌手")])]),s("div",{staticClass:"year"},[t._v("2007年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("9月發行個人專輯«特務J»")])]),s("div",{staticClass:"year"},[t._v("2008年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v(" 10月發行第3本英文工具書與首張翻唱專輯«愛的練習曲» ")])]),s("div",{staticClass:"year"},[t._v("2009年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("3月發行第10張個人專輯«花蝴蝶»")])]),s("div",{staticClass:"year"},[t._v("2010年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("8月發行第11張個人專輯«Myself»")])]),s("div",{staticClass:"year"},[t._v("2012年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("9月發行第12張個人專輯«Muse»")])]),s("div",{staticClass:"year"},[t._v("2014年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("11月發行第13張個人專輯«呸»")])]),s("div",{staticClass:"year"},[t._v("2015年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v(" 5月展開個人巡迴演唱會「Play世界巡迴演唱會」 ")])]),s("div",{staticClass:"year"},[t._v("2016年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("2月為«動物方城市»配音")])]),s("div",{staticClass:"year"},[t._v("2017年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("5月發行單曲«讓愛傳出去»")])]),s("div",{staticClass:"year"},[t._v("2018年")]),s("ul",{staticClass:"history-list"},[s("li",{staticClass:"history-event"},[t._v("12月發行第14張個人專輯«Ugly Beauty»")])])])])}],w=(s("a9e3"),{name:"EventWindow",props:{maxZIndex:{type:Number,required:!0}},data:function(){return{windowMove:{}}},methods:{handleCloseWindow:function(){this.$emit("close")},clickWindow:function(t){var i=t.target.className,s=this.$refs.window;"window-header"===i&&(this.windowMove.start=!0,this.windowMove.currentTop=s.offsetTop,this.windowMove.currentLeft=s.offsetLeft,this.windowMove.mouseX=t.clientX,this.windowMove.mouseY=t.clientY);var e=this.maxZIndex+2;s.style.zIndex=e,this.$emit("setMaxZIndex",e)},moveWindow:function(t){if(this.windowMove.start){var i=this.$refs.window,s=t.clientX,e=t.clientY,a=s-this.windowMove.mouseX,n=e-this.windowMove.mouseY,o=this.windowMove.currentLeft+a,r=this.windowMove.currentTop+n;i.style.left="".concat(o,"px"),i.style.top="".concat(r,"px")}},finishMove:function(){this.windowMove.start=!1}}}),C=w,y=(s("1cc2"),Object(c["a"])(C,h,f,!1,null,"0758da32",null)),g=y.exports,_=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"window",staticClass:"window-wrap jolin-profile-window",on:{mousedown:t.clickWindow,mousemove:t.moveWindow,mouseup:t.finishMove}},[s("div",{staticClass:"window-header"},[t._m(0),s("div",{staticClass:"cross-icon",on:{click:t.handleCloseWindow}},[s("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),t._m(1)])},x=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header-title-wrap"},[e("div",{staticClass:"window-header-icon"},[e("img",{staticClass:"header-icon-img",attrs:{src:s("9a7b"),alt:"header-icon"}})]),e("div",{staticClass:"window-title"},[t._v("Who is Jolin Tsai?")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"window-content"},[e("div",{staticClass:"profile-content-wrap"},[e("div",{staticClass:"content-title"},[t._v("Jolin Tsai")]),e("div",{staticClass:"profile-image"},[e("img",{staticClass:"jolin-img",attrs:{src:s("57c8"),alt:"Jolin-image"}})]),e("ul",{staticClass:"profile-list-group"},[e("li",{staticClass:"profile-list"},[t._v("Taiwanese singer")]),e("li",{staticClass:"profile-list"},[t._v("Name：蔡依林(Jolin Tsai)")]),e("li",{staticClass:"profile-list"},[t._v("Birthday：09/15")]),e("li",{staticClass:"profile-list"},[t._v("Education：Fu Jen Catholic University")]),e("li",{staticClass:"profile-list"},[t._v("Famous Songs: Ugly Beauty, Play")]),e("li",{staticClass:"profile-list"},[t._v("Hobbies: making fondant cakes")])]),e("div",{staticClass:"profile-image"})])])}],M={name:"JolinProfileWindow",props:{maxZIndex:{type:Number,required:!0}},data:function(){return{windowMove:{}}},methods:{handleCloseWindow:function(){this.$emit("close")},clickWindow:function(t){var i=t.target.className,s=this.$refs.window;"window-header"===i&&(this.windowMove.start=!0,this.windowMove.currentTop=s.offsetTop,this.windowMove.currentLeft=s.offsetLeft,this.windowMove.mouseX=t.clientX,this.windowMove.mouseY=t.clientY);var e=this.maxZIndex+2;s.style.zIndex=e,this.$emit("setMaxZIndex",e)},moveWindow:function(t){if(this.windowMove.start){var i=this.$refs.window,s=t.clientX,e=t.clientY,a=s-this.windowMove.mouseX,n=e-this.windowMove.mouseY,o=this.windowMove.currentLeft+a,r=this.windowMove.currentTop+n;i.style.left="".concat(o,"px"),i.style.top="".concat(r,"px")}},finishMove:function(){this.windowMove.start=!1}}},W=M,b=(s("6fb3"),Object(c["a"])(W,_,x,!1,null,"343bebda",null)),k=b.exports,$=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"window",staticClass:"window-wrap my-computer-window",on:{mousedown:t.clickWindow,mousemove:t.moveWindow,mouseup:t.finishMove}},[s("div",{staticClass:"window-header"},[t._m(0),s("div",{staticClass:"cross-icon",on:{click:t.handleCloseWindow}},[s("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),t._m(1)])},T=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header-title-wrap"},[e("div",{staticClass:"window-header-icon"},[e("img",{staticClass:"header-icon-img",attrs:{src:s("48c5"),alt:"header-icon"}})]),e("div",{staticClass:"window-title"},[t._v("My Computer")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"window-content"},[s("div",{staticClass:"computer-content-wrap"},[s("div",{staticClass:"content-title"},[t._v("【五百人製作Team】")]),s("div",{staticClass:"line"}),s("ul",{staticClass:"main-content-wrap"},[s("li",{staticClass:"item"},[t._v("企劃：文科少女")]),s("li",{staticClass:"item"},[t._v("設計：文科少女")]),s("li",{staticClass:"item"},[t._v("前端：文科少女")]),s("li",{staticClass:"item"},[t._v("錄音：文科少女")]),s("li",{staticClass:"item"},[t._v("對！全部都是文科少女！")]),s("li",{staticClass:"item"},[t._v("少女的GitHub：https://github.com/jolinhappy")]),s("li",{staticClass:"item"},[t._v(" 少女的Facebook：https://www.facebook.com/pinkyprogramer ")]),s("li",{staticClass:"item"},[t._v(" 少女的Mediumn：https://pink-learn-frontend.medium.com/ ")]),s("li",{staticClass:"item"},[t._v("少女的痞克邦：https://pinkymini.pixnet.net/")])])])])}],I={name:"MyComputerWindow",props:{maxZIndex:{type:Number,required:!0}},data:function(){return{windowMove:{}}},methods:{handleCloseWindow:function(){this.$emit("close")},clickWindow:function(t){var i=t.target.className,s=this.$refs.window;"window-header"===i&&(this.windowMove.start=!0,this.windowMove.currentTop=s.offsetTop,this.windowMove.currentLeft=s.offsetLeft,this.windowMove.mouseX=t.clientX,this.windowMove.mouseY=t.clientY);var e=this.maxZIndex+2;s.style.zIndex=e,this.$emit("setMaxZIndex",e)},moveWindow:function(t){if(this.windowMove.start){var i=this.$refs.window,s=t.clientX,e=t.clientY,a=s-this.windowMove.mouseX,n=e-this.windowMove.mouseY,o=this.windowMove.currentLeft+a,r=this.windowMove.currentTop+n;i.style.left="".concat(o,"px"),i.style.top="".concat(r,"px")}},finishMove:function(){this.windowMove.start=!1}}},E=I,j=(s("b7ec"),Object(c["a"])(E,$,T,!1,null,"56bd3434",null)),P=j.exports,Z=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"window",staticClass:"window-wrap wallpaper-change-window",on:{mousedown:t.clickWindow,mousemove:t.moveWindow,mouseup:t.finishMove}},[s("div",{staticClass:"window-header"},[t._m(0),s("div",{staticClass:"cross-icon",on:{click:t.handleCloseWindow}},[s("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),s("div",{staticClass:"wallpaper-preview-wrap"},[s("div",{staticClass:"wallpaper-preview"},[s("div",{staticClass:"wallpaper-preview-screen"},[s("img",{staticClass:"preview-image",attrs:{src:t.wallpapersUrl,alt:"wallpaper-preview"}})])])]),s("div",{staticClass:"wallpaper-list-wrap"},t._l(t.wallpapers,(function(i){return s("div",{key:i.id,staticClass:"wallpaper-item",on:{click:function(s){return t.changeWallpaper(i.id)}}},[s("div",{staticClass:"wallpaper-image-wrap"},[s("img",{staticClass:"wallpaper-image",attrs:{src:i.url,alt:"wallpaper"}})]),s("div",{staticClass:"wallpaper-title"},[t._v(t._s(i.title))])])})),0),s("div",{staticClass:"confirm-button-wrap"},[s("div",{staticClass:"confirm-button",on:{click:t.emitWallpaper}},[t._v("套用")])])])},O=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header-title-wrap"},[e("div",{staticClass:"window-header-icon"},[e("img",{staticClass:"header-icon-img",attrs:{src:s("3fd6"),alt:"header-icon"}})]),e("div",{staticClass:"window-title"},[t._v("Wallpaper Change")])])}],L=(s("d81d"),{name:"wallpaperWindow",props:{wallpapers:{type:Array,require:!0},maxZIndex:{type:Number,required:!0}},data:function(){return{wallpapersUrl:"https://i2.wp.com/www.jolinjenerationgallery.com/albums/userpics/10001/Cai20Yi20Lin20_Jolin_Tsai_3C3CZi20Shuo20_Ugly_Beauty3E3E20_05.jpg",windowMove:{}}},methods:{handleCloseWindow:function(){this.$emit("close")},changeWallpaper:function(t){var i=this;this.wallpapers.map((function(s){s.id===t&&(i.wallpapersUrl=s.url)}))},emitWallpaper:function(){this.$emit("emitToHomePage",this.wallpapersUrl)},clickWindow:function(t){var i=t.target.className,s=this.$refs.window;"window-header"===i&&(this.windowMove.start=!0,this.windowMove.currentTop=s.offsetTop,this.windowMove.currentLeft=s.offsetLeft,this.windowMove.mouseX=t.clientX,this.windowMove.mouseY=t.clientY);var e=this.maxZIndex+2;s.style.zIndex=e,this.$emit("setMaxZIndex",e)},moveWindow:function(t){if(this.windowMove.start){var i=this.$refs.window,s=t.clientX,e=t.clientY,a=s-this.windowMove.mouseX,n=e-this.windowMove.mouseY,o=this.windowMove.currentLeft+a,r=this.windowMove.currentTop+n;i.style.left="".concat(o,"px"),i.style.top="".concat(r,"px")}},finishMove:function(){this.windowMove.start=!1}}}),D=L,N=(s("69bd"),Object(c["a"])(D,Z,O,!1,null,"12a25092",null)),S=N.exports,X=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"window",staticClass:"window-wrap music-player-window",on:{mousedown:t.clickWindow,mousemove:t.moveWindow,mouseup:t.finishMove}},[e("div",{staticClass:"window-header"},[t._m(0),e("div",{staticClass:"cross-icon",on:{click:t.handleCloseWindow}},[e("font-awesome-icon",{staticClass:"close-icon",attrs:{icon:"times"}})],1)]),e("audio",{ref:"audio",attrs:{id:"music1",src:s("dd28")("./"+t.currentMusicSrc+".mp3"),controls:"",hidden:"",muted:"muted",type:"audio/mpeg"},on:{canplay:t.getDurationTime,ended:t.autoPlay}},[t._v(" Your browser does not support ")]),e("div",{staticClass:"music-option"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.listToggle,expression:"listToggle"}],staticClass:"music-list-toggle",attrs:{type:"checkbox",id:"music-list-toggle"},domProps:{checked:Array.isArray(t.listToggle)?t._i(t.listToggle,null)>-1:t.listToggle},on:{change:function(i){var s=t.listToggle,e=i.target,a=!!e.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);e.checked?o<0&&(t.listToggle=s.concat([n])):o>-1&&(t.listToggle=s.slice(0,o).concat(s.slice(o+1)))}else t.listToggle=a}}}),e("label",{staticClass:"music-list-toggle-label",attrs:{for:"music-list-toggle"}},[e("div",{staticClass:"music-name"},[t._v(t._s(t.currentMusicName))]),e("font-awesome-icon",{staticClass:"music-option-button",attrs:{icon:"caret-down"}})],1),e("div",{staticClass:"music-list"},t._l(t.musicList,(function(i){return e("div",{key:i.id,staticClass:"music-item",on:{click:function(s){return t.changeMusic(i.id)}}},[t._v(" "+t._s(i.name)+" ")])})),0)]),e("div",{staticClass:"music-player-progress"},[e("div",{ref:"bar",staticClass:"music-player-progress-main-bar",on:{click:t.clickProgressBar}},[e("div",{ref:"progress",staticClass:"music-player-progress-bar"}),e("div",{ref:"progressBtn",staticClass:"music-player-progress-button-wrap",on:{mousedown:t.progressTouch,mousemove:t.progressTouchMove,mouseup:t.progressTouchEnd}},[e("div",{staticClass:"progress-botton"})])])]),e("div",{staticClass:"music-player-controler"},[e("div",{staticClass:"music-control-tools"},[e("div",{staticClass:"music-control-button music-play",class:{active:!0===t.play},on:{click:t.playMusic}},[e("font-awesome-icon",{attrs:{icon:"play"}})],1),e("div",{staticClass:"music-control-button music-pause",class:{active:!0===t.pause},on:{click:t.pauseMusic}},[e("font-awesome-icon",{attrs:{icon:"pause"}})],1),e("div",{staticClass:"music-control-button music-stop",class:{active:!0===t.stop},on:{click:t.stopMusic}},[e("font-awesome-icon",{attrs:{icon:"stop"}})],1)]),e("div",{staticClass:"music-duration"},[e("div",{staticClass:"music-duration-time"},[t._v(" "+t._s(t._f("musicTimeFilter")(t.current))+" / "+t._s(t._f("musicTimeFilter")(t.duration))+" ")])]),e("div",{staticClass:"music-player-volume"},[e("div",{staticClass:"music-player-volume-icon",on:{click:t.muteMusic}},[t.volume?e("font-awesome-icon",{attrs:{icon:"volume-up"}}):e("font-awesome-icon",{attrs:{icon:"volume-off"}})],1)])])])},J=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"header-title-wrap"},[e("div",{staticClass:"window-header-icon"},[e("img",{staticClass:"header-icon-img",attrs:{src:s("f2db"),alt:"header-icon"}})]),e("div",{staticClass:"window-title"},[t._v("Music Player")])])}],Y=s("2909"),B={name:"MusicPlayerWindow",props:{musicList:{type:Array,required:!0},maxZIndex:{type:Number,required:!0}},created:function(){this.getCurrentMusic()},watch:{percent:function(t){if(t>=0&&!this.progressData.start){var i=this.$refs.bar.clientWidth-9;this.currentOffsetWidth=i*t,this.$refs.progress.style.width="".concat(this.currentOffsetWidth,"px"),this.$refs.progressBtn.style.transform="translateX(".concat(this.currentOffsetWidth,"px)")}}},data:function(){return{defaultMusic:[],currentOffsetWidth:null,isScrollAction:!1,currentMusicName:"紅衣女孩",currentMusicSrc:"ladyInRed",play:!1,pause:!1,stop:!1,progressData:{},listToggle:!1,volume:!0,duration:"",current:"",active:!1,musicWindow:!0,windowMove:{},ZIndex:1}},methods:{handleCloseWindow:function(){var t=this.$refs.audio;t.pause(),t.currentTime=0,this.$emit("close")},playMusic:function(){var t=this.$refs.audio,i=t.play();null!==i&&i.then((function(){t.play()})).catch((function(t){console.log(t)})),this.play=!0,this.stop=!1,this.pause=!1,this.durationTime=Number(parseInt(t.duration))},pauseMusic:function(){var t=this.$refs.audio;t.pause(),this.play=!1,this.pause=!0,this.stop=!1},stopMusic:function(){var t=this.$refs.audio;t.pause(),t.currentTime=0,this.play=!1,this.pause=!1,this.stop=!0},muteMusic:function(){var t=this.$refs.audio;this.volume=!this.volume,t.volume=this.volume},getDurationTime:function(){var t=this.$refs.audio;this.duration=t.duration,this.getCurrentTime()},getCurrentTime:function(){var t=this;setInterval((function(){t.current=parseInt(t.$refs.audio.currentTime)}),1e3)},changeMusic:function(t){var i=this;this.play=!1,this.stop=!1,this.pause=!1,this.musicList.map((function(s){if(s.id===t){i.currentMusicName=s.name,i.currentMusicSrc=s.src,i.listToggle=!1;var e=i.$refs.audio,a=e.play();null!==a&&a.then((function(){e.play()})).catch((function(t){console.log(t)}))}}))},getCurrentMusic:function(){this.defaultMusic=Object(Y["a"])(this.musicList)},autoPlay:function(){var t=this;this.play=!1;var i=this.$refs.audio,s=i.play();null!==s&&s.then((function(){var i=t.defaultMusic.shift();if(t.currentMusicSrc===i.src){t.defaultMusic.push(i);var s=t.defaultMusic.shift();t.currentMusicSrc=s.src,t.currentMusicName=s.name,t.defaultMusic.push(s)}else t.currentMusicSrc=i.src,t.currentMusicName=i.name,t.defaultMusic.push(i)})).then((function(){i.play()})).catch((function(t){console.log("error",t)}))},progressTouch:function(t){this.progressData.start=!0,this.progressData.startX=t.clientX,this.progressData.movedProgress=this.$refs.progress.clientWidth},progressTouchMove:function(t){if(this.progressData.start){var i=t.clientX-this.progressData.startX,s=Math.min(this.$refs.bar.clientWidth-9,Math.max(0,this.progressData.movedProgress+i));this.$refs.progress.style.width="".concat(s,"px"),this.$refs.progressBtn.style.transform="translateX(".concat(s,"px)")}},progressTouchEnd:function(){this.changePercent(),this.progressData.start=!1,this.isScrollAction=!0},clickProgressBar:function(t){if(this.isScrollAction)this.isScrollAction=!1;else{var i=this.$refs.bar.getBoundingClientRect().left,s=i+this.currentOffsetWidth;this.progressData.movedProgress=this.$refs.progress.clientWidth;var e=t.clientX-s,a=Math.min(this.$refs.bar.clientWidth-9,Math.max(0,this.progressData.movedProgress+e));this.$refs.progress.style.width="".concat(a,"px"),this.$refs.progressBtn.style.transform="translateX(".concat(a,"px)"),this.changePercent()}},changePercent:function(){var t=this.$refs.bar.clientWidth-9,i=this.$refs.progress.clientWidth/t;this.$refs.audio.currentTime=this.duration*i},clickWindow:function(t){var i=t.target.className,s=this.$refs.window;"window-header"===i&&(this.windowMove.start=!0,this.windowMove.currentTop=s.offsetTop,this.windowMove.currentLeft=s.offsetLeft,this.windowMove.mouseX=t.clientX,this.windowMove.mouseY=t.clientY);var e=this.maxZIndex+2;s.style.zIndex=e,this.$emit("setMaxZIndex",e)},moveWindow:function(t){if(this.windowMove.start){var i=this.$refs.window,s=t.clientX,e=t.clientY,a=s-this.windowMove.mouseX,n=e-this.windowMove.mouseY,o=this.windowMove.currentLeft+a,r=this.windowMove.currentTop+n;i.style.left="".concat(o,"px"),i.style.top="".concat(r,"px")}},finishMove:function(){this.windowMove.start=!1}},computed:{percent:function(){return this.current/this.duration}},filters:{musicTimeFilter:function(t){var i=parseInt(t),s=Math.floor(i/60),e=i%60;return s<10&&(s="0"+s),e<10&&(e="0"+e),t?s+":"+e:"00:00"}}},z=B,A=(s("946f"),Object(c["a"])(z,X,J,!1,null,"6a4d860c",null)),F=A.exports,q=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"spinner-wrap",on:{click:t.endLoading}},[t._m(0),s("div",{staticClass:"text"},[t._v(" click to enter！ ")])])},U=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"img-wrap"},[e("img",{staticClass:"img",attrs:{src:s("4104"),alt:""}})])}],H={methods:{endLoading:function(){this.$emit("handleEndLoading")}}},R=H,G=(s("2532"),Object(c["a"])(R,q,U,!1,null,"55c94e2f",null)),K=G.exports,Q={name:"Home",components:{EventWindow:g,JolinProfileWindow:k,MyComputerWindow:P,WallpaperWindow:S,MusicPlayerWindow:F,Spinner:K},data:function(){return{active:!1,menuDisplay:!1,eventWindow:!1,musicWindow:!0,jolinProfileWindow:!1,wallpaperChangeWindow:!1,myComputerWindow:!1,loading:!0,hour:null,minute:null,second:null,musicList:[{id:Object(v["v4"])(),name:"紅衣女孩",src:"ladyInRed"},{id:Object(v["v4"])(),name:"怪美的(Cover)",src:"uglyBeauty_cover"},{id:Object(v["v4"])(),name:"玫瑰少年(Cover)",src:"womxnly_cover"}],wallpapers:[{id:Object(v["v4"])(),url:"https://i.imgur.com/pfjAnvq.jpg"},{id:Object(v["v4"])(),url:"https://i.imgur.com/iG5hJEL.jpg",title:"怪美的"},{id:Object(v["v4"])(),url:"https://i.imgur.com/YEAF9ZO.jpg",title:"紅衣女孩"},{id:Object(v["v4"])(),url:"https://i.imgur.com/7pTnKCl.jpg",title:"消極掰"}],maxZIndex:5}},mounted:function(){var t=this;this.timer=setInterval((function(){var i=new Date;t.hour=i.getHours(),t.minute=i.getMinutes(),t.second=i.getSeconds()}),1e3)},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},methods:{clickStart:function(){this.active=!this.active,this.menuDisplay=!this.menuDisplay},menuClose:function(){this.clicked=!1;var t=this.$refs.player;this.menuDisplay?(this.menuDisplay=!this.menuDisplay,this.active=!this.active):!0===t.listToggle&&(t.listToggle=!1)},openEventWindow:function(){this.eventWindow=!0,this.menuDisplay=!1,this.active=!1,this.maxZIndex=this.maxZIndex+2;var t=this.$refs.event,i=t.$refs.window;i.style.zIndex=this.maxZIndex},closeEventWindow:function(){this.eventWindow=!1},openMusicWindow:function(){this.musicWindow=!0,this.menuDisplay=!1,this.active=!1,this.resetMusicPlayerButton();var t=this.$refs.player,i=t.$refs.audio;t.currentMusicSrc=this.musicList[0].src,t.currentMusicName=this.musicList[0].name,i.play(),this.maxZIndex=this.maxZIndex+2;var s=t.$refs.window;s.style.zIndex=this.maxZIndex},closeMusicWindow:function(){this.musicWindow=!1},resetMusicPlayerButton:function(){var t=this.$refs.player;t.play=!1,t.stop=!1,t.pause=!1},handleWallpaperChange:function(t){this.$emit("handleWallpaperChange",t)},closeWallpaperWindow:function(){this.wallpaperChangeWindow=!1},openWallpaperWindow:function(){this.wallpaperChangeWindow=!0,this.menuDisplay=!this.menuDisplay,this.active=!1,this.maxZIndex=this.maxZIndex+2;var t=this.$refs.wallpaper,i=t.$refs.window;i.style.zIndex=this.maxZIndex},openJolinProfileWindow:function(){this.jolinProfileWindow=!0,this.menuDisplay=!1,this.active=!1,this.maxZIndex=this.maxZIndex+2;var t=this.$refs.profile,i=t.$refs.window;i.style.zIndex=this.maxZIndex},closeJolinProfileWindow:function(){this.jolinProfileWindow=!1},openMyComputerWindow:function(){this.myComputerWindow=!0,this.menuDisplay=!1,this.active=!1,this.maxZIndex=this.maxZIndex+2;var t=this.$refs.computer,i=t.$refs.window;i.style.zIndex=this.maxZIndex},closeMyComputerWindow:function(){this.myComputerWindow=!1},handleSet:function(t){this.maxZIndex<t&&(this.maxZIndex=t)},clickToEndLoad:function(){this.loading=!1;var t=this.$refs.player,i=t.$refs.audio;i.play()}},filters:{hourFilter:function(t){var i="",s="";if(t>12)if(i=t-12,i<10)i="下午 0"+i;else{if(12!==i)return"下午 "+i;i="下午 "+t}else s=24===t?"上午 "+t-12:t<10?"上午 0"+t:"上午 "+t;return t>12?i:s},minuteFilter:function(t){return t>=10?t:"0"+t},secondFilter:function(t){return t>=10?t:"0"+t}}},V=Q,tt=(s("0f4d"),Object(c["a"])(V,p,m,!1,null,"6346a6c7",null)),it=tt.exports,st=s("ecee"),et=s("c074"),at=s("ad3d");st["c"].add(et["a"]),e["a"].component("font-awesome-icon",at["a"]),e["a"].use(d["a"]);var nt=[{path:"/",name:"Home",component:it}],ot=new d["a"]({routes:nt}),rt=ot;e["a"].config.productionTip=!1,new e["a"]({router:rt,render:function(t){return t(u)}}).$mount("#app")},"57c8":function(t,i,s){t.exports=s.p+"img/jolin.b89209e7.jpg"},"5d50":function(t,i,s){t.exports=s.p+"img/twoComputer.a606a6b5.png"},"65a7":function(t,i,s){},"69bd":function(t,i,s){"use strict";s("d243")},"6fb3":function(t,i,s){"use strict";s("d292")},7626:function(t,i,s){},"7ba1":function(t,i,s){},"85ec":function(t,i,s){},"946f":function(t,i,s){"use strict";s("65a7")},"9a7b":function(t,i,s){t.exports=s.p+"img/note.aebb93df.png"},a601:function(t,i,s){t.exports=s.p+"media/ladyInRed.3fac1189.mp3"},b7ec:function(t,i,s){"use strict";s("7ba1")},c3a5:function(t,i,s){t.exports=s.p+"media/womxnly_cover.dcb3ec63.mp3"},d078:function(t,i,s){},d243:function(t,i,s){},d292:function(t,i,s){},dd28:function(t,i,s){var e={"./ladyInRed.mp3":"a601","./uglyBeauty_cover.mp3":"1531","./womxnly_cover.mp3":"c3a5"};function a(t){var i=n(t);return s(i)}function n(t){if(!s.o(e,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e[t]}a.keys=function(){return Object.keys(e)},a.resolve=n,t.exports=a,a.id="dd28"},f2db:function(t,i,s){t.exports=s.p+"img/player.d3e4ed8d.png"},f86c:function(t,i,s){}});
//# sourceMappingURL=app.2f0afc37.js.map