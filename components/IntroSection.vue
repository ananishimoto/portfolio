<template>
    <div class="intro-section-container">
        <div class="intro-section-container__title">
            <h2 class="intro-section-container__title_name">Hi, I'm Ana</h2>
            <p class="intro-section-container__title_details">I create applications</p>
            <p class="intro-section-container__title_details">I also do photography</p>
            <p class="intro-section-container__title_details">And sometimes I crochet</p>
        </div>
        <div class="intro-section-container__picture">
            <img src="../assets/images/duck_pic.jpg"/>
        </div>
    </div>
</template>

<!-- <div class="image-border"></div> -->

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.intro-section-container {
    padding-top: 50px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

.intro-section-container__title {
    flex-direction: column;
}

.intro-section-container__title_name {
    font-size: 100px;
}

.intro-section-container__title_details {
    font-size: 30px;
}

.intro-section-container__picture {
    display: flex;
    justify-content: center;
    
    img {
        width: 70%;
        border-radius: 20%;
    }

    .image-border {
        position: absolute;
        width: 400px;
        height: 470px;
        top: 15rem;
        right: 7rem;
        border-radius: 20%;
        border: $footer-border;
    }
}

</style>