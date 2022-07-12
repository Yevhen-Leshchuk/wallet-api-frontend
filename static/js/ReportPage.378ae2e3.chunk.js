"use strict";(self.webpackChunkwallet_api_frontend=self.webpackChunkwallet_api_frontend||[]).push([[370],{2652:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(885),r=n(3094),s=n(9867),i=n(9220),o="Balance_balanceBox__1cVha",c="Balance_balanceForm__7SyeC",l="Balance_balanceTitle__V+xg3",x="Balance_balanceFormInput__Kl4Qe",d="Balance_balanceFormBtn__gY8X9",u=n(2834),p=function(e){var t=e.inputStyle,n=e.btnStyle,p=e.balanceBoxStyle,_=(0,r.I0)(),m=(0,s.useState)(null),h=(0,a.Z)(m,2),v=h[0],j=h[1],N=(0,r.v9)(i.um.getBalance),f=(0,s.useRef)();(0,s.useEffect)((function(){_(i.r5.getUser()),j(f.current=parseFloat(N&&"number"===typeof N?N:0).toFixed(2)+" \u20ac")}),[_,N,v]);return(0,u.jsxs)("div",{className:o,style:p,children:[(0,u.jsx)("h2",{className:l,children:"\u0411\u0430\u043b\u0430\u043d\u0441:"}),(0,u.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var t=e.target.balance.value.split(" ")[0];_(i.r5.updateUserBalance(t))},children:[(0,u.jsx)("input",{className:x,style:t,name:"balance",type:"text",placeholder:"00.00 \u20ac",autoComplete:"off",defaultValue:v}),(0,u.jsx)("button",{className:d,style:n,type:"submit",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})}},9861:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(6175),r=n(7442),s=n(5125),i="GoBackLink_goBackLinkBox__z4Li8",o="GoBackLink_goBackLink__jwQ3e",c="GoBackLink_goBackLinkIcon__FLkMM",l="GoBackLink_goBackText__ViifB",x=n(2834),d=function(e){var t=e.redirectTo,n=void 0===t?"/":t,d=e.alt,u=void 0===d?"mobilePage":d,p=(0,r.Z)("(min-width: 768px)");return(0,x.jsx)("div",{className:i,children:(0,x.jsxs)(a.rU,{to:n,alt:u,className:o,children:[(0,x.jsx)("svg",{className:c,children:(0,x.jsx)("use",{xlinkHref:"".concat(s.Z,"#backspace")})}),p&&(0,x.jsx)("p",{className:l,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})})}},5154:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(6175),r=n(333),s=n(5125),i={"visually-hidden":"ReportNavTransaction_visually-hidden__IXD9c",container:"ReportNavTransaction_container__5KTVu",reportNavTransactionBox:"ReportNavTransaction_reportNavTransactionBox__e+8id",reportNavTransactionLink:"ReportNavTransaction_reportNavTransactionLink__0qK1-",reportNavIcon:"ReportNavTransaction_reportNavIcon__-+Q+1",reportNavTransactionTitle:"ReportNavTransaction_reportNavTransactionTitle__WS+ho"},o=n(2834),c=function(){var e=(0,r.TH)().pathname;return(0,o.jsxs)("div",{className:i.reportNavTransactionBox,children:[(0,o.jsx)(a.rU,{to:"/report/expenses",alt:"expensesPage",className:i.reportNavTransactionLink,children:(0,o.jsx)("svg",{className:i.reportNavIcon,children:(0,o.jsx)("use",{xlinkHref:"".concat(s.Z,"#arrow-left")})})}),"/report/expenses"===e?(0,o.jsx)("p",{className:i.reportNavTransactionTitle,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"}):(0,o.jsx)("p",{className:i.reportNavTransactionTitle,children:"\u0414\u043e\u0445\u043e\u0434\u044b"}),(0,o.jsx)(a.rU,{to:"/report/incomes",alt:"incomesPage",className:i.reportNavTransactionLinkIncomes,children:(0,o.jsx)("svg",{className:i.reportNavIcon,width:"8",height:"15",children:(0,o.jsx)("use",{xlinkHref:"".concat(s.Z,"#arrow-right")})})})]})}},5728:function(e,t,n){n.d(t,{Z:function(){return o}});var a="Tooltip_tooltipBox__hfzWn",r="Tooltip_tooltipText__MkdeG",s="Tooltip_tooltipTextComment__8Wztc",i=n(2834),o=function(e){var t=e.style;return(0,i.jsxs)("div",{id:"overlay",className:a,style:t,children:[(0,i.jsx)("p",{className:r,children:"\u041f\u0440\u0438\u0432\u0435\u0442! \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043d\u0435\u0441\u0438 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u0441\u0432\u043e\u0435\u0433\u043e \u0441\u0447\u0435\u0442\u0430!"}),(0,i.jsx)("p",{className:s,children:"\u0422\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u044c \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438 \u043f\u043e\u043a\u0430 \u0438\u0445 y \u0442\u0435\u0431\u044f \u043d\u0435\u0442 :)"})]})}},2503:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(9867),r=n(3094),s=n(333),i=n(9861),o=n(885),c=n(2916),l=n(5125),x=n(582),d=n.n(x),u="CurrentPeriod_currentPeriodBox__HIwEh",p="CurrentPeriod_currentPeriodTitle__UJsSX",_="CurrentPeriod_dateBox__dJB+4",m="CurrentPeriod_dateBtn__UVe9g",h="CurrentPeriod_dateIcon__lnh7k",v="CurrentPeriod_dateText__hjgEv",j=n(2834),N=function(e){var t=e.style,n=(0,r.I0)(),s=(0,a.useState)(new Date),i=(0,o.Z)(s,2),x=i[0],N=i[1],f=d()(x).format("YYYY-MM");(0,a.useEffect)((function(){n(c.Te.getExpensesReport(f))}),[n,f]),(0,a.useEffect)((function(){n(c.Te.getIncomesReport(f))}),[n,f]);var g=function(e){var t="prev"===e?-1:1;N((function(e){var n=new Date(e.getTime()),a=n.getMonth();return n.setMonth(a+t),n>new Date?e:n}))},B=x.getFullYear(),T=x.toLocaleDateString("ru",{month:"long"});return(0,j.jsxs)("div",{className:u,style:t,children:[(0,j.jsx)("h2",{className:p,children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434 :"}),(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)("button",{type:"button",className:m,onClick:function(){return g("prev")},children:(0,j.jsx)("svg",{className:h,children:(0,j.jsx)("use",{xlinkHref:"".concat(l.Z,"#arrow-left")})})}),(0,j.jsxs)("p",{className:v,children:[T," ",B]}),(0,j.jsx)("button",{type:"button",className:m,onClick:function(){return g("next")},children:(0,j.jsx)("svg",{className:h,children:(0,j.jsx)("use",{xlinkHref:"".concat(l.Z,"#arrow-right")})})})]})]})},f=n(2652),g="Budget_budgetBox__KU-Yi",B="Budget_budgetList__mVi9G",T="Budget_budgetListItem__K8Jcm",b="Budget_budgetListItemText__vtq+-",k="Budget_budgetListItemExp__+OUPF",y="Budget_budgetListItemInc__WnE4s",Z=function(){var e=(0,r.v9)(c.ZV.getExpenseTotal),t=(0,r.v9)(c.ZV.getIncomeTotal);return(0,j.jsx)("div",{className:g,children:(0,j.jsxs)("ul",{className:B,children:[(0,j.jsxs)("li",{className:T,children:[(0,j.jsx)("p",{className:b,children:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b:"}),(0,j.jsx)("span",{className:k,children:e&&"- ".concat(e," \u20ac")})]}),(0,j.jsxs)("li",{className:T,children:[(0,j.jsx)("p",{className:b,children:"\u0414\u043e\u0445\u043e\u0434\u044b:"}),(0,j.jsx)("span",{className:y,children:t&&"+ ".concat(t," \u20ac")})]})]})})},w=n(5154),I=n(5728),L=n(7442),S=n(9220),P="ReportPage_reportPageBox__6XQQG",R="ReportPage_goBackBox__1UURM",C=(0,a.lazy)((function(){return Promise.all([n.e(997),n.e(589)]).then(n.bind(n,5451))})),U=(0,a.lazy)((function(){return Promise.all([n.e(997),n.e(748)]).then(n.bind(n,8728))})),E=function(){var e=(0,s.TH)().pathname,t=(0,r.v9)(S.um.getBalance),n=(0,L.Z)("(max-width: 767px)"),a=(0,L.Z)("(min-width: 768px)"),o=(0,L.Z)("(min-width: 1280px)");return(0,j.jsxs)("div",{className:P,children:[(0,j.jsx)("div",{className:R,children:"/report/expenses"===e?(0,j.jsx)(i.Z,{redirectTo:"/expenses"}):(0,j.jsx)(i.Z,{redirectTo:"/incomes"})}),(0,j.jsx)(N,{style:{order:"3"}}),n&&(0,j.jsx)(f.Z,{balanceBoxStyle:{marginBottom:"30px"},inputStyle:{width:"183px",borderRadius:"22px 22px 22px 22px"},btnStyle:{display:"none"}}),a&&!o&&(0,j.jsx)(f.Z,{balanceBoxStyle:{marginBottom:"0px",order:"2",marginRight:"80px"},inputStyle:{width:"125px",borderRadius:"22px 22px 22px 22px"},btnStyle:{display:"none"}}),o&&(0,j.jsx)(f.Z,{balanceBoxStyle:{marginBottom:"0px",order:"2",marginRight:"225px"},inputStyle:{width:"125px",borderRadius:"22px 22px 22px 22px"},btnStyle:{display:"block"}}),!t&&(0,j.jsx)(I.Z,{}),(0,j.jsx)(Z,{}),n&&(0,j.jsx)(w.Z,{}),(0,j.jsxs)(s.Z5,{children:[(0,j.jsx)(s.AW,{path:"expenses",element:(0,j.jsx)(C,{})}),(0,j.jsx)(s.AW,{path:"incomes",element:(0,j.jsx)(U,{})})]})]})}}}]);
//# sourceMappingURL=ReportPage.378ae2e3.chunk.js.map