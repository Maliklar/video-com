(function(t){function e(e){for(var s,a,c=e[0],i=e[1],u=e[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},o={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"12df":function(t,e,n){},"13d4":function(t,e,n){t.exports=n.p+"img/end-call.dc8a2982.png"},"457d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("7a23");const o=Object(s["e"])("h1",{class:"call-state",id:"call-state"},null,-1);function r(t,e,n,r,a,c){const i=Object(s["j"])("remote-video"),u=Object(s["j"])("LocalVideo"),l=Object(s["j"])("Loading"),d=Object(s["j"])("ControlesContainer");return Object(s["h"])(),Object(s["d"])("main",null,[Object(s["f"])(i),Object(s["f"])(u,{onClick:c.dele},null,8,["onClick"]),"calling"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(l,{key:0})):Object(s["c"])("",!0),o,Object(s["f"])(d)])}const a={class:"controles-container"};function c(t,e,n,o,r,c){const i=Object(s["j"])("call-button"),u=Object(s["j"])("end-call-button");return Object(s["h"])(),Object(s["d"])("div",a,["idle"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(i,{key:0,class:"call-button"})):Object(s["c"])("",!0),"calling"==t.$store.state.callState||"connected"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(u,{key:1,class:"end-call-button"})):Object(s["c"])("",!0)])}var i=n("df74"),u=n.n(i);function l(t,e,n,o,r,a){return Object(s["h"])(),Object(s["d"])("img",{src:u.a,onClick:e[0]||(e[0]=t=>a.connect()),id:"call-icon",alt:"Call Icon"})}var d={methods:{async connect(){this.$store.state.callState="calling";const t=this.$store.state.query(this.$store.state.collection(this.$store.state.db,"Queue"),this.$store.state.where("userId","!=",this.$store.state.userId),this.$store.state.where("type","==","offer"),this.$store.state.where("active","==",!0)),e=await this.$store.state.getDocs(t);if(e.empty)this.$store.state.peerConnection.createOffer().then(t=>this.$store.state.peerConnection.setLocalDescription(t)).then(async()=>{try{const t=await this.$store.state.addDoc(this.$store.state.collection(this.$store.state.db,"Queue"),{userId:this.$store.state.userId,sdp:JSON.stringify(this.$store.state.peerConnection.localDescription),active:!0,type:"offer"});this.$store.state.documentId=t.id,this.userDocument=t.id}catch(t){console.error("Error adding document: ",t)}this.$store.state.onSnapshot(this.$store.state.doc(this.$store.state.db,"Queue",this.userDocument),t=>{if("answer"==t.data().type){const e=JSON.parse(t.data().sdp);this.$store.state.peerConnection.setRemoteDescription(e)}})});else{const t=Math.floor(Math.random()*e.docs.length),n=e.docs[t].data();this.$store.state.documentId=e.docs[t].id;const s=JSON.parse(n.sdp);this.$store.state.peerConnection.setRemoteDescription(s),this.$store.state.peerConnection.createAnswer().then(t=>this.$store.state.peerConnection.setLocalDescription(t)).then(async()=>{setTimeout(()=>{this.$store.state.updateDoc(this.$store.state.doc(this.$store.state.db,"Queue",this.$store.state.documentId),{sdp:JSON.stringify(this.$store.state.peerConnection.localDescription),type:"answer",active:!1})},5e3)})}}}},h=(n("b707"),n("6b0d")),p=n.n(h);const m=p()(d,[["render",l]]);var b=m,f=n("13d4"),g=n.n(f);function v(t,e,n,o,r,a){return Object(s["h"])(),Object(s["d"])("img",{src:g.a,onClick:e[0]||(e[0]=t=>a.endCall()),alt:"End Call Icon"})}var $={methods:{endCall(){this.resetConnection(),this.$store.state.updateDoc(this.$store.state.doc(this.$store.state.db,"Queue",this.$store.state.documentId),{active:!1}),this.$store.state.callState="idle"}}};const j=p()($,[["render",v]]);var O=j,y={components:{CallButton:b,EndCallButton:O}};n("b1c0");const C=p()(y,[["render",c]]);var w=C;const D=Object(s["e"])("video",{id:"local-video",muted:"",autoplay:""},null,-1),I=[D];function S(t,e,n,o,r,a){return Object(s["h"])(),Object(s["d"])("div",{onMousedown:e[0]||(e[0]=(...t)=>a.drag&&a.drag(...t)),class:"video-container",id:"local-video-container"},I,32)}var E={data(){return{video:null,left:0,top:0,mouseLeft:0,mouseTop:0,isHold:!1}},mounted(){this.video=document.getElementById("local-video-container"),document.addEventListener("mousemove",t=>{this.mouseLeft=+t.clientX,this.mouseTop=+t.clientY,this.isHold&&(this.video.style.top=this.mouseTop-.1*window.innerHeight+"px",this.video.style.left=this.mouseLeft-.1*window.innerWidth+"px")}),document.addEventListener("mouseup",()=>{this.isHold=!1})},methods:{drag(){this.isHold=!0}}};n("73e4");const x=p()(E,[["render",S]]);var k=x;const V={id:"remote-video-container"},L=Object(s["e"])("video",{id:"remote-video",src:"",autoplay:""},null,-1),P=[L];function Q(t,e,n,o,r,a){return Object(s["h"])(),Object(s["d"])("div",V,P)}var A={};n("e435");const M=p()(A,[["render",Q]]);var R=M,J=n("c6cc"),T=n.n(J);const _={class:"loading-container"},B=Object(s["e"])("img",{class:"loading",src:T.a,alt:"Loading"},null,-1),H=Object(s["e"])("figcaption",null,[Object(s["e"])("h2",null,"Connecting...")],-1),Y=[B,H];function G(t,e,n,o,r,a){return Object(s["h"])(),Object(s["d"])("div",_,Y)}var N={};n("f484");const q=p()(N,[["render",G]]);var Z=q,z={components:{ControlesContainer:w,Loading:Z,LocalVideo:k,RemoteVideo:R},name:"App",async created(){window.addEventListener("beforeunload",async t=>{t.preventDefault(),t.returnValue="";const e=this.$store.state.query(this.$store.state.collection(this.$store.state.db,"Queue"),this.$store.state.where("userId","==",this.$store.state.userId)),n=await this.$store.state.getDocs(e);n.forEach(t=>{this.$store.state.deleteDoc(this.$store.state.doc(this.$store.state.db,"Queue",t.id))})})},data(){return{userDocument:null}},methods:{async dele(){const t=this.$store.state.query(this.$store.state.collection(this.$store.state.db,"Queue"),this.$store.state.where("userId","==",this.$store.state.userId)),e=await this.$store.state.getDocs(t);e.forEach(t=>{this.$store.state.deleteDoc(this.$store.state.doc(this.$store.state.db,"Queue",t.id))})}},async mounted(){this.$store.state.localVideo=document.getElementById("local-video"),this.$store.state.remoteVideo=document.getElementById("remote-video"),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{this.$store.state.localVideo.srcObject=t,this.$store.state.localVideo.play(),this.$store.state.peerConnection.addStream(t)})}};n("79a8");const U=p()(z,[["render",r]]);var F=U,K=n("5502"),W=n("4b38"),X=n("10b8"),tt=n("ec26");const et={apiKey:"AIzaSyAyHRr_nc-i78jM0wkYpppw-3_xiID3yEs",authDomain:"video-call-website-3b63b.firebaseapp.com",projectId:"video-call-website-3b63b",storageBucket:"video-call-website-3b63b.appspot.com",messagingSenderId:"2143810265",appId:"1:2143810265:web:e4a464d955b1d4cea184c8",measurementId:"G-E7NRCTMBDF"},nt=Object(W["a"])(et),st=Object(X["g"])(nt);var ot=Object(K["a"])({state(){return{collection:X["b"],db:st,addDoc:X["a"],doc:X["d"],getDoc:X["e"],where:X["l"],getDocs:X["f"],query:X["i"],onSnapshot:X["h"],deleteDoc:X["c"],setDoc:X["j"],updateDoc:X["k"],localVideo:null,remoteVideo:null,userId:Object(tt["a"])(),documentId:"",peerConnection:new RTCPeerConnection({iceServers:[{url:"stun:stun01.sipphone.com"},{url:"stun:stun.ekiga.net"},{url:"stun:stun.fwdnet.net"},{url:"stun:stun.ideasip.com"},{url:"stun:stun.iptel.org"},{url:"stun:stun.rixtelecom.se"},{url:"stun:stun.schlund.de"},{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"},{url:"stun:stun2.l.google.com:19302"},{url:"stun:stun3.l.google.com:19302"},{url:"stun:stun4.l.google.com:19302"},{url:"stun:stunserver.org"},{url:"stun:stun.softjoys.com"},{url:"stun:stun.voiparound.com"},{url:"stun:stun.voipbuster.com"},{url:"stun:stun.voipstunt.com"},{url:"stun:stun.voxgratia.org"},{url:"stun:stun.xten.com"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"}]}),dataChannel:null,callState:"idle"}},mutations:{},actions:{},modules:{}}),rt={data(){return{peerConnectionConfig:{iceServers:[{url:"stun:stun01.sipphone.com"},{url:"stun:stun.ekiga.net"},{url:"stun:stun.fwdnet.net"},{url:"stun:stun.ideasip.com"},{url:"stun:stun.iptel.org"},{url:"stun:stun.rixtelecom.se"},{url:"stun:stun.schlund.de"},{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"},{url:"stun:stun2.l.google.com:19302"},{url:"stun:stun3.l.google.com:19302"},{url:"stun:stun4.l.google.com:19302"},{url:"stun:stunserver.org"},{url:"stun:stun.softjoys.com"},{url:"stun:stun.voiparound.com"},{url:"stun:stun.voipbuster.com"},{url:"stun:stun.voipstunt.com"},{url:"stun:stun.voxgratia.org"},{url:"stun:stun.xten.com"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"}]}}},methods:{resetConnection(){this.$store.state.peerConnection.close(),this.$store.state.peerConnection=new RTCPeerConnection(this.peerConnectionConfig),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(t=>{this.$store.state.peerConnection.addStream(t)}),this.$store.state.dataChannel=this.$store.state.peerConnection.createDataChannel("Data Channel")}},created(){this.$store.state.dataChannel=this.$store.state.peerConnection.createDataChannel("Data Channel"),this.$store.state.dataChannel.onmessage=()=>{},this.$store.state.dataChannel.onopen=()=>{this.$store.state.callState="connected"},this.$store.state.dataChannel.onclose=()=>{this.$store.state.callState="idle",this.resetConnection()},this.$store.state.peerConnection.onicecandidate=()=>{},this.$store.state.peerConnection.ontrack=t=>{this.$store.state.remoteVideo.srcObject=t.streams[0]}}};Object(s["a"])(F).use(ot).mixin(rt).mount("#app")},7073:function(t,e,n){},"73e4":function(t,e,n){"use strict";n("8569")},"79a8":function(t,e,n){"use strict";n("fb3b")},8569:function(t,e,n){},"927c":function(t,e,n){},b1c0:function(t,e,n){"use strict";n("12df")},b707:function(t,e,n){"use strict";n("457d")},c6cc:function(t,e,n){t.exports=n.p+"img/Infinity-0.7s-197px.58726c1e.svg"},df74:function(t,e,n){t.exports=n.p+"img/call.9bc44d47.png"},e435:function(t,e,n){"use strict";n("7073")},f484:function(t,e,n){"use strict";n("927c")},fb3b:function(t,e,n){}});
//# sourceMappingURL=app.fb98be53.js.map