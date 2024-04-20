<template>
  <div>
    <h1 class="big-gradient">ITALENT</h1>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
h1.big-gradient {
  font-size: 3rem;
  /* Adjust the font size as needed */
  background: linear-gradient(to right,
      #2f32df, #a60cad);
  /* Replace with your desired gradient colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  /* Add this line to center the title */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add these lines to center the title vertically */
  height: 75dvh;
  margin: 0;
}
</style>
