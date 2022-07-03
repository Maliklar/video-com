(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"10b8":function(t,e,n){"use strict";var r=n("cda2");n.d(e,"a",(function(){return r["a"]})),n.d(e,"b",(function(){return r["b"]})),n.d(e,"c",(function(){return r["c"]})),n.d(e,"d",(function(){return r["d"]})),n.d(e,"e",(function(){return r["e"]})),n.d(e,"f",(function(){return r["f"]})),n.d(e,"g",(function(){return r["g"]})),n.d(e,"h",(function(){return r["h"]})),n.d(e,"i",(function(){return r["i"]})),n.d(e,"j",(function(){return r["j"]})),n.d(e,"k",(function(){return r["k"]})),n.d(e,"l",(function(){return r["l"]}))},"29e1":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ar})),n.d(e,"b",(function(){return Dr})),n.d(e,"c",(function(){return kr})),n.d(e,"d",(function(){return xr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return jr})),n.d(e,"g",(function(){return Lr})),n.d(e,"h",(function(){return Ir})),n.d(e,"i",(function(){return Or}));var r,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},i={},o=o||{},a=s||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function b(){this.s=this.s,this.o=this.o}var w=0,E={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete E[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function C(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function I(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var A,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function D(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var x=a.navigator;if(x){var j=x.userAgent;if(j){A=j;break t}}A=""}function L(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function R(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function V(t){return V[" "](t),t}function P(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}V[" "]=c;var U,B=D(A,"Opera"),q=D(A,"Trident")||D(A,"MSIE"),$=D(A,"Edge"),G=$||q,K=D(A,"Gecko")&&!(D(A.toLowerCase(),"webkit")&&!D(A,"Edge"))&&!(D(A,"Trident")||D(A,"MSIE"))&&!D(A,"Edge"),z=D(A.toLowerCase(),"webkit")&&!D(A,"Edge");function H(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=A;return K?/rv:([^\);]+)(\)|;)/.exec(t):$?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),q){var X=H();if(null!=X&&X>parseFloat(W)){U=String(X);break t}}U=W}var Y,J={};function Z(){return P((function(){let t=0;const e=k(String(U)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=N(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||N(0==s[2].length,0==i[2].length)||N(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=H();Y=tt||(parseInt(U,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function st(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{V(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:it[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&st.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(st,rt);var it={2:"touch",3:"pen",4:"mouse"};st.prototype.h=function(){st.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=_(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ft(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}lt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ft(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var dt="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,r,s){if(r&&r.once)return vt(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gt(t,e[i],n,r,s);return null}return n=St(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,s):mt(t,e,n,!1,r,s)}function mt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=l(s)?!!s.capture:!!s,a=Tt(t);if(a||(t[dt]=a=new lt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Et(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=_t;return t}function vt(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)vt(t,e[i],n,r,s);return null}return n=St(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,s):mt(t,e,n,!0,r,s)}function bt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)bt(t,e[i],n,r,s);else r=l(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ft(i,n,r,s),-1<n&&(ut(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ft(e,n,r,s)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Et(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[dt]=null)):ut(t)}}}function Et(t){return t in pt?pt[t]:pt[t]="on"+t}function _t(t,e){if(t.ca)t=!0;else{e=new st(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[dt],t instanceof lt?t:null}var Ct="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[Ct]||(t[Ct]=function(e){return t.handleEvent(e)}),t[Ct])}function It(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var s=e;e=new rt(r,t),F(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=At(o,r,!0,e)&&s}if(o=e.g=t,s=At(o,r,!0,e)&&s,s=At(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=At(o,r,!1,e)&&s}function At(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}v(It,b),It.prototype[ot]=!0,It.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},It.prototype.M=function(){if(It.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},It.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},It.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var kt=a.JSON.stringify;function Dt(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=jt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var xt,jt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){xt||Ft(),Vt||(xt(),Vt=!0),Pt.add(t,e)}function Ft(){var t=a.Promise.resolve(void 0);xt=function(){t.then(Ut)}}var Vt=!1,Pt=new Nt;function Ut(){for(var t;t=Dt();){try{t.h.call(t.g)}catch(n){Rt(n)}var e=jt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vt=!1}function Bt(t,e){It.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function $t(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Gt(t){t.g=$t(()=>{t.g=null,t.i&&(t.i=!1,Gt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Bt,It),r=Bt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class Kt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Gt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){b.call(this),this.h=t,this.g={}}v(zt,b);var Ht=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var s=0;s<n.length;s++){var i=gt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Qt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return kt(n)}catch(a){return e}}zt.prototype.M=function(){zt.Z.M.call(this),Qt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function se(){return re=re||new It}function ie(t){rt.call(this,ne.Ma,t)}function oe(t){const e=se();Ot(e,new ie(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=se();Ot(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(ie,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},fe={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function de(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}de.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function Ee(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new zt(this),this.P=Te,t=G?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new _e}function _e(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,de),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},me=new we;var Te=45e3,Ce={},Se={};function Ie(t,e,n){t.K=1,t.v=Ye(Ke(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Ne(t),t.A=Ke(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),dn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new _e,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Kt(m(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?R(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ae(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=De(t,n),r==Se){4==e&&(t.o=4,ce(14),s=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ce){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}Ae(t)&&r!=Se&&r!=Ce&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Re(t),Le(t))}function De(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ce:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,xe(t,t.P)}function xe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(m(t.eb,t),e)}function je(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||pr(t.l,t)}function Re(t){je(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||En(n.i,t)))if(n.I=t.N,!t.J&&En(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;dr(n),er(n)}lr(n),ce(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(m(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else mr(n,11)}else if((t.J||n.g==t)&&dr(n),!O(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(D(t,"spdy")||D(t,"quic")||D(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(_n(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(je(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&sr(n)}else"stop"!=u[0]&&"close"!=u[0]||mr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?mr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Fe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Ve(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=Fe(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function Pe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Pe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Be(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Be(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ee.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>h)&&(3!=h||G||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=f?3:2),je(this);var n=this.g.ba();this.N=n;e:if(Ae(this)){var r=Qn(this.g);t="";var s=r.length,i=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Re(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Re(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(ke(this,h,o),G&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==h&&Re(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Re(this),Le(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(je(this),ke(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Re(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Re(this),this.o=2,Le(this)):xe(this,this.Y-t)},r=Pe.prototype,r.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ue(this),this.g.concat()},r.get=function(t,e){return Be(this.h,t)?this.h[t]:e},r.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function $e(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ge(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ge){this.g=void 0!==e?e:t.g,ze(this,t.j),this.s=t.s,He(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Pe(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,ze(this,n[1]||"",!0),this.s=tn(n[2]||""),He(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ke(t){return new Ge(t)}function ze(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof Ge?Ke(t):new Ge(t,void 0)}function Ze(t,e,n,r){var s=new Ge(null,void 0);return t&&ze(s,t),e&&He(s,e),n&&We(s,n),r&&(s.l=r),s}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ge.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Pe,t.h=0,t.i&&$e(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function fn(t,e){return ln(t),e=pn(t,e),Be(t.g.h,e)}function dn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),I(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),dn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)fn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),fn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function En(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function _n(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Cn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return I(t.i)}function Sn(){}function In(){this.g=new Sn}function On(t,e,n){const r=n||"";try{Ve(t,(function(t,n){let s=t;l(t)&&(s=kt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function An(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(kn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(kn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(kn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(kn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function kn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Dn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){It.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=Cn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(Dn,de),Dn.prototype.g=function(){return new Nn(this.l,this.j)},Dn.prototype.i=function(t){return function(){return t}}({}),v(Nn,It);var xn=0;function jn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Rn(t)}function Rn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=xn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Rn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=xn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):Rn(this),3==this.readyState&&jn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},r.Ta=function(t){this.g&&(this.response=t,Ln(this))},r.ha=function(){this.g&&Ln(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function Fn(t){It.call(this),this.headers=new Pe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Vn,this.K=this.L=!1}v(Fn,It);var Vn="",Pn=/^https?$/i,Un=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function $n(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Gn(t),zn(t)}function Gn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Kn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))$t(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var s=String(t.H).match(qe)[1]||null;if(!s&&a.self&&a.self.location){var i=a.self.location.protocol;s=i.substr(0,i.length-1)}r=!Pn.test(s?s.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",Gn(t)}}finally{zn(t)}}}function zn(t,e){if(t.g){Hn(t);const r=t.g,s=t.C[0]?c:null;t.g=null,t.C=null,e||Ot(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Hn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Vn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new In,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ke(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new Ee(t,t.h,e,void 0),e.K=2,e.v=Ye(Ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),dr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&sr(t)}function sr(t){bn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function ir(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(m(t.Ha,t,e),gr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ke(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new Ee(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),_n(t.i,n),Ie(n,r,e)}function ar(t,e){t.j&&Ve({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=e,0>n)e=Math.max(0,s[a].h-100),o=!1;else try{On(c,t,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(m(t.Ga,t),gr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function fr(t){t.g=new Ee(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ke(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ke(e)),n.s=null,n.U=!0,Oe(n,t)}function dr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){dr(t),hr(t),t.g=null;var r=2}else{if(!En(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=se(),Ot(r,new ue(r,n,e,s)),sr(t)}else ur(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&ir(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:mr(t,5);break;case 4:mr(t,10);break;case 3:mr(t,6);break;default:mr(t,2)}}function gr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Ge("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||ze(n,"https"),Ye(n)),An(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==Cn(t.i).length&&0==t.l.length||(t.i.i.length=0,I(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&He(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fn(new Dn({ib:!0})):new Fn(t.qa),e.L=t.H,e}function wr(){}function Er(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function _r(t,e){It.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Tr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Cr(){be.call(this),this.status=1}function Sr(t){this.g=t}r=Fn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void $n(this,i)}t=n||"";const s=new Pe(this.headers);r&&Ve(r,(function(t,e){s.set(e,t)})),r=C(s.T()),n=a.FormData&&t instanceof a.FormData,!(0<=_(Un,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=$t(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$n(this,i)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),zn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Fn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Kn(this):this.cb())},r.cb=function(){Kn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ee(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=R(i),F(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,s,e),n=Ke(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&i&&Yn(n,this.o,i),_n(this.i,s),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),s.$=!0,Ie(s,n,null)):Ie(s,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,fr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(m(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),fr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Er.prototype.g=function(t,e){return new _r(t,e)},v(_r,It),_r.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),sr(t)},_r.prototype.close=function(){tr(this.g)},_r.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=kt(t),rr(this.g,e)):rr(this.g,t)},_r.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,_r.Z.M.call(this)},v(Tr,ve),v(Cr,be),v(Sr,wr),Sr.prototype.xa=function(){Ot(this.g,"a")},Sr.prototype.wa=function(t){Ot(this.g,new Tr(t))},Sr.prototype.va=function(t){Ot(this.g,new Cr(t))},Sr.prototype.ua=function(){Ot(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,_r.prototype.send=_r.prototype.u,_r.prototype.open=_r.prototype.m,_r.prototype.close=_r.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,fe.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",It.prototype.listen=It.prototype.N,Fn.prototype.listenOnce=Fn.prototype.O,Fn.prototype.getLastError=Fn.prototype.La,Fn.prototype.getLastErrorCode=Fn.prototype.Da,Fn.prototype.getStatus=Fn.prototype.ba,Fn.prototype.getResponseJson=Fn.prototype.Qa,Fn.prototype.getResponseText=Fn.prototype.ga,Fn.prototype.send=Fn.prototype.ea;var Ir=i.createWebChannelTransport=function(){return new Er},Or=i.getStatEventTarget=function(){return se()},Ar=i.ErrorCode=he,kr=i.EventType=fe,Dr=i.Event=ne,Nr=i.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},xr=i.FetchXmlHttpFactory=Dn,jr=i.WebChannel=ge,Lr=i.XhrIo=Fn}).call(this,n("c8ba"))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4a0a":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n("f075");class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"4b38":function(t,e,n){"use strict";var r=n("c6c1");n.d(e,"a",(function(){return r["f"]}));var s="firebase",i="9.8.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["g"])(s,i,"app")},5134:function(t,e,n){"use strict";(function(t){let r,s;function i(){var e;return void 0!==r||("undefined"!==typeof window&&window.performance?(r=!0,s=window.performance):"undefined"!==typeof t&&(null===(e=t.perf_hooks)||void 0===e?void 0:e.performance)?(r=!0,s=t.perf_hooks.performance):r=!1),r}function o(){return i()?s.now():Date.now()}n.d(e,"a",(function(){return o}))}).call(this,n("c8ba"))},5502:function(t,e,n){"use strict";n.d(e,"a",(function(){return tt}));var r=n("7a23"),s=n("abc5");const i="devtools-plugin:setup",o="plugin:settings:set";var a=n("5134");class c{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r="__vue-devtools-plugin-settings__"+t.id;let s=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(s,e)}catch(i){}this.fallbacks={getSettings(){return s},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(i){}s=t},now(){return Object(a["a"])()}},e&&e.on(o,(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function u(t,e){const n=t,r=Object(s["b"])(),o=Object(s["a"])(),a=s["c"]&&n.enableEarlyProxy;if(!o||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const t=a?new c(n,o):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else o.emit(i,t,e)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var l="store";function h(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function f(t){return null!==t&&"object"===typeof t}function d(t){return t&&"function"===typeof t.then}function p(t,e){if(!t)throw new Error("[vuex] "+e)}function g(t,e){return function(){return t(e)}}function m(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;b(t,n,[],t._modules.root,!0),v(t,n,e)}function v(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};h(i,(function(e,n){o[n]=g(e,t),Object.defineProperty(t.getters,n,{get:function(){return o[n]()},enumerable:!0})})),t._state=Object(r["i"])({data:e}),t.strict&&S(t),s&&n&&t._withCommit((function(){s.data=null}))}function b(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o]&&console.error("[vuex] duplicate namespace "+o+" for the namespaced module "+n.join("/")),t._modulesNamespaceMap[o]=r),!i&&!s){var a=I(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=w(t,o,n);r.forEachMutation((function(e,n){var r=o+n;_(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,s=e.handler||e;T(t,r,s,u)})),r.forEachGetter((function(e,n){var r=o+n;C(t,r,e,u)})),r.forEachChild((function(r,i){b(t,e,n.concat(i),r,s)}))}function w(t,e,n){var r=""===e,s={dispatch:r?t.dispatch:function(n,r,s){var i=O(n,r,s),o=i.payload,a=i.options,c=i.type;if(a&&a.root||(c=e+c,t._actions[c]))return t.dispatch(c,o);console.error("[vuex] unknown local action type: "+i.type+", global type: "+c)},commit:r?t.commit:function(n,r,s){var i=O(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=e+c,t._mutations[c])?t.commit(c,o,a):console.error("[vuex] unknown local mutation type: "+i.type+", global type: "+c)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return E(t,e)}},state:{get:function(){return I(t.state,n)}}}),s}function E(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function _(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push((function(e){n.call(t,r.state,e)}))}function T(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push((function(e){var s=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return d(s)||(s=Promise.resolve(s)),t._devtoolHook?s.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):s}))}function C(t,e,n,r){t._wrappedGetters[e]?console.error("[vuex] duplicate getter key: "+e):t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}function S(t){Object(r["k"])((function(){return t._state.data}),(function(){p(t._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function I(t,e){return e.reduce((function(t,e){return t[e]}),t)}function O(t,e,n){return f(t)&&t.type&&(n=e,e=t,t=t.type),p("string"===typeof t,"expects string as the type, but found "+typeof t+"."),{type:t,payload:e,options:n}}var A="vuex bindings",k="vuex:mutations",D="vuex:actions",N="vuex",x=0;function j(t,e){u({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[A]},(function(n){n.addTimelineLayer({id:k,label:"Vuex Mutations",color:L}),n.addTimelineLayer({id:D,label:"Vuex Actions",color:L}),n.addInspector({id:N,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===N)if(n.filter){var r=[];U(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[P(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===N){var r=n.nodeId;E(e,r),n.state=B($(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===N){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit((function(){n.set(e._state.data,s,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(N),n.sendInspectorState(N),n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=x++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:D,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},s=Date.now()-t._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:D,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var L=8702998,R=6710886,M=16777215,F={label:"namespaced",textColor:M,backgroundColor:R};function V(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function P(t,e){return{id:e||"root",label:V(e),tags:t.namespaced?[F]:[],children:Object.keys(t._children).map((function(n){return P(t._children[n],e+n+"/")}))}}function U(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[F]:[]}),Object.keys(e._children).forEach((function(s){U(t,e._children[s],n,r+s+"/")}))}function B(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var i=q(e);s.getters=Object.keys(i).map((function(t){return{key:t.endsWith("/")?V(t):t,editable:!1,value:G((function(){return i[t]}))}}))}return s}function q(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach((function(t){s[t]||(s[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),s=s[t]._custom.value})),s[i]=G((function(){return t[n]}))}else e[n]=G((function(){return t[n]}))})),e}function $(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,s){var i=t[r];if(!i)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?i:i._children}),"root"===e?t:t.root._children)}function G(t){try{return t()}catch(e){return e}}var K=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},z={namespaced:{configurable:!0}};z.namespaced.get=function(){return!!this._rawModule.namespaced},K.prototype.addChild=function(t,e){this._children[t]=e},K.prototype.removeChild=function(t){delete this._children[t]},K.prototype.getChild=function(t){return this._children[t]},K.prototype.hasChild=function(t){return t in this._children},K.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},K.prototype.forEachChild=function(t){h(this._children,t)},K.prototype.forEachGetter=function(t){this._rawModule.getters&&h(this._rawModule.getters,t)},K.prototype.forEachAction=function(t){this._rawModule.actions&&h(this._rawModule.actions,t)},K.prototype.forEachMutation=function(t){this._rawModule.mutations&&h(this._rawModule.mutations,t)},Object.defineProperties(K.prototype,z);var H=function(t){this.register([],t,!1)};function W(t,e,n){if(J(t,n),e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");W(t.concat(r),e.getChild(r),n.modules[r])}}H.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},H.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},H.prototype.update=function(t){W([],this.root,t)},H.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0),J(t,e);var s=new K(e,n);if(0===t.length)this.root=s;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],s)}e.modules&&h(e.modules,(function(e,s){r.register(t.concat(s),e,n)}))},H.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r?r.runtime&&e.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},H.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var Q={assert:function(t){return"function"===typeof t},expected:"function"},X={assert:function(t){return"function"===typeof t||"object"===typeof t&&"function"===typeof t.handler},expected:'function or object with "handler" function'},Y={getters:Q,mutations:Q,actions:X};function J(t,e){Object.keys(Y).forEach((function(n){if(e[n]){var r=Y[n];h(e[n],(function(e,s){p(r.assert(e),Z(t,n,s,e,r.expected))}))}}))}function Z(t,e,n,r,s){var i=e+" should be "+s+' but "'+e+"."+n+'"';return t.length>0&&(i+=' in module "'+t.join(".")+'"'),i+=" is "+JSON.stringify(r)+".",i}function tt(t){return new et(t)}var et=function t(e){var n=this;void 0===e&&(e={}),p("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),p(this instanceof t,"store must be called with the new operator.");var r=e.plugins;void 0===r&&(r=[]);var s=e.strict;void 0===s&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new H(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var o=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(t,e){return c.call(o,t,e)},this.commit=function(t,e,n){return u.call(o,t,e,n)},this.strict=s;var l=this._modules.root.state;b(this,l,[],this._modules.root),v(this,l),r.forEach((function(t){return t(n)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||l,this),t.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&j(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){p(!1,"use store.replaceState() to explicit replace store state.")},et.prototype.commit=function(t,e,n){var r=this,s=O(t,e,n),i=s.type,o=s.payload,a=s.options,c={type:i,payload:o},u=this._mutations[i];u?(this._withCommit((function(){u.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+i+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+i)},et.prototype.dispatch=function(t,e){var n=this,r=O(t,e),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(t){return t(i)}))):a[0](i);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}e(t)}))}))}console.error("[vuex] unknown action type: "+s)},et.prototype.subscribe=function(t,e){return m(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return m(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var s=this;return p("function"===typeof t,"store.watch only accepts a function."),Object(r["k"])((function(){return t(s.state,s.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),p(Array.isArray(t),"module path must be a string or an Array."),p(t.length>0,"cannot register the root module by using registerModule."),this._modules.register(t,e),b(this,this.state,t,this._modules.get(t),n.preserveState),v(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),p(Array.isArray(t),"module path must be a string or an Array."),this._modules.unregister(t),this._withCommit((function(){var n=I(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),y(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),p(Array.isArray(t),"module path must be a string or an Array."),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);it((function(t,e){var n={};return st(e)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),rt(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=ot(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof s?s.call(this,e,n):e[s]},n[r].vuex=!0})),n})),it((function(t,e){var n={};return st(e)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),rt(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=ot(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n})),it((function(t,e){var n={};return st(e)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),rt(e).forEach((function(e){var r=e.key,s=e.val;s=t+s,n[r]=function(){if(!t||ot(this.$store,"mapGetters",t)){if(s in this.$store.getters)return this.$store.getters[s];console.error("[vuex] unknown getter: "+s)}},n[r].vuex=!0})),n})),it((function(t,e){var n={};return st(e)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),rt(e).forEach((function(e){var r=e.key,s=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=ot(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof s?s.apply(this,[r].concat(e)):r.apply(this.$store,[s].concat(e))}})),n}));function rt(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||f(t)}function it(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var r=t._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+e+"(): "+n),r}},"6b0d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},"7a23":function(t,e,n){"use strict";n.d(e,"i",(function(){return wt})),n.d(e,"b",(function(){return Sr})),n.d(e,"c",(function(){return Fr})),n.d(e,"d",(function(){return Cr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return xr})),n.d(e,"g",(function(){return Ne})),n.d(e,"h",(function(){return br})),n.d(e,"j",(function(){return vn})),n.d(e,"k",(function(){return je})),n.d(e,"a",(function(){return ui}));var r=n("9ff4");let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,u=t=>(t.n&p)>0,l=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!u(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,E=!0,p=1<<++d,d<=g?l(this):w(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(w(this),this.onStop&&this.onStop(),this.active=!1)}}function w(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const _=[];function T(){_.push(E),E=!1}function C(){const t=_.pop();E=void 0===t||t}function S(t,e,n){if(E&&m){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;I(r,s)}}function I(t,e){let n=!1;d<=g?u(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function O(t,e,n,s,i,o){const c=f.get(t);if(!c)return;let u=[];if("clear"===e)u=[...c.values()];else if("length"===n&&Object(r["o"])(t))c.forEach((t,e)=>{("length"===e||e>=s)&&u.push(t)});else switch(void 0!==n&&u.push(c.get(n)),e){case"add":Object(r["o"])(t)?Object(r["t"])(n)&&u.push(c.get("length")):(u.push(c.get(y)),Object(r["u"])(t)&&u.push(c.get(v)));break;case"delete":Object(r["o"])(t)||(u.push(c.get(y)),Object(r["u"])(t)&&u.push(c.get(v)));break;case"set":Object(r["u"])(t)&&u.push(c.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const t=[];for(const e of u)e&&t.push(...e);A(a(t))}}function A(t,e){const n=Object(r["o"])(t)?t:[...t];for(const r of n)r.computed&&k(r,e);for(const r of n)r.computed||k(r,e)}function k(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const D=Object(r["I"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r["F"])),x=F(),j=F(!1,!0),L=F(!0),R=M();function M(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=At(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(At)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){T();const n=At(this)[e].apply(this,t);return C(),n}}),t}function F(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=Object(r["o"])(n);if(!t&&o&&Object(r["k"])(R,s))return Reflect.get(R,s,i);const a=Reflect.get(n,s,i);return(Object(r["F"])(s)?N.has(s):D(s))?a:(t||S(n,"get",s),e?a:Lt(a)?o&&Object(r["t"])(s)?a:a.value:Object(r["w"])(a)?t?_t(a):wt(a):a)}}const V=U(),P=U(!0);function U(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Lt(o)&&!Lt(s))return!1;if(!t&&!St(s)&&(It(s)||(s=At(s),o=At(o)),!Object(r["o"])(e)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=Object(r["o"])(e)&&Object(r["t"])(n)?Number(n)<e.length:Object(r["k"])(e,n),c=Reflect.set(e,n,s,i);return e===At(i)&&(a?Object(r["j"])(s,o)&&O(e,"set",n,s,o):O(e,"add",n,s)),c}}function B(t,e){const n=Object(r["k"])(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&O(t,"delete",e,void 0,s),i}function q(t,e){const n=Reflect.has(t,e);return Object(r["F"])(e)&&N.has(e)||S(t,"has",e),n}function $(t){return S(t,"iterate",Object(r["o"])(t)?"length":y),Reflect.ownKeys(t)}const G={get:x,set:V,deleteProperty:B,has:q,ownKeys:$},K={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},z=Object(r["h"])({},G,{get:j,set:P}),H=t=>t,W=t=>Reflect.getPrototypeOf(t);function Q(t,e,n=!1,r=!1){t=t["__v_raw"];const s=At(t),i=At(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=W(s),a=r?H:n?Nt:Dt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=At(n),s=At(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Y(t,e=!1){return t=t["__v_raw"],!e&&S(At(t),"iterate",y),Reflect.get(t,"size",t)}function J(t){t=At(t);const e=At(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),O(e,"add",t,t)),this}function Z(t,e){e=At(e);const n=At(this),{has:s,get:i}=W(n);let o=s.call(n,t);o||(t=At(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?Object(r["j"])(e,a)&&O(n,"set",t,e,a):O(n,"add",t,e),this}function tt(t){const e=At(this),{has:n,get:r}=W(e);let s=n.call(e,t);s||(t=At(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&O(e,"delete",t,void 0,i),o}function et(){const t=At(this),e=0!==t.size,n=void 0,r=t.clear();return e&&O(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=At(i),a=e?H:t?Nt:Dt;return!t&&S(o,"iterate",y),i.forEach((t,e)=>n.call(r,a(t),a(e),s))}}function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=At(i),a=Object(r["u"])(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=i[t](...s),h=n?H:e?Nt:Dt;return!e&&S(o,"iterate",u?v:y),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return Q(this,t)},get size(){return Y(this)},has:X,add:J,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return Q(this,t,!1,!0)},get size(){return Y(this)},has:X,add:J,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return Q(this,t,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!1)},r={get(t){return Q(this,t,!0,!0)},get size(){return Y(this,!0)},has(t){return X.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach(s=>{t[s]=rt(s,!1,!1),n[s]=rt(s,!0,!1),e[s]=rt(s,!1,!0),r[s]=rt(s,!0,!0)}),[t,n,e,r]}const[ot,at,ct,ut]=it();function lt(t,e){const n=e?t?ut:ct:t?at:ot;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get(Object(r["k"])(n,s)&&s in e?n:e,s,i)}const ht={get:lt(!1,!1)},ft={get:lt(!1,!0)},dt={get:lt(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt(Object(r["O"])(t))}function wt(t){return St(t)?t:Tt(t,!1,G,ht,pt)}function Et(t){return Tt(t,!1,z,ft,gt)}function _t(t){return Tt(t,!0,K,dt,mt)}function Tt(t,e,n,s,i){if(!Object(r["w"])(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=bt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Ct(t){return St(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function Ot(t){return Ct(t)||St(t)}function At(t){const e=t&&t["__v_raw"];return e?At(e):t}function kt(t){return Object(r["g"])(t,"__v_skip",!0),t}const Dt=t=>Object(r["w"])(t)?wt(t):t,Nt=t=>Object(r["w"])(t)?_t(t):t;function xt(t){E&&m&&(t=At(t),I(t.dep||(t.dep=a())))}function jt(t,e){t=At(t),t.dep&&A(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Rt(t){return Lt(t)?t.value:t}const Mt={get:(t,e,n)=>Rt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ft(t){return Ct(t)?t:new Proxy(t,Mt)}class Vt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new b(t,()=>{this._dirty||(this._dirty=!0,jt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=At(this);return xt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Pt(t,e,n=!1){let s,i;const o=Object(r["q"])(t);o?(s=t,i=r["d"]):(s=t.get,i=t.set);const a=new Vt(s,i,o||!i,n);return a}function Ut(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){qt(i,e,n)}return s}function Bt(t,e,n,s){if(Object(r["q"])(t)){const i=Ut(t,e,n,s);return i&&Object(r["z"])(i)&&i.catch(t=>{qt(t,e,n)}),i}const i=[];for(let r=0;r<t.length;r++)i.push(Bt(t[r],e,n,s));return i}function qt(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,i=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,i))return;r=r.parent}const o=e.appContext.config.errorHandler;if(o)return void Ut(o,null,10,[t,s,i])}$t(t,n,s,r)}function $t(t,e,n,r=!0){console.error(t)}let Gt=!1,Kt=!1;const zt=[];let Ht=0;const Wt=[];let Qt=null,Xt=0;const Yt=[];let Jt=null,Zt=0;const te=Promise.resolve();let ee=null,ne=null;function re(t){const e=ee||te;return t?e.then(this?t.bind(this):t):e}function se(t){let e=Ht+1,n=zt.length;while(e<n){const r=e+n>>>1,s=de(zt[r]);s<t?e=r+1:n=r}return e}function ie(t){zt.length&&zt.includes(t,Gt&&t.allowRecurse?Ht+1:Ht)||t===ne||(null==t.id?zt.push(t):zt.splice(se(t.id),0,t),oe())}function oe(){Gt||Kt||(Kt=!0,ee=te.then(pe))}function ae(t){const e=zt.indexOf(t);e>Ht&&zt.splice(e,1)}function ce(t,e,n,s){Object(r["o"])(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?s+1:s)||n.push(t),oe()}function ue(t){ce(t,Qt,Wt,Xt)}function le(t){ce(t,Jt,Yt,Zt)}function he(t,e=null){if(Wt.length){for(ne=e,Qt=[...new Set(Wt)],Wt.length=0,Xt=0;Xt<Qt.length;Xt++)Qt[Xt]();Qt=null,Xt=0,ne=null,he(t,e)}}function fe(t){if(he(),Yt.length){const t=[...new Set(Yt)];if(Yt.length=0,Jt)return void Jt.push(...t);for(Jt=t,Jt.sort((t,e)=>de(t)-de(e)),Zt=0;Zt<Jt.length;Zt++)Jt[Zt]();Jt=null,Zt=0}}const de=t=>null==t.id?1/0:t.id;function pe(t){Kt=!1,Gt=!0,he(t),zt.sort((t,e)=>de(t)-de(e));r["d"];try{for(Ht=0;Ht<zt.length;Ht++){const t=zt[Ht];t&&!1!==t.active&&Ut(t,null,14)}}finally{Ht=0,zt.length=0,fe(t),Gt=!1,ee=null,(zt.length||Wt.length||Yt.length)&&pe(t)}}new Set;new Map;function ge(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||r["b"];let i=n;const o=e.startsWith("update:"),a=o&&e.slice(7);if(a&&a in s){const t=("modelValue"===a?"model":a)+"Modifiers",{number:e,trim:o}=s[t]||r["b"];o&&(i=n.map(t=>t.trim())),e&&(i=n.map(r["N"]))}let c;let u=s[c=Object(r["M"])(e)]||s[c=Object(r["M"])(Object(r["e"])(e))];!u&&o&&(u=s[c=Object(r["M"])(Object(r["l"])(e))]),u&&Bt(u,t,6,i);const l=s[c+"Once"];if(l){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,Bt(l,t,6,i)}}function me(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!Object(r["q"])(t)){const s=t=>{const n=me(t,e,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}return o||c?(Object(r["o"])(o)?o.forEach(t=>a[t]=null):Object(r["h"])(a,o),s.set(t,a),a):(s.set(t,null),null)}function ye(t,e){return!(!t||!Object(r["x"])(e))&&(e=e.slice(2).replace(/Once$/,""),Object(r["k"])(t,e[0].toLowerCase()+e.slice(1))||Object(r["k"])(t,Object(r["l"])(e))||Object(r["k"])(t,e))}let ve=null,be=null;function we(t){const e=ve;return ve=t,be=t&&t.type.__scopeId||null,e}function Ee(t,e=ve,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&_r(-1);const s=we(e),i=t(...n);return we(s),r._d&&_r(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function _e(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:o,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:m}=t;let y,v;const b=we(t);try{if(4&n.shapeFlag){const t=i||s;y=Vr(h.call(t,t,f,o,p,d,g)),v=u}else{const t=e;0,y=Vr(t.length>1?t(o,{attrs:u,slots:c,emit:l}):t(o,null)),v=e.props?u:Te(u)}}catch(E){yr.length=0,qt(E,t,1),y=xr(gr)}let w=y;if(v&&!1!==m){const t=Object.keys(v),{shapeFlag:e}=w;t.length&&7&e&&(a&&t.some(r["v"])&&(v=Ce(v,a)),w=Rr(w,v))}return n.dirs&&(w=Rr(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),y=w,we(b),y}const Te=t=>{let e;for(const n in t)("class"===n||"style"===n||Object(r["x"])(n))&&((e||(e={}))[n]=t[n]);return e},Ce=(t,e)=>{const n={};for(const s in t)Object(r["v"])(s)&&s.slice(9)in e||(n[s]=t[s]);return n};function Se(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Ie(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?Ie(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!ye(u,n))return!0}}return!1}function Ie(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ye(n,i))return!0}return!1}function Oe({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const Ae=t=>t.__isSuspense;function ke(t,e){e&&e.pendingBranch?Object(r["o"])(t)?e.effects.push(...t):e.effects.push(t):le(t)}function De(t,e){if(zr){let n=zr.provides;const r=zr.parent&&zr.parent.provides;r===n&&(n=zr.provides=Object.create(r)),n[t]=e}else 0}function Ne(t,e,n=!1){const s=zr||ve;if(s){const i=null==s.parent?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Object(r["q"])(e)?e.call(s.proxy):e}else 0}const xe={};function je(t,e,n){return Le(t,e,n)}function Le(t,e,{immediate:n,deep:s,flush:i,onTrack:o,onTrigger:a}=r["b"]){const c=zr;let u,l,h=!1,f=!1;if(Lt(t)?(u=()=>t.value,h=It(t)):Ct(t)?(u=()=>t,s=!0):Object(r["o"])(t)?(f=!0,h=t.some(t=>Ct(t)||It(t)),u=()=>t.map(t=>Lt(t)?t.value:Ct(t)?Fe(t):Object(r["q"])(t)?Ut(t,c,2):void 0)):u=Object(r["q"])(t)?e?()=>Ut(t,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Bt(t,c,3,[d])}:r["d"],e&&s){const t=u;u=()=>Fe(t())}let d=t=>{l=y.onStop=()=>{Ut(t,c,4)}};if(Zr)return d=r["d"],e?n&&Bt(e,c,3,[u(),f?[]:void 0,d]):u(),r["d"];let p=f?[]:xe;const g=()=>{if(y.active)if(e){const t=y.run();(s||h||(f?t.some((t,e)=>Object(r["j"])(t,p[e])):Object(r["j"])(t,p)))&&(l&&l(),Bt(e,c,3,[t,p===xe?void 0:p,d]),p=t)}else y.run()};let m;g.allowRecurse=!!e,m="sync"===i?g:"post"===i?()=>or(g,c&&c.suspense):()=>ue(g);const y=new b(u,m);return e?n?g():p=y.run():"post"===i?or(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&Object(r["L"])(c.scope.effects,y)}}function Re(t,e,n){const s=this.proxy,i=Object(r["E"])(t)?t.includes(".")?Me(s,t):()=>s[t]:t.bind(s,s);let o;Object(r["q"])(e)?o=e:(o=e.handler,n=e);const a=zr;Wr(this);const c=Le(i,o.bind(s),n);return a?Wr(a):Qr(),c}function Me(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function Fe(t,e){if(!Object(r["w"])(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),Lt(t))Fe(t.value,e);else if(Object(r["o"])(t))for(let n=0;n<t.length;n++)Fe(t[n],e);else if(Object(r["C"])(t)||Object(r["u"])(t))t.forEach(t=>{Fe(t,e)});else if(Object(r["y"])(t))for(const n in t)Fe(t[n],e);return t}function Ve(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return an(()=>{t.isMounted=!0}),ln(()=>{t.isUnmounting=!0}),t}const Pe=[Function,Array],Ue={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},setup(t,{slots:e}){const n=Hr(),r=Ve();let s;return()=>{const i=e.default&&He(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){let t=!1;for(const e of i)if(e.type!==gr){0,o=e,t=!0;break}}const a=At(t),{mode:c}=a;if(r.isLeaving)return Ge(o);const u=Ke(o);if(!u)return Ge(o);const l=$e(u,a,r,n);ze(u,l);const h=n.subTree,f=h&&Ke(h);let d=!1;const{getTransitionKey:p}=u.type;if(p){const t=p();void 0===s?s=t:t!==s&&(s=t,d=!0)}if(f&&f.type!==gr&&(!Or(u,f)||d)){const t=$e(f,a,r,n);if(ze(f,t),"out-in"===c)return r.isLeaving=!0,t.afterLeave=()=>{r.isLeaving=!1,n.update()},Ge(o);"in-out"===c&&u.type!==gr&&(t.delayLeave=(t,e,n)=>{const s=qe(r,f);s[String(f.key)]=f,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},Be=Ue;function qe(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function $e(t,e,n,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:l,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:m,onAppear:y,onAfterAppear:v,onAppearCancelled:b}=e,w=String(t.key),E=qe(n,t),_=(t,e)=>{t&&Bt(t,s,9,e)},T=(t,e)=>{const n=e[1];_(t,e),Object(r["o"])(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},C={mode:o,persisted:a,beforeEnter(e){let r=c;if(!n.isMounted){if(!i)return;r=m||c}e._leaveCb&&e._leaveCb(!0);const s=E[w];s&&Or(t,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[e])},enter(t){let e=u,r=l,s=h;if(!n.isMounted){if(!i)return;e=y||u,r=v||l,s=b||h}let o=!1;const a=t._enterCb=e=>{o||(o=!0,_(e?s:r,[t]),C.delayedLeave&&C.delayedLeave(),t._enterCb=void 0)};e?T(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();_(f,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),_(n?g:p,[e]),e._leaveCb=void 0,E[s]===t&&delete E[s])};E[s]=t,d?T(d,[e,o]):o()},clone(t){return $e(t,e,n,s)}};return C}function Ge(t){if(Qe(t))return t=Rr(t),t.children=null,t}function Ke(t){return Qe(t)?t.children?t.children[0]:void 0:t}function ze(t,e){6&t.shapeFlag&&t.component?ze(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function He(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===dr?(128&o.patchFlag&&s++,r=r.concat(He(o.children,e,a))):(e||o.type!==gr)&&r.push(null!=a?Rr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const We=t=>!!t.type.__asyncLoader;const Qe=t=>t.type.__isKeepAlive;RegExp,RegExp;function Xe(t,e){return Object(r["o"])(t)?t.some(t=>Xe(t,e)):Object(r["E"])(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function Ye(t,e){Ze(t,"a",e)}function Je(t,e){Ze(t,"da",e)}function Ze(t,e,n=zr){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(rn(e,r,n),n){let t=n.parent;while(t&&t.parent)Qe(t.parent.vnode)&&tn(r,e,n,t),t=t.parent}}function tn(t,e,n,s){const i=rn(e,t,s,!0);hn(()=>{Object(r["L"])(s[e],i)},n)}function en(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function nn(t){return 128&t.shapeFlag?t.ssContent:t}function rn(t,e,n=zr,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...r)=>{if(n.isUnmounted)return;T(),Wr(n);const s=Bt(e,n,t,r);return Qr(),C(),s});return r?s.unshift(i):s.push(i),i}}const sn=t=>(e,n=zr)=>(!Zr||"sp"===t)&&rn(t,e,n),on=sn("bm"),an=sn("m"),cn=sn("bu"),un=sn("u"),ln=sn("bum"),hn=sn("um"),fn=sn("sp"),dn=sn("rtg"),pn=sn("rtc");function gn(t,e=zr){rn("ec",t,e)}function mn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(T(),Bt(c,n,8,[t.el,a,t,e]),C())}}const yn="components";function vn(t,e){return wn(yn,t,!0,e)||t}const bn=Symbol();function wn(t,e,n=!0,s=!1){const i=ve||zr;if(i){const n=i.type;if(t===yn){const t=as(n,!1);if(t&&(t===e||t===Object(r["e"])(e)||t===Object(r["f"])(Object(r["e"])(e))))return n}const o=En(i[t]||n[t],e)||En(i.appContext[t],e);return!o&&s?n:o}}function En(t,e){return t&&(t[e]||t[Object(r["e"])(e)]||t[Object(r["f"])(Object(r["e"])(e))])}const _n=t=>t?Xr(t)?os(t)||t.proxy:_n(t.parent):null,Tn=Object(r["h"])(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_n(t.parent),$root:t=>_n(t.root),$emit:t=>t.emit,$options:t=>Dn(t),$forceUpdate:t=>t.f||(t.f=()=>ie(t.update)),$nextTick:t=>t.n||(t.n=re.bind(t.proxy)),$watch:t=>Re.bind(t)}),Cn={get({_:t},e){const{ctx:n,setupState:s,data:i,props:o,accessCache:a,type:c,appContext:u}=t;let l;if("$"!==e[0]){const c=a[e];if(void 0!==c)switch(c){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(s!==r["b"]&&Object(r["k"])(s,e))return a[e]=1,s[e];if(i!==r["b"]&&Object(r["k"])(i,e))return a[e]=2,i[e];if((l=t.propsOptions[0])&&Object(r["k"])(l,e))return a[e]=3,o[e];if(n!==r["b"]&&Object(r["k"])(n,e))return a[e]=4,n[e];Sn&&(a[e]=0)}}const h=Tn[e];let f,d;return h?("$attrs"===e&&S(t,"get",e),h(t)):(f=c.__cssModules)&&(f=f[e])?f:n!==r["b"]&&Object(r["k"])(n,e)?(a[e]=4,n[e]):(d=u.config.globalProperties,Object(r["k"])(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:s,setupState:i,ctx:o}=t;return i!==r["b"]&&Object(r["k"])(i,e)?(i[e]=n,!0):s!==r["b"]&&Object(r["k"])(s,e)?(s[e]=n,!0):!Object(r["k"])(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==r["b"]&&Object(r["k"])(t,a)||e!==r["b"]&&Object(r["k"])(e,a)||(c=o[0])&&Object(r["k"])(c,a)||Object(r["k"])(s,a)||Object(r["k"])(Tn,a)||Object(r["k"])(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:Object(r["k"])(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Sn=!0;function In(t){const e=Dn(t),n=t.proxy,s=t.ctx;Sn=!1,e.beforeCreate&&An(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:E,render:_,renderTracked:T,renderTriggered:C,errorCaptured:S,serverPrefetch:I,expose:O,inheritAttrs:A,components:k,directives:D,filters:N}=e,x=null;if(l&&On(l,s,x,t.appContext.config.unwrapInjectedRef),a)for(const L in a){const t=a[L];Object(r["q"])(t)&&(s[L]=t.bind(n))}if(i){0;const e=i.call(n,n);0,Object(r["w"])(e)&&(t.data=wt(e))}if(Sn=!0,o)for(const L in o){const t=o[L],e=Object(r["q"])(t)?t.bind(n,n):Object(r["q"])(t.get)?t.get.bind(n,n):r["d"];0;const i=!Object(r["q"])(t)&&Object(r["q"])(t.set)?t.set.bind(n):r["d"],a=us({get:e,set:i});Object.defineProperty(s,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t})}if(c)for(const r in c)kn(c[r],s,n,r);if(u){const t=Object(r["q"])(u)?u.call(n):u;Reflect.ownKeys(t).forEach(e=>{De(e,t[e])})}function j(t,e){Object(r["o"])(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(h&&An(h,t,"c"),j(on,f),j(an,d),j(cn,p),j(un,g),j(Ye,m),j(Je,y),j(gn,S),j(pn,T),j(dn,C),j(ln,b),j(hn,E),j(fn,I),Object(r["o"])(O))if(O.length){const e=t.exposed||(t.exposed={});O.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});_&&t.render===r["d"]&&(t.render=_),null!=A&&(t.inheritAttrs=A),k&&(t.components=k),D&&(t.directives=D)}function On(t,e,n=r["d"],s=!1){Object(r["o"])(t)&&(t=Rn(t));for(const i in t){const n=t[i];let o;o=Object(r["w"])(n)?"default"in n?Ne(n.from||i,n.default,!0):Ne(n.from||i):Ne(n),Lt(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[i]=o}}function An(t,e,n){Bt(Object(r["o"])(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function kn(t,e,n,s){const i=s.includes(".")?Me(n,s):()=>n[s];if(Object(r["E"])(t)){const n=e[t];Object(r["q"])(n)&&je(i,n)}else if(Object(r["q"])(t))je(i,t.bind(n));else if(Object(r["w"])(t))if(Object(r["o"])(t))t.forEach(t=>kn(t,e,n,s));else{const s=Object(r["q"])(t.handler)?t.handler.bind(n):e[t.handler];Object(r["q"])(s)&&je(i,s,t)}else 0}function Dn(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach(t=>Nn(c,t,o,!0)),Nn(c,e,o)):c=e,i.set(e,c),c}function Nn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Nn(t,i,n,!0),s&&s.forEach(e=>Nn(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=xn[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const xn={data:jn,props:Fn,emits:Fn,methods:Fn,computed:Fn,beforeCreate:Mn,created:Mn,beforeMount:Mn,mounted:Mn,beforeUpdate:Mn,updated:Mn,beforeDestroy:Mn,beforeUnmount:Mn,destroyed:Mn,unmounted:Mn,activated:Mn,deactivated:Mn,errorCaptured:Mn,serverPrefetch:Mn,components:Fn,directives:Fn,watch:Vn,provide:jn,inject:Ln};function jn(t,e){return e?t?function(){return Object(r["h"])(Object(r["q"])(t)?t.call(this,this):t,Object(r["q"])(e)?e.call(this,this):e)}:e:t}function Ln(t,e){return Fn(Rn(t),Rn(e))}function Rn(t){if(Object(r["o"])(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mn(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?Object(r["h"])(Object(r["h"])(Object.create(null),t),e):e}function Vn(t,e){if(!t)return e;if(!e)return t;const n=Object(r["h"])(Object.create(null),t);for(const r in e)n[r]=Mn(t[r],e[r]);return n}function Pn(t,e,n,s=!1){const i={},o={};Object(r["g"])(o,Ar,1),t.propsDefaults=Object.create(null),Bn(t,e,i,o);for(const r in t.propsOptions[0])r in i||(i[r]=void 0);n?t.props=s?i:Et(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function Un(t,e,n,s){const{props:i,attrs:o,vnode:{patchFlag:a}}=t,c=At(i),[u]=t.propsOptions;let l=!1;if(!(s||a>0)||16&a){let s;Bn(t,e,i,o)&&(l=!0);for(const o in c)e&&(Object(r["k"])(e,o)||(s=Object(r["l"])(o))!==o&&Object(r["k"])(e,s))||(u?!n||void 0===n[o]&&void 0===n[s]||(i[o]=qn(u,c,o,void 0,t,!0)):delete i[o]);if(o!==c)for(const t in o)e&&Object(r["k"])(e,t)||(delete o[t],l=!0)}else if(8&a){const n=t.vnode.dynamicProps;for(let s=0;s<n.length;s++){let a=n[s];if(ye(t.emitsOptions,a))continue;const h=e[a];if(u)if(Object(r["k"])(o,a))h!==o[a]&&(o[a]=h,l=!0);else{const e=Object(r["e"])(a);i[e]=qn(u,c,e,h,t,!1)}else h!==o[a]&&(o[a]=h,l=!0)}}l&&O(t,"set","$attrs")}function Bn(t,e,n,s){const[i,o]=t.propsOptions;let a,c=!1;if(e)for(let u in e){if(Object(r["A"])(u))continue;const l=e[u];let h;i&&Object(r["k"])(i,h=Object(r["e"])(u))?o&&o.includes(h)?(a||(a={}))[h]=l:n[h]=l:ye(t.emitsOptions,u)||u in s&&l===s[u]||(s[u]=l,c=!0)}if(o){const e=At(n),s=a||r["b"];for(let a=0;a<o.length;a++){const c=o[a];n[c]=qn(i,e,c,s[c],t,!Object(r["k"])(s,c))}}return c}function qn(t,e,n,s,i,o){const a=t[n];if(null!=a){const t=Object(r["k"])(a,"default");if(t&&void 0===s){const t=a.default;if(a.type!==Function&&Object(r["q"])(t)){const{propsDefaults:r}=i;n in r?s=r[n]:(Wr(i),s=r[n]=t.call(null,e),Qr())}else s=t}a[0]&&(o&&!t?s=!1:!a[1]||""!==s&&s!==Object(r["l"])(n)||(s=!0))}return s}function $n(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const o=t.props,a={},c=[];let u=!1;if(!Object(r["q"])(t)){const s=t=>{u=!0;const[n,s]=$n(t,e,!0);Object(r["h"])(a,n),s&&c.push(...s)};!n&&e.mixins.length&&e.mixins.forEach(s),t.extends&&s(t.extends),t.mixins&&t.mixins.forEach(s)}if(!o&&!u)return s.set(t,r["a"]),r["a"];if(Object(r["o"])(o))for(let h=0;h<o.length;h++){0;const t=Object(r["e"])(o[h]);Gn(t)&&(a[t]=r["b"])}else if(o){0;for(const t in o){const e=Object(r["e"])(t);if(Gn(e)){const n=o[t],s=a[e]=Object(r["o"])(n)||Object(r["q"])(n)?{type:n}:n;if(s){const t=Hn(Boolean,s.type),n=Hn(String,s.type);s[0]=t>-1,s[1]=n<0||t<n,(t>-1||Object(r["k"])(s,"default"))&&c.push(e)}}}}const l=[a,c];return s.set(t,l),l}function Gn(t){return"$"!==t[0]}function Kn(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function zn(t,e){return Kn(t)===Kn(e)}function Hn(t,e){return Object(r["o"])(e)?e.findIndex(e=>zn(e,t)):Object(r["q"])(e)&&zn(e,t)?0:-1}const Wn=t=>"_"===t[0]||"$stable"===t,Qn=t=>Object(r["o"])(t)?t.map(Vr):[Vr(t)],Xn=(t,e,n)=>{if(e._n)return e;const r=Ee((...t)=>Qn(e(...t)),n);return r._c=!1,r},Yn=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Wn(i))continue;const n=t[i];if(Object(r["q"])(n))e[i]=Xn(i,n,s);else if(null!=n){0;const t=Qn(n);e[i]=()=>t}}},Jn=(t,e)=>{const n=Qn(e);t.slots.default=()=>n},Zn=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=At(e),Object(r["g"])(e,"_",n)):Yn(e,t.slots={})}else t.slots={},e&&Jn(t,e);Object(r["g"])(t.slots,Ar,1)},tr=(t,e,n)=>{const{vnode:s,slots:i}=t;let o=!0,a=r["b"];if(32&s.shapeFlag){const t=e._;t?n&&1===t?o=!1:(Object(r["h"])(i,e),n||1!==t||delete i._):(o=!e.$stable,Yn(e,i)),a=e}else e&&(Jn(t,e),a={default:1});if(o)for(const r in i)Wn(r)||r in a||delete i[r]};function er(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nr=0;function rr(t,e){return function(n,s=null){Object(r["q"])(n)||(n=Object.assign({},n)),null==s||Object(r["w"])(s)||(s=null);const i=er(),o=new Set;let a=!1;const c=i.app={_uid:nr++,_component:n,_props:s,_container:null,_context:i,_instance:null,version:hs,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&Object(r["q"])(t.install)?(o.add(t),t.install(c,...e)):Object(r["q"])(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(r,o,u){if(!a){0;const l=xr(n,s);return l.appContext=i,o&&e?e(l,r):t(l,r,u),a=!0,c._container=r,r.__vue_app__=c,os(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function sr(t,e,n,s,i=!1){if(Object(r["o"])(t))return void t.forEach((t,o)=>sr(t,e&&(Object(r["o"])(e)?e[o]:e),n,s,i));if(We(s)&&!i)return;const o=4&s.shapeFlag?os(s.component)||s.component.proxy:s.el,a=i?null:o,{i:c,r:u}=t;const l=e&&e.r,h=c.refs===r["b"]?c.refs={}:c.refs,f=c.setupState;if(null!=l&&l!==u&&(Object(r["E"])(l)?(h[l]=null,Object(r["k"])(f,l)&&(f[l]=null)):Lt(l)&&(l.value=null)),Object(r["q"])(u))Ut(u,c,12,[a,h]);else{const e=Object(r["E"])(u),s=Lt(u);if(e||s){const c=()=>{if(t.f){const n=e?h[u]:u.value;i?Object(r["o"])(n)&&Object(r["L"])(n,o):Object(r["o"])(n)?n.includes(o)||n.push(o):e?(h[u]=[o],Object(r["k"])(f,u)&&(f[u]=h[u])):(u.value=[o],t.k&&(h[t.k]=u.value))}else e?(h[u]=a,Object(r["k"])(f,u)&&(f[u]=a)):s&&(u.value=a,t.k&&(h[t.k]=a))};a?(c.id=-1,or(c,n)):c()}else 0}}function ir(){}const or=ke;function ar(t){return cr(t)}function cr(t,e){ir();const n=Object(r["i"])();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:f,nextSibling:d,setScopeId:p=r["d"],cloneNode:g,insertStaticContent:m}=t,y=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Or(t,e)&&(r=W(t),$(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case pr:v(t,e,n,r);break;case gr:w(t,e,n,r);break;case mr:null==t&&E(e,n,r,o);break;case dr:j(t,e,n,r,s,i,o,a,c);break;default:1&h?I(t,e,n,r,s,i,o,a,c):6&h?L(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,s,i,o,a,c,X)}null!=l&&s&&sr(l,t&&t.ref,i,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=c(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&l(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=u(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=d(t),s(t,n,r),t=i;s(e,n,r)},S=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=d(t),i(t),t=n;i(e)},I=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?O(e,n,r,s,i,o,a,c):D(t,e,s,i,o,a,c)},O=(t,e,n,i,c,u,l,f)=>{let d,p;const{type:m,props:y,shapeFlag:v,transition:b,patchFlag:w,dirs:E}=t;if(t.el&&void 0!==g&&-1===w)d=t.el=g(t.el);else{if(d=t.el=a(t.type,u,y&&y.is,y),8&v?h(d,t.children):16&v&&k(t.children,d,null,i,c,u&&"foreignObject"!==m,l,f),E&&mn(t,null,i,"created"),y){for(const e in y)"value"===e||Object(r["A"])(e)||o(d,e,null,y[e],u,t.children,i,c,H);"value"in y&&o(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&qr(p,i,t)}A(d,t,t.scopeId,l,i)}E&&mn(t,null,i,"beforeMount");const _=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;_&&b.beforeEnter(d),s(d,e,n),((p=y&&y.onVnodeMounted)||_||E)&&or(()=>{p&&qr(p,i,t),_&&b.enter(d),E&&mn(t,null,i,"mounted")},c)},A=(t,e,n,r,s)=>{if(n&&p(t,n),r)for(let i=0;i<r.length;i++)p(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;A(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},k=(t,e,n,r,s,i,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?Pr(t[u]):Vr(t[u]);y(null,c,e,n,r,s,i,o,a)}},D=(t,e,n,s,i,a,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:f,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||r["b"],g=e.props||r["b"];let m;n&&ur(n,!1),(m=g.onVnodeBeforeUpdate)&&qr(m,n,e,t),d&&mn(e,t,n,"beforeUpdate"),n&&ur(n,!0);const y=i&&"foreignObject"!==e.type;if(f?N(t.dynamicChildren,f,u,n,s,y,a):c||P(t,e,u,null,n,s,y,a,!1),l>0){if(16&l)x(u,e,p,g,n,s,i);else if(2&l&&p.class!==g.class&&o(u,"class",null,g.class,i),4&l&&o(u,"style",p.style,g.style,i),8&l){const r=e.dynamicProps;for(let e=0;e<r.length;e++){const a=r[e],c=p[a],l=g[a];l===c&&"value"!==a||o(u,a,c,l,i,t.children,n,s,H)}}1&l&&t.children!==e.children&&h(u,e.children)}else c||null!=f||x(u,e,p,g,n,s,i);((m=g.onVnodeUpdated)||d)&&or(()=>{m&&qr(m,n,e,t),d&&mn(e,t,n,"updated")},s)},N=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===dr||!Or(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,s,i,o,!0)}},x=(t,e,n,s,i,a,c)=>{if(n!==s){for(const u in s){if(Object(r["A"])(u))continue;const l=s[u],h=n[u];l!==h&&"value"!==u&&o(t,u,h,l,c,e.children,i,a,H)}if(n!==r["b"])for(const u in n)Object(r["A"])(u)||u in s||o(t,u,n[u],null,c,e.children,i,a,H);"value"in s&&o(t,"value",n.value,s.value)}},j=(t,e,n,r,i,o,a,u,l)=>{const h=e.el=t?t.el:c(""),f=e.anchor=t?t.anchor:c("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(u=u?u.concat(g):g),null==t?(s(h,n,r),s(f,n,r),k(e.children,n,f,i,o,a,u,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,i,o,a,u),(null!=e.key||i&&e===i.subTree)&&lr(t,e,!0)):P(t,e,n,f,i,o,a,u,l)},L=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):R(e,n,r,s,i,o,c):M(t,e,c)},R=(t,e,n,r,s,i,o)=>{const a=t.component=Kr(t,r,s);if(Qe(t)&&(a.ctx.renderer=X),ts(a),a.asyncDep){if(s&&s.registerDep(a,F),!t.el){const t=a.subTree=xr(gr);w(null,t,e,n)}}else F(a,t,e,n,s,i,o)},M=(t,e,n)=>{const r=e.component=t.component;if(Se(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,ae(r.update),r.update()}else e.el=t.el,r.vnode=e},F=(t,e,n,s,i,o,a)=>{const c=()=>{if(t.isMounted){let e,{next:n,bu:s,u:c,parent:u,vnode:l}=t,h=n;0,ur(t,!1),n?(n.el=l.el,V(t,n,a)):n=l,s&&Object(r["n"])(s),(e=n.props&&n.props.onVnodeBeforeUpdate)&&qr(e,u,n,l),ur(t,!0);const d=_e(t);0;const p=t.subTree;t.subTree=d,y(p,d,f(p.el),W(p),t,i,o),n.el=d.el,null===h&&Oe(t,d.el),c&&or(c,i),(e=n.props&&n.props.onVnodeUpdated)&&or(()=>qr(e,u,n,l),i)}else{let a;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=We(e);if(ur(t,!1),l&&Object(r["n"])(l),!d&&(a=u&&u.onVnodeBeforeMount)&&qr(a,f,e),ur(t,!0),c&&J){const n=()=>{t.subTree=_e(t),J(c,t.subTree,t,i,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=_e(t);0,y(null,r,n,s,t,i,o),e.el=r.el}if(h&&or(h,i),!d&&(a=u&&u.onVnodeMounted)){const t=e;or(()=>qr(a,f,t),i)}(256&e.shapeFlag||f&&We(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&or(t.a,i),t.isMounted=!0,e=n=s=null}},u=t.effect=new b(c,()=>ie(l),t.scope),l=t.update=()=>u.run();l.id=t.uid,ur(t,!0),l()},V=(t,e,n)=>{e.component=t;const r=t.vnode.props;t.vnode=e,t.next=null,Un(t,e.props,r,n),tr(t,e.children,n),T(),he(void 0,t.update),C()},P=(t,e,n,r,s,i,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,f=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void B(u,f,n,r,s,i,o,a,c);if(256&d)return void U(u,f,n,r,s,i,o,a,c)}8&p?(16&l&&H(u,s,i),f!==u&&h(n,f)):16&l?16&p?B(u,f,n,r,s,i,o,a,c):H(u,s,i,!0):(8&l&&h(n,""),16&p&&k(f,n,r,s,i,o,a,c))},U=(t,e,n,s,i,o,a,c,u)=>{t=t||r["a"],e=e||r["a"];const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?Pr(e[d]):Vr(e[d]);y(t[d],r,n,null,i,o,a,c,u)}l>h?H(t,i,o,!0,!1,f):k(e,n,s,i,o,a,c,u,f)},B=(t,e,n,s,i,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],s=e[l]=u?Pr(e[l]):Vr(e[l]);if(!Or(r,s))break;y(r,s,n,null,i,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],s=e[d]=u?Pr(e[d]):Vr(e[d]);if(!Or(r,s))break;y(r,s,n,null,i,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,r=t<h?e[t].el:s;while(l<=d)y(null,e[l]=u?Pr(e[l]):Vr(e[l]),n,r,i,o,a,c,u),l++}}else if(l>d)while(l<=f)$(t[l],i,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?Pr(e[l]):Vr(e[l]);null!=t.key&&m.set(t.key,l)}let v,b=0;const w=d-g+1;let E=!1,_=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(b>=w){$(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Or(r,e[v])){s=v;break}void 0===s?$(r,i,o,!0):(T[s-g]=l+1,s>=_?_=s:E=!0,y(r,e[s],n,null,i,o,a,c,u),b++)}const C=E?hr(T):r["a"];for(v=C.length-1,l=w-1;l>=0;l--){const t=g+l,r=e[t],f=t+1<h?e[t+1].el:s;0===T[l]?y(null,r,n,f,i,o,a,c,u):E&&(v<0||l!==C[v]?q(r,n,f,2):v--)}}},q=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void q(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,X);if(a===dr){s(o,e,n);for(let t=0;t<u.length;t++)q(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===mr)return void _(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),or(()=>c.enter(o),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,()=>{a(),i&&i()})};r?r(o,a,u):u()}else s(o,e,n)},$=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&sr(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!We(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&qr(g,e,t),6&l)z(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&mn(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,s,X,r):u&&(i!==dr||h>0&&64&h)?H(u,e,n,!1,!0):(i===dr&&384&h||!s&&16&l)&&H(c,e,n),r&&G(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&or(()=>{g&&qr(g,e,t),d&&mn(t,null,e,"unmounted")},n)},G=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===dr)return void K(n,r);if(e===mr)return void S(t);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,i=()=>e(n,o);r?r(t.el,o,i):i()}else o()},K=(t,e)=>{let n;while(t!==e)n=d(t),i(t),t=n;i(e)},z=(t,e,n)=>{const{bum:s,scope:i,update:o,subTree:a,um:c}=t;s&&Object(r["n"])(s),i.stop(),o&&(o.active=!1,$(a,t,e,n)),c&&or(c,e),or(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},H=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)$(t[o],e,n,r,s)},W=t=>6&t.shapeFlag?W(t.component.subTree):128&t.shapeFlag?t.suspense.next():d(t.anchor||t.el),Q=(t,e,n)=>{null==t?e._vnode&&$(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),fe(),e._vnode=t},X={p:y,um:$,m:q,r:G,mt:R,mc:k,pc:P,pbc:N,n:W,o:t};let Y,J;return e&&([Y,J]=e(X)),{render:Q,hydrate:Y,createApp:rr(Q,Y)}}function ur({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lr(t,e,n=!1){const s=t.children,i=e.children;if(Object(r["o"])(s)&&Object(r["o"])(i))for(let r=0;r<s.length;r++){const t=s[r];let e=i[r];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[r]=Pr(i[r]),e.el=t.el),n||lr(t,e))}}function hr(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const fr=t=>t.__isTeleport;const dr=Symbol(void 0),pr=Symbol(void 0),gr=Symbol(void 0),mr=Symbol(void 0),yr=[];let vr=null;function br(t=!1){yr.push(vr=t?null:[])}function wr(){yr.pop(),vr=yr[yr.length-1]||null}let Er=1;function _r(t){Er+=t}function Tr(t){return t.dynamicChildren=Er>0?vr||r["a"]:null,wr(),Er>0&&vr&&vr.push(t),t}function Cr(t,e,n,r,s,i){return Tr(Nr(t,e,n,r,s,i,!0))}function Sr(t,e,n,r,s){return Tr(xr(t,e,n,r,s,!0))}function Ir(t){return!!t&&!0===t.__v_isVNode}function Or(t,e){return t.type===e.type&&t.key===e.key}const Ar="__vInternal",kr=({key:t})=>null!=t?t:null,Dr=({ref:t,ref_key:e,ref_for:n})=>null!=t?Object(r["E"])(t)||Lt(t)||Object(r["q"])(t)?{i:ve,r:t,k:e,f:!!n}:t:null;function Nr(t,e=null,n=null,s=0,i=null,o=(t===dr?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&kr(e),ref:e&&Dr(e),scopeId:be,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(Ur(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=Object(r["E"])(n)?8:16),Er>0&&!a&&vr&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&vr.push(u),u}const xr=jr;function jr(t,e=null,n=null,s=0,i=null,o=!1){if(t&&t!==bn||(t=gr),Ir(t)){const r=Rr(t,e,!0);return n&&Ur(r,n),Er>0&&!o&&vr&&(6&r.shapeFlag?vr[vr.indexOf(t)]=r:vr.push(r)),r.patchFlag|=-2,r}if(cs(t)&&(t=t.__vccOpts),e){e=Lr(e);let{class:t,style:n}=e;t&&!Object(r["E"])(t)&&(e.class=Object(r["J"])(t)),Object(r["w"])(n)&&(Ot(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),e.style=Object(r["K"])(n))}const a=Object(r["E"])(t)?1:Ae(t)?128:fr(t)?64:Object(r["w"])(t)?4:Object(r["q"])(t)?2:0;return Nr(t,e,n,s,i,a,o,!0)}function Lr(t){return t?Ot(t)||Ar in t?Object(r["h"])({},t):t:null}function Rr(t,e,n=!1){const{props:s,ref:i,patchFlag:o,children:a}=t,c=e?Br(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&kr(c),ref:e&&e.ref?n&&i?Object(r["o"])(i)?i.concat(Dr(e)):[i,Dr(e)]:Dr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dr?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rr(t.ssContent),ssFallback:t.ssFallback&&Rr(t.ssFallback),el:t.el,anchor:t.anchor};return u}function Mr(t=" ",e=0){return xr(pr,null,t,e)}function Fr(t="",e=!1){return e?(br(),Sr(gr,null,t)):xr(gr,null,t)}function Vr(t){return null==t||"boolean"===typeof t?xr(gr):Object(r["o"])(t)?xr(dr,null,t.slice()):"object"===typeof t?Pr(t):xr(pr,null,String(t))}function Pr(t){return null===t.el||t.memo?t:Rr(t)}function Ur(t,e){let n=0;const{shapeFlag:s}=t;if(null==e)e=null;else if(Object(r["o"])(e))n=16;else if("object"===typeof e){if(65&s){const n=e.default;return void(n&&(n._c&&(n._d=!1),Ur(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Ar in e?3===r&&ve&&(1===ve.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=ve}}else Object(r["q"])(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),64&s?(n=16,e=[Mr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Br(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const t in s)if("class"===t)e.class!==s.class&&(e.class=Object(r["J"])([e.class,s.class]));else if("style"===t)e.style=Object(r["K"])([e.style,s.style]);else if(Object(r["x"])(t)){const n=e[t],i=s[t];!i||n===i||Object(r["o"])(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=s[t])}return e}function qr(t,e,n,r=null){Bt(t,e,7,[n,r])}const $r=er();let Gr=0;function Kr(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||$r,a={uid:Gr++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new i(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$n(s,o),emitsOptions:me(s,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:s.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=ge.bind(null,a),t.ce&&t.ce(a),a}let zr=null;const Hr=()=>zr||ve,Wr=t=>{zr=t,t.scope.on()},Qr=()=>{zr&&zr.scope.off(),zr=null};function Xr(t){return 4&t.vnode.shapeFlag}let Yr,Jr,Zr=!1;function ts(t,e=!1){Zr=e;const{props:n,children:r}=t.vnode,s=Xr(t);Pn(t,n,s,e),Zn(t,r);const i=s?es(t,e):void 0;return Zr=!1,i}function es(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=kt(new Proxy(t.ctx,Cn));const{setup:s}=n;if(s){const n=t.setupContext=s.length>1?is(t):null;Wr(t),T();const i=Ut(s,t,0,[t.props,n]);if(C(),Qr(),Object(r["z"])(i)){if(i.then(Qr,Qr),e)return i.then(n=>{ns(t,n,e)}).catch(e=>{qt(e,t,0)});t.asyncDep=i}else ns(t,i,e)}else rs(t,e)}function ns(t,e,n){Object(r["q"])(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Object(r["w"])(e)&&(t.setupState=Ft(e)),rs(t,n)}function rs(t,e,n){const s=t.type;if(!t.render){if(!e&&Yr&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:o},i),a);s.render=Yr(e,c)}}t.render=s.render||r["d"],Jr&&Jr(t)}Wr(t),T(),In(t),C(),Qr()}function ss(t){return new Proxy(t.attrs,{get(e,n){return S(t,"get","$attrs"),e[n]}})}function is(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=ss(t))},slots:t.slots,emit:t.emit,expose:e}}function os(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ft(kt(t.exposed)),{get(e,n){return n in e?e[n]:n in Tn?Tn[n](t):void 0}}))}function as(t,e=!0){return Object(r["q"])(t)?t.displayName||t.name:t.name||e&&t.__name}function cs(t){return Object(r["q"])(t)&&"__vccOpts"in t}const us=(t,e)=>Pt(t,e,Zr);function ls(t,e,n){const s=arguments.length;return 2===s?Object(r["w"])(e)&&!Object(r["o"])(e)?Ir(e)?xr(t,null,[e]):xr(t,e):xr(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):3===s&&Ir(n)&&(n=[n]),xr(t,e,n))}Symbol("");const hs="3.2.37",fs="http://www.w3.org/2000/svg",ds="undefined"!==typeof document?document:null,ps=ds&&ds.createElement("template"),gs={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ds.createElementNS(fs,t):ds.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>ds.createTextNode(t),createComment:t=>ds.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ds.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{ps.innerHTML=r?`<svg>${t}</svg>`:t;const s=ps.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ms(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ys(t,e,n){const s=t.style,i=Object(r["E"])(n);if(n&&!i){for(const t in n)bs(s,t,n[t]);if(e&&!Object(r["E"])(e))for(const t in e)null==n[t]&&bs(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const vs=/\s*!important$/;function bs(t,e,n){if(Object(r["o"])(n))n.forEach(n=>bs(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_s(t,e);vs.test(n)?t.setProperty(Object(r["l"])(s),n.replace(vs,""),"important"):t[s]=n}}const ws=["Webkit","Moz","ms"],Es={};function _s(t,e){const n=Es[e];if(n)return n;let s=Object(r["e"])(e);if("filter"!==s&&s in t)return Es[e]=s;s=Object(r["f"])(s);for(let r=0;r<ws.length;r++){const n=ws[r]+s;if(n in t)return Es[e]=n}return e}const Ts="http://www.w3.org/1999/xlink";function Cs(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Ts,e.slice(6,e.length)):t.setAttributeNS(Ts,e,n);else{const s=Object(r["D"])(e);null==n||s&&!Object(r["m"])(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function Ss(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=Object(r["m"])(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(u){0}c&&t.removeAttribute(e)}const[Is,Os]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let As=0;const ks=Promise.resolve(),Ds=()=>{As=0},Ns=()=>As||(ks.then(Ds),As=Is());function xs(t,e,n,r){t.addEventListener(e,n,r)}function js(t,e,n,r){t.removeEventListener(e,n,r)}function Ls(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=Ms(e);if(r){const o=i[e]=Fs(r,s);xs(t,n,o,a)}else o&&(js(t,n,o,a),i[e]=void 0)}}const Rs=/(?:Once|Passive|Capture)$/;function Ms(t){let e;if(Rs.test(t)){let n;e={};while(n=t.match(Rs))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Object(r["l"])(t.slice(2)),e]}function Fs(t,e){const n=t=>{const r=t.timeStamp||Is();(Os||r>=n.attached-1)&&Bt(Vs(t,n.value),e,5,[t])};return n.value=t,n.attached=Ns(),n}function Vs(t,e){if(Object(r["o"])(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const Ps=/^on[a-z]/,Us=(t,e,n,s,i=!1,o,a,c,u)=>{"class"===e?ms(t,s,i):"style"===e?ys(t,n,s):Object(r["x"])(e)?Object(r["v"])(e)||Ls(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):Bs(t,e,s,i))?Ss(t,e,s,o,a,c,u):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),Cs(t,e,s,i))};function Bs(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&Ps.test(e)&&Object(r["q"])(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!Ps.test(e)||!Object(r["E"])(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const qs="transition",$s="animation",Gs=(t,{slots:e})=>ls(Be,Ws(t),e);Gs.displayName="Transition";const Ks={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},zs=(Gs.props=Object(r["h"])({},Be.props,Ks),(t,e=[])=>{Object(r["o"])(t)?t.forEach(t=>t(...e)):t&&t(...e)}),Hs=t=>!!t&&(Object(r["o"])(t)?t.some(t=>t.length>1):t.length>1);function Ws(t){const e={};for(const r in t)r in Ks||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=n+"-leave-from",leaveActiveClass:d=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=t,g=Qs(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:C=b,onAppearCancelled:S=w}=e,I=(t,e,n)=>{Js(t,e?h:c),Js(t,e?l:a),n&&n()},O=(t,e)=>{t._isLeaving=!1,Js(t,f),Js(t,p),Js(t,d),e&&e()},A=t=>(e,n)=>{const r=t?C:b,i=()=>I(e,t,n);zs(r,[e,i]),Zs(()=>{Js(e,t?u:o),Ys(e,t?h:c),Hs(r)||ei(e,s,m,i)})};return Object(r["h"])(e,{onBeforeEnter(t){zs(v,[t]),Ys(t,o),Ys(t,a)},onBeforeAppear(t){zs(T,[t]),Ys(t,u),Ys(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>O(t,e);Ys(t,f),ii(),Ys(t,d),Zs(()=>{t._isLeaving&&(Js(t,f),Ys(t,p),Hs(E)||ei(t,s,y,n))}),zs(E,[t,n])},onEnterCancelled(t){I(t,!1),zs(w,[t])},onAppearCancelled(t){I(t,!0),zs(S,[t])},onLeaveCancelled(t){O(t),zs(_,[t])}})}function Qs(t){if(null==t)return null;if(Object(r["w"])(t))return[Xs(t.enter),Xs(t.leave)];{const e=Xs(t);return[e,e]}}function Xs(t){const e=Object(r["N"])(t);return e}function Ys(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function Js(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Zs(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ti=0;function ei(t,e,n,r){const s=t._endId=++ti,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=ni(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),i()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function ni(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(qs+"Delay"),i=r(qs+"Duration"),o=ri(s,i),a=r($s+"Delay"),c=r($s+"Duration"),u=ri(a,c);let l=null,h=0,f=0;e===qs?o>0&&(l=qs,h=o,f=i.length):e===$s?u>0&&(l=$s,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?qs:$s:null,f=l?l===qs?i.length:c.length:0);const d=l===qs&&/\b(transform|all)(,|$)/.test(n[qs+"Property"]);return{type:l,timeout:h,propCount:f,hasTransform:d}}function ri(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>si(e)+si(t[n])))}function si(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ii(){return document.body.offsetHeight}new WeakMap,new WeakMap;const oi=Object(r["h"])({patchProp:Us},gs);let ai;function ci(){return ai||(ai=ar(oi))}const ui=(...t)=>{const e=ci().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=li(t);if(!s)return;const i=e._component;Object(r["q"])(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function li(t){if(Object(r["E"])(t)){const e=document.querySelector(t);return e}return t}},"962e":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=i[e.level]),n.userLogHandler=null===t?null:(e,n,...i)=>{const o=i.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:o,args:i,type:e.name})}}}},"9ff4":function(t,e,n){"use strict";(function(t){function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,"a",(function(){return _})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return X})),n.d(e,"f",(function(){return Z})),n.d(e,"g",(function(){return rt})),n.d(e,"h",(function(){return A})),n.d(e,"i",(function(){return ot})),n.d(e,"j",(function(){return et})),n.d(e,"k",(function(){return N})),n.d(e,"l",(function(){return J})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return nt})),n.d(e,"o",(function(){return x})),n.d(e,"p",(function(){return H})),n.d(e,"q",(function(){return M})),n.d(e,"r",(function(){return i})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return K})),n.d(e,"u",(function(){return j})),n.d(e,"v",(function(){return O})),n.d(e,"w",(function(){return P})),n.d(e,"x",(function(){return I})),n.d(e,"y",(function(){return G})),n.d(e,"z",(function(){return U})),n.d(e,"A",(function(){return z})),n.d(e,"B",(function(){return y})),n.d(e,"C",(function(){return L})),n.d(e,"D",(function(){return a})),n.d(e,"E",(function(){return F})),n.d(e,"F",(function(){return V})),n.d(e,"G",(function(){return b})),n.d(e,"H",(function(){return w})),n.d(e,"I",(function(){return r})),n.d(e,"J",(function(){return d})),n.d(e,"K",(function(){return u})),n.d(e,"L",(function(){return k})),n.d(e,"M",(function(){return tt})),n.d(e,"N",(function(){return st})),n.d(e,"O",(function(){return $}));const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function u(t){if(x(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=F(r)?f(r):u(r);if(s)for(const t in s)e[t]=s[t]}return e}return F(t)||P(t)?t:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(l).forEach(t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function d(t){let e="";if(F(t))e=t;else if(x(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(P(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",g="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",m=r(p),y=r(g);function v(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=b(t[r],e[r]);return n}function b(t,e){if(t===e)return!0;let n=R(t),r=R(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=V(t),r=V(e),n||r)return t===e;if(n=x(t),r=x(e),n||r)return!(!n||!r)&&v(t,e);if(n=P(t),r=P(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!b(t[n],e[n]))return!1}}return String(t)===String(e)}function w(t,e){return t.findIndex(t=>b(t,e))}const E={},_=[],T=()=>{},C=()=>!1,S=/^on[^a-z]/,I=t=>S.test(t),O=t=>t.startsWith("onUpdate:"),A=Object.assign,k=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},D=Object.prototype.hasOwnProperty,N=(t,e)=>D.call(t,e),x=Array.isArray,j=t=>"[object Map]"===q(t),L=t=>"[object Set]"===q(t),R=t=>"[object Date]"===q(t),M=t=>"function"===typeof t,F=t=>"string"===typeof t,V=t=>"symbol"===typeof t,P=t=>null!==t&&"object"===typeof t,U=t=>P(t)&&M(t.then)&&M(t.catch),B=Object.prototype.toString,q=t=>B.call(t),$=t=>q(t).slice(8,-1),G=t=>"[object Object]"===q(t),K=t=>F(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=r("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),W=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},Q=/-(\w)/g,X=W(t=>t.replace(Q,(t,e)=>e?e.toUpperCase():"")),Y=/\B([A-Z])/g,J=W(t=>t.replace(Y,"-$1").toLowerCase()),Z=W(t=>t.charAt(0).toUpperCase()+t.slice(1)),tt=W(t=>t?"on"+Z(t):""),et=(t,e)=>!Object.is(t,e),nt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},rt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},st=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let it;const ot=()=>it||(it="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{})}).call(this,n("c8ba"))},abc5:function(t,e,n){"use strict";(function(t){function r(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof t?t:{}}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i}));const i="function"===typeof Proxy}).call(this,n("c8ba"))},c6c1:function(t,e,n){"use strict";n.d(e,"a",(function(){return mt})),n.d(e,"b",(function(){return ht})),n.d(e,"c",(function(){return lt})),n.d(e,"d",(function(){return ft})),n.d(e,"e",(function(){return vt})),n.d(e,"f",(function(){return yt})),n.d(e,"g",(function(){return bt}));var r=n("4a0a"),s=n("962e"),i=n("f075");const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){v=t(v)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{i&&t.addEventListener("close",()=>i()),s&&t.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],O=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(O.get(e))return O.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return O.set(e,i),i}b(t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(D(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function D(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const N="@firebase/app",x="0.7.27",j=new s["b"]("@firebase/app"),L="@firebase/app-compat",R="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",P="@firebase/auth",U="@firebase/auth-compat",B="@firebase/database",q="@firebase/database-compat",$="@firebase/functions",G="@firebase/functions-compat",K="@firebase/installations",z="@firebase/installations-compat",H="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",J="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.8.4",it="[DEFAULT]",ot={[N]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[R]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[P]:"fire-auth",[U]:"fire-auth-compat",[B]:"fire-rtdb",[q]:"fire-rtdb-compat",[$]:"fire-fn",[G]:"fire-fn-compat",[K]:"fire-iid",[z]:"fire-iid-compat",[H]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[J]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){j.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return j.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t,e,n=it){ht(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},pt=new i["b"]("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=st;function yt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw pt.create("bad-app-name",{appName:String(s)});const o=at.get(s);if(o){if(Object(i["f"])(t,o.options)&&Object(i["f"])(n,o.config))return o;throw pt.create("duplicate-app",{appName:s})}const a=new r["b"](s);for(const r of ct.values())a.addComponent(r);const c=new gt(t,n,a);return at.set(s,c),c}function vt(t=it){const e=at.get(t);if(!e)throw pt.create("no-app",{appName:t});return e}function bt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+="-"+n);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void j.warn(t.join(" "))}lt(new r["a"](i+"-version",()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",Et=1,_t="firebase-heartbeat-store";let Tt=null;function Ct(){return Tt||(Tt=C(wt,Et,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch(t=>{throw pt.create("storage-open",{originalErrorMessage:t.message})})),Tt}async function St(t){var e;try{const e=await Ct();return e.transaction(_t).objectStore(_t).get(Ot(t))}catch(n){throw pt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function It(t,e){var n;try{const n=await Ct(),r=n.transaction(_t,"readwrite"),s=r.objectStore(_t);return await s.put(e,Ot(t)),r.done}catch(r){throw pt.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new jt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(t=>t.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=Object(i["d"])(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=At){const n=[];let r=t.slice();for(const s of t){const t=n.find(t=>t.agent===s.agent);if(t){if(t.dates.push(s.date),Lt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Lt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Object(i["l"])()&&Object(i["q"])().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await St(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return It(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Lt(t){return Object(i["d"])(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){lt(new r["a"]("platform-logger",t=>new k(t),"PRIVATE")),lt(new r["a"]("heartbeat",t=>new Dt(t),"PRIVATE")),bt(N,x,t),bt(N,x,"esm2017"),bt("fire-js","")}Rt("")},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cda2:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Zo})),n.d(e,"b",(function(){return Qi})),n.d(e,"c",(function(){return Jo})),n.d(e,"d",(function(){return Xi})),n.d(e,"e",(function(){return Ho})),n.d(e,"f",(function(){return Qo})),n.d(e,"g",(function(){return to})),n.d(e,"h",(function(){return ta})),n.d(e,"i",(function(){return Po})),n.d(e,"j",(function(){return Xo})),n.d(e,"k",(function(){return Yo})),n.d(e,"l",(function(){return Bo}));var r=n("c6c1"),s=n("4a0a"),i=n("962e"),o=n("f075"),a=n("29e1");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.8.4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new i["b"]("@firebase/firestore");function f(){return h.logLevel}function d(t,...e){if(h.logLevel<=i["a"].DEBUG){const n=e.map(m);h.debug(`Firestore (${l}): ${t}`,...n)}}function p(t,...e){if(h.logLevel<=i["a"].ERROR){const n=e.map(m);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=i["a"].WARN){const n=e.map(m);h.warn(`Firestore (${l}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw p(e),new Error(e)}function v(t,e){t||y()}function b(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new _;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _,t.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const e=s;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{d("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(d("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _)}},0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(d("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class I{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class O{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new I(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&d("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message);const n=t.token!==this.p;return this.p=t.token,d("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{d("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):d("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),this.p=t.token,new A(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=D(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function x(t,e){return t<e?-1:t>e?1:0}function j(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new L(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?x(this.nanoseconds,t.nanoseconds):x(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new L(0,0))}static max(){return new R(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends M{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class P extends M{construct(t,e,n){return new P(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),P.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new P(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new P(e)}static emptyPath(){return new P([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.path=t}static fromPath(t){return new U(F.fromString(t))}static fromName(t){return new U(F.fromString(t).popFirst(5))}static empty(){return new U(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new U(new F(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;function q(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=R.fromTimestamp(1e9===r?new L(n+1,0):new L(n,r));return new G(s,U.empty(),e)}function $(t){return new G(t.readTime,t.key,-1)}class G{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new G(R.min(),U.empty(),-1)}static max(){return new G(R.max(),U.empty(),-1)}}function K(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=U.comparator(t.documentKey,e.documentKey),0!==n?n:x(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class H{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==z)throw t;d("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Q((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Q?e:Q.resolve(e)}catch(t){return Q.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Q.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Q.reject(e)}static resolve(t){return new Q((e,n)=>{e(t)})}static reject(t){return new Q((e,n)=>{n(t)})}static waitFor(t){return new Q((e,n)=>{let r=0,s=0,i=!1;t.forEach(t=>{++r,t.next(()=>{++s,i&&s===r&&e()},t=>n(t))}),i=!0,s===r&&e()})}static or(t){let e=Q.resolve(!1);for(const n of t)e=e.next(t=>t?Q.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new Q((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(t=>{i[c]=t,++o,o===s&&n(i)},t=>r(t))}})}static doWhile(t,e){return new Q((n,r)=>{const s=()=>{!0===t()?e().next(()=>{s()},r):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Z(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tt(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y.ot=-1;class et{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nt(this.root,t,this.comparator,!1)}getReverseIterator(){return new nt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nt(this.root,t,this.comparator,!0)}}class nt{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:rt.RED,this.left=null!=r?r:rt.EMPTY,this.right=null!=s?s:rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new rt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return rt.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1,rt.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,r,s){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new it(this.data.getIterator())}getIteratorFrom(t){return new it(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof st))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class it{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(t){this.fields=t,t.sort(P.comparator)}static empty(){return new ot([])}unionWith(t){let e=new st(P.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return j(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new at(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new at(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return x(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const ct=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ut(t){if(v(!!t),"string"==typeof t){let e=0;const n=ct.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ht(t){return"string"==typeof t?at.fromBase64String(t):at.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function dt(t){const e=t.mapValue.fields.__previous_value__;return ft(e)?dt(e):e}function pt(t){const e=ut(t.mapValue.fields.__local_write_time__.timestampValue);return new L(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class mt{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new mt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof mt&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t){return null==t}function vt(t){return 0===t&&1/t==-1/0}function bt(t){return"number"==typeof t&&Number.isInteger(t)&&!vt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Et(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ft(t)?4:Rt(t)?9007199254740991:10:y()}function _t(t,e){if(t===e)return!0;const n=Et(t);if(n!==Et(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return pt(t).isEqual(pt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ut(t.timestampValue),r=ut(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return ht(t.bytesValue).isEqual(ht(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return lt(t.geoPointValue.latitude)===lt(e.geoPointValue.latitude)&&lt(t.geoPointValue.longitude)===lt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return lt(t.integerValue)===lt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=lt(t.doubleValue),r=lt(e.doubleValue);return n===r?vt(n)===vt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return j(t.arrayValue.values||[],e.arrayValue.values||[],_t);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(J(n)!==J(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!_t(n[s],r[s])))return!1;return!0}(t,e);default:return y()}}function Tt(t,e){return void 0!==(t.values||[]).find(t=>_t(t,e))}function Ct(t,e){if(t===e)return 0;const n=Et(t),r=Et(e);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=lt(t.integerValue||t.doubleValue),r=lt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return St(t.timestampValue,e.timestampValue);case 4:return St(pt(t),pt(e));case 5:return x(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ht(t),r=ht(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=x(n[s],r[s]);if(0!==t)return t}return x(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=x(lt(t.latitude),lt(e.latitude));return 0!==n?n:x(lt(t.longitude),lt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=Ct(n[s],r[s]);if(t)return t}return x(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===wt.mapValue&&e===wt.mapValue)return 0;if(t===wt.mapValue)return 1;if(e===wt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=x(r[o],i[o]);if(0!==t)return t;const e=Ct(n[r[o]],s[i[o]]);if(0!==e)return e}return x(r.length,i.length)}(t.mapValue,e.mapValue);default:throw y()}}function St(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return x(t,e);const n=ut(t),r=ut(e),s=x(n.seconds,r.seconds);return 0!==s?s:x(n.nanos,r.nanos)}function It(t){return Ot(t)}function Ot(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ut(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ht(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ot(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${Ot(t.fields[s])}`;return n+"}"}(t.mapValue):y();var e,n}function At(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kt(t){return!!t&&"integerValue"in t}function Dt(t){return!!t&&"arrayValue"in t}function Nt(t){return!!t&&"nullValue"in t}function xt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function jt(t){return!!t&&"mapValue"in t}function Lt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Z(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Lt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Rt(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{constructor(t){this.value=t}static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lt(e)}setAll(t){let e=P.emptyPath(),n={},r=[];t.forEach((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=Lt(t):r.push(s.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());jt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return _t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];jt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Z(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Mt(Lt(this.value))}}function Ft(t){const e=[];return Z(t.fields,(t,n)=>{const r=new P([t]);if(jt(n)){const t=Ft(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new ot(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vt{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new Vt(t,0,R.min(),R.min(),Mt.empty(),0)}static newFoundDocument(t,e,n){return new Vt(t,1,e,R.min(),n,0)}static newNoDocument(t,e){return new Vt(t,2,e,R.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,R.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function Ut(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Pt(t,e,n,r,s,i,o)}function Bt(t){const e=b(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>{return(e=t).field.canonicalString()+e.op.toString()+It(e.value);var e}).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),yt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>It(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>It(t)).join(",")),e.ut=t}return e.ut}function qt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${It(e.value)}`;var e}).join(", ")}]`),yt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>It(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>It(t)).join(",")),`Target(${e})`}function $t(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!ne(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!_t(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!se(t.startAt,e.startAt)&&se(t.endAt,e.endAt)}function Gt(t){return U.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Kt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new zt(t,e,n):"array-contains"===e?new Xt(t,n):"in"===e?new Yt(t,n):"not-in"===e?new Jt(t,n):"array-contains-any"===e?new Zt(t,n):new Kt(t,e,n)}static ct(t,e,n){return"in"===e?new Ht(t,n):new Wt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Ct(e,this.value)):null!==e&&Et(this.value)===Et(e)&&this.at(Ct(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class zt extends Kt{constructor(t,e,n){super(t,e,n),this.key=U.fromName(n.referenceValue)}matches(t){const e=U.comparator(t.key,this.key);return this.at(e)}}class Ht extends Kt{constructor(t,e){super(t,"in",e),this.keys=Qt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Wt extends Kt{constructor(t,e){super(t,"not-in",e),this.keys=Qt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Qt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>U.fromName(t.referenceValue))}class Xt extends Kt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Dt(e)&&Tt(e.arrayValue,this.value)}}class Yt extends Kt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Tt(this.value.arrayValue,e)}}class Jt extends Kt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Tt(this.value.arrayValue,e)}}class Zt extends Kt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Dt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Tt(this.value.arrayValue,t))}}class te{constructor(t,e){this.position=t,this.inclusive=e}}class ee{constructor(t,e="asc"){this.field=t,this.dir=e}}function ne(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function re(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?U.comparator(U.fromName(o.referenceValue),n.key):Ct(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function se(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!_t(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function oe(t,e,n,r,s,i,o,a){return new ie(t,e,n,r,s,i,o,a)}function ae(t){return new ie(t)}function ce(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ue(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function le(t){for(const e of t.filters)if(e.ht())return e.field;return null}function he(t){return null!==t.collectionGroup}function fe(t){const e=b(t);if(null===e.lt){e.lt=[];const t=le(e),n=ue(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ee(t)),e.lt.push(new ee(P.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ee(P.keyField(),t))}}}return e.lt}function de(t){const e=b(t);if(!e.ft)if("F"===e.limitType)e.ft=Ut(e.path,e.collectionGroup,fe(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of fe(e)){const e="desc"===s.dir?"asc":"desc";t.push(new ee(s.field,e))}const n=e.endAt?new te(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new te(e.startAt.position,e.startAt.inclusive):null;e.ft=Ut(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function pe(t,e,n){return new ie(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ge(t,e){return $t(de(t),de(e))&&t.limitType===e.limitType}function me(t){return`${Bt(de(t))}|lt:${t.limitType}`}function ye(t){return`Query(target=${qt(de(t))}; limitType=${t.limitType})`}function ve(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):U.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=re(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,fe(t),e))&&!(t.endAt&&!function(t,e,n){const r=re(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,fe(t),e))}(t,e)}function be(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function we(t){return(e,n)=>{let r=!1;for(const s of fe(t)){const t=Ee(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Ee(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?Ct(r,s):y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vt(e)?"-0":e}}function Te(t){return{integerValue:""+t}}function Ce(t,e){return bt(e)?Te(e):_e(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this._=void 0}}function Ie(t,e,n){return t instanceof ke?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof De?Ne(t,e):t instanceof xe?je(t,e):function(t,e){const n=Ae(t,e),r=Re(n)+Re(t._t);return kt(n)&&kt(t._t)?Te(r):_e(t.wt,r)}(t,e)}function Oe(t,e,n){return t instanceof De?Ne(t,e):t instanceof xe?je(t,e):n}function Ae(t,e){return t instanceof Le?kt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ke extends Se{}class De extends Se{constructor(t){super(),this.elements=t}}function Ne(t,e){const n=Me(e);for(const r of t.elements)n.some(t=>_t(t,r))||n.push(r);return{arrayValue:{values:n}}}class xe extends Se{constructor(t){super(),this.elements=t}}function je(t,e){let n=Me(e);for(const r of t.elements)n=n.filter(t=>!_t(t,r));return{arrayValue:{values:n}}}class Le extends Se{constructor(t,e){super(),this.wt=t,this._t=e}}function Re(t){return lt(t.integerValue||t.doubleValue)}function Me(t){return Dt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof De&&e instanceof De||t instanceof xe&&e instanceof xe?j(t.elements,e.elements,_t):t instanceof Le&&e instanceof Le?_t(t._t,e._t):t instanceof ke&&e instanceof ke}(t.transform,e.transform)}class Ve{constructor(t,e){this.version=t,this.transformResults=e}}class Pe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pe}static exists(t){return new Pe(void 0,t)}static updateTime(t){return new Pe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ue(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Be{}function qe(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Je(t.key,Pe.none()):new He(t.key,t.data,Pe.none());{const n=t.data,r=Mt.empty();let s=new st(P.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new We(t.key,r,new ot(s.toArray()),Pe.none())}}function $e(t,e,n){t instanceof He?function(t,e,n){const r=t.value.clone(),s=Xe(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof We?function(t,e,n){if(!Ue(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Xe(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Qe(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ge(t,e,n,r){return t instanceof He?function(t,e,n,r){if(!Ue(t.precondition,e))return n;const s=t.value.clone(),i=Ye(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof We?function(t,e,n,r){if(!Ue(t.precondition,e))return n;const s=Ye(t.fieldTransforms,r,e),i=e.data;return i.setAll(Qe(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return Ue(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ke(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Ae(r.transform,t||null);null!=s&&(null===n&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function ze(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&j(t,e,(t,e)=>Fe(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class He extends Be{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class We extends Be{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Qe(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xe(t,e,n){const r=new Map;v(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Oe(o,a,n[s]))}return r}function Ye(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Ie(t,i,e))}return r}class Je extends Be{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ze extends Be{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en,nn;function rn(t){switch(t){default:return y();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function sn(t){if(void 0===t)return p("GRPC error has no .code"),w.UNKNOWN;switch(t){case en.OK:return w.OK;case en.CANCELLED:return w.CANCELLED;case en.UNKNOWN:return w.UNKNOWN;case en.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case en.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case en.INTERNAL:return w.INTERNAL;case en.UNAVAILABLE:return w.UNAVAILABLE;case en.UNAUTHENTICATED:return w.UNAUTHENTICATED;case en.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case en.NOT_FOUND:return w.NOT_FOUND;case en.ALREADY_EXISTS:return w.ALREADY_EXISTS;case en.PERMISSION_DENIED:return w.PERMISSION_DENIED;case en.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case en.ABORTED:return w.ABORTED;case en.OUT_OF_RANGE:return w.OUT_OF_RANGE;case en.UNIMPLEMENTED:return w.UNIMPLEMENTED;case en.DATA_LOSS:return w.DATA_LOSS;default:return y()}}(nn=en||(en={}))[nn.OK=0]="OK",nn[nn.CANCELLED=1]="CANCELLED",nn[nn.UNKNOWN=2]="UNKNOWN",nn[nn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nn[nn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nn[nn.NOT_FOUND=5]="NOT_FOUND",nn[nn.ALREADY_EXISTS=6]="ALREADY_EXISTS",nn[nn.PERMISSION_DENIED=7]="PERMISSION_DENIED",nn[nn.UNAUTHENTICATED=16]="UNAUTHENTICATED",nn[nn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nn[nn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nn[nn.ABORTED=10]="ABORTED",nn[nn.OUT_OF_RANGE=11]="OUT_OF_RANGE",nn[nn.UNIMPLEMENTED=12]="UNIMPLEMENTED",nn[nn.INTERNAL=13]="INTERNAL",nn[nn.UNAVAILABLE=14]="UNAVAILABLE",nn[nn.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class on{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Z(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return tt(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new et(U.comparator);function cn(){return an}const un=new et(U.comparator);function ln(...t){let e=un;for(const n of t)e=e.insert(n.key,n);return e}function hn(t){let e=un;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function fn(){return pn()}function dn(){return pn()}function pn(){return new on(t=>t.toString(),(t,e)=>t.isEqual(e))}const gn=new et(U.comparator),mn=new st(U.comparator);function yn(...t){let e=mn;for(const n of t)e=e.add(n);return e}const vn=new st(x);function bn(){return vn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,En.createSynthesizedTargetChangeForCurrentChange(t,e)),new wn(R.min(),n,bn(),cn(),yn())}}class En{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e){return new En(at.EMPTY_BYTE_STRING,e,yn(),yn(),yn())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class Tn{constructor(t,e){this.targetId=t,this.It=e}}class Cn{constructor(t,e,n=at.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Sn{constructor(){this.Tt=0,this.Et=An(),this.At=at.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=yn(),e=yn(),n=yn();return this.Et.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:y()}}),new En(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=An()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class In{constructor(t){this.Mt=t,this.Ft=new Map,this.$t=cn(),this.Bt=On(),this.Lt=new st(x)}Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach((t,n)=>{this.jt(n)&&e(n)})}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(Gt(t))if(0===n){const n=new U(t.path);this.Kt(e,n,Vt.newNoDocument(n,R.min()))}else v(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Gt(s.target)){const e=new U(s.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,Vt.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}});let n=yn();this.Bt.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.$t.forEach((e,n)=>n.setReadTime(t));const r=new wn(t,e,this.Lt,this.$t,n);return this.$t=cn(),this.Bt=On(),this.Lt=new st(x),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new Sn,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new st(x),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||d("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new Sn),this.Mt.getRemoteKeysForTarget(t).forEach(e=>{this.Kt(t,e,null)})}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}}function On(){return new et(U.comparator)}function An(){return new et(U.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Dn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Nn{constructor(t,e){this.databaseId=t,this.dt=e}}function xn(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jn(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Ln(t,e){return xn(t,e.toTimestamp())}function Rn(t){return v(!!t),R.fromTimestamp(function(t){const e=ut(t);return new L(e.seconds,e.nanos)}(t))}function Mn(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Fn(t){const e=F.fromString(t);return v(or(e)),e}function Vn(t,e){return Mn(t.databaseId,e.path)}function Pn(t,e){const n=Fn(e);if(n.get(1)!==t.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U($n(n))}function Un(t,e){return Mn(t.databaseId,e)}function Bn(t){const e=Fn(t);return 4===e.length?F.emptyPath():$n(e)}function qn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $n(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Gn(t,e,n){return{name:Vn(t,e),fields:n.value.mapValue.fields}}function Kn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(t,e){return t.dt?(v(void 0===e||"string"==typeof e),at.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),at.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?w.UNKNOWN:sn(t.code);return new E(e,t.message||"")}(o);n=new Cn(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pn(t,r.document.name),i=Rn(r.document.updateTime),o=new Mt({mapValue:{fields:r.document.fields}}),a=Vt.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new _n(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pn(t,r.document),i=r.readTime?Rn(r.readTime):R.min(),o=Vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pn(t,r.document),i=r.removedTargetIds||[];n=new _n([],i,s,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,s=new tn(r),i=t.targetId;n=new Tn(i,s)}}return n}function zn(t,e){let n;if(e instanceof He)n={update:Gn(t,e.key,e.value)};else if(e instanceof Je)n={delete:Vn(t,e.key)};else if(e instanceof We)n={update:Gn(t,e.key,e.data),updateMask:ir(e.fieldMask)};else{if(!(e instanceof Ze))return y();n={verify:Vn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ke)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof De)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof xe)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Le)return{fieldPath:e.field.canonicalString(),increment:n._t};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ln(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Hn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Rn(t.updateTime):Rn(e);return n.isEqual(R.min())&&(n=Rn(e)),new Ve(n,t.transformResults||[])}(t,e))):[]}function Wn(t,e){return{documents:[Un(t,e.path)]}}function Qn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Un(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Un(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(xt(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NAN"}};if(Nt(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(xt(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NOT_NAN"}};if(Nt(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:er(t.field),op:tr(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);s&&(n.structuredQuery.where=s);const i=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:er(t.field),direction:Zn(t.dir)}}(t))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.dt||yt(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Xn(t){let e=Bn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=Jn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new ee(nr(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,yt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new te(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new te(n,e)}(n.endAt)),oe(e,s,o,i,a,"F",c,u)}function Yn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Jn(t){return t?void 0!==t.unaryFilter?[sr(t)]:void 0!==t.fieldFilter?[rr(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Jn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Zn(t){return kn[t]}function tr(t){return Dn[t]}function er(t){return{fieldPath:t.canonicalString()}}function nr(t){return P.fromServerFormat(t.fieldPath)}function rr(t){return Kt.create(nr(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function sr(t){switch(t.unaryFilter.op){case"IS_NAN":const e=nr(t.unaryFilter.field);return Kt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=nr(t.unaryFilter.field);return Kt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=nr(t.unaryFilter.field);return Kt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=nr(t.unaryFilter.field);return Kt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function ir(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function or(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],cr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ur=cr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&$e(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ge(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ge(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=dn();return this.mutations.forEach(r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=qe(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(R.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),yn())}isEqual(t){return this.batchId===t.batchId&&j(this.mutations,t.mutations,(t,e)=>ze(t,e))&&j(this.baseMutations,t.baseMutations,(t,e)=>ze(t,e))}}class hr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=gn;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new hr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n,r,s=R.min(),i=R.min(),o=at.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new dr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t){this.ne=t}}function gr(t){const e=Xn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?pe(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mr{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(lt(t.integerValue));else if("doubleValue"in t){const n=lt(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),vt(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(""+(n.seconds||"")),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(ht(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Rt(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):y()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),U.fromName(t).path.forEach(t=>{this.ce(e,60),this.ge(t,e)})}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}mr.ye=new mr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{constructor(){this.ze=new vr}addToCollectionParentIndex(t,e){return this.ze.add(e),Q.resolve()}getCollectionParents(t,e){return Q.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Q.resolve()}deleteFieldIndex(t,e){return Q.resolve()}getDocumentsMatchingTarget(t,e){return Q.resolve(null)}getIndexType(t,e){return Q.resolve(0)}getFieldIndexes(t,e){return Q.resolve([])}getNextCollectionGroupToUpdate(t){return Q.resolve(null)}getMinOffset(t,e){return Q.resolve(G.min())}getMinOffsetFromCollectionGroup(t,e){return Q.resolve(G.min())}updateCollectionGroup(t,e,n){return Q.resolve()}updateIndexEntries(t,e){return Q.resolve()}}class vr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new st(F.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new st(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class br{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new br(t,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */br.DEFAULT_COLLECTION_PERCENTILE=10,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,br.DEFAULT=new br(41943040,br.DEFAULT_COLLECTION_PERCENTILE,br.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),br.DISABLED=new br(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wr{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new wr(0)}static Rn(){return new wr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(){this.changes=new on(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Q.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.getBaseDocument(t,e,n))).next(t=>(null!==n&&Ge(n.mutation,t,ot.empty(),L.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,yn()).next(()=>e))}getLocalViewOfDocuments(t,e,n=yn()){const r=fn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=ln();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=fn();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,yn()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let s=cn();const i=pn(),o=pn();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof We)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),Ge(o.mutation,e,o.mutation.getFieldMask(),L.now()))}),this.recalculateAndSaveOverlays(t,s).next(t=>(t.forEach((t,e)=>i.set(t,e)),e.forEach((t,e)=>{var n;return o.set(t,new _r(e,null!==(n=i.get(t))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(t,e){const n=pn();let r=new et((t,e)=>t-e),s=yn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const s of t)s.keys().forEach(t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||ot.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||yn()).add(t);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=dn();c.forEach(t=>{if(!s.has(t)){const r=qe(e.get(t),n.get(t));null!==r&&u.set(t,r),s=s.add(t)}}),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Q.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n){return function(t){return U.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):he(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Q.resolve(fn());let o=-1,a=s;return i.next(e=>Q.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Q.resolve():this.getBaseDocument(t,e,n).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,s)).next(()=>this.computeViews(t,a,e,yn())).next(t=>({batchId:o,changes:hn(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new U(e)).next(t=>{let e=ln();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=ln();return this.indexManager.getCollectionParents(t,r).next(i=>Q.forEach(i,i=>{const o=function(t,e){return new ie(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next(s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId))).next(t=>{t.forEach((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Vt.newInvalidDocument(n)))});let n=ln();return r.forEach((r,s)=>{const i=t.get(r);void 0!==i&&Ge(i.mutation,s,ot.empty(),L.now()),ve(e,s)&&(n=n.insert(r,s))}),n})}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Q.resolve(Vt.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Q.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Rn(n.createTime)}),Q.resolve()}getNamedQuery(t,e){return Q.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:gr(t.bundledQuery),readTime:Rn(t.readTime)}}(e)),Q.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this.overlays=new et(U.comparator),this.Xn=new Map}getOverlay(t,e){return Q.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fn();return Q.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.ie(t,e,r)}),Q.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Xn.delete(n)),Q.resolve()}getOverlaysForCollection(t,e,n){const r=fn(),s=e.length+1,i=new U(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Q.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new et((t,e)=>t-e);const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=fn(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=fn(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return Q.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new fr(e,n));let s=this.Xn.get(e);void 0===s&&(s=yn(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.Zn=new st(Or.ts),this.es=new st(Or.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Or(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Or(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new U(new F([])),n=new Or(e,t),r=new Or(e,t+1),s=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),s.push(t.key)}),s}cs(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new U(new F([])),n=new Or(e,t),r=new Or(e,t+1);let s=yn();return this.es.forEachInRange([n,r],t=>{s=s.add(t.key)}),s}containsKey(t){const e=new Or(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Or{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return U.comparator(t.key,e.key)||x(t.ls,e.ls)}static ns(t,e){return x(t.ls,e.ls)||U.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new st(Or.ts)}checkEmpty(t){return Q.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new lr(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new Or(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Q.resolve(i)}lookupMutationBatch(t,e){return Q.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return Q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Or(e,0),r=new Or(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],t=>{const e=this._s(t.ls);s.push(e)}),Q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(x);return e.forEach(t=>{const e=new Or(t,0),r=new Or(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Q.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;U.isDocumentKey(s)||(s=s.child(""));const i=new Or(new U(s),0);let o=new st(x);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},i),Q.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Q.forEach(e.mutations,r=>{const s=new Or(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}In(t){}containsKey(t,e){const n=new Or(e,0),r=this.ds.firstAfterOrEqual(n);return Q.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Q.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t){this.ps=t,this.docs=new et(U.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Q.resolve(n?n.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let n=cn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Vt.newInvalidDocument(t))}),Q.resolve(n)}getAllFromCollection(t,e,n){let r=cn();const s=new U(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||K($(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Q.resolve(r)}getAllFromCollectionGroup(t,e,n,r){y()}Is(t,e){return Q.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Dr(this)}getSize(t){return Q.resolve(this.size)}}class Dr extends Er{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)}),Q.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t){this.persistence=t,this.Ts=new on(t=>Bt(t),$t),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Es=0,this.As=new Ir,this.targetCount=0,this.Rs=wr.An()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),Q.resolve()}getLastRemoteSnapshotVersion(t){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Q.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Q.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new wr(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Q.resolve()}updateTargetData(t,e){return this.vn(e),Q.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Q.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Q.waitFor(s).next(()=>r)}getTargetCount(t){return Q.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Q.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Q.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(e=>{s.push(r.markPotentiallyOrphaned(t,e))}),Q.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Q.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Q.resolve(n)}containsKey(t,e){return Q.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(t,e){this.bs={},this.overlays={},this.Ps=new Y(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Nr(this),this.indexManager=new yr,this.remoteDocumentCache=function(t){return new kr(t)}(t=>this.referenceDelegate.Ss(t)),this.wt=new pr(e),this.Ds=new Cr(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Sr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Ar(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){d("MemoryPersistence","Starting transaction:",t);const r=new jr(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next(t=>this.referenceDelegate.xs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ns(t,e){return Q.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class jr extends H{constructor(t){super(),this.currentSequenceNumber=t}}class Lr{constructor(t){this.persistence=t,this.ks=new Ir,this.Os=null}static Ms(t){return new Lr(t)}get Fs(){if(this.Os)return this.Os;throw y()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Q.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Q.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Q.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach(t=>this.Fs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.Fs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.Fs,n=>{const r=U.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r,R.min())})}).next(()=>(this.Os=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())})}Ss(t){return 0}$s(t,e){return Q.or([()=>Q.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=yn(),r=yn();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Rr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next(s=>s||this.xi(t,e,r,n)).next(n=>n||this.Ni(t,e))}Ci(t,e){return Q.resolve(null)}xi(t,e,n,r){return ce(e)||r.isEqual(R.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next(s=>{const o=this.ki(e,s);return this.Oi(e,o,n,r)?this.Ni(t,e):(f()<=i["a"].DEBUG&&d("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ye(e)),this.Mi(t,o,e,q(r,-1)))})}ki(t,e){let n=new st(we(t));return e.forEach((e,r)=>{ve(t,r)&&(n=n.add(r))}),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return f()<=i["a"].DEBUG&&d("QueryEngine","Using full collection scan to execute query:",ye(e)),this.Di.getDocumentsMatchingQuery(t,e,G.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new et(x),this.Bi=new on(t=>Bt(t),$t),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tr(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.$i))}}function Vr(t,e,n,r){return new Fr(t,e,n,r)}async function Pr(t,e){const n=b(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const s=[],i=[];let o=yn();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ki:t,removedBatchIds:s,addedBatchIds:i}))})})}function Ur(t,e){const n=b(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Q.resolve();return i.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const i=n.docVersions.get(t);v(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,s))}(n,t,e,s).next(()=>s.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=yn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Br(t){const e=b(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Vs.getLastRemoteSnapshotVersion(t))}function qr(t,e){const n=b(t),r=e.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];e.targetChanges.forEach((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,i.removedDocuments,a).next(()=>n.Vs.addMatchingKeys(t,i.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(at.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(t,u))});let a=cn(),c=yn();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push($r(t,i,e.documentUpdates).next(t=>{a=t.Gi,c=t.Qi})),!r.isEqual(R.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next(e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Q.waitFor(o).next(()=>i.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.$i=s,t))}function $r(t,e,n){let r=yn(),s=yn();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=cn();return n.forEach((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(R.min())?(e.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),r=r.insert(n,i)):d("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Gi:r,Qi:s}})}function Gr(t,e){const n=b(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function Kr(t,e){const n=b(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.Vs.getTargetData(t,e).next(s=>s?(r=s,Q.resolve(r)):n.Vs.allocateTargetId(t).next(s=>(r=new dr(e,s,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t})}async function zr(t,e,n){const r=b(t),s=r.$i.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,t=>r.persistence.referenceDelegate.removeTarget(t,s))}catch(t){if(!X(t))throw t;d("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(s.target)}function Hr(t,e,n){const r=b(t);let s=R.min(),i=yn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=b(t),s=r.Bi.get(n);return void 0!==s?Q.resolve(r.$i.get(s)):r.Vs.getTargetData(e,n)}(r,t,de(e)).next(e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next(t=>{i=t})}).next(()=>r.Fi.getDocumentsMatchingQuery(t,e,n?s:R.min(),n?i:yn())).next(t=>(Wr(r,be(e),t),{documents:t,ji:i})))}function Wr(t,e,n){let r=R.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Li.set(e,r)}class Qr{constructor(){this.activeTargetIds=bn()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Xr{constructor(){this.Fr=new Qr,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Qr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){d("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){d("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);d("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then(t=>(d("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}ao(t,e,n,r,s,i){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}oo(t,e){const n=Zr[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise((s,i)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();d("Connection","XHR received:",JSON.stringify(e)),s(e);break;case a["a"].TIMEOUT:d("Connection",'RPC "'+t+'" timed out'),i(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(d("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);i(new E(e,t.message))}else i(new E(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new E(w.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{d("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Object(a["h"])(),i=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.uo(c.initMessageHeaders,e,n),Object(o["m"])()||Object(o["n"])()||Object(o["j"])()||Object(o["k"])()||Object(o["p"])()||Object(o["i"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");d("Connection","Creating WebChannel: "+u,c);const l=s.createWebChannel(u,c);let h=!1,f=!1;const p=new ts({jr:t=>{f?d("Connection","Not sending because WebChannel is closed:",t):(h||(d("Connection","Opening WebChannel transport."),l.open(),h=!0),d("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{f||d("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{f||(f=!0,d("Connection","WebChannel transport closed"),p.eo())}),m(l,a["f"].EventType.ERROR,t=>{f||(f=!0,g("Connection","WebChannel transport errored:",t),p.eo(new E(w.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!f){const n=t.data[0];v(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){d("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=en[t];if(void 0!==e)return sn(e)}(t),n=s.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),f=!0,p.eo(new E(e,n)),l.close()}else d("Connection","WebChannel received:",n),p.no(n)}}),m(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?d("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&d("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.Zr()},0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t){return new Nn(t,!0)}class ss{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&d("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ss(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(p(e.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Po===e&&this.Uo(t,n)},e=>{t(()=>{const t=new E(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)})})}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr(()=>{n(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(t=>{n(()=>this.qo(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(t){return d("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget(()=>this.Po===t?e():(d("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class os extends is{constructor(t,e,n,r,s,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,i),this.wt=s}Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=Kn(this.wt,t),n=function(t){if(!("targetChange"in t))return R.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?R.min():e.readTime?Rn(e.readTime):R.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=qn(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=Gt(r)?{documents:Wn(t,r)}:{query:Qn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=jn(t,e.resumeToken):e.snapshotVersion.compareTo(R.min())>0&&(n.readTime=xn(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=Yn(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=qn(this.wt),e.removeTarget=t,this.Mo(e)}}class as extends is{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=Hn(t.writeResults,t.commitTime),n=Rn(t.commitTime);return this.listener.Jo(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=qn(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>zn(this.wt,t))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.bo.ro(t,e,n,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ao(t,e,n,s,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new E(w.UNKNOWN,t.toString())})}terminate(){this.Zo=!0}}class us{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou("Connection failed 1 times. Most recent error: "+t.toString()),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(p(e),this.su=!1):d("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(t=>{n.enqueueAndForget(async()=>{bs(this)&&(d("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=b(t);e.lu.add(4),await fs(e),e._u.set("Unknown"),e.lu.delete(4),await hs(e)}(this))})}),this._u=new us(n,r)}}async function hs(t){if(bs(t))for(const e of t.fu)await e(!0)}async function fs(t){for(const e of t.fu)await e(!1)}function ds(t,e){const n=b(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),vs(n)?ys(n):Fs(n).Co()&&gs(n,e))}function ps(t,e){const n=b(t),r=Fs(n);n.hu.delete(e),r.Co()&&ms(n,e),0===n.hu.size&&(r.Co()?r.ko():bs(n)&&n._u.set("Unknown"))}function gs(t,e){t.wu.Nt(e.targetId),Fs(t).Qo(e)}function ms(t,e){t.wu.Nt(e),Fs(t).jo(e)}function ys(t){t.wu=new In({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Fs(t).start(),t._u.iu()}function vs(t){return bs(t)&&!Fs(t).Do()&&t.hu.size>0}function bs(t){return 0===b(t).lu.size}function ws(t){t.wu=void 0}async function Es(t){t.hu.forEach((e,n)=>{gs(t,e)})}async function _s(t,e){ws(t),vs(t)?(t._u.uu(e),ys(t)):t._u.set("Unknown")}async function Ts(t,e,n){if(t._u.set("Online"),e instanceof Cn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){d("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Cs(t,n)}else if(e instanceof _n?t.wu.Ut(e):e instanceof Tn?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(R.min()))try{const e=await Br(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.hu.get(r);s&&t.hu.set(r,s.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(at.EMPTY_BYTE_STRING,n.snapshotVersion)),ms(t,e);const r=new dr(n.target,e,1,n.sequenceNumber);gs(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){d("RemoteStore","Failed to raise snapshot:",e),await Cs(t,e)}}async function Cs(t,e,n){if(!X(e))throw e;t.lu.add(1),await fs(t),t._u.set("Offline"),n||(n=()=>Br(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{d("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await hs(t)})}function Ss(t,e){return e().catch(n=>Cs(t,n,e))}async function Is(t){const e=b(t),n=Vs(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Os(e);)try{const t=await Gr(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,As(e,t)}catch(t){await Cs(e,t)}ks(e)&&Ds(e)}function Os(t){return bs(t)&&t.au.length<10}function As(t,e){t.au.push(e);const n=Vs(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function ks(t){return bs(t)&&!Vs(t).Do()&&t.au.length>0}function Ds(t){Vs(t).start()}async function Ns(t){Vs(t).Xo()}async function xs(t){const e=Vs(t);for(const n of t.au)e.Ho(n.mutations)}async function js(t,e,n){const r=t.au.shift(),s=hr.from(r,e,n);await Ss(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Is(t)}async function Ls(t,e){e&&Vs(t).zo&&await async function(t,e){if(n=e.code,rn(n)&&n!==w.ABORTED){const n=t.au.shift();Vs(t).No(),await Ss(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Is(t)}var n}(t,e),ks(t)&&Ds(t)}async function Rs(t,e){const n=b(t);n.asyncQueue.verifyOperationInProgress(),d("RemoteStore","RemoteStore received new credentials");const r=bs(n);n.lu.add(3),await fs(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await hs(n)}async function Ms(t,e){const n=b(t);e?(n.lu.delete(2),await hs(n)):e||(n.lu.add(2),await fs(n),n._u.set("Unknown"))}function Fs(t){return t.mu||(t.mu=function(t,e,n){const r=b(t);return r.tu(),new os(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{zr:Es.bind(null,t),Jr:_s.bind(null,t),Go:Ts.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),vs(t)?ys(t):t._u.set("Unknown")):(await t.mu.stop(),ws(t))})),t.mu}function Vs(t){return t.gu||(t.gu=function(t,e,n){const r=b(t);return r.tu(),new as(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:Ns.bind(null,t),Jr:Ls.bind(null,t),Yo:xs.bind(null,t),Jo:js.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Is(t)):(await t.gu.stop(),t.au.length>0&&(d("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ps{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Ps(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Us(t,e){if(p("AsyncQueue",`${e}: ${t}`),X(t))return new E(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t){this.comparator=t?(e,n)=>t(e,n)||U.comparator(e.key,n.key):(t,e)=>U.comparator(t.key,e.key),this.keyedMap=ln(),this.sortedSet=new et(this.comparator)}static emptySet(t){return new Bs(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Bs))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Bs;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(){this.yu=new et(U.comparator)}track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):y():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal((e,n)=>{t.push(n)}),t}}class $s{constructor(t,e,n,r,s,i,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new $s(t,e,Bs.emptySet(e),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ge(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.Iu=void 0,this.listeners=[]}}class Ks{constructor(){this.queries=new on(t=>me(t),ge),this.onlineState="Unknown",this.Tu=new Set}}async function zs(t,e){const n=b(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new Gs),s)try{i.Iu=await n.onListen(r)}catch(t){const n=Us(t,`Initialization of query '${ye(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,i),i.listeners.push(e),e.Eu(n.onlineState),i.Iu&&e.Au(i.Iu)&&Xs(n)}async function Hs(t,e){const n=b(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Ws(t,e){const n=b(t);let r=!1;for(const s of e){const t=s.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Au(s)&&(r=!0);e.Iu=s}}r&&Xs(n)}function Qs(t,e,n){const r=b(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Xs(t){t.Tu.forEach(t=>{t.next()})}class Ys{constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new $s(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Du||!n)&&(!t.docs.isEmpty()||"Offline"===e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=$s.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Js{constructor(t){this.key=t}}class Zs{constructor(t){this.key=t}}class ti{constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=yn(),this.mutatedKeys=yn(),this.Lu=we(t),this.Uu=new Bs(this.Lu)}get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new qs,r=e?e.Uu:this.Uu;let s=e?e.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=ve(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(i=i.add(l),s=f?s.add(t):s.delete(t)):(i=i.delete(t),s=s.delete(t)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Uu:i,Gu:n,Oi:o,mutatedKeys:s}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const s=t.Gu.pu();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Lu(t.doc,e.doc)),this.ju(n);const i=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new $s(this.query,t.Uu,r,s,t.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new qs,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=yn(),this.Uu.forEach(t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))});const e=[];return t.forEach(t=>{this.Bu.has(t)||e.push(new Zs(t))}),this.Bu.forEach(n=>{t.has(n)||e.push(new Js(n))}),e}Ju(t){this.Fu=t.ji,this.Bu=yn();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return $s.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class ei{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ni{constructor(t){this.key=t,this.Xu=!1}}class ri{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new on(t=>me(t),ge),this.ec=new Map,this.nc=new Set,this.sc=new et(U.comparator),this.ic=new Map,this.rc=new Ir,this.oc={},this.uc=new Map,this.cc=wr.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function si(t,e){const n=Ti(t);let r,s;const i=n.tc.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const t=await Kr(n.localStore,de(e));n.isPrimaryClient&&ds(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,s=await ii(n,e,r,"current"===i)}return s}async function ii(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let s=e.view.Ku(n);s.Oi&&(s=await Hr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Ku(t,s)));const i=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,i);return yi(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const s=await Hr(t.localStore,e,!0),i=new ti(e,s.ji),o=i.Ku(s.documents),a=En.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=i.applyChanges(o,t.isPrimaryClient,a);yi(t,n,c.zu);const u=new ei(e,n,i);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function oi(t,e){const n=b(t),r=n.tc.get(e),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter(t=>!ge(t,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ps(n.remoteStore,r.targetId),gi(n,r.targetId)}).catch(W)):(gi(n,r.targetId),await zr(n.localStore,r.targetId,!0))}async function ai(t,e,n){const r=Ci(t);try{const t=await function(t,e){const n=b(t),r=L.now(),s=e.reduce((t,e)=>t.add(e.key),yn());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=cn(),c=yn();return n.Ui.getEntries(t,s).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(s=>{i=s;const o=[];for(const t of e){const e=Ke(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new We(t.key,e,Ft(e.value.mapValue),Pe.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:hn(i)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new et(x)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await wi(r,t.changes),await Is(r.remoteStore)}catch(t){const e=Us(t,"Failed to persist write");n.reject(e)}}async function ci(t,e){const n=b(t);try{const t=await qr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.ic.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?v(r.Xu):t.removedDocuments.size>0&&(v(r.Xu),r.Xu=!1))}),await wi(n,t,e)}catch(t){await W(t)}}function ui(t,e,n){const r=b(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)}),function(t,e){const n=b(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(r=!0)}),r&&Xs(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function li(t,e,n){const r=b(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ic.get(e),i=s&&s.key;if(i){let t=new et(U.comparator);t=t.insert(i,Vt.newNoDocument(i,R.min()));const n=yn().add(i),s=new wn(R.min(),new Map,new st(x),t,n);await ci(r,s),r.sc=r.sc.remove(i),r.ic.delete(e),bi(r)}else await zr(r.localStore,e,!1).then(()=>gi(r,e,n)).catch(W)}async function hi(t,e){const n=b(t),r=e.batch.batchId;try{const t=await Ur(n.localStore,e);pi(n,r,null),di(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wi(n,t)}catch(t){await W(t)}}async function fi(t,e,n){const r=b(t);try{const t=await function(t,e){const n=b(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);pi(r,e,n),di(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wi(r,t)}catch(n){await W(n)}}function di(t,e){(t.uc.get(e)||[]).forEach(t=>{t.resolve()}),t.uc.delete(e)}function pi(t,e,n){const r=b(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}function gi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(e=>{t.rc.containsKey(e)||mi(t,e)})}function mi(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(ps(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),bi(t))}function yi(t,e,n){for(const r of n)r instanceof Js?(t.rc.addReference(r.key,e),vi(t,r)):r instanceof Zs?(d("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||mi(t,r.key)):y()}function vi(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(d("SyncEngine","New document in limbo: "+n),t.nc.add(r),bi(t))}function bi(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new U(F.fromString(e)),r=t.cc.next();t.ic.set(r,new ni(n)),t.sc=t.sc.insert(n,r),ds(t.remoteStore,new dr(de(ae(n.path)),r,2,Y.ot))}}async function wi(t,e,n){const r=b(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach((t,a)=>{o.push(r.hc(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Rr.Vi(a.targetId,t);i.push(e)}}))}),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=b(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Q.forEach(e,e=>Q.forEach(e.Pi,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Q.forEach(e.vi,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!X(t))throw t;d("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function Ei(t,e){const n=b(t);if(!n.currentUser.isEqual(e)){d("SyncEngine","User change. New user:",e.toKey());const t=await Pr(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach(t=>{t.forEach(t=>{t.reject(new E(w.CANCELLED,e))})}),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await wi(n,t.Ki)}}function _i(t,e){const n=b(t),r=n.ic.get(e);if(r&&r.Xu)return yn().add(r.key);{let t=yn();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function Ti(t){const e=b(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ci.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_i.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=li.bind(null,e),e.Zu.Go=Ws.bind(null,e.eventManager),e.Zu.lc=Qs.bind(null,e.eventManager),e}function Ci(t){const e=b(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hi.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fi.bind(null,e),e}class Si{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=rs(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Vr(this.persistence,new Mr,t.initialUser,this.wt)}_c(t){return new xr(Lr.Ms,this.wt)}dc(t){return new Xr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ii{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ui(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ei.bind(null,this.syncEngine),await Ms(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ks}createDatastore(t){const e=rs(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new es(r));var r;return function(t,e,n,r){return new cs(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>ui(this.syncEngine,t,0),i=Jr.V()?new Jr:new Yr,new ls(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new ri(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=b(t);d("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await fs(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ai{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=N.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{d("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(d("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Us(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ki(t,e){t.asyncQueue.verifyOperationInProgress(),d("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Pr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Di(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ni(t);d("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>Rs(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Rs(e.remoteStore,n)),t.onlineComponents=e}async function Ni(t){return t.offlineComponents||(d("FirestoreClient","Using default OfflineComponentProvider"),await ki(t,new Si)),t.offlineComponents}async function xi(t){return t.onlineComponents||(d("FirestoreClient","Using default OnlineComponentProvider"),await Di(t,new Ii)),t.onlineComponents}function ji(t){return xi(t).then(t=>t.syncEngine)}async function Li(t){const e=await xi(t),n=e.eventManager;return n.onListen=si.bind(null,e.syncEngine),n.onUnlisten=oi.bind(null,e.syncEngine),n}function Ri(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Oi({next:i=>{e.enqueueAndForget(()=>Hs(t,o));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new E(w.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new E(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:t=>s.reject(t)}),o=new Ys(ae(n.path),i,{includeMetadataChanges:!0,Du:!0});return zs(t,o)}(await Li(t),t.asyncQueue,e,n,r)),r.promise}function Mi(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,s){const i=new Oi({next:n=>{e.enqueueAndForget(()=>Hs(t,o)),n.fromCache&&"server"===r.source?s.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new Ys(n,i,{includeMetadataChanges:!0,Du:!0});return zs(t,o)}(await Li(t),t.asyncQueue,e,n,r)),r.promise}const Fi=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e,n){if(!n)throw new E(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pi(t,e,n,r){if(!0===e&&!0===r)throw new E(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ui(t){if(!U.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bi(t){if(U.isDocumentKey(t))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qi(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function $i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qi(t);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gi{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Pi("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gi({}),this._settingsFrozen=!1,t instanceof mt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mt(t.options.projectId)}(t))}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gi(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new C;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new O(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Fi.get(t);e&&(d("ComponentProvider","Removing Datastore"),Fi.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zi{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zi(this.firestore,t,this._key)}}class Hi{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Hi(this.firestore,t,this._query)}}class Wi extends Hi{constructor(t,e,n){super(t,e,ae(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zi(this.firestore,null,new U(t))}withConverter(t){return new Wi(this.firestore,t,this._path)}}function Qi(t,e,...n){if(t=Object(o["g"])(t),Vi("collection","path",e),t instanceof Ki){const r=F.fromString(e,...n);return Bi(r),new Wi(t,null,r)}{if(!(t instanceof zi||t instanceof Wi))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Bi(r),new Wi(t.firestore,null,r)}}function Xi(t,e,...n){if(t=Object(o["g"])(t),1===arguments.length&&(e=N.I()),Vi("doc","path",e),t instanceof Ki){const r=F.fromString(e,...n);return Ui(r),new zi(t,null,new U(r))}{if(!(t instanceof zi||t instanceof Wi))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Ui(r),new zi(t.firestore,t instanceof Wi?t.converter:null,new U(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ss(this,"async_queue_retry"),this.Kc=()=>{const t=ns();t&&d("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=ns();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=ns();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const e=new _;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Mc.push(t),this.jc()))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!X(t))throw t;d("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const e=this.Oc.then(()=>(this.Lc=!0,t().catch(t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw p("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Lc=!1,t))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Ps.createAndSchedule(this,t,e,n,t=>this.Wc(t));return this.$c.push(r),r}Gc(){this.Bc&&y()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}function Ji(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class Zi extends Ki{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Yi,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||no(this),this._firestoreClient.terminate()}}function to(t=Object(r["e"])()){return Object(r["b"])(t,"firestore").getImmediate()}function eo(t){return t._firestoreClient||no(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function no(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new gt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ai(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ro{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new P(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(t){this._byteString=t}static fromBase64String(t){try{return new so(at.fromBase64String(t))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new so(at.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return x(this._lat,t._lat)||x(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=/^__.*__$/;class co{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new We(t,this.data,this.fieldMask,e,this.fieldTransforms):new He(t,this.data,e,this.fieldTransforms)}}class uo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new We(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function lo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class ho{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new ho(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Oo(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(lo(this.Zc)&&ao.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class fo{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||rs(t)}aa(t,e,n,r=!1){return new ho({Zc:t,methodName:e,ca:n,path:P.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function po(t){const e=t._freezeSettings(),n=rs(t._databaseId);return new fo(t._databaseId,!!e.ignoreUndefinedProperties,n)}function go(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);To("Data must be an object, but it was:",o,r);const a=Eo(r,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Co(e,r,n);if(!o.contains(s))throw new E(w.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Ao(t,s)||t.push(s)}c=new ot(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new co(new Mt(a),c,u)}class mo extends io{_toFieldTransform(t){if(2!==t.Zc)throw 1===t.Zc?t.oa(this._methodName+"() can only appear at the top level of your update data"):t.oa(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof mo}}function yo(t,e,n,r){const s=t.aa(1,e,n);To("Data must be an object, but it was:",s,r);const i=[],a=Mt.empty();Z(r,(t,r)=>{const c=Io(e,t,n);r=Object(o["g"])(r);const u=s.ia(c);if(r instanceof mo)i.push(c);else{const t=wo(r,u);null!=t&&(i.push(c),a.set(c,t))}});const c=new ot(i);return new uo(a,c,s.fieldTransforms)}function vo(t,e,n,r,s,i){const a=t.aa(1,e,n),c=[Co(e,r,n)],u=[s];if(i.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<i.length;o+=2)c.push(Co(e,i[o])),u.push(i[o+1]);const l=[],h=Mt.empty();for(let d=c.length-1;d>=0;--d)if(!Ao(l,c[d])){const t=c[d];let e=u[d];e=Object(o["g"])(e);const n=a.ia(t);if(e instanceof mo)l.push(t);else{const r=wo(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new ot(l);return new uo(h,f,a.fieldTransforms)}function bo(t,e,n,r=!1){return wo(n,t.aa(r?4:3,e))}function wo(t,e){if(_o(t=Object(o["g"])(t)))return To("Unsupported field value:",e,t),Eo(t,e);if(t instanceof io)return function(t,e){if(!lo(e.Zc))throw e.oa(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.oa(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=wo(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["g"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ce(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=L.fromDate(t);return{timestampValue:xn(e.wt,n)}}if(t instanceof L){const n=new L(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xn(e.wt,n)}}if(t instanceof oo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof so)return{bytesValue:jn(e.wt,t._byteString)};if(t instanceof zi){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa("Unsupported field value: "+qi(t))}(t,e)}function Eo(t,e){const n={};return tt(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Z(t,(t,r)=>{const s=wo(r,e.ea(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}function _o(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof L||t instanceof oo||t instanceof so||t instanceof zi||t instanceof io)}function To(t,e,n){if(!_o(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=qi(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Co(t,e,n){if((e=Object(o["g"])(e))instanceof ro)return e._internalPath;if("string"==typeof e)return Io(t,e);throw Oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const So=new RegExp("[~\\*/\\[\\]]");function Io(t,e,n){if(e.search(So)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ro(...e.split("."))._internalPath}catch(r){throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=" in field "+r),o&&(c+=" in document "+s),c+=")"),new E(w.INVALID_ARGUMENT,a+t+c)}function Ao(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zi(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Do(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(No("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Do extends ko{data(){return super.data()}}function No(t,e){return"string"==typeof e?Io(t,e):e instanceof ro?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class jo extends ko{constructor(t,e,n,r,s,i){super(t,e,n,r,i),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(No("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Lo extends jo{data(t={}){return super.data(t)}}class Ro{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new xo(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Lo(this._firestore,this._userDataWriter,n.key,n,new xo(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Lo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new xo(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Lo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new xo(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,i=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:Mo(e.type),doc:r,oldIndex:s,newIndex:i}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Mo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fo(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vo{}function Po(t,...e){for(const n of e)t=n._apply(t);return t}class Uo extends Vo{constructor(t,e,n){super(),this.fa=t,this.da=e,this._a=n,this.type="where"}_apply(t){const e=po(t.firestore),n=function(t,e,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){$o(o,i);const e=[];for(const n of o)e.push(qo(r,t,n));a={arrayValue:{values:e}}}else a=qo(r,t,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||$o(o,i),a=bo(n,e,o,"in"===i||"not-in"===i);const c=Kt.create(s,i,a);return function(t,e){if(e.ht()){const n=le(t);if(null!==n&&!n.isEqual(e.field))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=ue(t);null!==r&&Go(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.fa,this.da,this._a);return new Hi(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ie(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function Bo(t,e,n){const r=e,s=No("where",t);return new Uo(s,r,n)}function qo(t,e,n){if("string"==typeof(n=Object(o["g"])(n))){if(""===n)throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!he(e)&&-1!==n.indexOf("/"))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(F.fromString(n));if(!U.isDocumentKey(r))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return At(t,new U(r))}if(n instanceof zi)return At(t,n._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qi(n)}.`)}function $o(t,e){if(!Array.isArray(t)||0===t.length)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new E(w.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Go(t,e,n){if(!n.isEqual(e))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{convertValue(t,e="none"){switch(Et(t)){case 0:return null;case 1:return t.booleanValue;case 2:return lt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return Z(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new oo(lt(t.latitude),lt(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=dt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(pt(t));default:return null}}convertTimestamp(t){const e=ut(t);return new L(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);v(or(n));const r=new mt(n.get(1),n.get(3)),s=new U(n.popFirst(5));return r.isEqual(e)||p(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ho(t){t=$i(t,zi);const e=$i(t.firestore,Zi);return Ri(eo(e),t._key).then(n=>na(e,t,n))}class Wo extends Ko{constructor(t){super(),this.firestore=t}convertBytes(t){return new so(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zi(this.firestore,null,e)}}function Qo(t){t=$i(t,Hi);const e=$i(t.firestore,Zi),n=eo(e),r=new Wo(e);return Fo(t._query),Mi(n,t._query).then(n=>new Ro(e,r,t,n))}function Xo(t,e,n){t=$i(t,zi);const r=$i(t.firestore,Zi),s=zo(t.converter,e,n);return ea(r,[go(po(r),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Pe.none())])}function Yo(t,e,n,...r){t=$i(t,zi);const s=$i(t.firestore,Zi),i=po(s);let a;return a="string"==typeof(e=Object(o["g"])(e))||e instanceof ro?vo(i,"updateDoc",t._key,e,n,r):yo(i,"updateDoc",t._key,e),ea(s,[a.toMutation(t._key,Pe.exists(!0))])}function Jo(t){return ea($i(t.firestore,Zi),[new Je(t._key,Pe.none())])}function Zo(t,e){const n=$i(t.firestore,Zi),r=Xi(t),s=zo(t.converter,e);return ea(n,[go(po(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function ta(t,...e){var n,r,s;t=Object(o["g"])(t);let i={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||Ji(e[a])||(i=e[a],a++);const c={includeMetadataChanges:i.includeMetadataChanges};if(Ji(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let u,l,h;if(t instanceof zi)l=$i(t.firestore,Zi),h=ae(t._key.path),u={next:n=>{e[a]&&e[a](na(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=$i(t,Hi);l=$i(n.firestore,Zi),h=n._query;const r=new Wo(l);u={next:t=>{e[a]&&e[a](new Ro(l,r,n,t))},error:e[a+1],complete:e[a+2]},Fo(t._query)}return function(t,e,n,r){const s=new Oi(r),i=new Ys(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>zs(await Li(t),i)),()=>{s.Tc(),t.asyncQueue.enqueueAndForget(async()=>Hs(await Li(t),i))}}(eo(l),h,c,u)}function ea(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>ai(await ji(t),e,n)),n.promise}(eo(t),e)}function na(t,e,n){const r=n.docs.get(e._key),s=new Wo(t);return new jo(t,s,e._key,r,new xo(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(r["a"]),Object(r["c"])(new s["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new Zi(r,new S(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC")),Object(r["g"])(c,"3.4.11",t),Object(r["g"])(c,"3.4.11","esm2017")}()}).call(this,n("4362"))},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var s=t[r];"."===s?t.splice(r,1):".."===s?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){n=e+1;break}}else-1===r&&(s=!1,r=e+1);return-1===r?"":t.slice(n,r)}function s(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var o=i>=0?arguments[i]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(s(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===i(t,-1);return t=n(s(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var s=r(t.split("/")),i=r(n.split("/")),o=Math.min(s.length,i.length),a=o,c=0;c<o;c++)if(s[c]!==i[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,s=!0,i=t.length-1;i>=1;--i)if(e=t.charCodeAt(i),47===e){if(!s){r=i;break}}else s=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,s=!0,i=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(s=!1,r=o+1),46===a?-1===e?e=o:1!==i&&(i=1):-1!==e&&(i=-1);else if(!s){n=o+1;break}}return-1===e||-1===r||0===i||1===i&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},ec26:function(t,e,n){"use strict";var r,s=new Uint8Array(16);function i(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function a(t){return"string"===typeof t&&o.test(t)}for(var c=a,u=[],l=0;l<256;++l)u.push((l+256).toString(16).substr(1));function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!c(n))throw TypeError("Stringified UUID is invalid");return n}var f=h;function d(t,e,n){t=t||{};var r=t.random||(t.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var s=0;s<16;++s)e[n+s]=r[s];return e}return f(r)}e["a"]=d},f075:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return I})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return g})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return b})),n.d(e,"m",(function(){return h})),n.d(e,"n",(function(){return p})),n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return y})),n.d(e,"q",(function(){return w}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const u=s<t.length,l=u?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function f(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){return l().indexOf("Electron/")>=0}function m(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function y(){return l().indexOf("MSAppHost/")>=0}function v(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function b(){return"object"===typeof indexedDB}function w(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E="FirebaseError";class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=E,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?C(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new _(r,o,n);return a}}function C(t,e){return t.replace(S,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(O(n)&&O(i)){if(!I(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function O(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-vendors.0e98beb7.js.map