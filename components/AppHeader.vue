<script>
</script>

<template>
    <div class="header-container">
        <a>About</a>
        <a>Experiences</a>
        <a>Hobbies</a>
        <a>Contact</a>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.header-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    border: $footer-border;
    background: $bg-header-footer-color;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        margin: 10px;
    }
}

</style>