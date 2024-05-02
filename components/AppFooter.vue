<script>

</script>

<template>
    <div class="footer-container">
        <div class="footer-info">
            <p>Made by Ana Nishimoto</p>
            <p class="footer-info-year">2024</p>
        </div>
        <div class="footer-social-media">
            <a href="https://www.linkedin.com/in/ana-nishimoto/"><font-awesome-icon icon="fa-brands fa-linkedin-in" class="social-media-icon" /></a>
            <a href="https://github.com/ananishimoto"><font-awesome-icon icon="fa-brands fa-github" class="social-media-icon" /></a>
            <a href="https://www.instagram.com/ana.nishimoto/"><font-awesome-icon icon="fa-brands fa-instagram" class="social-media-icon" /></a>
            <a href="https://www.behance.net/ana_nishimoto"><font-awesome-icon icon="fa-brands fa-behance" class="social-media-icon" /></a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.footer-container {
    height: 100px;
    width: 100%;
    background:$bg-header-footer-color;
    border: $footer-border;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.footer-info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .footer-info-year {
        font-weight: bold;        
    }
}

.footer-social-media {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    a:visited, a:active {
        color: black;
    }
    
    .social-media-icon {
        padding: 10px;
    }
}

</style>