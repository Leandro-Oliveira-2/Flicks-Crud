<template>
  <div class="not-found">
    <img src="../../public/Cal.gif" alt="" />
    <div class="title-mensage">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
}
</script>
<style scoped>
.not-found {
  text-align: center;
}
img {
  width: 100%;
  height: 720px;
}

.title-mensage {
  display: flex;
  border-radius: 5%;
  width: 500px;
  height: 298px;
  flex-direction: column;
  margin-top: -543px;
  margin-left: 35%;
  background-color: #141414b8;
  z-index: 1000;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  font-size: 8rem;
}
</style>
