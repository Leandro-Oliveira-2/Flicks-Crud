<template>
  <div class="body">
    <div class="teste">
      <modal-component />
    </div>
  </div>
</template>

<script>
import modalComponent from '@/components/modalComponent.vue';
export default {
  name: 'TrainingView',
  components: {
    'modal-component':modalComponent,
  },
  methods: {
    async fullScreen() {
      window.addEventListener('load', function() {
        var event = new KeyboardEvent('keydown', {
          key: 'f',
          code: 'KeyF',
          charCode: 'f'.charCodeAt(0),
          keyCode: 'f'.charCodeAt(0),
          view: window,
          bubbles: true
        });

        document.body.dispatchEvent(event);
      });
    },
  },
  mounted() {
    this.fullScreen();
  },
}
</script>

<style>
 .body {
    width: 100%;
    height: 1000px;
    background-color: #f5dfdf;
 }
 .teste {
    width: 100%;
    display: flex;
    height: 10%;
    justify-content: space-around;
    background-color: red;
    align-content: space-between;
    flex-direction: row;
    align-items: center;
}
</style>