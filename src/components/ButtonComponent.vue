<template>
  <b-button-group>
    <b-button v-bind="$attrs" :class="color" v-on="$listeners">{{ bodyText }}</b-button>
  </b-button-group>
</template>
<script>
export default {
  name: 'ButtonComponent',
  props: {
    bodyText: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'btn-danger',
    },
  },
}
</script>
<style>
button.btn.btn-secondary {
  display: flex;
  white-space: nowrap;
  width: 0 !important;
  min-width: 250px;
  padding: var(--flix-sys-radius-base, 12px) 161px;
  justify-content: center;
  align-items: center;
}
</style>
