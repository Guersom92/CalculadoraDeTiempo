(this["webpackJsonpcalculadora-tiempo"]=this["webpackJsonpcalculadora-tiempo"]||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(3),l=t.n(s),c=t(1);var u=function(e){var a=e.setRestante,t=e.setVividos,s=e.setClase,l=Object(n.useRef)(),u=Object(n.useRef)(),o=Object(n.useState)(!1),i=Object(c.a)(o,2),m=i[0],d=i[1],v=Object(n.useState)(!1),p=Object(c.a)(v,2),E=p[0],b=p[1];return r.a.createElement("form",{className:"inputs",onSubmit:function(e){e.preventDefault();var n=""==u.current.value||""==l.current.value,r=l.current.valueAsNumber>=u.current.valueAsNumber;if(n?(b(!0),a(null)):b(!1),r?(d(!0),a(null)):d(!1),!n&&!r){var s=u.current.value-l.current.value;a(s),t(l.current.value),l.current.value=null,u.current.value=null}}},r.a.createElement("input",{type:"number",min:"1",max:"120",ref:l,placeholder:"Ingresa tu edad"}),m?r.a.createElement("p",{className:"error"},"Edad no puede ser menor o igual a la esperanza"):null,r.a.createElement("div",{className:"esperanza-container"},r.a.createElement("input",{type:"number",min:"1",max:"120",ref:u,placeholder:"Esperanza de vida"}),r.a.createElement("button",{type:"button",onClick:function(){return s("show")},className:"button-info"},"i")),E?r.a.createElement("p",{className:"error"},"Debes llenar las 2 casillas"):null,r.a.createElement("button",null,"Calcular"))};function o(e){return Math.floor(365*e/7)}var i=function(e){for(var a=e.a\u00f1osRestantes,t=e.a\u00f1osVividos,n=[],s=[],l=0;l<365*t/7;l++)s.push(r.a.createElement("span",{className:"diasVividos",key:l}));for(var c=0;c<365*a/7;c++)n.push(r.a.createElement("span",{className:"diasRestantes",key:c}));return a?r.a.createElement("div",{className:"resultados"},r.a.createElement("p",null,"Te quedan ",o(a)," semanas"),r.a.createElement("div",{className:"contenedorDias"},s,r.a.createElement("div",{className:"nubeVividos"},o(t)," Semanas vividas"),n,r.a.createElement("div",{className:"nubeRestantes"},o(a)," Semanas Restantes"))):null};var m=function(){var e=Object(n.useState)(),a=Object(c.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)(),o=Object(c.a)(l,2),m=o[0],d=o[1],v=Object(n.useState)(""),p=Object(c.a)(v,2),E=p[0],b=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contenedor"},r.a.createElement("h1",null,"\xbfCu\xe1nto tiempo tienes?"),r.a.createElement(u,{setRestante:d,setClase:b,setVividos:s}),r.a.createElement(i,{"a\xf1osRestantes":m,"a\xf1osVividos":t}),r.a.createElement("div",{className:"disclaimer"},"Disclaimer",r.a.createElement("br",null),"La app asume que todos los a\xf1os tienen 365 d\xedas")),r.a.createElement("div",{className:"contenedor-info ".concat(E),onClick:function(e){e.target.classList.contains("contenedor-info")&&b("")}},r.a.createElement("div",{className:"info ".concat(E)},r.a.createElement("p",null,"Segun la OMS la esperanza de vida mundial al nacer en 2016 era de 72 a\xf1os(74,2 a\xf1os para mujeres y 69,8 a\xf1os para hombres)."),r.a.createElement("p",null,"En Per\xfa la expectativa era de 67.47(69,1 a\xf1os para mujeres y 65,7 a\xf1os para hombres)."))))};t(9);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.490d3e8c.chunk.js.map