(this["webpackJsonpcurrency-exchange-react"]=this["webpackJsonpcurrency-exchange-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),l=(n(9),n(2)),o=[{short:"PLN",name:"z\u0142oty",rate:{PLN:1,USD:.25,EUR:.22}},{short:"EUR",name:"euro",rate:{EUR:1,PLN:4.61,USD:1.16}},{short:"USD",name:"dolar ameryka\u0144ski",rate:{USD:1,PLN:3.98,EUR:.86}}],u=n(0),i=function(e){var t=e.result;return Object(u.jsx)("p",{children:!!t&&Object(u.jsxs)(u.Fragment,{children:[t.amount.toFixed(2),"\xa0",t.fromCurrency,"\xa0="," ",Object(u.jsxs)("strong",{children:[t.resultAmount.toFixed(2),"\xa0",t.toCurrency]})]})})},j=(n(11),function(e){var t=e.calculateResult,n=e.result,c=Object(r.useState)(o[0].short),a=Object(l.a)(c,2),s=a[0],j=a[1],b=Object(r.useState)(o[1].short),m=Object(l.a)(b,2),d=m[0],f=m[1],h=Object(r.useState)(1),O=Object(l.a)(h,2),x=O[0],v=O[1];return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(s,d,x)},children:[Object(u.jsxs)("fieldset",{className:"form__fieldset",children:[Object(u.jsx)("legend",{className:"form__legend",children:"Kalkulator walut"}),Object(u.jsx)("p",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"form__labelText",children:"Przelicz z:"}),Object(u.jsx)("select",{className:"form__field form__field--select",value:s,onChange:function(e){var t=e.target;return j(t.value)},children:o.map((function(e){return Object(u.jsxs)("option",{value:e.short,children:[e.name," (",e.short,")"]},e.short)}))})]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"form__labelText",children:"Przelicz na:"}),Object(u.jsx)("select",{className:"form__field form__field--select",value:d,onChange:function(e){var t=e.target;return f(t.value)},children:o.map((function(e){return Object(u.jsxs)("option",{value:e.short,children:[e.name," (",e.short,")"]},e.short)}))})]})}),Object(u.jsx)("p",{children:Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{className:"form__labelText",children:"Kwota:"}),Object(u.jsx)("input",{className:"form__field",value:x,onChange:function(e){var t=e.target;return v(t.value)},type:"number",min:"0",step:"0.01",required:!0})]})})]}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"form__button",children:"Oblicz"})}),Object(u.jsx)(i,{result:n}),Object(u.jsx)("p",{className:"form__info",children:"Kursy na dzie\u0144 02/11/21"})]})}),b=(n(12),function(e){var t=e.children;return Object(u.jsx)("div",{className:"container",children:t})}),m=(n(13),function(){var e,t=Object(r.useState)(new Date),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(u.jsxs)("p",{className:"clock",children:["Dzisiaj jest ",(e=c,e.toLocaleDateString(void 0,{month:"long",weekday:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}))]})});var d=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(b,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(j,{calculateResult:function(e,t,n){var r=o.find((function(t){return t.short===e})).rate[t];c({fromCurrency:e,toCurrency:t,amount:+n,resultAmount:r*n})},result:n})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.f8f88bd7.chunk.js.map