(function(t){function e(e){for(var s,c,a=e[0],i=e[1],u=e[2],d=0,h=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&h.push(o[c][0]),o[c]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(s=!1)}s&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},o={app:0},r=[];function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=i;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0670":function(t,e,n){"use strict";n("1f42")},"099c":function(t,e,n){"use strict";n("2cad")},"13d4":function(t,e,n){t.exports=n.p+"img/end-call.9383a37e.png"},"1f42":function(t,e,n){},"2cad":function(t,e,n){},"2f4d":function(t,e,n){},3886:function(t,e,n){t.exports=n.p+"img/next-call.5a736e9d.png"},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("7a23");const o=Object(s["e"])("h1",{class:"call-state",id:"call-state"},null,-1);function r(t,e,n,r,c,a){const i=Object(s["j"])("remote-video"),u=Object(s["j"])("LocalVideo"),l=Object(s["j"])("Loading"),d=Object(s["j"])("ControlesContainer");return Object(s["h"])(),Object(s["d"])("main",null,[Object(s["f"])(i),Object(s["f"])(u,{onClick:a.dele},null,8,["onClick"]),"calling"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(l,{key:0})):Object(s["c"])("",!0),o,Object(s["f"])(d)])}const c={class:"controles-container"};function a(t,e,n,o,r,a){const i=Object(s["j"])("call-button"),u=Object(s["j"])("mute-button"),l=Object(s["j"])("end-call-button"),d=Object(s["j"])("next-button");return Object(s["h"])(),Object(s["d"])("div",c,["idle"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(i,{key:0,class:"call-button"})):Object(s["c"])("",!0),"connected"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(u,{key:1,class:"mute-button"})):Object(s["c"])("",!0),"calling"==t.$store.state.callState||"connected"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(l,{key:2,class:"end-call-button"})):Object(s["c"])("",!0),"connected"==t.$store.state.callState?(Object(s["h"])(),Object(s["b"])(d,{key:3,class:"next-button"})):Object(s["c"])("",!0)])}var i=n("df74"),u=n.n(i);function l(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("img",{src:u.a,onClick:e[0]||(e[0]=t=>c.connect()),id:"call-icon",alt:"Call Icon"})}var d={methods:{async connect(){this.$store.state.callState="calling";const t=this.$store.state.query(this.$store.state.collection(this.$store.state.db,"Queue"),this.$store.state.where("userId","!=",this.$store.state.userId),this.$store.state.where("type","==","offer"),this.$store.state.where("active","==",!0)),e=await this.$store.state.getDocs(t);if(console.log(e),e.empty)this.$store.state.peerConnection.createOffer().then(t=>this.$store.state.peerConnection.setLocalDescription(t)).then(async()=>{try{const t=await this.$store.state.addDoc(this.$store.state.collection(this.$store.state.db,"Queue"),{userId:this.$store.state.userId,sdp:JSON.stringify(this.$store.state.peerConnection.localDescription),active:!0,type:"offer"});console.log("Document written with ID: ",t.id),this.$store.state.documentId=t.id,this.userDocument=t.id}catch(t){console.error("Error adding document: ",t)}this.$store.state.onSnapshot(this.$store.state.doc(this.$store.state.db,"Queue",this.userDocument),t=>{const e=t.metadata.hasPendingWrites?"Local":"Server";if(console.log(e," data: ",t.data()),"answer"==t.data().type){const e=JSON.parse(t.data().sdp);this.$store.state.peerConnection.setRemoteDescription(e)}})}).then(()=>console.log("then"));else{const t=Math.floor(Math.random()*e.docs.length),n=e.docs[t].data();this.$store.state.documentId=e.docs[t].id;const s=JSON.parse(n.sdp);this.$store.state.peerConnection.setRemoteDescription(s),this.$store.state.peerConnection.createAnswer().then(t=>this.$store.state.peerConnection.setLocalDescription(t)).then(async()=>{setTimeout(()=>{this.$store.state.updateDoc(this.$store.state.doc(this.$store.state.db,"Queue",this.$store.state.documentId),{sdp:JSON.stringify(this.$store.state.peerConnection.localDescription),type:"answer",active:!1})},5e3)})}}}},h=n("6b0d"),p=n.n(h);const b=p()(d,[["render",l]]);var m=b,g=n("13d4"),f=n.n(g);function v(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("img",{src:f.a,onClick:e[0]||(e[0]=t=>c.endCall()),alt:"End Call Icon"})}var O={methods:{endCall(){this.resetConnection(),this.$store.state.updateDoc(this.$store.state.doc(this.$store.state.db,"Queue",this.$store.state.documentId),{active:!1}),this.$store.state.callState="idle"}}};const $=p()(O,[["render",v]]);var j=$,C=n("d50d"),y=n.n(C);const w={src:y.a,alt:"Mute Icon"};function D(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("img",w)}var I={};const S=p()(I,[["render",D]]);var x=S,E=n("3886"),k=n.n(E);const N={src:k.a,alt:"Next Call Icon"};function P(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("img",N)}var V={};const M=p()(V,[["render",P]]);var Q=M,A={components:{CallButton:m,EndCallButton:j,MuteButton:x,NextButton:Q}};n("099c");const R=p()(A,[["render",a]]);var J=R;const L={class:"video-container",id:"local-video-container"},B=Object(s["e"])("video",{id:"local-video",autoplay:""},null,-1),T=[B];function _(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("div",L,T)}var G={};n("7f9a");const Y=p()(G,[["render",_]]);var q=Y;const Z={id:"remote-video-container"},z=Object(s["e"])("video",{id:"remote-video",src:"",autoplay:""},null,-1),U=[z];function F(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("div",Z,U)}var H={};n("e435");const K=p()(H,[["render",F]]);var W=K,X=n("9359"),tt=n.n(X);const et={class:"loading",src:tt.a,alt:"Loading"};function nt(t,e,n,o,r,c){return Object(s["h"])(),Object(s["d"])("img",et)}var st={};n("0670");const ot=p()(st,[["render",nt]]);var rt=ot,ct={components:{ControlesContainer:J,Loading:rt,LocalVideo:q,RemoteVideo:W},name:"App",async created(){window.addEventListener("beforeunload",async t=>{t.preventDefault(),t.returnValue="";const e=this.$store.state.query(this.$store.state.collection(this.$store.state.db,"Queue"),this.$store.state.where("userId","==",this.$store.state.userId)),n=await this.$store.state.getDocs(e);n.forEach(t=>{console.log(t),this.$store.state.deleteDoc(this.$store.state.doc(this.$store.state.db,"Queue",t.id))})})},data(){return{userDocument:null}},methods:{async dele(){const t=this.$store.state.query(this.$store.state.collection(this.$store.state.db,"Queue"),this.$store.state.where("userId","==",this.$store.state.userId)),e=await this.$store.state.getDocs(t);e.forEach(t=>{console.log(t),this.$store.state.deleteDoc(this.$store.state.doc(this.$store.state.db,"Queue",t.id))})}},async mounted(){this.$store.state.localVideo=document.getElementById("local-video"),this.$store.state.remoteVideo=document.getElementById("remote-video"),navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{this.$store.state.localVideo.srcObject=t,this.$store.state.localVideo.play(),this.$store.state.peerConnection.addStream(t)})}};n("c85c");const at=p()(ct,[["render",r]]);var it=at,ut=n("5502"),lt=n("4b38"),dt=n("10b8"),ht=n("ec26");const pt={apiKey:"AIzaSyAyHRr_nc-i78jM0wkYpppw-3_xiID3yEs",authDomain:"video-call-website-3b63b.firebaseapp.com",projectId:"video-call-website-3b63b",storageBucket:"video-call-website-3b63b.appspot.com",messagingSenderId:"2143810265",appId:"1:2143810265:web:e4a464d955b1d4cea184c8",measurementId:"G-E7NRCTMBDF"},bt=Object(lt["a"])(pt),mt=Object(dt["g"])(bt);var gt=Object(ut["a"])({state(){return{collection:dt["b"],db:mt,addDoc:dt["a"],doc:dt["d"],getDoc:dt["e"],where:dt["l"],getDocs:dt["f"],query:dt["i"],onSnapshot:dt["h"],deleteDoc:dt["c"],setDoc:dt["j"],updateDoc:dt["k"],localVideo:null,remoteVideo:null,userId:Object(ht["a"])(),documentId:"",peerConnection:new RTCPeerConnection({iceServers:[{url:"stun:stun01.sipphone.com"},{url:"stun:stun.ekiga.net"},{url:"stun:stun.fwdnet.net"},{url:"stun:stun.ideasip.com"},{url:"stun:stun.iptel.org"},{url:"stun:stun.rixtelecom.se"},{url:"stun:stun.schlund.de"},{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"},{url:"stun:stun2.l.google.com:19302"},{url:"stun:stun3.l.google.com:19302"},{url:"stun:stun4.l.google.com:19302"},{url:"stun:stunserver.org"},{url:"stun:stun.softjoys.com"},{url:"stun:stun.voiparound.com"},{url:"stun:stun.voipbuster.com"},{url:"stun:stun.voipstunt.com"},{url:"stun:stun.voxgratia.org"},{url:"stun:stun.xten.com"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"}]}),dataChannel:null,callState:"idle"}},mutations:{},actions:{},modules:{}}),ft={data(){return{peerConnectionConfig:{iceServers:[{url:"stun:stun01.sipphone.com"},{url:"stun:stun.ekiga.net"},{url:"stun:stun.fwdnet.net"},{url:"stun:stun.ideasip.com"},{url:"stun:stun.iptel.org"},{url:"stun:stun.rixtelecom.se"},{url:"stun:stun.schlund.de"},{url:"stun:stun.l.google.com:19302"},{url:"stun:stun1.l.google.com:19302"},{url:"stun:stun2.l.google.com:19302"},{url:"stun:stun3.l.google.com:19302"},{url:"stun:stun4.l.google.com:19302"},{url:"stun:stunserver.org"},{url:"stun:stun.softjoys.com"},{url:"stun:stun.voiparound.com"},{url:"stun:stun.voipbuster.com"},{url:"stun:stun.voipstunt.com"},{url:"stun:stun.voxgratia.org"},{url:"stun:stun.xten.com"},{url:"turn:numb.viagenie.ca",credential:"muazkh",username:"webrtc@live.com"},{url:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{url:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"}]}}},methods:{resetConnection(){this.$store.state.peerConnection.close(),this.$store.state.peerConnection=new RTCPeerConnection(this.peerConnectionConfig),navigator.mediaDevices.getUserMedia({video:!0}).then(t=>{this.$store.state.peerConnection.addStream(t)}),this.$store.state.dataChannel=this.$store.state.peerConnection.createDataChannel("Data Channel")}},created(){this.$store.state.dataChannel=this.$store.state.peerConnection.createDataChannel("Data Channel"),this.$store.state.dataChannel.onmessage=t=>{console.log("Message Received: "+t.data)},this.$store.state.dataChannel.onopen=()=>{this.$store.state.callState="connected",console.log("CONNECTION OPENED")},this.$store.state.dataChannel.onclose=()=>{this.$store.state.callState="idle",this.resetConnection(),console.log("CONNECTION Closed")},this.$store.state.peerConnection.onicecandidate=()=>{console.log("ICE FOUND: ")},this.$store.state.peerConnection.ontrack=t=>{console.log("----------------track received"),this.$store.state.remoteVideo.srcObject=t.streams[0]}}};Object(s["a"])(it).use(gt).mixin(ft).mount("#app")},7073:function(t,e,n){},"7f9a":function(t,e,n){"use strict";n("c7ed")},9359:function(t,e,n){t.exports=n.p+"img/Infinity-1s-200px.8b829e01.svg"},c7ed:function(t,e,n){},c85c:function(t,e,n){"use strict";n("2f4d")},d50d:function(t,e,n){t.exports=n.p+"img/mute.02453d3d.png"},df74:function(t,e,n){t.exports=n.p+"img/call.d7bfe510.png"},e435:function(t,e,n){"use strict";n("7073")}});
//# sourceMappingURL=app.287c88fb.js.map