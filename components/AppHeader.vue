<template>
  <div class="header-container">
    <p>Ana Nishimoto</p>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.header-container {
  position: fixed;
  height: 8vh;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  border: $footer-border;
  background: $bg-header-footer-color;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-weight: bold;
  }
}
</style>
