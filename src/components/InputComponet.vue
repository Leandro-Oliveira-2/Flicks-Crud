<template>
  <div class="my-1">
    <label class="form-label">{{ label }}</label>
    <div class="input-icon">
      <b-input
        class="icon-input"
        v-bind="$attrs"
        v-on="$listeners"
        :type="type"
        v-model="value"
        :style="{ minWidth: buttonSize + 'px' }"
      />
      <font-awesome-icon :icon="icon" class="icon" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'InputComponet',
  data() {
    return {
      value: '',
    }
  },
  props: {
    label: {
      type: String,
    },
    icon: {
      type: String,
      default: 'user',
    },
    type: {
      type: String,
      default: 'text',
    },
    valueData: {
      type: String,
    },
    buttonSize: {
      type: Number,
      default: 250, // Default button size
    },
  },
  watch: {
    valueData(value) {
      this.updateValue(value)
    },
  },
  methods: {
    updateValue(value) {
      this.value = value
    },
    input() {
      this.$emit('input', this.value)
    },
  },
}
</script>

<style>
.form-label {
  color: #e1e2e6;
}
.row {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.col {
  flex-basis: 0;
  flex-grow: 3;
  max-width: 100%;
}

.form-control {
  background-color: #202024;
  border: none;
  width: 400px;
}
.input-icon {
  position: relative;
  display: inline-block;
}

.icon-input {
  padding-left: 34px; /* Ajuste isso de acordo com o tamanho do seu ícone */
}

svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
  color: #7c7c8a;
}

.icon {
  position: absolute;
  left: 10px; /* Ajuste isso de acordo com o tamanho do seu ícone */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.input-container {
  display: flex;
  flex-direction: column;
}
.my-1 {
  color: black;
  flex-direction: column; /* Alinha os elementos em uma coluna */
  justify-content: center; /* Alinha horizontalmente ao centro */
  align-items: left; /* Alinha verticalmente ao centro */
}
</style>
