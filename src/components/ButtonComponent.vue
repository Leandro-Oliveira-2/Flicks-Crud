<template>
  <b-button-group>
    <svg
      v-if="icon === 'google'"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-google"
      viewBox="0 0 16 16"
    >
      <path
        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
      />
    </svg>
    <svg
      v-if="icon === 'facebook'"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-facebook"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
      />
    </svg>
    <b-button
      v-bind="$attrs"
      :class="color"
      v-on="$listeners"
      :style="{
        minWidth: buttonSize + 'px',
        height: buttonHeight + 'px',
        background: dynamicBackground,
        padding: '12px 20px',
        color: colorButton ? colorButton : '#fff',
      }"
    >
      <font-awesome-icon
        :icon="icon"
        class="icon"
        :size="sizeIcon"
        :style="{ color: colorIcon, left: leftIcon }"
      />
      {{ bodyText }}
    </b-button>
  </b-button-group>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    bodyText: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'btn-danger',
    },
    colorButton: {
      type: String,
      default: '#fff',
    },
    buttonSize: {
      type: Number,
      default: 250, // Default button size
    },
    buttonHeight: {
      type: Number,
      default: 50, // Este será o valor padrão da altura
    },
    icon: {
      type: String,
      default: '',
    },
    colorIcon: {
      type: String,
      default: '#fff',
    },
    leftIcon: {
      type: String,
      default: '15%',
    },
    sizeIcon: {
      type: String,
      default: 'lg',
    },
    dynamicBackground: {
      type: String,
      default: '', // Default background color
    },
  },
}
</script>

<style>
b-button-group {
  position: relative;
}

svg {
  position: absolute;
  left: 20%;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
}

button.btn.btn-secondary {
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.btn-group:hover svg {
  z-index: 2;
}

.btn-group:active svg {
  z-index: 2;
  border-block-color: #fff;
}
button.btn.btn-secondary {
  white-space: nowrap;
  display: flex;
  width: 0;
  padding: var(--flix-sys-radius-base, 12px) 161px;
  justify-content: center;
  align-items: center;
  border: none;
}
@media screen and (max-width: 600px) {
  .btn-secondary.btn-danger {
    min-width: 284px !important;
    height: 50px;
    left: -20px;
    padding: 12px 20px;
    color: rgb(255, 255, 255);
  }
  svg.bi.bi-google {
    margin-left: -50px;
  }
  vector {
    margin-left: -53px;
  }
  .link-container {
    margin-left: -57px;
  }
  .desktop-image[data-v-16d8eba4] {
    width: 100px;
    margin-block-end: 20px;
    height: 87px;
    top: 159px;
    left: 667px;
  }
  span[data-v-16d8eba4] {
    width: 232px;
    height: 22px;
    color: #7c7c8a;
    margin-block-end: 30px;
  }
}
</style>
