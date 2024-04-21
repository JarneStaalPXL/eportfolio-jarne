<template>
  <div id="particles-js">
    <h1 class="big-gradient">ITALENT</h1>
    <h2 class="small-gradient text-center">Surpass Boundaries, Elevate Skills, Propel Forward</h2>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  mounted() {
    this.$store.commit("setCurrentRouteName", "Home");
  },
}
</script>

<style scoped>
h1.big-gradient {
  font-size: 5rem;
  /* Increase font size for emphasis */
  background: -webkit-linear-gradient(45deg, #2f32df, #a60cad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 20vh;
  /* Center vertically somewhat */
  transition: all 0.5s ease-in-out;
  /* Smooth transition for effects */
}

/* Subtle animation to add elegance */
@keyframes fadeInSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

h1.big-gradient {
  animation: fadeInSlideDown 1s ease-out forwards;
}
</style>
