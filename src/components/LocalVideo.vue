<template>
  <div class="video-container" id="local-video-container">
    <video id="local-video" muted autoplay></video>
  </div>
</template>

<script>
export default {};
</script>

<style>
#local-video-container {
  box-shadow: 0px 0px 20px black;
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 20px;
  left: 0px;
  top: 0px;
  margin: 2%;
  height: 20%;
  width: 20%;
  overflow: hidden;
}

#local-video {
  width: 100%;
}
</style>