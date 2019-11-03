(this["webpackJsonpstress-test"]=this["webpackJsonpstress-test"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),i=(n(17),n(2)),c=n(9),s=n(3),u=(n(18),function(e){function t(e){return console.log(e),e.teaserRate?l(e,e.teaserRate):l(e,e.baseRate)}function n(e){return l(e,e.baseRate)}function a(e,t){return+(e.income-l(e,t)).toFixed(2)}function o(e){return new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"}).format(e)}function l(e,t){var n=t/12/100;if(e.interestOnly)return+(e.mortgage*n).toFixed(2);var a=Math.pow(n+1,e.monthsLeft);return+(e.mortgage*(n*a/(a-1))).toFixed(2)}var i=r.a.createElement("h2",null,e.name),c=["The mortgage for ".concat(e.name," currently costs around ").concat(o(t(e))," each month.")],s=["After mortgage repayments, your current income from the property is around ".concat(o(function(e){return+(e.income-t(e)).toFixed(2)}(e))," each month.")];e.teaserRate&&(c.push("When the teaser rate expires, it is expected that this will rise to ".concat(o(n(e)),", ").concat(o(n(e)-t(e))," more than your current repayments.")),s.push("When the teaser rate expires that will be nearer to ".concat(o(a(e,e.baseRate)),".")));var u=r.a.createElement("p",null,c.join(" "),r.a.createElement("br",null),s.join(" "));if(e.baseRate>=15)return r.a.createElement(r.a.Fragment,null,i,u);var m=r.a.createElement("span",null,"If interest rates were to rise to 10% (",r.a.createElement("a",{href:"http://www.bankofengland.co.uk/statistics/Documents/articles/2015/6jul.pdf",target:"_blank",rel:"noopener noreferrer"},"similar to rates around 1980"),"), then the mortgage would cost ",o(l(e,10))," each month, ",o(l(e,10)-t(e))," more that your current repayments. If rates were this high, your monthly income will be nearer to ",o(a(e,10)),"."),h=null;e.baseRate<10&&(h=r.a.createElement("span",null,"If interest rates were to rise to 15% (",r.a.createElement("a",{href:"http://www.bankofengland.co.uk/statistics/Documents/articles/2015/6jul.pdf",target:"_blank",rel:"noopener noreferrer"},"similar to rates around 1995"),"), then the mortgage would cost ",o(l(e,15))," each month, ",o(l(e,15)-t(e))," more that your current repayments. If rates were this high, your monthly income will be nearer to ",o(a(e,15)),"."));var f=r.a.createElement("p",null,m,h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),h));return r.a.createElement(r.a.Fragment,null,i,u,f)}),m=function(e){var t=e.properties;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(u,Object.assign({key:t,index:t},e))})))},h=function(e){var t=e.properties;function n(e){var t=0;return e.forEach((function(e){t+=function(e){return console.log(e),e.teaserRate?l(e,e.teaserRate):l(e,e.baseRate)}(e)})),t}function a(e){var t=0;return e.forEach((function(e){t+=function(e){return l(e,e.baseRate)}(e)})),t}function o(e,t){var n=0;return e.forEach((function(e){n+=l(e,t)})),n}function l(e,t){var n=t/12/100;if(e.interestOnly)return+(e.mortgage*n).toFixed(2);var a=Math.pow(n+1,e.monthsLeft);return+(e.mortgage*(n*a/(a-1))).toFixed(2)}function i(e,t){var n=0;return e.forEach((function(e){n+=function(e,t){return+(e.income-l(e,t)).toFixed(2)}(e,t)})),n}function c(e){return new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"}).format(e)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Summary"),r.a.createElement("p",null,"Your current monthly payments are around ",c(n(t)),". This will increase to around ",c(a(t))," (",r.a.createElement("span",{className:"text-warning"},"+",c(a(t)-n(t))),") once any/all teaser rates have expired.",r.a.createElement("br",null),"Your monthly net income is around"),r.a.createElement("p",null,r.a.createElement("span",null,"If interest rates were to rise to 10%: (",r.a.createElement("a",{href:"https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/",target:"_blank",rel:"noopener noreferrer"},"similar to rates around 1980"),"), then the mortgages would total ",c(o(t,10))," each month, ",c(o(t,10)-n(t))," more that your current repayments. If rates were this high, your monthly income will be nearer to ",c(i(t,10)),"."),r.a.createElement("br",null),r.a.createElement("span",null,"If interest rates were to rise to 15%: (",r.a.createElement("a",{href:"https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/",target:"_blank",rel:"noopener noreferrer"},"similar to rates around 1995"),"), then the mortgages would total ",c(o(t,15))," each month, ",c(o(t,15)-n(t))," more that your current repayments. If rates were this high, your monthly income will be nearer to ",c(i(t,15)),".")))},f=n(6),d=n(7),p=n(10),g=n(8),y=n(1),b=n(11),v=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).state=n.getInitialFormState(),n.handleInputChange=n.handleInputChange.bind(Object(y.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(y.a)(n)),n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"getInitialFormState",value:function(){return{name:"",interestOnly:!1,mortgage:"",baseRate:"",monthsLeft:"",teaserRate:"",income:""}}},{key:"handleInputChange",value:function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,a=t.name;this.setState(Object(i.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addPropertyHandler(this.state),this.setState(this.getInitialFormState())}},{key:"render",value:function(){var e=this.state.interestOnly?null:r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"monthsLeft",value:this.state.monthsLeft,onChange:this.handleInputChange,type:"number",placeholder:"Months left",min:"0",required:!0}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add a Property"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"name",value:this.state.name,onChange:this.handleInputChange,placeholder:"Property Name",required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"interestOnly"},"Interest only",r.a.createElement("input",{name:"interestOnly",checked:this.state.interestOnly,onChange:this.handleInputChange,type:"checkbox"})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"mortgage",value:this.state.mortgage,onChange:this.handleInputChange,type:"number",placeholder:"Outstanding mortgage",step:"any",min:"0",required:!0})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"baseRate",value:this.state.baseRate,onChange:this.handleInputChange,type:"number",placeholder:"Base rate",step:"any",required:!0})),e,r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"teaserRate",value:this.state.teaserRate,onChange:this.handleInputChange,type:"number",placeholder:"Teaser rate",step:"any"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{name:"income",value:this.state.income,onChange:this.handleInputChange,placeholder:"Income",id:"income",required:!0})),r.a.createElement("div",{className:"income-label"},r.a.createElement("label",{htmlFor:"income"},"(Monthly Net Income after fees, maintenance and taxes but before mortgage payments)"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"submit",value:"Add Property"})))))}}]),t}(r.a.Component);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(){var e=function(e,t){var n=r.a.useState(JSON.parse(localStorage.getItem(e))||t),a=Object(s.a)(n,2),o=a[0],l=a[1];return r.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(o))}),[o,e]),[o,l]}("properties",[]),t=Object(s.a)(e,2),n=t[0],a=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"stress-test"},r.a.createElement("header",null,r.a.createElement("h1",null,"Mortgage Stress Test"),r.a.createElement("p",null,"This stress test is provided as a rough guide only. You should not base any decisions solely on it."),r.a.createElement("p",null,"It is currently a work in progress.")),r.a.createElement(m,{properties:n}),r.a.createElement(h,{properties:n}),r.a.createElement(v,{addPropertyHandler:function(e){a([].concat(Object(c.a)(n),[E({},e)]))}})),r.a.createElement("footer",null,r.a.createElement("p",null,"Created by ",r.a.createElement("a",{href:"https://www.votemike.co.uk"},"Michael Gwynne"))))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/stress-test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/stress-test","/service-worker.js");k?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.b9b87cd3.chunk.js.map