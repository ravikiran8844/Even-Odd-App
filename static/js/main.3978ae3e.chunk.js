(this["webpackJsonpeven-odd-app"]=this["webpackJsonpeven-odd-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(3),a=n.n(r),o=n(4),u=n(5),i=n(7),d=n(6),j=(n(12),n(0)),b=function(t){Object(i.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={counter:0,status:"Even"},t.getNumber=function(){var e=t.state,n=e.counter,c=(e.status,Math.ceil(100*Math.random()));t.setState((function(t){return{counter:t.counter+c}})),(n+c)%2===0?(console.log(n),t.setState({status:"Even"})):t.setState({status:"Odd"})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.counter,n=t.status;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("h1",{children:["Count ",e]}),Object(j.jsxs)("p",{className:"status",children:["Count is ",n]}),Object(j.jsx)("button",{onClick:this.getNumber,children:"Increment"}),Object(j.jsx)("p",{children:"*Increase By Random Number Between 0 to 100"})]})}}]),n}(s.a.Component),l=b,h=(n(14),function(){return Object(j.jsx)(l,{})});a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3978ae3e.chunk.js.map