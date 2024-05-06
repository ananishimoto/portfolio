<template>
    <div class="content-container">
        <IntroSection />
        <AboutMe />
        <WorkExperience />
        <Hobbies />
        <!-- <ContactForm /> -->
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.content-container {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

</style>