var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/utilities/name-value-list/docs.mdx.js"]=function(e){function t(t){for(var a,s,i=t[0],c=t[1],o=t[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);m.length;)m.shift()();return r.push.apply(r,o||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,i=1;i<l.length;i++){var c=l[i];0!==n[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=l[0]))}return e}var a={},n={99:0},r=[];function s(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=e,s.c=a,s.d=function(e,t,l){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(s.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(l,a,function(t){return e[t]}.bind(null,a));return l},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var d=c;return r.push([305,0]),l()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},305:function(e,t,l){"use strict";l.r(t),l.d(t,"getElement",(function(){return u})),l.d(t,"getContents",(function(){return m}));var a=l(0),n=l.n(a),r=l(4),s=l(1),i=l(2),c=[{id:"name-value-pair-horizontal",label:"Horizontal",element:n.a.createElement("dl",{className:"slds-list_horizontal slds-wrap"},n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"First Label"},"First Label:"),n.a.createElement("dd",{className:"slds-item_detail slds-truncate",title:"Description for first label"},"Description for first label"),n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Second Label"},"Second Label:"),n.a.createElement("dd",{className:"slds-item_detail slds-truncate",title:"Description for second label"},"Description for second label"))},{id:"name-value-pair-inline",label:"Inline",element:n.a.createElement("dl",{className:"slds-list_inline"},n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"First Label"},"First Label:"),n.a.createElement("dd",{className:"slds-item_detail slds-truncate",title:"Description for first label"},"Description for first label"),n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Second Label"},"Second Label:"),n.a.createElement("dd",{className:"slds-item_detail slds-truncate",title:"Description for second label"},"Description for second label"))},{id:"name-value-pair-stacked",label:"Stacked",element:n.a.createElement("dl",{className:"slds-list_stacked"},n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"First Label"},"First Label:"),n.a.createElement("dd",{className:"slds-item_detail slds-truncate",title:"Description for first label"},"Description for first label"),n.a.createElement("dt",{className:"slds-item_label slds-text-color_weak slds-truncate",title:"Second Label"},"Second Label:"),n.a.createElement("dd",{className:"slds-item_detail slds-truncate",title:"Second description"},"Second description"))}],o=r.c.h2,d=r.c.h3,u=function(){return Object(a.createElement)(r.b,{},Object(a.createElement)("div",{className:"doc lead"},"An unordered list that describes a name/value pairing."),o({id:"Examples"},"Examples"),d({id:"Horizontal"},"Horizontal"),Object(a.createElement)(s.a,null,Object(i.f)(c,"name-value-pair-horizontal")),d({id:"Inline"},"Inline"),Object(a.createElement)(s.a,null,Object(i.f)(c,"name-value-pair-inline")),d({id:"Stacked"},"Stacked"),Object(a.createElement)(s.a,null,Object(i.f)(c,"name-value-pair-stacked")))},m=function(){return Object(r.a)(u())}}});