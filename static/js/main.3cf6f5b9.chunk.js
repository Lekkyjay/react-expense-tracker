(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=function(){return r.a.createElement("h2",null,"Expense Tracker")},o=n(2),i=n(7),s=n(1),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});case"EXPENSES":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.amount<0}))});case"INCOMES":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.amount>0}))});default:return e}},E={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},d=Object(a.createContext)(E),f=function(e){var t=e.children,n=Object(a.useReducer)(m,E),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},b=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",e))};var p=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},n)))},v=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text,r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},className:"delete-btn"},"x"))},x=function(){var e=Object(a.useContext)(d).transactions,t=Object(a.useState)(e),n=Object(o.a)(t,2),c=n[0],l=n[1];Object(a.useEffect)((function(){l(e)}),[e]);var u=function(t){if("Expenses"===t.target.innerText){var n=e.filter((function(e){return e.amount<0}));l(n)}if("Incomes"===t.target.innerText){var a=e.filter((function(e){return e.amount>0}));l(a)}"All"===t.target.innerText&&l(e)};return r.a.createElement("div",{className:"transactionList"},r.a.createElement("div",{className:"filter"},r.a.createElement("h3",null,"Filter"),r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"bttn all",onClick:u},"All"),r.a.createElement("button",{className:"bttn expenses",onClick:u},"Expenses"),r.a.createElement("button",{className:"bttn incomes",onClick:u},"Incomes"))),r.a.createElement("ul",{className:"list"},c.map((function(e){return r.a.createElement(v,{key:e.id,transaction:e})}))))},O=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(d).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};m(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};n(13);var N=function(){return r.a.createElement(f,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(b,null),r.a.createElement(p,null),r.a.createElement(x,null),r.a.createElement(O,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3cf6f5b9.chunk.js.map