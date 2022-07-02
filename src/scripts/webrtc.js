    const peerConnection = new RTCPeerConnection();
    const dataChannel = peerConnection.createDataChannel("Data Channel");
    export default {
        peerConnection,
        dataChannel,
    }