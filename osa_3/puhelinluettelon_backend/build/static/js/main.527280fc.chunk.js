(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),c=t.n(r),l=(t(5),t(2)),u=function(e){var n=e.person,t=e.onDeleteClick;return o.a.createElement("div",null,n.name," ",n.number," ",o.a.createElement("button",{onClick:function(){return t(n)}},"delete"))},i=function(e){var n=e.filteredPersons,t=e.onDeleteClick;return o.a.createElement("div",null,n.map((function(e){return o.a.createElement(u,{key:e.name,person:e,onDeleteClick:t})})))},m=function(e){return o.a.createElement("div",null,"Filter results:",o.a.createElement("input",{value:e.value,onChange:e.onChange}))},s=function(e){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"Name:",o.a.createElement("input",{value:e.nameValue,onChange:e.onNameChange})),o.a.createElement("div",null,"Number:",o.a.createElement("input",{value:e.numberValue,onChange:e.onNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add"))))},d=function(e){var n=e.message,t=e.error;return null===n?null:!1===t?o.a.createElement("div",{className:"notif"},n):o.a.createElement("div",{className:"error"},n)},f=t(3),b=t.n(f),h="/api/persons",v=function(){return b.a.get(h)},g=function(e){return b.a.post(h,e)},p=function(e,n){return b.a.put("".concat(h,"/").concat(e),n)},E=function(e){return b.a.delete("".concat(h,"/").concat(e))},C=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),u=Object(l.a)(c,2),f=u[0],b=u[1],h=Object(a.useState)(""),C=Object(l.a)(h,2),j=C[0],O=C[1],w=Object(a.useState)(!0),k=Object(l.a)(w,2),S=k[0],N=k[1],D=Object(a.useState)(""),y=Object(l.a)(D,2),P=y[0],V=y[1],A=Object(a.useState)(null),I=Object(l.a)(A,2),J=I[0],L=I[1],x=Object(a.useState)(!1),B=Object(l.a)(x,2),F=B[0],T=B[1];Object(a.useEffect)((function(){v().then((function(e){r(e.data)}))}),[]),console.log("render",t.length,"persons");var U=S?t:t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(d,{message:J,error:F}),o.a.createElement(m,{value:P,onChange:function(e){console.log(e.target.value),V(e.target.value),N(!1)}}),o.a.createElement("h2",null,"Add new"),o.a.createElement(s,{onSubmit:function(e){var n={name:f,number:j};if(t.some((function(e){return e.name===f}))){var a=t.find((function(e){return e.name===f}));console.log("old person ".concat(a.number)),console.log("new person ".concat(n.number)),window.confirm("".concat(f," is already added to the phonebook, replace the old number with a new one?"))&&p(a.id,n).then((function(e){r(t.map((function(n){return n.id===a.id?e.data:n}))),L("Updated ".concat(n.name))})).catch((function(e){console.log(e),T(!0),L("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){L(null),T(!1)}),5e3)}))}else e.preventDefault(),g(n).then((function(e){r(t.concat(e.data)),b(""),O("")})).catch((function(e){L("Person validation failed: ".concat(e.response.data," is shorter than the minimum allowed length (3)")),T(!0)})),L("Added ".concat(n.name))},nameValue:f,onNameChange:function(e){console.log(e.target.value),b(e.target.value)},numberValue:j,onNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(i,{filteredPersons:U,onDeleteClick:function(e){window.confirm("Delete ".concat(e.name," ?"))&&(E(e.id).then((function(n){r(t.filter((function(n){return n.id!==e.id})))})),L("Deleted ".concat(e.name)))}}))};c.a.render(o.a.createElement(C,null),document.getElementById("root"))},5:function(e,n,t){}},[[15,1,2]]]);
//# sourceMappingURL=main.527280fc.chunk.js.map