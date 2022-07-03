<template>
  <img src="../assets/end-call.png" @click="endCall()" alt="End Call Icon" />
</template>

<script>
export default {
  methods: {
    endCall() {
      this.resetConnection();

      this.$store.state.updateDoc(
        this.$store.state.doc(
          this.$store.state.db,
          "Queue",
          this.$store.state.documentId
        ),
        {
          active: false,
        }
      );
      this.$store.state.callState = "idle";
    },
  },
};
</script>

<style>
</style>