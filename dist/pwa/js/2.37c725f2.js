(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{staticClass:"layout",attrs:{view:"lHh Lpr lFf"}},[n("q-slide-transition",[e.topCardOpened?n("div",{staticClass:"top-card"},[n("q-form",{staticClass:"top-card__input",on:{submit:e.onSearch}},[n("q-input",{attrs:{color:"grey-3",filled:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("q-btn",{attrs:{label:"검색"},on:{click:e.onSearch}})],1),n("div",{staticClass:"top-card__btn"},[n("q-btn-dropdown",{attrs:{label:e.type}},[n("q-list",e._l(e.typeList,(function(t,a){return n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(n){return e.onClickType(t)}}},[n("q-item-section",[n("q-item-label",[e._v(e._s(t))])],1)],1)})),1)],1)],1)],1):e._e()]),n("div",{staticClass:"content"},[n("router-view")],1)],1)},i=[],o=(n("6762"),n("2fdb"),n("386d"),{name:"MainLayout",data:function(){return{search:"",topCardOpened:!0,iPhoneIndicatorCheck:null,typeList:["전체","건어물","마트","문구","미용","병원","부동산","분식","생화","생활용품","수산물","슈퍼","식육","안경","약국","양식","어린이집","유통","음식","의류","일식","잡화","전자상거래","정비","제과","주류","주유","중식","치과","치킨","카페","커피","편의점","피자","학원","한식","한의원","호프","화장품","휴게음식"],type:"카테고리"}},mounted:function(){this.iPhoneXCheck()},methods:{onSearch:function(){console.log("Search",this.search)},onClickType:function(e){this.type=e,console.log(e)},iPhoneXCheck:function(){if(navigator.userAgent.includes("iPhone")){var e=screen.height/screen.width;this.iPhoneIndicatorCheck=e>2}}}}),c=o,s=(n("89d3"),n("2877")),r=n("eebe"),l=n.n(r),u=n("4d5a"),p=n("e9c1"),d=n("0378"),h=n("27f9"),f=n("9c40"),b=n("f20b"),m=n("1c1c"),v=n("66e5"),C=n("4074"),k=n("0170"),y=n("8572"),w=n("7f67"),Q=Object(s["a"])(c,a,i,!1,null,null,null);t["default"]=Q.exports;l()(Q,"components",{QLayout:u["a"],QSlideTransition:p["a"],QForm:d["a"],QInput:h["a"],QBtn:f["a"],QBtnDropdown:b["a"],QList:m["a"],QItem:v["a"],QItemSection:C["a"],QItemLabel:k["a"],QField:y["a"]}),l()(Q,"directives",{ClosePopup:w["a"]})},"89d3":function(e,t,n){"use strict";var a=n("b0e3"),i=n.n(a);i.a},b0e3:function(e,t,n){}}]);