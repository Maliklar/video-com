<template>
  <div @mousedown="drag" class="video-container" id="local-video-container">
    <video id="local-video" muted autoplay></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: null,
      left: 0,
      top: 0,
      mouseLeft: 0,
      mouseTop: 0,
      isHold: false,
    };
  },
  mounted() {
    this.video = document.getElementById("local-video-container");
    document.addEventListener("mousemove", (e) => {
      this.mouseLeft = +e.clientX;
      this.mouseTop = +e.clientY;
      if (this.isHold) {
        console.log();
        console.log();
        this.video.style.top = this.mouseTop - window.innerHeight * 0.1 + "px";
        this.video.style.left = this.mouseLeft - window.innerWidth * 0.1 + "px";
      }
    });
    document.addEventListener("mouseup", () => {
      this.isHold = false;
    });
  },
  methods: {
    drag() {
      console.log(this.video);
      this.isHold = true;
    },
  },
};
</script>

<style>
#local-video-container {
  box-shadow: 0px 0px 20px black;
  border: rgb(182, 182, 182) solid 1px;
  position: absolute;
  display: flex;
  align-items: center;
  cursor: grab;
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