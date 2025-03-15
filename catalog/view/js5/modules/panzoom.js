!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Panzoom=t()}(this,(function(){"use strict";var e=function(){return e=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},e.apply(this,arguments)};function t(e,t){for(var n=e.length;n--;)if(e[n].pointerId===t.pointerId)return n;return-1}function n(e,o){var r;if(o.touches){r=0;for(var a=0,i=o.touches;a<i.length;a++){var c=i[a];c.pointerId=r++,n(e,c)}}else(r=t(e,o))>-1&&e.splice(r,1),e.push(o)}function o(e){for(var t,n=(e=e.slice(0)).pop();t=e.pop();)n={clientX:(t.clientX-n.clientX)/2+n.clientX,clientY:(t.clientY-n.clientY)/2+n.clientY};return n}function r(e){if(e.length<2)return 0;var t=e[0],n=e[1];return Math.sqrt(Math.pow(Math.abs(n.clientX-t.clientX),2)+Math.pow(Math.abs(n.clientY-t.clientY),2))}"undefined"!=typeof window&&(window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),"function"!=typeof window.CustomEvent&&(window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}));var a={down:"mousedown",move:"mousemove",up:"mouseup mouseleave"};function i(e,t,n,o){a[e].split(" ").forEach((function(e){t.addEventListener(e,n,o)}))}function c(e,t,n){a[e].split(" ").forEach((function(e){t.removeEventListener(e,n)}))}"undefined"!=typeof window&&("function"==typeof window.PointerEvent?a={down:"pointerdown",move:"pointermove",up:"pointerup pointerleave pointercancel"}:"function"==typeof window.TouchEvent&&(a={down:"touchstart",move:"touchmove",up:"touchend touchcancel"}));var s,l="undefined"!=typeof document&&!!document.documentMode;function u(){return s||(s=document.createElement("div").style)}var d=["webkit","moz","ms"],p={};function m(e){if(p[e])return p[e];var t=u();if(e in t)return p[e]=e;for(var n=e[0].toUpperCase()+e.slice(1),o=d.length;o--;){var r="".concat(d[o]).concat(n);if(r in t)return p[e]=r}}function f(e,t){return parseFloat(t[m(e)])||0}function h(e,t,n){void 0===n&&(n=window.getComputedStyle(e));var o="border"===t?"Width":"";return{left:f("".concat(t,"Left").concat(o),n),right:f("".concat(t,"Right").concat(o),n),top:f("".concat(t,"Top").concat(o),n),bottom:f("".concat(t,"Bottom").concat(o),n)}}function v(e,t,n){e.style[m(t)]=n}function y(e){var t=e.parentNode,n=window.getComputedStyle(e),o=window.getComputedStyle(t),r=e.getBoundingClientRect(),a=t.getBoundingClientRect();return{elem:{style:n,width:r.width,height:r.height,top:r.top,bottom:r.bottom,left:r.left,right:r.right,margin:h(e,"margin",n),border:h(e,"border",n)},parent:{style:o,width:a.width,height:a.height,top:a.top,bottom:a.bottom,left:a.left,right:a.right,padding:h(t,"padding",o),border:h(t,"border",o)}}}function g(e,t){return 1===e.nodeType&&" ".concat(function(e){return(e.getAttribute("class")||"").trim()}(e)," ").indexOf(" ".concat(t," "))>-1}var b=/^http:[\w\.\/]+svg$/;var w={animate:!1,canvas:!1,cursor:"",disablePan:!1,disableZoom:!1,disableXAxis:!1,disableYAxis:!1,duration:200,easing:"ease-in-out",exclude:[],excludeClass:"panzoom-exclude",handleStartEvent:function(e){e.preventDefault(),e.stopPropagation()},maxScale:4,minScale:.125,overflow:"hidden",panOnlyWhenZoomed:!1,pinchAndPan:!1,relative:!1,setTransform:function(e,t,n){var o=t.x,r=t.y,a=t.scale,i=t.isSVG;if(v(e,"transform","scale(".concat(a,") translate(").concat(o,"px, ").concat(r,"px)")),i&&l){var c=window.getComputedStyle(e).getPropertyValue("transform");e.setAttribute("transform",c)}},startX:0,startY:0,startScale:1,step:.3,touchAction:""};function x(s,l){if(!s)throw new Error("Panzoom requires an element as an argument");if(1!==s.nodeType)throw new Error("Panzoom requires an element with a nodeType of 1");if(!function(e){var t=e.ownerDocument,n=e.parentNode;return t&&n&&9===t.nodeType&&1===n.nodeType&&t.documentElement.contains(n)}(s))throw new Error("Panzoom should be called on elements that have been attached to the DOM");l=e(e({},w),l);var u=function(e){return b.test(e.namespaceURI)&&"svg"!==e.nodeName.toLowerCase()}(s),d=s.parentNode;d.style.overflow=l.overflow,d.style.userSelect="none",d.style.touchAction=l.touchAction,(l.canvas?d:s).style.cursor=l.cursor,s.style.userSelect="none",s.style.touchAction=l.touchAction,v(s,"transformOrigin","string"==typeof l.origin?l.origin:u?"0 0":"50% 50%");var p,f,h,x,S,z,E=0,A=0,M=1,P=!1;function L(e,t,n){if(!n.silent){var o=new CustomEvent(e,{detail:t});s.dispatchEvent(o)}}function O(e,t,n){var o={x:E,y:A,scale:M,isSVG:u,originalEvent:n};return requestAnimationFrame((function(){"boolean"==typeof t.animate&&(t.animate?function(e,t){var n=m("transform");v(e,"transition","".concat(n," ").concat(t.duration,"ms ").concat(t.easing))}(s,t):v(s,"transition","none")),t.setTransform(s,o,t),L(e,o,t),L("panzoomchange",o,t)})),o}function C(t,n,o,r){var a=e(e({},l),r),i={x:E,y:A,opts:a};if(!a.force&&(a.disablePan||a.panOnlyWhenZoomed&&M===a.startScale))return i;if(t=parseFloat(t),n=parseFloat(n),a.disableXAxis||(i.x=(a.relative?E:0)+t),a.disableYAxis||(i.y=(a.relative?A:0)+n),a.contain){var c=y(s),u=c.elem.width/M,d=c.elem.height/M,p=u*o,m=d*o,f=(p-u)/2,h=(m-d)/2;if("inside"===a.contain){var v=(-c.elem.margin.left-c.parent.padding.left+f)/o,g=(c.parent.width-p-c.parent.padding.left-c.elem.margin.left-c.parent.border.left-c.parent.border.right+f)/o;i.x=Math.max(Math.min(i.x,g),v);var b=(-c.elem.margin.top-c.parent.padding.top+h)/o,w=(c.parent.height-m-c.parent.padding.top-c.elem.margin.top-c.parent.border.top-c.parent.border.bottom+h)/o;i.y=Math.max(Math.min(i.y,w),b)}else if("outside"===a.contain){v=(-(p-c.parent.width)-c.parent.padding.left-c.parent.border.left-c.parent.border.right+f)/o,g=(f-c.parent.padding.left)/o;i.x=Math.max(Math.min(i.x,g),v);b=(-(m-c.parent.height)-c.parent.padding.top-c.parent.border.top-c.parent.border.bottom+h)/o,w=(h-c.parent.padding.top)/o;i.y=Math.max(Math.min(i.y,w),b)}}return a.roundPixels&&(i.x=Math.round(i.x),i.y=Math.round(i.y)),i}function X(t,n){var o=e(e({},l),n),r={scale:M,opts:o};if(!o.force&&o.disableZoom)return r;var a=l.minScale,i=l.maxScale;if(o.contain){var c=y(s),u=c.elem.width/M,d=c.elem.height/M;if(u>1&&d>1){var p=(c.parent.width-c.parent.border.left-c.parent.border.right)/u,m=(c.parent.height-c.parent.border.top-c.parent.border.bottom)/d;"inside"===l.contain?i=Math.min(i,p,m):"outside"===l.contain&&(a=Math.max(a,p,m))}}return r.scale=Math.min(Math.max(t,a),i),r}function Y(e,t,n,o){var r=C(e,t,M,n);return E!==r.x||A!==r.y?(E=r.x,A=r.y,O("panzoompan",r.opts,o)):{x:E,y:A,scale:M,isSVG:u,originalEvent:o}}function T(e,t,n){var o=X(e,t),r=o.opts;if(r.force||!r.disableZoom){e=o.scale;var a=E,i=A;if(r.focal){var c=r.focal;a=(c.x/e-c.x/M+E*e)/e,i=(c.y/e-c.y/M+A*e)/e}var s=C(a,i,e,{relative:!1,force:!0});return E=s.x,A=s.y,(M=e)>1.1?(document.documentElement.classList.add("zoom-object"),l.excludeClass.classList.add("zoom-active"),document.querySelector(".pic-zoom-out").classList.add("no-disable"),l.excludeClass.style.touchAction="none"):(document.documentElement.classList.remove("zoom-object"),l.excludeClass.classList.remove("zoom-active"),document.querySelector(".pic-zoom-out").classList.remove("no-disable"),document.querySelector(".pic-zoom-in").classList.remove("disable"),l.excludeClass.style.touchAction="unset"),M==l.maxScale?document.querySelector(".pic-zoom-in").classList.add("disable"):document.querySelector(".pic-zoom-in").classList.remove("disable"),O("panzoomzoom",r,n)}}function q(t,n){var o=e(e(e({},l),{animate:!0}),n);return T(M*Math.exp((t?1:-1)*o.step),o)}function N(t,n,o,r){var a=y(s),i=a.parent.width-a.parent.padding.left-a.parent.padding.right-a.parent.border.left-a.parent.border.right,c=a.parent.height-a.parent.padding.top-a.parent.padding.bottom-a.parent.border.top-a.parent.border.bottom,l=n.clientX-a.parent.left-a.parent.padding.left-a.parent.border.left-a.elem.margin.left,d=n.clientY-a.parent.top-a.parent.padding.top-a.parent.border.top-a.elem.margin.top;u||(l-=a.elem.width/M/2,d-=a.elem.height/M/2);var p={x:l/i*(i*t),y:d/c*(c*t)};return T(t,e(e({},o),{animate:!1,focal:p}),r)}T(l.startScale,{animate:!1,force:!0}),setTimeout((function(){Y(l.startX,l.startY,{animate:!1,force:!0})}));var j=[];function V(e){if(!function(e,t){for(var n=e;null!=n;n=n.parentNode)if(g(n,t.excludeClass)||t.exclude.indexOf(n)>-1)return!0;return!1}(e.target,l)){n(j,e),P=!0,l.handleStartEvent(e),p=E,f=A,L("panzoomstart",{x:E,y:A,scale:M,isSVG:u,originalEvent:e},l);var t=o(j);h=t.clientX,x=t.clientY,S=M,z=r(j)}}function D(e){if(P&&void 0!==p&&void 0!==f&&void 0!==h&&void 0!==x){n(j,e);var t=o(j),a=j.length>1,i=M;if(a)0===z&&(z=r(j)),N(i=X((r(j)-z)*l.step/80+S).scale,t,{animate:!1},e);a&&!l.pinchAndPan||Y(p+(t.clientX-h)/i,f+(t.clientY-x)/i,{animate:!1},e)}}function G(e){1===j.length&&L("panzoomend",{x:E,y:A,scale:M,isSVG:u,originalEvent:e},l),function(e,n){if(n.touches)for(;e.length;)e.pop();else{var o=t(e,n);o>-1&&e.splice(o,1)}}(j,e),P&&(P=!1,p=f=h=x=void 0)}var I=!1;function W(){I||(I=!0,i("down",l.canvas?d:s,V),i("move",document,D,{passive:!0}),i("up",document,G,{passive:!0}))}return l.noBind||W(),{bind:W,destroy:function(){I=!1,c("down",l.canvas?d:s,V),c("move",document,D),c("up",document,G)},eventNames:a,getPan:function(){return{x:E,y:A}},getScale:function(){return M},getOptions:function(){return function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(l)},handleDown:V,handleMove:D,handleUp:G,pan:Y,reset:function(t){var n=e(e(e({},l),{animate:!0,force:!0}),t);M=X(n.startScale,n).scale;var o=C(n.startX,n.startY,M,n);return E=o.x,A=o.y,document.documentElement.classList.contains("zoom-object")&&document.documentElement.classList.remove("zoom-object"),document.querySelector(".pic-zoom-out").classList.remove("no-disable"),document.querySelector(".pic-zoom-in").classList.remove("disable"),O("panzoomreset",n)},resetStyle:function(){d.style.overflow="",d.style.userSelect="",d.style.touchAction="",d.style.cursor="",s.style.cursor="",s.style.userSelect="",s.style.touchAction="",v(s,"transformOrigin","")},setOptions:function(e){for(var t in void 0===e&&(e={}),e)e.hasOwnProperty(t)&&(l[t]=e[t]);(e.hasOwnProperty("cursor")||e.hasOwnProperty("canvas"))&&(d.style.cursor=s.style.cursor="",(l.canvas?d:s).style.cursor=l.cursor),e.hasOwnProperty("overflow")&&(d.style.overflow=e.overflow),e.hasOwnProperty("touchAction")&&(d.style.touchAction=e.touchAction,s.style.touchAction=e.touchAction)},setStyle:function(e,t){return v(s,e,t)},zoom:T,zoomIn:function(e){return q(!0,e)},zoomOut:function(e){return q(!1,e)},zoomToPoint:N,zoomWithWheel:function(t,n){t.preventDefault();var o=e(e(e({},l),n),{animate:!1}),r=(0===t.deltaY&&t.deltaX?t.deltaX:t.deltaY)<0?1:-1;return N(X(M*Math.exp(r*o.step/3),o).scale,t,o,t)}}}return x.defaultOptions=w,x}));