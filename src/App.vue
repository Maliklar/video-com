<template>
  <main>
    <remote-video />
    <LocalVideo />
    <h1 class="call-state" id="call-state"></h1>

    <ControlesContainer />
  </main>
</template>

<script>
import ControlesContainer from "./components/ControlesContainer.vue";
import LocalVideo from "./components/LocalVideo.vue";
import RemoteVideo from "./components/RemoteVideo.vue";
export default {
  components: { ControlesContainer, LocalVideo, RemoteVideo },
  name: "App",
  async created() {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      e.returnValue = "";
      this.$store.state.deleteDoc(
        this.$store.state.doc(this.$store.state.db, "Queue", this.userDocument)
      );
    });
  },

  data() {
    return {
      userDocument: null,
    };
  },
  methods: {
    dele() {
      this.$store.state.deleteDoc(
        this.$store.state.doc(this.$store.state.db, "Queue", this.userDocument)
      );
    },
  },
  async mounted() {
    this.$store.state.localVideo = document.getElementById("local-video");
    this.$store.state.remoteVideo = document.getElementById("remote-video");

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      this.$store.state.localVideo.srcObject = stream;
      this.$store.state.localVideo.play();
      this.$store.state.peerConnection.addStream(stream);
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #828282;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
}

.call-state {
  color: white;
  width: 100%;
  font-size: 4rem;
  position: absolute;
  top: 50%;
  margin-top: -2em;
}

.floating-action-button {
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px white;
  padding: 1em;
}

body {
  margin: 0px;
  padding: 0px;
}

main {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 624px) {
}
</style>
