export default {
    data() {
        return {}
    },
    created() {

        this.$store.state.dataChannel = this.$store.state.peerConnection.createDataChannel("Data Channel");

        this.$store.state.dataChannel.onmessage = (e) => {
            console.log("Message Received: " + e.data);
        };

        this.$store.state.dataChannel.onopen = () => {
            console.log("CONNECTION OPENED");
        };

        this.$store.state.peerConnection.onicecandidate = () => {
            console.log("ICE FOUND: ");
        };
        this.$store.state.peerConnection.ontrack = (e) => {
            console.log("----------------track received");
            this.$store.state.remoteVideo.srcObject = e.streams[0];
            this.$store.state.remoteVideo.play();
        };
    },
    methods: {

        setLocalVideo(vid) {
            console.log(vid);

            this.localVideo = vid;
        },
        async createOffer() {
            this.peerConnection.createOffer()
                .then(offer => this.peerConnection.setLocalDescription(offer));

        },
        async createAnswer() {
            this.peerConnection.createAnswer()
                .then(answer => this.peerConnection.setLocalDescription(answer));
        }
    }
}