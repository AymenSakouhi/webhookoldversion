var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/popovers/prompt/example.jsx.js"]=function(e){function t(t){for(var s,a,l=t[0],i=t[1],p=t[2],c=0,d=[];c<l.length;c++)a=l[c],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(m&&m(t);d.length;)d.shift()();return r.push.apply(r,p||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],s=!0,l=1;l<o.length;l++){var i=o[l];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var s={},n={122:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},r=[];function a(t){if(s[t])return s[t].exports;var o=s[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=s,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(o,s,function(t){return e[t]}.bind(null,s));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var m=i;return r.push([129,0]),o()}({0:function(e,t){e.exports=React},129:function(e,t,o){"use strict";o.r(t),o.d(t,"demoHeight",(function(){return m})),o.d(t,"Footer",(function(){return d})),o.d(t,"Icon",(function(){return u})),o.d(t,"Prompt",(function(){return b})),o.d(t,"examples",(function(){return f}));var s=o(0),n=o.n(s),r=o(8),a=o(31),l=o(6),i=o(2),p=o.n(i),m="height: 13rem;",c=l.d.uniqueId("dialog-heading-id-"),d=function(e){return n.a.createElement("div",{className:"slds-grid slds-grid_vertical-align-center"},e.dismissButtonLabel&&n.a.createElement("button",{className:"slds-button slds-button_neutral slds-col_bump-right"},e.dismissButtonLabel),e.actionLinkText&&n.a.createElement("span",{className:"slds-popover_prompt__action-link"},n.a.createElement("a",{href:"#",className:"slds-button"},e.actionLinkText)),e.brandButtonLabel&&n.a.createElement("button",{className:"slds-button slds-button_brand"},e.brandButtonLabel))},u=function(e){return n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:"description of icon when needed"},n.a.createElement(r.a,{className:"slds-icon slds-icon_small slds-icon-text-default",sprite:"utility",symbol:"prompt"}),n.a.createElement("span",{className:"slds-assistive-text"},"Description of icon")))},b=function(e){var t={"slds-popover_prompt_top":"top"===e.position,"slds-popover_prompt_top-right":"top-right"===e.position,"slds-popover_prompt_top-left":"top-left"===e.position,"slds-popover_prompt_bottom":"bottom"===e.position,"slds-popover_prompt_bottom-left":"bottom-left"===e.position,"slds-popover_prompt_bottom-right":"bottom-right"===e.position};return n.a.createElement(a.Popover,{className:p()("slds-popover_prompt",t,e.className),bodyClassName:e.bodyClassName,headingId:c,footer:e.showFooter&&n.a.createElement(d,{dismissButtonLabel:"Dismiss",actionLinkText:"Learn more",brandButtonLabel:"Save"}),closeButton:!0},n.a.createElement("div",{className:"slds-media"},e.symbol&&n.a.createElement("div",{className:"slds-media__figure"},n.a.createElement("span",{className:"slds-icon_container",title:e.assistiveText},n.a.createElement(r.a,{className:p()("slds-icon slds-icon_small slds-icon-text-default",e.iconClassName),sprite:"utility",symbol:e.symbol}),n.a.createElement("span",{className:"slds-assistive-text"},e.assistiveText))),n.a.createElement("div",{className:"slds-media__body"},n.a.createElement("h2",{id:c,className:"slds-popover_prompt__heading"},"Title"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))};t.default=n.a.createElement(b,{symbol:"prompt"});var f=[{id:"top-left",label:"Positioned: top left",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",showFooter:!0,position:"top-left"})},{id:"top-center",label:"Positioned: top center",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",showFooter:!0,position:"top"})},{id:"top-right",label:"Positioned: top right",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",showFooter:!0,position:"top-right"})},{id:"bottom-right",label:"Positioned: bottom right",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",showFooter:!0,position:"bottom-right"})},{id:"bottom-center",label:"Positioned: bottom center",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",showFooter:!0,position:"bottom"})},{id:"bottom-left",label:"Positioned: bottom left",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",showFooter:!0,position:"bottom-left"})},{id:"brand-with-footer",label:"Prompt: branded with footer",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",position:"top",showFooter:!0,className:"slds-popover_brand",iconClassName:"slds-popover__icon"})},{id:"brand-without-footer",label:"Prompt: branded without footer",demoStyles:m,element:n.a.createElement(b,{symbol:"prompt",position:"top",className:"slds-popover_brand slds-popover_brand-bottom",iconClassName:"slds-popover__icon"})}]},16:function(e,t){e.exports=ReactDOM}});