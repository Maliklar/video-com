<template>
  <img src="../assets/call.png" @click="connect()" alt="Call Icon" />
</template>

<script>
export default {
  methods: {
    async connect() {
      console.log("Searching for Offers");
      console.log(this.$store.state.localVideo);

      // searching for peer
      const q = this.$store.state.query(
        this.$store.state.collection(this.$store.state.db, "Queue"),
        this.$store.state.where("userId", "!=", this.$store.state.userId)
      );
      const querySnapshot = await this.$store.state.getDocs(q);
      // const isEmpty = Ob
      // ject.keys(querySnapshot).data().length === 0;

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
                  scp: JSON.stringify(
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
                  const scp = JSON.parse(doc.data().scp);
                  console.log(scp);
                  this.$store.state.peerConnection.setRemoteDescription(scp);
                }
              }
            );
          })
          .then(() => console.log("then"));
      } else {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          const scp = JSON.parse(doc.data().scp);

          this.$store.state.peerConnection.setRemoteDescription(scp);
          this.$store.state.peerConnection
            .createAnswer()
            .then((answer) =>
              this.$store.state.peerConnection.setLocalDescription(answer)
            )
            .then(async () => {
              setTimeout(() => {
                console.log(this.$store.state.peerConnection.localDescription);

                this.$store.state.setDoc(
                  this.$store.state.doc(this.$store.state.db, "Queue", doc.id),
                  {
                    scp: JSON.stringify(
                      this.$store.state.peerConnection.localDescription
                    ),
                    type: "answer",
                  }
                );
              }, 5000);
            });
        });
      }
    },
  },
};
</script>

<style>
</style>