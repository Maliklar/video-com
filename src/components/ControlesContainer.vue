<template>
  <div class="controles-container">
    <call-button v-if="$store.state.callState == 'idle'" class="call-button" />
    <mute-button
      v-if="$store.state.callState == 'connected'"
      class="mute-button"
    />
    <end-call-button
      v-if="
        $store.state.callState == 'calling' ||
        $store.state.callState == 'connected'
      "
      class="end-call-button"
    />

    <next-button
      v-if="$store.state.callState == 'connected'"
      class="next-button"
    />
  </div>
</template>

<script>
import CallButton from "./CallButton.vue";
import EndCallButton from "./EndCallButton.vue";
import MuteButton from "./MuteButton.vue";
import NextButton from "./NextButton.vue";
export default {
  components: { CallButton, EndCallButton, MuteButton, NextButton },
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

  bottom: 0px;
}

img {
  cursor: pointer;
}
</style>