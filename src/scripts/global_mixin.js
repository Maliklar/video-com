export default {
    data() {
        return {}
    },
    methods: {
        resetConnection() {

            this.$store.state.peerConnection.close();
            this.$store.state.peerConnection = new RTCPeerConnection();
            navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
                this.$store.state.peerConnection.addStream(stream);
            });
            this.$store.state.dataChannel = this.$store.state.peerConnection.createDataChannel("Data Channel");
        }
    },
    created() {

        this.$store.state.dataChannel = this.$store.state.peerConnection.createDataChannel("Data Channel");

        this.$store.state.dataChannel.onmessage = (e) => {
            console.log("Message Received: " + e.data);
        };

        this.$store.state.dataChannel.onopen = () => {
            this.$store.state.callState = "connected";
            console.log("CONNECTION OPENED");
        };

        this.$store.state.dataChannel.onclose = () => {
            this.$store.state.callState = "idle";
            this.resetConnection();
            console.log("CONNECTION Closed");
        };

        this.$store.state.peerConnection.onicecandidate = () => {
            console.log("ICE FOUND: ");
        };
        this.$store.state.peerConnection.ontrack = (e) => {
            console.log("----------------track received");
            this.$store.state.remoteVideo.srcObject = e.streams[0];

        };
    },
}