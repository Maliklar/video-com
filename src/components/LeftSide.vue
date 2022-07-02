<template>
  <div class="left-container">
    <div class="video-container" id="local-video-container">
      <video id="local-video"></video>
    </div>
    <div class="chat-container">
      <div class="chat-display">
        <MessageBox />
      </div>
      <div class="text-input-container">
        <input type="text" placeholder="Send Message" id="chat-input" />
        <button @click="dele()">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import MessageBox from "./MessageBox.vue";
export default {
  components: { MessageBox },
};
</script>

<style>
.text-input-container {
  display: flex;
}

.chat-display {
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  overflow-y: scroll;
}

::-webkit-scrollbar {
  display: none;
}

.chat-box {
  background-image: linear-gradient(rgb(0, 80, 94), rgb(59, 59, 59));
  border-radius: 20px;
  margin: 0px 2%;
  border: 1px black solid;
  padding: 1rem;
  color: white;
}

.chat-container {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 85% 15%;
}

.left-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 38% 62%;
  height: 100vh;
  background-color: black;
}

#chat-input {
  width: 100%;
  border-radius: 10px 0px 0px 10px;
  border: none;
  padding: 2%;
}

button {
  background-color: violet;
  color: white;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
}

#local-video-container {
  box-shadow: 0px 0px 40px rgba(63, 0, 165, 0.842);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: hidden;
}

#local-video {
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 20px black;
}

#remote-video-container {
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>