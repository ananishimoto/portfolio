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

.other-interests-container {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.other-interests-title {
    writing-mode: tb-rl;
    transform: rotate(-180deg);
    font-size: 60px;
}

.other-interests-card {
    width: 42%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    max-height: 40rem;

    img {
        width: -webkit-fill-available;
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
            height: 2rem;
        }
    }

    .other-interests-card__header {
        font-weight: bold;
    }

    .other-interests-card__subheader {
        font-size: 25px;
    }
}

.other-interests-card__description {
    visibility: hidden;
    position: absolute;
    display: flex;
    font-size: 40px;
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

</style>