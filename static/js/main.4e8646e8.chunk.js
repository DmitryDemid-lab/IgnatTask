(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={affairsBlock:"Affairs_affairsBlock__1L5U7",btn:"Affairs_btn__1EheS",btnRow:"Affairs_btnRow__kZ8tr",textRow:"Affairs_textRow__2W8bj",affair:"Affairs_affair__1fI0z",constRow:"Affairs_constRow__YOnEg",btnDelete:"Affairs_btnDelete__-eBtg"}},,,function(e,t,a){e.exports={post:"TelegramMessage_post__WpGtN",avatarIcon:"TelegramMessage_avatarIcon__KtoSU",message:"TelegramMessage_message__3g7xr",messageBlock:"TelegramMessage_messageBlock__2D459",nameOfWriter:"TelegramMessage_nameOfWriter__2eTM4",textMessage:"TelegramMessage_textMessage__2ilGs",sentTime:"TelegramMessage_sentTime__3V0W9"}},,,,,,function(e,t,a){e.exports={Drawer:"Drawer_Drawer__sRKTi",close:"Drawer_close__ErSpZ",active:"Drawer_active__3x8lE"}},function(e,t,a){e.exports={body:"MyInitialsOutput_body__SV5_p",MyFullName:"MyInitialsOutput_MyFullName__AclR1",text:"MyInitialsOutput_text__1cOnE"}},,function(e,t,a){e.exports={HelloName:"HelloName_HelloName__2G2He",count:"HelloName_count__20DyA"}},function(e,t,a){e.exports={InputNya:"InputNya_InputNya__P0t5W",errorMessage:"InputNya_errorMessage__xhVFO"}},,,,function(e,t,a){e.exports={MenuToggle:"MenuToggle_MenuToggle__3Tyj5",open:"MenuToggle_open__xDXgD"}},,,,,function(e,t,a){e.exports={PreJunior:"PreJunior_PreJunior__1_4U2"}},function(e,t,a){e.exports={ButtonNya:"ButtonNya_ButtonNya__2WIvl",primary:"ButtonNya_primary__3lBKD"}},function(e,t,a){e.exports={Junior:"Junior_Junior__L1HUy"}},function(e,t,a){e.exports={EditableSpan:"EditableSpan_EditableSpan__1W869"}},function(e,t,a){e.exports={Select:"Select_Select__2gRUQ"}},function(e,t,a){e.exports={JuniorPlus:"JuniorPlus_JuniorPlus__v3TtS"}},function(e,t,a){e.exports={Layout:"Layout_Layout__2Q7IO"}},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2rijp"}},,function(e,t,a){e.exports={HomeScreens:"HomeScreen_HomeScreens__3slBB"}},,function(e,t,a){e.exports=a(48)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),c=(a(41),a(42),a(25)),i=a.n(c),u=a(2),s=a(3),m=a.n(s);var f=function(e){var t=e.affairs.map((function(t){return r.a.createElement("li",{className:m.a.textRow,key:t.id},r.a.createElement("span",{className:m.a.affair}," ",r.a.createElement("span",{className:m.a.constRow},"Name: ")," ",t.name),r.a.createElement("span",{className:m.a.affair}," ",r.a.createElement("span",{className:m.a.constRow},"Priority:")," ",t.priority),r.a.createElement("button",{className:m.a.btnDelete,onClick:function(){return e.removeAffair(t.id)}},"x"))}));return r.a.createElement("div",null,r.a.createElement("ul",null,t),r.a.createElement("div",{className:m.a.btnRow},r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("all")}},"ALL"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("high")}},"HIGH"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("middle")}},"MIDDLE"),r.a.createElement("button",{className:m.a.btn,onClick:function(){return e.changeFilter("low")}},"LOW")))};var p=function(){var e=Object(n.useState)([{id:1,name:"Studying",priority:" high "},{id:2,name:"Relaxing",priority:" middle "},{id:3,name:"Working",priority:" middle "},{id:4,name:"Playing",priority:" low "}]),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("all"),c=Object(u.a)(l,2),i=c[0],s=c[1],p=a;return"high"===i&&(p=a.filter((function(e){return" high "===e.priority}))),"middle"===i&&(p=a.filter((function(e){return" middle "===e.priority}))),"low"===i&&(p=a.filter((function(e){return" low "===e.priority}))),"all"===i&&(p=a.filter((function(e){return a}))),r.a.createElement("div",{className:m.a.affairsBlock},r.a.createElement(f,{affairs:p,removeAffair:function(e){var t=a.filter((function(t){return t.id!==e}));o(t)},changeFilter:function(e){s(e)}}))},E=a(6),g=a.n(E),_=function(){return r.a.createElement("img",{className:g.a.avatarIcon,src:"https://avatarfiles.alphacoders.com/855/85557.png",alt:"avatar"})},d=function(e){var t=(new Date).toLocaleTimeString();return r.a.createElement("div",{className:g.a.message},r.a.createElement("div",{className:g.a.nameOfWriter},e.name),r.a.createElement("div",{className:g.a.textMessage},e.text),r.a.createElement("div",{className:g.a.sentTime},t))},v=function(){return r.a.createElement("div",{className:g.a.post},r.a.createElement("div",{className:g.a.messageBlock},r.a.createElement(_,null),r.a.createElement(d,{name:"Dmitry",text:"Hi, how'r u doing? One of the most common problems that I run into when using Redux is trying to figure out why an action is not being captured by a reducer. For someone just getting starting with Redux, debugging this issue can be especially overwhelming because of how Redux manages data flow. So before you start pouring over configuration code, or the logic contained in your action creators and reducers, please, make sure your action types are defined and spelled correctly."})))},b=a(10),y=a(15),h=a.n(y),N=a(50),x=a(26),O=a.n(x),w=function(e){var t=Object.assign({},e);return r.a.createElement("button",Object.assign({},t,{className:O.a.ButtonNya}))},k=a(35),S=a(16),j=a.n(S),C=function(e){var t=e.onEnter,a=e.error,n=Object(k.a)(e,["onEnter","error"]);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:j.a.InputNya},n,{type:"text",onKeyPress:function(e){return 13===e.charCode&&t()}})),r.a.createElement("br",null),r.a.createElement("span",{className:j.a.errorMessage},a))};var M=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),c=Object(u.a)(l,2),i=c[0],s=c[1],m=Object(n.useState)(""),f=Object(u.a)(m,2),p=f[0],E=f[1],g=i.length,_=function(){""!==a.trim()?(alert("Hello, "+a),function(e){var t={id:Object(N.a)(),name:e};s([t].concat(Object(b.a)(i)))}(a),o("")):(E("Field is required!"),o(""))};return r.a.createElement("div",{className:h.a.HelloName},r.a.createElement(C,{onEnter:_,placeholder:"Enter your name here",value:a,onChange:function(e){o(e.currentTarget.value),E("")},error:p}),r.a.createElement(w,{onClick:_},"+"),r.a.createElement("span",{className:h.a.count},"Names amount:",r.a.createElement("br",null),g))};function T(){alert("hello")}var J=function(){return r.a.createElement("div",{className:i.a.PreJunior},r.a.createElement("h1",null,"The result of my homework \u2116 1-4"),r.a.createElement(v,null),r.a.createElement(p,null),r.a.createElement(M,null),r.a.createElement(C,{onEnter:T}),r.a.createElement(w,null,"Hi"))},D=a(27),B=a.n(D),H=a(28),I=a.n(H);var P=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),o=a[0],l=a[1],c=function(){l(!1)};return r.a.createElement("div",null,o?r.a.createElement(C,{onEnter:c,onBlur:c,onChange:e.onChange,autoFocus:!0}):r.a.createElement("span",{className:I.a.EditableSpan,onDoubleClick:function(){l(!0)}},e.title))},R=a(29),A=a.n(R);var F=function(e){return r.a.createElement("select",{className:A.a.Select,onChange:function(e){console.log(e.currentTarget.value)}},e.optionsArray.map((function(e,t){return r.a.createElement("option",{key:t,value:"sas"},e)})))};var W=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),o=a[0],l=a[1],c=function(e){alert("want to change")};return r.a.createElement(r.a.Fragment,null,e.radioGroup.map((function(e){return o?r.a.createElement("input",{key:e.id,type:"text",value:e.title,onBlur:function(){l(!1)},autoFocus:!0,onChange:c}):r.a.createElement("div",{key:e.id,onDoubleClick:function(){l(!0)}},r.a.createElement("input",{type:"radio",name:e.groupName}),r.a.createElement("label",null,e.title))})))},L=function(e,t){switch(t.type){case"SORT":var a=Object(b.a)(e);return"up"===t.sortType?a.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):"down"===t.sortType?a.sort((function(e,t){return e.name<t.name?1:t.name<e.name?-1:0})):a;case"CHECK":return Object(b.a)(e).filter((function(e){return e.age>=t.minAge}));default:throw new Error("Can't find this type")}},K=function(e){return{type:"SORT",sortType:e}};var G=function(e){var t=Object(n.useState)([{id:"1",name:"Dmitry",age:22},{id:"2",name:"Alex",age:32},{id:"3",name:"Max",age:12}]),a=Object(u.a)(t,2),o=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",{key:e.id},"Name: ",e.name," age: ",e.age)}))),r.a.createElement(w,{onClick:function(){var e=K("up"),t=L(o,e);l(t)}},"Sort names UP"),r.a.createElement(w,{onClick:function(){var e=K("down"),t=L(o,e);l(t)}},"Sort names Down"),r.a.createElement(w,{onClick:function(){var e=prompt("Enter min age","0");if(e){var t={type:"CHECK",minAge:+e},a=L(o,t);l(a)}return o}},"Sort by age"))};var U=function(){var e=Object(n.useState)([{title:"Minsk",id:1,groupName:"cities"},{title:"Moscow",id:2,groupName:"cities"},{title:"Kiev",id:3,groupName:"cities"}]),t=Object(u.a)(e,2),a=t[0];return t[1],r.a.createElement("div",{className:B.a.Junior},r.a.createElement("h1",null,"Junior"),r.a.createElement("hr",null),r.a.createElement(P,{title:"Hello",onChange:function(){alert("Wow")}}),r.a.createElement(w,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("test",{x:"Hello!",y:"This is task number: ",z:6})}},"Set title"),r.a.createElement(w,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("test",{x:"",y:"",z:0});alert(Object.values(e).join(" ")),console.log(e)}},"Get title"),r.a.createElement("hr",null),r.a.createElement(F,{optionsArray:["Minsk","Moscow","Kiev"]})," ",r.a.createElement("br",null),r.a.createElement(W,{radioGroup:a}),r.a.createElement("hr",null),r.a.createElement(G,null))},V=a(30),z=a.n(V);var Q=function(){return r.a.createElement("div",{className:z.a.JuniorPlus},r.a.createElement("h1",null,"JuniorPlus"))},Z=a(1),q=a(21),X=a(31),Y=a.n(X),$=a(12),ee=a.n($),te=a(32),ae=a.n(te);var ne=function(e){return r.a.createElement("div",{className:ae.a.Backdrop,onClick:e.onClick})},re=a(8),oe=[{to:"/",label:"Home",exact:!0},{to:"/PreJunior",label:"PreJunior",exact:!1},{to:"/Junior",label:"Junior",exact:!1},{to:"/JuniorPlus",label:"JuniorPlus",exact:!1}];var le=function(e){var t=function(){e.onClose()},a=[ee.a.Drawer];return e.isOpen||a.push(ee.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:a.join(" ")},r.a.createElement("ul",null,oe.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(re.b,{to:e.to,exact:e.exact,activeClassName:ee.a.active,onClick:t},e.label))})))),e.isOpen?r.a.createElement(ne,{onClick:e.onClose}):null)},ce=a(20),ie=a.n(ce);var ue=function(e){var t=[ie.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(ie.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})};var se=function(e){var t=Object.assign({},e),a=Object(n.useState)({menu:!1}),o=Object(u.a)(a,2),l=o[0],c=o[1];return r.a.createElement("div",{className:Y.a.Layout},r.a.createElement(le,{isOpen:l.menu,onClose:function(){l.menu=!1,c(Object(q.a)({},l))}}),r.a.createElement(ue,{onToggle:function(){l.menu=!l.menu,c(Object(q.a)({},l))},isOpen:l.menu}),r.a.createElement("main",t,t.children))},me=a(34),fe=a.n(me),pe=a(13),Ee=a.n(pe),ge=function(){return r.a.createElement("div",{className:Ee.a.MyFullName},r.a.createElement(_e,{text:"Demid"}),r.a.createElement(_e,{text:"Dmitry"}),r.a.createElement(_e,{text:"Viktorovich"}))},_e=function(e){return r.a.createElement("div",{className:Ee.a.text},e.text)},de=function(){return r.a.createElement("div",{className:Ee.a.body},r.a.createElement("img",{src:"https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png",alt:"avatar"}),r.a.createElement(ge,null))};var ve=function(){return r.a.createElement("div",{className:fe.a.HomeScreens},r.a.createElement(de,null))};var be=function(){return r.a.createElement(se,null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{path:"/PreJunior",component:J}),r.a.createElement(Z.a,{path:"/Junior",component:U}),r.a.createElement(Z.a,{path:"/JuniorPlus",component:Q}),r.a.createElement(Z.a,{path:"/",component:ve})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=r.a.createElement(re.a,null,r.a.createElement(be,null));l.a.render(r.a.createElement(r.a.StrictMode,null,ye),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[36,1,2]]]);
//# sourceMappingURL=main.4e8646e8.chunk.js.map