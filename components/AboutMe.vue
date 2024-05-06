<script>

</script>

<template>
    <div class="about-me-description-container">
        <p class="about-me-description__header">
            Someone curious and always willing to do something new both online and offline.
        </p>
        <div class="about-me-description__line"></div>
        <div class="about-me-description__content">
            <p>
                Since younger I was interested in building robots with LEGO and making them alive with Arduino, and after working in some different fields,
                I have decided to focus my carrer in software development.
            </p>
            <p>
                Noways, having had the privilege to work in a <strong>start-up agency</strong> and in a <strong>scale-up company</strong>, I learned about
                processes, scalability, and team-organization. 
                
                With this in mind, my main focus is to create and test applications with focus on details, and
                performance. 
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

@import '../assets/scss/variables.scss';

.about-me-description-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.about-me-description__header {
    font-weight: bold;
    font-size: $mobile-font-size-title;
    padding-bottom: 2%;
}

.about-me-description__line {
    border: 2px solid black;
    width: 40%;
    height: 0;
}

.about-me-description__content {
    font-size: $mobile-font-size-paragraph;
    line-height: 1.6;

    p {
        margin: 2% 0;
    }
}

// Desktop styling 

@media (min-width: 50rem) {
    .about-me-description__header {
        font-size: $desktop-font-size-title-small;
    }

    .about-me-description__content {
        font-size: $desktop-font-size-paragraph;
    }
}


</style>