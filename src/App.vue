<template>
  <main v-if="$store.state.permissionState">
    <remote-video />
    <LocalVideo @click="dele" />
    <Loading v-if="$store.state.callState == 'calling'" />
    <ControlesContainer />
  </main>
  <Refused v-else />
</template>


<script>
import ControlesContainer from "./components/ControlesContainer.vue";
import LocalVideo from "./components/LocalVideo.vue";
import RemoteVideo from "./components/RemoteVideo.vue";
import Loading from "./components/Loading.vue";
import Refused from "./components/Refused.vue";
export default {
  components: { ControlesContainer, Loading, LocalVideo, RemoteVideo, Refused },
  name: "App",
  async created() {
    window.addEventListener("beforeunload", async (e) => {
      e.preventDefault();
      e.returnValue = "";
      const q = this.$store.state.query(
        this.$store.state.collection(this.$store.state.db, "Queue"),
        this.$store.state.where("userId", "==", this.$store.state.userId)
      );
      const querySnapshot = await this.$store.state.getDocs(q);

      querySnapshot.forEach((doc) => {
        this.$store.state.deleteDoc(
          this.$store.state.doc(this.$store.state.db, "Queue", doc.id)
        );
      });
    });
  },

  data() {
    return {
      userDocument: null,
    };
  },
  methods: {
    async dele() {
      const q = this.$store.state.query(
        this.$store.state.collection(this.$store.state.db, "Queue"),
        this.$store.state.where("userId", "==", this.$store.state.userId)
      );
      const querySnapshot = await this.$store.state.getDocs(q);

      querySnapshot.forEach((doc) => {
        this.$store.state.deleteDoc(
          this.$store.state.doc(this.$store.state.db, "Queue", doc.id)
        );
      });
    },
  },
  async mounted() {
    this.$store.state.localVideo = document.getElementById("local-video");
    this.$store.state.remoteVideo = document.getElementById("remote-video");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        this.$store.state.localVideo.srcObject = stream;
        this.$store.state.localVideo.play();
        this.$store.state.peerConnection.addStream(stream);
      })
      .catch(() => {
        this.$store.state.permissionState = false;
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
  background-color: #350032;
  color: #ffffff;
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
