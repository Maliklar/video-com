export default {
    data() {
        return {
            peerConnectionConfig: {
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
            },
        }
    },
    methods: {
        resetConnection() {

            this.$store.state.peerConnection.close();
            this.$store.state.peerConnection = new RTCPeerConnection(this.peerConnectionConfig);
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
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