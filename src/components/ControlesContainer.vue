<template>
  <div class="controles-container">
    <call-button class="call-button" />
    <end-call-button class="end-call-button" />
    <mute-button class="mute-button" />
    <next-button class="next-button" />
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
  justify-content: center;

  bottom: 0px;
}

img {
  cursor: pointer;
}
.call-button {
  justify-self: center;
}
.end-call-button {
  display: none;
}
.mute-button {
  display: none;
}
.next-button {
  display: none;
}
</style>