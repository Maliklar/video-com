console.log(peerConnectionConfig);

const peerConnection = new RTCPeerConnection(peerConnectionConfig);
const dataChannel = peerConnection.createDataChannel("Data Channel");


const localVideo = document.getElementById("local-video");
const remoteVideo = document.getElementById("remote-video");

// DOM Elements
const offerResult = document.getElementById("offer-result");
const answerResult = document.getElementById("answer-result");
const callerDescriptionInput = document.getElementById("caller-description");
const receiverDescriptionInput = document.getElementById("receiver-description");

const offerInput = document.getElementById("offer-input");
const answerInput = document.getElementById("answer-input");

dataChannel.onmessage = e => {
    console.log("Message Received: " + e.data);
}

dataChannel.onopen = e => {
    console.log("connection Opened");
}

peerConnection.onicecandidate = e => {
    console.log("found");
    offerResult.innerText = (JSON.stringify(peerConnection.localDescription));
}


navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    localVideo.srcObject = stream;
    localVideo.play();
    peerConnection.addStream(stream);
    // stream.getTracks().forEach(track => {
    //     peerConnection.addTrack(track, stream);
    // });
})


// peerConnection.addEventListener('track', async(event) => {
//     const [remoteStream] = event.streams;
//     remoteVideo.srcObject = remoteStream;
//     console.log(remoteVideo);
// });

peerConnection.ontrack = (e) => {
    console.log("trackreceived");

    for (let i = 0; i < e.streams.length; i++) {
        console.log(e.streams[0]);
    }
    remoteVideo.srcObject = e.streams[0];
    remoteVideo.play();
};


function createOffer() {
    // console.log("Creating Offer");

    peerConnection.createOffer().then(o => peerConnection.setLocalDescription(o))
        // .then(() => offerResult.innerText = JSON.stringify(peerConnection.localDescription))
}

function setOffer() {
    console.log("Setting Offer: " + offerInput.value);
    peerConnection.setRemoteDescription(JSON.parse(offerInput.value));
}

function createAnswer() {
    console.log("Creating Answer");
    peerConnection.createAnswer().then(answer => {
        peerConnection.setLocalDescription(answer);
        answerResult.innerText = JSON.stringify(answer);
    })
}

function setAnswer() {
    console.log(answerInput.value);
    console.log("Setting Answer");
    peerConnection.setRemoteDescription(JSON.parse(answerInput.value));

}