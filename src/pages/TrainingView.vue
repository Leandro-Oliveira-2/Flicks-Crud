<template>
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/SBoODpO-DT0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'TrainingView',
  methods: {
    async fullScreen() {
      console.log('teste')
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