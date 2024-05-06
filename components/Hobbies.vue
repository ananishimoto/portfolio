<script>

</script>

<template>
    <div class="other-interests-container">
        <h3 class="other-interests-title">Other interests</h3>
        <div class="other-interests-card">
            <div class="other-interests-card__description">
                <p class="other-interests-card__header">Photography</p>
                <p class="other-interests-card__subheader">Check my pictures here:</p>
                <div class="social-media-container">
                    <a href="https://www.instagram.com/ana.nishimoto/"><font-awesome-icon icon="fa-brands fa-instagram" class="social-media-icon" /></a>
                    <a href="https://www.behance.net/ana_nishimoto"><font-awesome-icon icon="fa-brands fa-behance" class="social-media-icon" /></a>
                </div>
            </div>
            <img src="../assets/images/photography-cover.jpg"/>
        </div>
        <div class="other-interests-card">
            <div class="other-interests-card__description">
                <p class="other-interests-card__header">Crochet</p>
            </div>
            <img src="../assets/images/crochet-cover.jpg"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '../assets/scss/variables.scss';

.other-interests-container {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 5%;
}

.other-interests-title {
    font-size: $mobile-font-size-title;
}

.other-interests-card {
    width: 70%;
    height: 20rem;
    margin: 5%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .social-media-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 50%;

        a {
            z-index: 1;
        }

        svg {
            color: black;
            height: 1.5rem;
        }
    }

    .other-interests-card__header {
        font-weight: bold;
    }

    .other-interests-card__subheader {
        font-size: 1.3rem;
        text-align: center;
    }
}

.other-interests-card__description {
    visibility: hidden;
    position: absolute;
    display: flex;
    font-size: 1.7rem;
    flex-direction: column;
    align-items: center;
}

.other-interests-card:hover {

    .other-interests-card__description {
        visibility: visible;
    }

    img {
    opacity: 0.2;
    filter: blur(5px);
    }
}

// Desktop styling 

@media (min-width: 50rem) {

    .other-interests-container {
        flex-direction: row;
    }

    .other-interests-card {
        width: 42%;
        height: 30rem;
    }

    .other-interests-title {
        writing-mode: tb-rl;
        transform: rotate(-180deg);
        font-size: $desktop-font-size-title-medium;
    }

    .social-media-container {
        svg {
            height: 2rem;
        }
    }
}

</style>