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
      this.$store.state.callState = "calling";
      // searching for peer
      const q = this.$store.state.query(
        this.$store.state.collection(this.$store.state.db, "Queue"),
        this.$store.state.where("userId", "!=", this.$store.state.userId),
        this.$store.state.where("type", "==", "offer"),
        this.$store.state.where("active", "==", true)
      );
      const querySnapshot = await this.$store.state.getDocs(q);

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
                  active: true,
                  type: "offer",
                }
              );
              this.$store.state.documentId = docRef.id;
              this.userDocument = docRef.id;
            } catch (e) {
              console.error("Error adding document: ", e);
            }
            // this.waitForResponse(this.userDocument);

            // Wait for an answer
            this.$store.state.onSnapshot(
              this.$store.state.doc(
                this.$store.state.db,
                "Queue",
                this.userDocument
              ),
              (doc) => {
                if (doc.data().type == "answer") {
                  const sdp = JSON.parse(doc.data().sdp);
                  this.$store.state.peerConnection.setRemoteDescription(sdp);
                }
              }
            );
          });
      } else {
        const random = Math.floor(Math.random() * querySnapshot.docs.length);
        const document = querySnapshot.docs[random].data();
        this.$store.state.documentId = querySnapshot.docs[random].id;

        const sdp = JSON.parse(document.sdp);
        this.$store.state.peerConnection.setRemoteDescription(sdp);

        this.$store.state.peerConnection
          .createAnswer()
          .then((answer) =>
            this.$store.state.peerConnection.setLocalDescription(answer)
          )
          .then(async () => {
            const waitForSDP = setInterval(() => {
              if (this.$store.state.peerConnection.localDescription != null) {
                this.$store.state.updateDoc(
                  this.$store.state.doc(
                    this.$store.state.db,
                    "Queue",
                    this.$store.state.documentId
                  ),
                  {
                    sdp: JSON.stringify(
                      this.$store.state.peerConnection.localDescription
                    ),
                    type: "answer",
                    active: false,
                  }
                );
                clearInterval(waitForSDP);
              }
            }, 200);
          });
      }
    },
  },
};
</script>

<style>
img {
  height: 80%;
  border-radius: 100%;
}

img:hover {
  transform: scale(1.2);
  box-shadow: 0px 0px 10px black;
  transition: all 1s;
}
</style>