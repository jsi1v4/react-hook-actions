(this["webpackJsonpreact-hook-actions"]=this["webpackJsonpreact-hook-actions"]||[]).push([[0],{30:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(0),o=t.n(c),i=t(21),a=t.n(i),l=(t(30),t(5)),s=t(6),d=t(7),u=t(3);t(9);function j(e,n){return[new Promise((function(t,r){!n&&e?setTimeout((function(){return t({status:200,data:e,statusText:"",headers:void 0,config:{}})}),2e3):setTimeout((function(){return r({response:{data:n||"Empty error message!"}})}),2e3)})),void 0]}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{loading:e,error:n,pristine:t,valid:r}};var b=[{name:"Peter",level:25},{name:"Tony",level:50},{name:"Stephen",level:99}];function f(){var e=Object(l.a)(["\n  text-align: center;\n"]);return f=function(){return e},e}function v(){var e=Object(l.a)(["\n  & > * {\n    margin: 0 .5rem .5rem;\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n"]);return O=function(){return e},e}var x=s.a.div(O()),g=s.a.div(v()),m=s.a.h1(f()),p=function(e){return e.test?e.children:Object(r.jsx)(r.Fragment,{})},y=function(){var e,n=function(e){var n,t=Object(c.useState)(e),r=Object(d.a)(t,2),o=r[0],i=r[1],a=Object(c.useState)(h()),l=Object(d.a)(a,2),s=l[0],j=l[1];return Object(u.a)(Object(u.a)({payload:o},s),{},{exec:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){},c=arguments.length>3?arguments[3]:void 0,o=Object(d.a)(e,2),a=o[0],l=o[1];n=l,j(h(!0,"")),(null===c||void 0===c?void 0:c.clearPayloadBeforeExec)&&i(void 0),a.then((function(e){t(e.data),j(h(!1,"",!1,!0)),i(e.data)})).catch((function(e){var n=e.response;r(n),j(h(!1,(null===n||void 0===n?void 0:n.data)||(null===c||void 0===c?void 0:c.defaultErrorMsg),!1))}))},reset:function(){j(h()),i(void 0)},cancel:function(){var e;null===(e=n)||void 0===e||e.cancel()}})}();function t(){n.exec(j(b.slice(0,Math.floor(Math.random()*b.length))),(function(e){return console.log("success",e)}),(function(e){return console.log("error",e)}))}function o(){n.exec(j(void 0,"You shall not pass..."),(function(e){return console.log("success",e)}),(function(e){return console.log("error",e)}),{clearPayloadBeforeExec:!0})}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:"React Hook Actions"}),Object(r.jsxs)(x,{children:[Object(r.jsxs)(g,{children:[Object(r.jsx)("button",{onClick:function(){return t()},children:"Heroes"}),Object(r.jsx)("button",{onClick:function(){return o()},children:"Villains"})]}),Object(r.jsx)(p,{test:n.loading,children:Object(r.jsx)("span",{children:"Loading..."})}),Object(r.jsx)(p,{test:!!n.error,children:Object(r.jsxs)("span",{children:["Error! ",n.error]})}),Object(r.jsx)(p,{test:n.pristine,children:Object(r.jsx)("h4",{children:"Click to show table of heroes."})}),Object(r.jsx)(p,{test:!!n.payload,children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Level"})]})}),Object(r.jsx)("tbody",{children:null===(e=n.payload)||void 0===e?void 0:e.map((function(e,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.level})]},n)}))})]})})]})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root")),k()}},[[48,1,2]]]);
//# sourceMappingURL=main.475c37dd.chunk.js.map