<template>
    <div class="footer-container">
        <p>Footer</p>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.footer-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background:$bg-header-footer-color;
    border: $footer-border;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>