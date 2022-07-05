import { createStore } from 'vuex'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, updateDoc, addDoc, deleteDoc, doc, query, getDoc, setDoc, where, getDocs, onSnapshot } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

// Firebase

const firebaseConfig = {
    apiKey: "AIzaSyAyHRr_nc-i78jM0wkYpppw-3_xiID3yEs",
    authDomain: "video-call-website-3b63b.firebaseapp.com",
    projectId: "video-call-website-3b63b",
    storageBucket: "video-call-website-3b63b.appspot.com",
    messagingSenderId: "2143810265",
    appId: "1:2143810265:web:e4a464d955b1d4cea184c8",
    measurementId: "G-E7NRCTMBDF"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



export default createStore({
    state() {
        return {
            collection,
            db,
            addDoc,
            doc,
            getDoc,
            where,
            getDocs,
            query,
            onSnapshot,
            deleteDoc,
            setDoc,
            updateDoc,
            localVideo: null,
            remoteVideo: null,
            userId: uuidv4(),
            documentId: "",
            peerConnection: new RTCPeerConnection({
                iceServers: [
                    { url: "stun:stun01.sipphone.com" },
                    { url: "stun:stun.ekiga.net" },
                    { url: "stun:stun.fwdnet.net" },
                    { url: "stun:stun.ideasip.com" },
                    { url: "stun:stun.iptel.org" },
                    { url: "stun:stun.rixtelecom.se" },
                    { url: "stun:stun.schlund.de" },
                    { url: "stun:stun.l.google.com:19302" },
                    { url: "stun:stun1.l.google.com:19302" },
                    { url: "stun:stun2.l.google.com:19302" },
                    { url: "stun:stun3.l.google.com:19302" },
                    { url: "stun:stun4.l.google.com:19302" },
                    { url: "stun:stunserver.org" },
                    { url: "stun:stun.softjoys.com" },
                    { url: "stun:stun.voiparound.com" },
                    { url: "stun:stun.voipbuster.com" },
                    { url: "stun:stun.voipstunt.com" },
                    { url: "stun:stun.voxgratia.org" },
                    { url: "stun:stun.xten.com" },
                    {
                        url: "turn:numb.viagenie.ca",
                        credential: "muazkh",
                        username: "webrtc@live.com",
                    },
                    {
                        url: "turn:192.158.29.39:3478?transport=udp",
                        credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                        username: "28224511:1379330808",
                    },
                    {
                        url: "turn:192.158.29.39:3478?transport=tcp",
                        credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                        username: "28224511:1379330808",
                    },
                ],
            }),
            dataChannel: null,
            callState: "idle",
            permissionState: true,
        }
    },
    mutations: {

    },
    actions: {},
    modules: {}
})