(this.webpackJsonptest_task=this.webpackJsonptest_task||[]).push([[0],{235:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(37),c=n.n(a),s=n(27),i=n(22),o=n(9),u=n.n(o),p=n(21),l=n(34),j=n(6),h=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Nav",children:[Object(j.jsx)("h1",{children:"Home"}),sessionStorage.getItem("token")?Object(j.jsxs)("div",{className:"User__block",children:[Object(j.jsx)("span",{children:e.name}),Object(j.jsx)("button",{className:"LogOut",onClick:function(){e.fetchPosts(),e.history.push("/login"),sessionStorage.clear()},children:"Log Out"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(s.b,{className:"Link",to:"/login",children:"Login"}),Object(j.jsx)(s.b,{className:"Link",to:"/reg",children:"Reg"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Posts:"}),sessionStorage.getItem("token")?Object(j.jsx)("div",{children:Object(j.jsx)(s.b,{className:"Link",to:"/add",children:"Add a post"})}):console.log()]})]})},d=n(241),b=function(e){function t(e,t,n){if(t===n)return Object(j.jsx)("div",{children:Object(j.jsx)(s.b,{to:"/edit/"+e,children:"Edit"})})}return Object(j.jsx)(d.b,{bordered:!0,dataSource:e.posts,renderItem:function(n){return Object(j.jsxs)(d.b.Item,{children:[n.text,t(n.id,n.user_id,e.id)]})}})},f=n(126),O=n(127),x=n(64),m=n.n(x),v=function(){function e(){Object(f.a)(this,e)}return Object(O.a)(e,null,[{key:"about",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://test.flcd.ru/api/user/self",{method:"GET",headers:{accept:"*/*",Authorization:"Bearer "+t,"X-CSRF-TOKEN":""}});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://test.flcd.ru/api/post");case 2:return t=e.sent,e.abrupt("return",t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getOne",value:function(){var e=Object(p.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("http://test.flcd.ru/api/post/"+t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"Edit",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://test.flcd.ru/api/post/"+t,{method:"PATCH",headers:{accept:"*/*",Authorization:"Bearer "+r,"Content-Type":"application/json","X-CSRF-TOKEN":""},body:JSON.stringify({text:n})});case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"Add",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://test.flcd.ru/api/post/",{method:"POST",headers:{accept:"*/*",Authorization:"Bearer "+n,"Content-Type":"application/json","X-CSRF-TOKEN":""},body:JSON.stringify({text:t})});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"Del",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://test.flcd.ru/api/post/"+t,{method:"DELETE",headers:{accept:"*/*",Authorization:"Bearer "+n,"X-CSRF-TOKEN":""}});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"Login",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("http://test.flcd.ru/api/token",{email:t,password:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"Reg",value:function(){var e=Object(p.a)(u.a.mark((function e(t,n,r,a){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("http://test.flcd.ru/api/register",{name:t,email:n,password:r,password_confirmation:a});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n,r,a){return e.apply(this,arguments)}}()}]),e}(),y=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(l.a)(s,2),o=i[0],d=i[1];function f(){return O.apply(this,arguments)}function O(){return O=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function x(){return(x=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.about(sessionStorage.getItem("token"));case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){f(),function(){x.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{name:o.name,history:e.history,fetchPosts:f}),Object(j.jsx)(b,{posts:a,id:o.id})]})},g=n(23),w=n(240),k=n(242),C=n(131),S=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1];function i(){return(i=Object(p.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.Add(a.text,sessionStorage.getItem("token"));case 2:e.history.push("/");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Create a post"}),Object(j.jsxs)(w.a,{children:[Object(j.jsx)(k.a,{placeholder:"Post text...",value:a.text,onChange:function(e){return c(Object(g.a)(Object(g.a)({},a),{},{text:e.target.value}))}}),Object(j.jsx)(C.a,{type:"primary",htmlType:"submit",onClick:function(){return i.apply(this,arguments)},children:"Post"}),Object(j.jsx)(s.b,{to:"/",children:"Cancel"})]})]})},E=function(e){var t=Object(r.useState)([]),n=Object(l.a)(t,2),a=n[0],c=n[1];function i(){return i=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href.match(/\d*$/)[0],e.next=3,v.getOne(t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function o(){return(o=Object(p.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.location.href.match(/\d*$/)[0],t.next=3,v.Edit(n,a.text,sessionStorage.getItem("token"));case 3:e.history.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=Object(p.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=window.location.href.match(/\d*$/)[0],t.next=3,v.Del(n,sessionStorage.getItem("token"));case 3:e.history.push("/");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Edit a post"}),Object(j.jsxs)(w.a,{children:[Object(j.jsx)(k.a,{placeholder:"Post text...",value:a.text,onChange:function(e){return c(Object(g.a)(Object(g.a)({},a),{},{text:e.target.value}))}}),Object(j.jsx)(C.a,{type:"primary",htmlType:"submit",onClick:function(){return o.apply(this,arguments)},children:"Post"}),Object(j.jsx)(C.a,{onClick:function(){return h.apply(this,arguments)},children:"Delete"}),Object(j.jsx)(s.b,{to:"/",children:"Cancel"})]})]})},N=function(e){var t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)([{name:"",email:"",pswd:"",pswd_cf:""}]),o=Object(l.a)(i,2),h=o[0],d=o[1];function b(){return(b=Object(p.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.Reg(h.name,h.email,h.pswd,h.pswd_cf);case 2:(n=t.sent)?(sessionStorage.setItem("token",n.token),sessionStorage.setItem("email",h.email),e.history.push("/")):c("Error");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Registration"}),Object(j.jsx)("h2",{className:"Error",children:a}),Object(j.jsxs)(w.a,{children:[Object(j.jsx)(k.a,{placeholder:"Name",type:"text",value:h.name,onChange:function(e){return d(Object(g.a)(Object(g.a)({},h),{},{name:e.target.value}))}}),Object(j.jsx)(k.a,{placeholder:"Email",type:"text",value:h.email,onChange:function(e){return d(Object(g.a)(Object(g.a)({},h),{},{email:e.target.value}))}}),Object(j.jsx)(k.a,{placeholder:"Password",type:"password",value:h.pswd,onChange:function(e){return d(Object(g.a)(Object(g.a)({},h),{},{pswd:e.target.value}))}}),Object(j.jsx)(k.a,{placeholder:"Password again",type:"password",value:h.pswd_cf,onChange:function(e){return d(Object(g.a)(Object(g.a)({},h),{},{pswd_cf:e.target.value}))}}),Object(j.jsx)(C.a,{type:"primary",htmlType:"submit",onClick:function(){return b.apply(this,arguments)},children:"Register"}),Object(j.jsx)(s.b,{to:"/",children:"Cancel"})]})]})},T=function(e){var t=Object(r.useState)([{email:"",pswd:""}]),n=Object(l.a)(t,2),a=n[0],c=n[1],i=function(){var t=Object(p.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,v.Login(a.email,a.pswd);case 3:r=t.sent,sessionStorage.setItem("token",r.token),sessionStorage.setItem("email",a.email),e.history.push("/");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)(w.a,{children:[Object(j.jsx)(k.a,{placeholder:"Email",type:"text",value:a.email,onChange:function(e){return c(Object(g.a)(Object(g.a)({},a),{},{email:e.target.value}))}}),Object(j.jsx)(k.a,{placeholder:"Password",type:"password",value:a.pswd,onChange:function(e){return c(Object(g.a)(Object(g.a)({},a),{},{pswd:e.target.value}))}}),Object(j.jsx)(C.a,{type:"primary",htmlType:"submit",onClick:i,children:"Login"}),Object(j.jsx)(s.b,{to:"/",children:"Cancel"})]})]})};n(235);var I=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/add",component:S}),Object(j.jsx)(i.a,{exact:!0,path:"/edit/:id",component:E}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(i.a,{exact:!0,path:"/login",component:T}),Object(j.jsx)(i.a,{exact:!0,path:"/reg",component:N})]})]})})};n(236);c.a.render(Object(j.jsx)(I,{}),document.getElementById("root"))}},[[237,1,2]]]);
//# sourceMappingURL=main.cff3c802.chunk.js.map