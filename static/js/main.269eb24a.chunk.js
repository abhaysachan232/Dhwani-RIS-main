(this["webpackJsonptask-api"]=this["webpackJsonptask-api"]||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},269:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),i=n(30),s=n.n(i),r=(n(118),n(119),n(21)),j=n(44),l=n.n(j),o=n(15),b=n(105),d=n(4),h=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(b.a,{date:Date.now()+8e3,renderer:function(e){var t=e.seconds;return Object(d.jsx)("span",{children:t})}})})},u=function(){var e,t=Object(c.useState)([]),n=Object(r.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){e=setTimeout((function(){l.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){i(e.data)}),(function(e){alert("Error")}))}),8e3)}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"API Users"}),Object(d.jsx)(o.b,{to:"/Page2",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){clearTimeout(e)},children:"Go To Page - 2"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col",children:a.length>0?Object(d.jsx)("table",{className:"table mt-3 table-hover",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"City"}),Object(d.jsx)("th",{children:"Email"})]}),a.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.address.city}),Object(d.jsx)("td",{children:e.email})]},t)}))]})}):Object(d.jsxs)("h2",{children:["Data will be available in ",Object(d.jsx)(h,{})," sec"]})})})]})},O=n(6),x=n(114),f=n(113),m=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x.c,{children:Object(d.jsx)(f.a,{data:e.data})})})},p=function(){var e,t=Object(c.useState)({}),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object.keys(a);return Object(c.useEffect)((function(){e=setTimeout((function(){!function(){var e=[],t=[];l.a.get("https://api.rootnet.in/covid19-in/hospitals/beds").then((function(n){var c,a=Object(O.a)(n.data.data.regional);try{for(a.s();!(c=a.n()).done;){var s=c.value;e.push(s.state),t.push(parseInt(s.ruralBeds))}}catch(r){a.e(r)}finally{a.f()}i({labels:e,datasets:[{label:"Pie Chart for Covid Bed in Rural India with all States",data:t,backgroundColor:["blue","green","yellow","pink","orange"]}]})})).catch((function(e){console.log(e)}))}()}),8e3)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"This is Page 2"}),Object(d.jsx)(o.b,{Link:!0,to:"/Dhwani-RIS-main",children:Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){clearTimeout(e)},children:"Go To Page 1"})}),Object(d.jsx)("div",{className:"container",children:s.length>0?Object(d.jsx)(m,{data:a,Style:{width:"500px",Height:"700px"}}):Object(d.jsxs)("h2",{children:["Data will be available in ",Object(d.jsx)(h,{})," sec"]})})]})},g=n(8);var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)("h1",{children:"Abhay Sachan's Task"}),Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"/Dhwani-RIS-main",component:u}),Object(d.jsx)(g.a,{exact:!0,path:"/Page2",component:p})]})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,273)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),y()}},[[269,1,2]]]);
//# sourceMappingURL=main.269eb24a.chunk.js.map