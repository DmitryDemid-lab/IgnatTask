(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,a,t){e.exports={affairsBlock:"Affairs_affairsBlock__1L5U7",btn:"Affairs_btn__1EheS",btnRow:"Affairs_btnRow__kZ8tr",textRow:"Affairs_textRow__2W8bj",affair:"Affairs_affair__1fI0z",constRow:"Affairs_constRow__YOnEg",btnDelete:"Affairs_btnDelete__-eBtg"}},,,function(e,a,t){e.exports={post:"TelegramMessage_post__WpGtN",avatarIcon:"TelegramMessage_avatarIcon__KtoSU",message:"TelegramMessage_message__3g7xr",messageBlock:"TelegramMessage_messageBlock__2D459",nameOfWriter:"TelegramMessage_nameOfWriter__2eTM4",textMessage:"TelegramMessage_textMessage__2ilGs",sentTime:"TelegramMessage_sentTime__3V0W9"}},,,,,,,,,function(e,a,t){e.exports={newDate:"NewDate_newDate__3TCbi",TimeWithDate:"NewDate_TimeWithDate__3_rCE",time:"NewDate_time__2-H6p",date:"NewDate_date__3ionO"}},,,,,function(e,a,t){e.exports={Drawer:"Drawer_Drawer__sRKTi",close:"Drawer_close__ErSpZ",active:"Drawer_active__3x8lE"}},function(e,a,t){e.exports={body:"MyInitialsOutput_body__SV5_p",MyFullName:"MyInitialsOutput_MyFullName__AclR1",text:"MyInitialsOutput_text__1cOnE"}},,function(e,a,t){e.exports={HelloName:"HelloName_HelloName__2G2He",count:"HelloName_count__20DyA"}},function(e,a,t){e.exports={InputNya:"InputNya_InputNya__P0t5W",errorMessage:"InputNya_errorMessage__xhVFO"}},,function(e,a,t){e.exports={DoubleRange:"DoubleRange_DoubleRange__1qduo",title:"DoubleRange_title__ln7dz"}},,,,function(e,a,t){e.exports={MenuToggle:"MenuToggle_MenuToggle__3Tyj5",open:"MenuToggle_open__xDXgD"}},,,function(e,a,t){e.exports={PreJunior:"PreJunior_PreJunior__1_4U2"}},function(e,a,t){e.exports={ButtonNya:"ButtonNya_ButtonNya__2WIvl",primary:"ButtonNya_primary__3lBKD"}},function(e,a,t){e.exports={Junior:"Junior_Junior__L1HUy"}},function(e,a,t){e.exports={EditableSpan:"EditableSpan_EditableSpan__1W869"}},function(e,a,t){e.exports={Select:"Select_Select__2gRUQ"}},function(e,a,t){e.exports={Radio:"Radio_Radio__3xdBw"}},,function(e,a,t){e.exports=t.p+"static/media/Spinner-1s-200px.2aea4710.svg"},function(e,a,t){e.exports={Range:"Range_Range__2B0zQ"}},function(e,a,t){e.exports={JuniorPlus:"JuniorPlus_JuniorPlus__v3TtS"}},function(e,a,t){e.exports={Layout:"Layout_Layout__2Q7IO"}},function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__2rijp"}},function(e,a,t){e.exports={HomeScreens:"HomeScreen_HomeScreens__3slBB"}},,function(e,a,t){e.exports=t(60)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),o=t.n(l),c=(t(52),t(53),t(33)),i=t.n(c),u=t(1),s=t(3),m=t.n(s);var f=function(e){var a=e.affairs.map((function(a){return r.a.createElement("li",{className:m.a.textRow,key:a.id},r.a.createElement("span",{className:m.a.affair}," ",r.a.createElement("span",{className:m.a.constRow},"Name: ")," ",a.name),r.a.createElement("span",{className:m.a.affair}," ",r.a.createElement("span",{className:m.a.constRow},"Priority:")," ",a.priority),r.a.createElement("button",{className:m.a.btnDelete,onClick:function(){return e.removeAffair(a.id)}},"x"))}));return r.a.createElement("div",null,r.a.createElement("ul",null,a),r.a.createElement("div",{className:m.a.btnRow},r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("all")}},"ALL"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("high")}},"HIGH"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("middle")}},"MIDDLE"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("low")}},"LOW")))};var p=function(){var e=Object(n.useState)([{id:1,name:"Studying",priority:" high "},{id:2,name:"Relaxing",priority:" middle "},{id:3,name:"Working",priority:" middle "},{id:4,name:"Playing",priority:" low "}]),a=Object(u.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)("all"),c=Object(u.a)(o,2),i=c[0],s=c[1],p=t;return"high"===i&&(p=t.filter((function(e){return" high "===e.priority}))),"middle"===i&&(p=t.filter((function(e){return" middle "===e.priority}))),"low"===i&&(p=t.filter((function(e){return" low "===e.priority}))),"all"===i&&(p=t.filter((function(e){return t}))),r.a.createElement("div",{className:m.a.affairsBlock},r.a.createElement(f,{affairs:p,removeAffair:function(e){var a=t.filter((function(a){return a.id!==e}));l(a)},changeFilter:function(e){s(e)}}))},g=t(6),E=t.n(g),v=function(){return r.a.createElement("img",{className:E.a.avatarIcon,src:"https://avatarfiles.alphacoders.com/855/85557.png",alt:"avatar"})},d=function(e){var a=(new Date).toLocaleTimeString();return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.nameOfWriter},e.name),r.a.createElement("div",{className:E.a.textMessage},e.text),r.a.createElement("div",{className:E.a.sentTime},a))},_=function(){return r.a.createElement("div",{className:E.a.post},r.a.createElement("div",{className:E.a.messageBlock},r.a.createElement(v,null),r.a.createElement(d,{name:"Dmitry",text:"Hi, how'r u doing? One of the most common problems that I run into when using Redux is trying to figure out why an action is not being captured by a reducer. For someone just getting starting with Redux, debugging this issue can be especially overwhelming because of how Redux manages data flow. So before you start pouring over configuration code, or the logic contained in your action creators and reducers, please, make sure your action types are defined and spelled correctly."})))},b=t(13),h=t(23),O=t.n(h),N=t(62),y=t(34),x=t.n(y),w=function(e){var a=Object.assign({},e);return r.a.createElement("button",Object.assign({},a,{className:x.a.ButtonNya}))},j=t(46),C=t(24),S=t.n(C),T=function(e){var a=e.onEnter,t=e.error,n=Object(j.a)(e,["onEnter","error"]);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:S.a.InputNya},n,{type:"text",onKeyPress:function(e){return 13===e.charCode&&a()}})),r.a.createElement("br",null),r.a.createElement("span",{className:S.a.errorMessage},t))};var k=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)([]),c=Object(u.a)(o,2),i=c[0],s=c[1],m=Object(n.useState)(""),f=Object(u.a)(m,2),p=f[0],g=f[1],E=i.length,v=function(){""!==t.trim()?(alert("Hello, "+t),function(e){var a={id:Object(N.a)(),name:e};s([a].concat(Object(b.a)(i)))}(t),l("")):(g("Field is required!"),l(""))};return r.a.createElement("div",{className:O.a.HelloName},r.a.createElement(T,{onEnter:v,placeholder:"Enter your name here",value:t,onChange:function(e){l(e.currentTarget.value),g("")},error:p}),r.a.createElement(w,{onClick:v},"+"),r.a.createElement("span",{className:O.a.count},"Names amount:",r.a.createElement("br",null),E))};function D(){alert("hello")}var M=function(){return r.a.createElement("div",{className:i.a.PreJunior},r.a.createElement("h1",null,"The result of my homework \u2116 1-4"),r.a.createElement(_,null),r.a.createElement(p,null),r.a.createElement(k,null),r.a.createElement(T,{onEnter:D}),r.a.createElement(w,null,"Hi"))},R=t(35),I=t.n(R),L=t(36),J=t.n(L),H=r.a.memo((function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],o=t[1],c=function(){o(!1)};return r.a.createElement("div",null,l?r.a.createElement(T,{onEnter:c,onBlur:c,autoFocus:!0,onChange:function(a){e.onChange(a.currentTarget.value)},value:e.title}):r.a.createElement("span",{className:J.a.EditableSpan,onDoubleClick:function(){o(!0)}},e.title))})),A=t(37),B=t.n(A),P=r.a.memo((function(e){return r.a.createElement("select",{className:B.a.Select,onChange:function(a){e.onSelectChangeHandler(a.currentTarget.value)},value:e.value},e.optionsArray.map((function(e,a){return r.a.createElement("option",{key:a},e)})))})),U=t(38),V=t.n(U),W=r.a.memo((function(e){var a=function(a){e.onRadioChangeHandler(a.currentTarget.value)};return r.a.createElement(r.a.Fragment,null,e.radioGroup.map((function(t,n){return r.a.createElement("div",{key:n,className:V.a.Radio},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:e.groupName,value:t,onChange:a,checked:!0}),t))})))})),F=[{id:"1",name:"Dmitry",age:22},{id:"2",name:"Alex",age:32},{id:"3",name:"Max",age:12}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SORT":var t=Object(b.a)(e);return"up"===a.sortType?t.sort((function(e,a){return e.name>a.name?1:a.name>e.name?-1:0})):"down"===a.sortType?t.sort((function(e,a){return e.name<a.name?1:a.name<e.name?-1:0})):t;case"CHECK":var n=Object(b.a)(e);return n.filter((function(e){return e.age>=a.minAge}));default:return e}},K=function(e){return{type:"SORT",sortType:e}};var z=function(e){var a=Object(n.useState)([{id:"1",name:"Dmitry",age:22},{id:"2",name:"Alex",age:32},{id:"3",name:"Max",age:12}]),t=Object(u.a)(a,2),l=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e.id},"Name: ",e.name," age: ",e.age)}))),r.a.createElement(w,{onClick:function(){var e=K("up"),a=G(l,e);o(a)}},"Sort names UP"),r.a.createElement(w,{onClick:function(){var e=K("down"),a=G(l,e);o(a)}},"Sort names Down"),r.a.createElement(w,{onClick:function(){var e=prompt("Enter min age","0");if(e){var a={type:"CHECK",minAge:+e},t=G(l,a);o(t)}return l}},"Sort by age"))},Y=t(19),Q=t.n(Y),q=t(15),Z=t.n(q);var X=function(e){var a=Object(n.useState)(Q()().format("h:mm:ss")),t=Object(u.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(0),i=Object(u.a)(c,2),s=i[0],m=i[1],f=Object(n.useState)(!1),p=Object(u.a)(f,2),g=p[0],E=p[1],v=function(){var e=Q()().format("h:mm:ss");o(e),console.log(e)};return r.a.createElement("div",{className:Z.a.newDate},r.a.createElement("div",{className:Z.a.TimeWithDate},g&&r.a.createElement("div",{className:Z.a.date},Q()().format("MMMM DD YYYY")),r.a.createElement("div",{onMouseOver:function(){return E(!0)},onMouseOut:function(){return E(!1)},className:Z.a.time},l)),r.a.createElement(w,{onClick:function(){clearInterval(s);var e=window.setInterval(v,1e3);m(e)}},"Start Time"),r.a.createElement(w,{onClick:function(){return clearInterval(s)}},"Stop Time"))},$=t(12),ee=t(14),ae={loading:!1},te=function(e){return{type:"SET_LOADING",isLoading:e}},ne=t(40),re=t.n(ne);var le=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:re.a}))},oe=t(41),ce=t.n(oe),ie=r.a.memo((function(e){return r.a.createElement("div",{className:ce.a.Range},r.a.createElement("input",{type:"range",min:e.minVal,max:e.maxVal,onChange:function(a){e.onRangeChange(+a.currentTarget.value),console.log("VALUE INSIDE COMPONENT ".concat(a.currentTarget.value))},value:e.value,step:e.step}),r.a.createElement("label",null,e.title))})),ue=t(26),se=t.n(ue),me=r.a.memo((function(e){e.valueUpper<e.valueLower+4&&e.onLowerChange(e.valueUpper-4),e.valueLower>e.valueUpper-4&&e.onUpperChange(e.valueLower+4);return r.a.createElement("div",{className:se.a.DoubleRange,id:"DoubleRange"},r.a.createElement("input",{type:"range",min:e.minVal,max:e.maxVal,value:e.valueLower,id:"lower",step:e.step,onChange:function(a){e.onLowerChange(+a.currentTarget.value),console.log("VALUE Lower INSIDE COMPONENT ".concat(a.currentTarget.value))}}),r.a.createElement("input",{type:"range",min:e.minVal,max:e.maxVal,value:e.valueUpper,id:"upper",step:e.step,onChange:function(a){e.onUpperChange(+a.currentTarget.value),console.log("VALUE Upper INSIDE COMPONENT ".concat(a.currentTarget.value))}}),r.a.createElement("span",{className:se.a.title},e.title))}));var fe=r.a.memo((function(){var e=Object($.c)((function(e){return e.loadState})),a=Object($.b)();var t=Object(n.useState)("Hello"),l=Object(u.a)(t,2),o=l[0],c=l[1],i=Object(n.useCallback)((function(e){c(e)}),[]),s=Object(n.useState)("Choose city"),m=Object(u.a)(s,2),f=m[0],p=m[1],g=Object(n.useCallback)((function(e){p(e)}),[]),E=Object(n.useState)("ManUnited"),v=Object(u.a)(E,2),d=(v[0],v[1]),_=Object(n.useCallback)((function(e){d(e)}),[]),b=Object(n.useState)(0),h=Object(u.a)(b,2),O=h[0],N=h[1],y=Object(n.useCallback)((function(e){N(e)}),[]),x=Object(n.useState)(10),j=Object(u.a)(x,2),C=j[0],S=j[1],T=Object(n.useState)(0),k=Object(u.a)(T,2),D=k[0],M=k[1],R=Object(n.useCallback)((function(e){M(e)}),[]),L=Object(n.useCallback)((function(e){S(e)}),[]);return e.loading?r.a.createElement(le,null):r.a.createElement("div",{className:I.a.Junior},r.a.createElement("h1",null,"Junior"),r.a.createElement("hr",null),r.a.createElement(H,{title:o,onChange:i}),r.a.createElement(w,{onClick:function(){!function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}("test",{x:"Hello!",y:"This is task number: ",z:6})}},"Set title"),r.a.createElement(w,{onClick:function(){var e=function(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}("test",{x:"",y:"",z:0});alert(Object.values(e).join(" ")),console.log(e)}},"Get title"),r.a.createElement("hr",null),r.a.createElement(P,{optionsArray:["Choose city","Minsk","Moscow","Kiev"],value:f,onSelectChangeHandler:g}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(W,{radioGroup:["ManUnited","Chelsea","Arsenal","Liverpool"],groupName:"football teams",onRadioChangeHandler:_}),r.a.createElement("hr",null),r.a.createElement(z,null),r.a.createElement("hr",null),r.a.createElement(X,null),r.a.createElement("hr",null),r.a.createElement(w,{onClick:function(){a(te(!0)),setTimeout((function(){return a(te(!1))}),3e3)}},"Start TimeOut"),r.a.createElement("hr",null),r.a.createElement(ie,{title:"Test",maxVal:10,minVal:0,onRangeChange:y,value:O,step:2}),r.a.createElement("br",null),r.a.createElement(me,{step:2,minVal:0,maxVal:50,valueLower:D,valueUpper:C,title:"TEST",onLowerChange:R,onUpperChange:L}))})),pe=t(42),ge=t.n(pe);var Ee=function(){return r.a.createElement("div",{className:ge.a.JuniorPlus},r.a.createElement("h1",null,"JuniorPlus"))},ve=t(2),de=t(43),_e=t.n(de),be=t(20),he=t.n(be),Oe=t(44),Ne=t.n(Oe);var ye=function(e){return r.a.createElement("div",{className:Ne.a.Backdrop,onClick:e.onClick})},xe=t(8),we=[{to:"/",label:"Home",exact:!0},{to:"/PreJunior",label:"PreJunior",exact:!1},{to:"/Junior",label:"Junior",exact:!1},{to:"/JuniorPlus",label:"JuniorPlus",exact:!1}];var je=function(e){var a=function(){e.onClose()},t=[he.a.Drawer];return e.isOpen||t.push(he.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:t.join(" ")},r.a.createElement("ul",null,we.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(xe.b,{to:e.to,exact:e.exact,activeClassName:he.a.active,onClick:a},e.label))})))),e.isOpen?r.a.createElement(ye,{onClick:e.onClose}):null)},Ce=t(30),Se=t.n(Ce);var Te=function(e){var a=[Se.a.MenuToggle,"fa"];return e.isOpen?(a.push("fa-times"),a.push(Se.a.open)):a.push("fa-bars"),r.a.createElement("i",{className:a.join(" "),onClick:e.onToggle})};var ke=function(e){var a=Object.assign({},e),t=Object(n.useState)({menu:!1}),l=Object(u.a)(t,2),o=l[0],c=l[1];return r.a.createElement("div",{className:_e.a.Layout},r.a.createElement(je,{isOpen:o.menu,onClose:function(){o.menu=!1,c(Object(ee.a)({},o))}}),r.a.createElement(Te,{onToggle:function(){o.menu=!o.menu,c(Object(ee.a)({},o))},isOpen:o.menu}),r.a.createElement("main",a,a.children))},De=t(45),Me=t.n(De),Re=t(21),Ie=t.n(Re),Le=function(){return r.a.createElement("div",{className:Ie.a.MyFullName},r.a.createElement(Je,{text:"Demid"}),r.a.createElement(Je,{text:"Dmitry"}),r.a.createElement(Je,{text:"Viktorovich"}))},Je=function(e){return r.a.createElement("div",{className:Ie.a.text},e.text)},He=function(){return r.a.createElement("div",{className:Ie.a.body},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png",alt:"avatar"}),r.a.createElement(Le,null))};var Ae=function(){return r.a.createElement("div",{className:Me.a.HomeScreens},r.a.createElement(He,null))},Be=t(11),Pe=Object(Be.b)({homeWork:G,loadState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(ee.a)({},e,{loading:a.isLoading});default:return e}}}),Ue=Object(Be.c)(Pe);window.store=Ue;var Ve=function(){return r.a.createElement(ke,null,r.a.createElement(ve.c,null,r.a.createElement(ve.a,{path:"/PreJunior",component:M}),r.a.createElement($.a,{store:Ue},r.a.createElement(ve.a,{path:"/Junior",component:fe})),r.a.createElement(ve.a,{path:"/JuniorPlus",component:Ee}),r.a.createElement(ve.a,{path:"/",component:Ae})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=r.a.createElement(xe.a,null,r.a.createElement(Ve,null));o.a.render(r.a.createElement(r.a.StrictMode,null,We),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.da352cb5.chunk.js.map