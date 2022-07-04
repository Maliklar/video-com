<template>
  <div class="loading-container">
    <img class="loading" src="../assets/Infinity-1s-200px.svg" alt="Loading" />
    <figcaption><h2>Connecting...</h2></figcaption>
  </div>
</template>

<script>
export default {};
</script>

<style>
.loading-container {
  display: flex;
  position: absolute;
  color: white;
  width: 100%;
  top: 50%;
  margin-top: -100px;
  height: 200px;
  flex-direction: column;
  align-items: center;
}
</style>