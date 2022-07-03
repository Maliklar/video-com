<template>
  <div id="remote-video-container">
    <video id="remote-video" src="" autoplay></video>
  </div>
</template>

<script>
export default {};
</script>

<style>
#remote-video-container {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#remote-video {
  width: 100%;
  height: 100%;
}
</style>