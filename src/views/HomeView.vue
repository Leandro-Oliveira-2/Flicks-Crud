<template>
  <div class="space">
    <video class="video" autoplay muted loop>
      <source src="/Netflix New Logo Animation 2019.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    redirect() {
      setTimeout(() => {
        this.$router.push('/loginPage')
      }, 3700)
    },
  },
  mounted() {
    this.redirect()
  },
}
</script>

<style>
.space {
  background-color: #121214;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video {
  width: 100%;
  height: auto;
  animation: zoom 2s forwards, fadeOut 1s 2.5s forwards;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
