(()=>{"use strict";var n={402:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var v=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),u=0;u<a.length;u++){var l=t(a[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{try{self["workbox:window:6.5.0"]&&_()}catch(n){}function n(n,e){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function r(n,t){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.0"]&&_()}catch(n){}var o=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function a(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var i=function(n,e){this.type=n,Object.assign(this,e)};function c(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function s(){}var u={type:"SKIP_WAITING"};function l(n,e){if(!e)return n&&n.then?n.then(s):Promise.resolve()}var d=function(e){var t,r;function s(n,t){var r,s;return void 0===t&&(t={}),(r=e.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing;r.tn>0||!a(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,a=t===r.vn,c={sw:t,isExternal:a,originalEvent:n};!a&&r.mn&&(c.isUpdate=!0),r.dispatchEvent(new i(o,c)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new i("waiting",c))}),200):"activating"===o&&(clearTimeout(r.wn),a||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller;r.dispatchEvent(new i("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(s=function(n){var e=n.data,t=n.ports,o=n.source;return c(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new i("message",{data:e,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(s.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=n,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}r=e,(t=s).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var d,f=s.prototype;return f.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e;try{var r=this;return function(n,e){var t=n();return t&&t.then?t.then(e):e()}((function(){if(!t&&"complete"!==document.readyState)return l(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),c(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&a(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new i("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},f.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(e){try{return c(this.getSW(),(function(t){return n(t,e)}))}catch(n){return Promise.reject(n)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,u)},f.pn=function(){var n=navigator.serviceWorker.controller;return n&&a(n.scriptURL,this.sn.toString())?n:void 0},f.bn=function(){try{var n=this;return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){return c(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(d=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(s.prototype,d),s}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this;for(var e,t=r(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());let f,p;const v=new WeakMap,h=new WeakMap,b=new WeakMap,g=new WeakMap,m=new WeakMap;let y={get(n,e,t){if(n instanceof IDBTransaction){if("done"===e)return h.get(n);if("objectStoreNames"===e)return n.objectStoreNames||b.get(n);if("store"===e)return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return k(n[e])},set:(n,e,t)=>(n[e]=t,!0),has:(n,e)=>n instanceof IDBTransaction&&("done"===e||"store"===e)||e in n};function w(n){return"function"==typeof n?(e=n)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(p||(p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...n){return e.apply(x(this),n),k(v.get(this))}:function(...n){return k(e.apply(x(this),n))}:function(n,...t){const r=e.call(x(this),n,...t);return b.set(r,n.sort?n.sort():[n]),k(r)}:(n instanceof IDBTransaction&&function(n){if(h.has(n))return;const e=new Promise(((e,t)=>{const r=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),r()},a=()=>{t(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)}));h.set(n,e)}(n),t=n,(f||(f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((n=>t instanceof n))?new Proxy(n,y):n);var e,t}function k(n){if(n instanceof IDBRequest)return function(n){const e=new Promise(((e,t)=>{const r=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(k(n.result)),r()},a=()=>{t(n.error),r()};n.addEventListener("success",o),n.addEventListener("error",a)}));return e.then((e=>{e instanceof IDBCursor&&v.set(e,n)})).catch((()=>{})),m.set(e,n),e}(n);if(g.has(n))return g.get(n);const e=w(n);return e!==n&&(g.set(n,e),m.set(e,n)),e}const x=n=>m.get(n);function S(n,e,{blocked:t,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(n,e),c=k(i);return r&&i.addEventListener("upgradeneeded",(n=>{r(k(i.result),n.oldVersion,n.newVersion,k(i.transaction))})),t&&i.addEventListener("blocked",(()=>t())),c.then((n=>{a&&n.addEventListener("close",(()=>a())),o&&n.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),c}const j=["get","getKey","getAll","getAllKeys","count"],E=["put","add","delete","clear"],I=new Map;function L(n,e){if(!(n instanceof IDBDatabase)||e in n||"string"!=typeof e)return;if(I.get(e))return I.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,o=E.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!j.includes(t))return;const a=async function(n,...e){const a=this.transaction(n,o?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(e.shift())),(await Promise.all([i[t](...e),o&&a.done]))[0]};return I.set(e,a),a}function P(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(n){return void t(n)}c.done?e(s):Promise.resolve(s).then(r,o)}function D(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function i(n){P(a,r,o,i,c,"next",n)}function c(n){P(a,r,o,i,c,"throw",n)}i(void 0)}))}}var M;M=y,y={...M,get:(n,e,t)=>L(n,e)||M.get(n,e,t),has:(n,e)=>!!L(n,e)||M.has(n,e)};var T=function(){var n=D(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",S("jate",1,{upgrade:function(n){n.objectStoreNames.contains("jate")?console.log("jate database already exists"):(n.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=D(regeneratorRuntime.mark((function n(e){var t,r,o,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("PUT to the database"),n.next=3,S("jate",1);case 3:return t=n.sent,r=t.transaction("jate","readwrite"),o=r.objectStore("jate"),a=o.put({id:1,value:e}),n.next=9,a;case 9:i=n.sent,console.log("🚀 - data saved to the database",i.value);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),C=function(){var n=D(regeneratorRuntime.mark((function n(){var e,t,r,o,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("GET from the database"),n.next=3,S("jate",1);case 3:return e=n.sent,t=e.transaction("jate","readonly"),r=t.objectStore("jate"),o=r.get(1),n.next=9,o;case 9:return(a=n.sent)?console.log("🚀 - data retrieved from the database",a.value):console.log("🚀 - data not found in the database"),n.abrupt("return",null==a?void 0:a.value);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function W(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A(n,e,t){return e&&W(n.prototype,e),t&&W(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}T();var O=A((function n(){var e=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var t=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),C().then((function(n){console.info("Loaded data from IndexedDB, injecting into editor"),e.editor.setValue(n||t||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",e.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),B(localStorage.getItem("content"))}))})),R=t(379),U=t.n(R),N=t(795),z=t.n(N),q=t(569),F=t.n(q),H=t(565),Z=t.n(H),K=t(216),V=t.n(K),G=t(589),$=t.n(G),J=t(402),Q={};Q.styleTagTransform=$(),Q.setAttributes=Z(),Q.insert=F().bind(null,"head"),Q.domAPI=z(),Q.insertStyleElement=V(),U()(J.Z,Q),J.Z&&J.Z.locals&&J.Z.locals;var X,Y=document.querySelector("#main");Y.innerHTML="",void 0===new O&&((X=document.createElement("div")).classList.add("spinner"),X.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',Y.appendChild(X)),"serviceWorker"in navigator?new d("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();