(this["webpackJsonpstudent-calculator-web"]=this["webpackJsonpstudent-calculator-web"]||[]).push([[0],{24:function(e,n,t){},32:function(e,n){},33:function(e,n,t){"use strict";t.r(n);var s=t(1),r=t(2),o=t.n(r),c=t(16),i=t.n(c),u=(t(24),t(5)),j=t(35),l=function(e){return Object(s.jsx)("div",{className:"result-screen",children:e.children})},a=function(e){return Object(s.jsx)("div",{className:"computation-screen selected",children:e.children})},d=function(e){return Object(s.jsx)("div",{className:"approximation-screen",children:e.children})},b=function(e){return Object(s.jsxs)("section",{className:"screen",children:[Object(s.jsx)(a,{children:e.equation}),Object(s.jsx)(l,{children:e.result}),Object(s.jsx)(d,{children:e.approximation})]})},h=function(e){return Object(s.jsx)("div",{className:"keypad__row",children:e.children})},O=function(e){var n=["btn"];return e&&e.type&&n.push("btn--"+e.type),Object(s.jsx)("button",{className:n.join(" "),onClick:e.onButtonPress,children:e.children})},x=function(e){return Object(s.jsxs)("section",{className:"keypad",children:[Object(s.jsxs)(h,{children:[Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"C"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"\u2190"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"%"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"/"})]}),Object(s.jsxs)(h,{children:[Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"7"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"8"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"9"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"\xd7"})]}),Object(s.jsxs)(h,{children:[Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"4"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"5"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"6"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"-"})]}),Object(s.jsxs)(h,{children:[Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"1"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"2"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"3"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"+"})]}),Object(s.jsxs)(h,{children:[Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"0"}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,children:"."}),Object(s.jsx)(O,{onButtonPress:e.onButtonPress,type:"large",children:"Enter"})]})]})};var P=function(){var e=Object(r.useState)(""),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(r.useState)("0"),i=Object(u.a)(c,2),l=i[0],a=i[1],d=Object(r.useState)(""),h=Object(u.a)(d,2),O=h[0],P=h[1],B=Object(r.useState)("EnteringEquation"),f=Object(u.a)(B,2),p=f[0],g=f[1],m=function(e){if("EnteringEquation"===p)o(e);else if("EnteringApproximation"===p){var n=e[e.length-1];(0===e.length||n>="0"&&n<="9"||"."===n)&&P(e)}else"Finished"===p&&o(e)},v=function(){return"EnteringEquation"===p?t:"EnteringApproximation"===p?O:"Finished"===p?t:void 0},E=function(e){m(v()+e)};return Object(s.jsxs)("main",{className:"calculator",children:[Object(s.jsx)(b,{equation:t,result:l,approximation:O}),Object(s.jsx)(x,{onButtonPress:function(e){var n=e.target.innerHTML;if("C"===n)m("");else if(n>="0"&&n<="9"||"."===n)E(n);else if(-1!==["+","-","*","\xd7","/","%"].indexOf(n))E(" "+n+" ");else if("Enter"===n){if(console.log("mode:",p),"EnteringEquation"===p)g("EnteringApproximation"),P("(Enter an approximation)");else if("EnteringApproximation"===p){var s;try{s=Object(j.a)(t.replace("\xd7","*"))}catch(r){alert("Invalid Mathematical Equation")}(function(){console.log("close enough?");var e=Object(j.a)(t.replace("\xd7","*")),n=Math.abs(parseFloat(O)-e);if(console.log("diff:",n),n<=1)return!0;var s=Math.abs(n/e);return console.log("diffProportion:",s),s<.15})()&&(a(s),g("Finished"))}}else m(v().substr(0,t.length-1))}})]})},B=function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(P,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),s(e),r(e),o(e),c(e)}))};i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.1bbcf0c4.chunk.js.map