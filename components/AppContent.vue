<template>
    <div class="content-container">
        <IntroSection />
        <AboutMe />
        <WorkExperience />
        <Hobbies />
        <ContactForm />
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.content-container {
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

</style>