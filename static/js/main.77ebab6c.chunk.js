(this["webpackJsonptip-calculator"]=this["webpackJsonptip-calculator"]||[]).push([[0],[,,,,,,,function(t,e,a){t.exports={input:"InputPeople_input__1HVuD",warning:"InputPeople_warning__2BkiS"}},function(t,e,a){t.exports={button:"TipButton_button__2ro10","tip-active":"TipButton_tip-active__18fVP"}},,function(t,e,a){t.exports={input:"InputBill_input__1HVGA"}},function(t,e,a){t.exports={input:"InputTip_input__2IC0U"}},,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),c=a(9),i=a.n(c),l=a(5),r=(a(17),a.p+"static/media/logo.3cc0528b.svg"),u=a(2),o=a(7),j=a.n(o),p=a(4),b=a.n(p),v=a(0);function x(t){var e,a=t.state,s=t.setState,n=t.maxValue,c=b()((e={},Object(u.a)(e,j.a.input,!0),Object(u.a)(e,j.a.warning,0===a),e));return Object(v.jsx)("input",{type:"text",className:c,onChange:function(t){var e=t.nativeEvent.data;if(e&&/\d/.test(e)){var c=parseInt(a.toString()+e,10);c<=n&&s(c)}},onKeyDown:function(t){if("Backspace"===t.key&&a>0){var e=a.toString();s(parseInt(e.slice(0,e.length-1)||"0",10))}},value:a})}var d=a(3),O=a(12),m=a(10),h=a.n(m),f=["state","setState","maxValue"];function S(t){var e=t.state,a=t.setState,s=t.maxValue,n=Object(O.a)(t,f);return Object(v.jsx)("input",Object(d.a)({type:"text",className:h.a.input,onChange:function(t){var n=t.nativeEvent.data;if(n&&/\d/.test(n)){var c=(10*e).toFixed(2);c=c.slice(0,c.length-1)+n,parseFloat(c)<=s&&a(parseFloat(c))}},onKeyDown:function(t){if("Backspace"===t.key&&e>0){var s=e.toString();s=s.slice(0,s.length-3)+s[s.length-2],a(parseFloat(s)/100)}},value:e.toFixed(2)},n))}var g=a(8),_=a.n(g);function N(t){var e,a=t.text,s=t.value,n=t.state,c=t.setState;var i=b()((e={},Object(u.a)(e,_.a.button,!0),Object(u.a)(e,_.a["tip-active"],!n.custom&&n.value===s),e));return Object(v.jsx)("button",{className:i,onClick:function(t){c({value:s,custom:!1})},children:a})}var y=a(11),k=a.n(y);function I(t){var e=t.state,a=t.setState,s=t.maxValue;return Object(v.jsx)("input",{type:"text",placeholder:"Custom",className:k.a.input,value:e.custom?e.value+"%":"",onChange:function(t){var n=t.nativeEvent.data;if(n&&/\d/.test(n)){var c=parseInt(n,10);e.custom&&(c=parseInt(e.value.toString()+n,10)),c<=s&&a({value:c,custom:!0})}},onKeyDown:function(t){if("Backspace"===t.key&&e.value>0){var s=e.value.toString();a(Object(d.a)(Object(d.a)({},e),{},{value:parseInt(s.slice(0,s.length-1)||"0",10)}))}}})}function V(t,e,a){return 0===a?0:t*e/100/a}function B(t,e,a){if(0===a)return 0;var s=t+t*(e/100);return s/=a}function w(){var t=Object(s.useState)(0),e=Object(l.a)(t,2),a=e[0],n=e[1],c=Object(s.useState)(1),i=Object(l.a)(c,2),u=i[0],o=i[1],j=Object(s.useState)({value:5,custom:!1}),p=Object(l.a)(j,2),b=p[0],d=p[1];return Object(s.useEffect)((function(){document.documentElement.style.setProperty("--errorMessageDisplay",u?"none":"block")}),[u]),Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("picture",{children:Object(v.jsx)("img",{src:r,alt:"Logo"})}),Object(v.jsxs)("main",{children:[Object(v.jsxs)("section",{className:"controls",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{className:"topZero",children:"Bill"}),Object(v.jsx)(S,{state:a,setState:n,maxValue:1e6,title:"Max value: 1.000.000"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Select Tip %"}),Object(v.jsxs)("div",{className:"tips",children:[Object(v.jsx)(N,{text:"5%",value:5,state:b,setState:d}),Object(v.jsx)(N,{text:"10%",value:10,state:b,setState:d}),Object(v.jsx)(N,{text:"15%",value:15,state:b,setState:d}),Object(v.jsx)(N,{text:"25%",value:25,state:b,setState:d}),Object(v.jsx)(N,{text:"50%",value:50,state:b,setState:d}),Object(v.jsx)(I,{state:b,setState:d,maxValue:100})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"labelPeople",children:[Object(v.jsx)("p",{children:"Number of People"}),Object(v.jsx)("p",{className:"errorMessage",children:"Can't be zero"})]}),Object(v.jsx)(x,{state:u,setState:o,maxValue:1e3,title:"Max value: 1.000"})]})]}),Object(v.jsxs)("section",{className:"result",children:[Object(v.jsxs)("div",{className:"tip-label",children:["Tip Amount",Object(v.jsx)("span",{children:"/ person"})]}),Object(v.jsxs)("div",{className:"tip-result",id:"amount-person",children:["$",V(a,b.value,u).toFixed(2)]}),Object(v.jsxs)("div",{className:"total-label",children:["Total",Object(v.jsx)("span",{children:"/ person"})]}),Object(v.jsxs)("div",{className:"total-result",id:"total-person",children:["$",B(a,b.value,u).toFixed(2)]}),Object(v.jsx)("button",{className:"button-reset",onClick:function(){n(0),o(1),d({value:5,custom:!1})},children:"RESET"})]})]})]})}i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.77ebab6c.chunk.js.map