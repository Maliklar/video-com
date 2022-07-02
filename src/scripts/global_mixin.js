export default {
    data() {
        return {
            peerConnection: new RTCPeerConnection(),
            dataChannel: null,
        }
    },
    created() {
        this.dataChannel = this.peerConnection.createDataChannel("Data Channel");
    }
}