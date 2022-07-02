<template>
  <main>
    <LeftSide />
    <div class="video-container" id="remote-video-container">
      <video id="remote-video" src=""></video>
    </div>

    <button @click="connect()" class="floating-action-button">Connect</button>
  </main>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import LeftSide from "./components/LeftSide.vue";
export default {
  components: { LeftSide },
  name: "App",
  async created() {
    this.userId = uuidv4();

    this.peerConnection = new RTCPeerConnection();
    this.dataChannel = this.peerConnection.createDataChannel("Data Channel");

    this.dataChannel.onmessage = (e) => {
      console.log("Message Received: " + e.data);
    };

    this.dataChannel.onopen = () => {
      console.log("connection Opened");
    };

    this.peerConnection.addEventListener("icecandidate", async () => {
      console.log("found: ", this.$store.state.db);
    });

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
      peerConnection: null,
      dataChannel: null,
      userId: null,
      userDocument: null,
    };
  },
  methods: {
    dele() {
      this.$store.state.deleteDoc(
        this.$store.state.doc(this.$store.state.db, "Queue", this.userDocument)
      );
    },
    async connect() {
      console.log("Searching for Offers");
      // searching for peer
      const q = this.$store.state.query(
        this.$store.state.collection(this.$store.state.db, "Queue"),
        this.$store.state.where("userId", "!=", this.userId)
      );
      const querySnapshot = await this.$store.state.getDocs(q);
      // const isEmpty = Ob
      // ject.keys(querySnapshot).data().length === 0;

      console.log(querySnapshot.empty);
      if (querySnapshot.empty) {
        // create an offer and send it to the database
        this.peerConnection
          .createOffer()
          .then((o) => this.peerConnection.setLocalDescription(o))
          .then(async () => {
            try {
              const docRef = await this.$store.state.addDoc(
                this.$store.state.collection(this.$store.state.db, "Queue"),
                {
                  userId: this.userId,
                  scp: JSON.stringify(this.peerConnection.localDescription),
                  type: "offer",
                }
              );
              console.log("Document written with ID: ", docRef.id);
              this.userDocument = docRef.id;
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          })
          .then(() => {
            // Wait for an answer
            this.$store.state.onSnapshot(
              this.$store.state.doc(
                this.$store.state.db,
                "Queue",
                this.userDocument
              ),
              (doc) => {
                const source = doc.metadata.hasPendingWrites
                  ? "Local"
                  : "Server";
                console.log(source, " data: ", doc.data());
                if (doc.data().type == "answer") {
                  const scp = JSON.parse(doc.data().scp);
                  console.log(scp);
                  this.peerConnection.setRemoteDescription(scp);
                }
              }
            );
          });
      } else {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          const scp = JSON.parse(doc.data().scp);

          this.peerConnection.setRemoteDescription(scp);
          this.peerConnection
            .createAnswer()
            .then((answer) => {
              this.peerConnection.setLocalDescription(answer);
              console.log(this.peerConnection.localDescription);
            })
            .then(async () => {
              setTimeout(() => {
                this.$store.state.setDoc(
                  this.$store.state.doc(this.$store.state.db, "Queue", doc.id),
                  {
                    scp: JSON.stringify(this.peerConnection.localDescription),
                    type: "answer",
                  }
                );
              }, 5000);
            });
        });
      }
    },
  },
  async mounted() {
    const localVideo = document.getElementById("local-video");
    const remoteVideo = document.getElementById("remote-video");

    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      localVideo.srcObject = stream;
      localVideo.play();
      this.peerConnection.addStream(stream);
      // stream.getTracks().forEach(track => {
      //     peerConnection.addTrack(track, stream);
      // });
    });

    this.peerConnection.ontrack = (e) => {
      console.log("trackreceived");

      for (let i = 0; i < e.streams.length; i++) {
        console.log(e.streams[0]);
      }
      remoteVideo.srcObject = e.streams[0];
      remoteVideo.play();
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  background-color: hsl(231, 51%, 8%);
}

.video-container {
}

main {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 10fr;
}
</style>
