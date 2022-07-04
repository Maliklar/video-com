<template>
  <div class="controles-container">
    <call-button v-if="$store.state.callState == 'idle'" class="call-button" />
    <end-call-button
      v-if="
        $store.state.callState == 'calling' ||
        $store.state.callState == 'connected'
      "
      class="end-call-button"
    />
  </div>
</template>

<script>
import CallButton from "./CallButton.vue";
import EndCallButton from "./EndCallButton.vue";
export default {
  components: { CallButton, EndCallButton },
};
</script>
    

<style>
.controles-container {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 1s all;
  height: 12%;
  bottom: 2%;
}

img {
  cursor: pointer;
}
</style>