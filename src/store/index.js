import { createStore } from 'vuex'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, deleteDoc, doc, query, getDoc, setDoc, where, getDocs, onSnapshot } from "firebase/firestore";
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
            localVideo: null,
            remoteVideo: null,
            userId: uuidv4(),
            peerConnection: new RTCPeerConnection(),
            dataChannel: null,
        }
    },
    mutations: {

    },
    actions: {},
    modules: {}
})