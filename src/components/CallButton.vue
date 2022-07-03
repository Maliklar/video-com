<template>
  <img
    src="../assets/call.png"
    @click="connect()"
    id="call-icon"
    alt="Call Icon"
  />
</template>

<script>
export default {
  methods: {
    async connect() {
      const callIcon = document.getElementById("call-icon");
      callIcon.style.display = "none";
      let seconds = 0;
      const waitingInterval = setInterval(() => {
        seconds++;
        this.$store.state.callState.innerHTML = "Wait " + seconds + " s";
        if (seconds == 10) {
          this.$store.state.callState.innerHTML = "No One found";
          callIcon.style.display = "block";

          clearInterval(waitingInterval);
        }
      }, 1000);
      // searching for peer
      const q = this.$store.state.query(
        this.$store.state.collection(this.$store.state.db, "Queue"),
        this.$store.state.where("userId", "!=", this.$store.state.userId),
        this.$store.state.where("type", "==", "offer"),
        this.$store.state.where("active", "==", true)
      );
      const querySnapshot = await this.$store.state.getDocs(q);
      console.log(querySnapshot);

      if (querySnapshot.empty) {
        // create an offer and send it to the database
        this.$store.state.peerConnection
          .createOffer()
          .then((offer) =>
            this.$store.state.peerConnection.setLocalDescription(offer)
          )
          .then(async () => {
            try {
              const docRef = await this.$store.state.addDoc(
                this.$store.state.collection(this.$store.state.db, "Queue"),
                {
                  userId: this.$store.state.userId,
                  sdp: JSON.stringify(
                    this.$store.state.peerConnection.localDescription
                  ),
                  type: "offer",
                }
              );
              console.log("Document written with ID: ", docRef.id);
              this.userDocument = docRef.id;
            } catch (e) {
              console.error("Error adding document: ", e);
            }

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
                  const sdp = JSON.parse(doc.data().sdp);
                  this.$store.state.peerConnection.setRemoteDescription(sdp);
                }
              }
            );
          })
          .then(() => console.log("then"));
      } else {
        const random = Math.floor(Math.random() * querySnapshot.docs.length);
        const document = querySnapshot.docs[random].data();
        const documentId = querySnapshot.docs[random].id;

        const sdp = JSON.parse(document.sdp);
        this.$store.state.peerConnection.setRemoteDescription(sdp);

        this.$store.state.peerConnection
          .createAnswer()
          .then((answer) =>
            this.$store.state.peerConnection.setLocalDescription(answer)
          )
          .then(async () => {
            setTimeout(() => {
              this.$store.state.updateDoc(
                this.$store.state.doc(
                  this.$store.state.db,
                  "Queue",
                  documentId
                ),
                {
                  sdp: JSON.stringify(
                    this.$store.state.peerConnection.localDescription
                  ),
                  type: "answer",
                  active: false,
                }
              );
            }, 5000);
          });
      }
    },
  },
};
</script>

<style>
</style>