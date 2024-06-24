<template>
  <div class="intro-section-container">
    <div class="intro-section-container__picture">
      <img src="../assets/images/profile-pic.jpg">
    </div>
    <div class="intro-section-container__title">
      <h2 class="intro-section-container__title_name">
        Hi, I'm Ana!
      </h2>
      <p class="intro-section-container__title_details">
        I create applications
      </p>
      <p class="intro-section-container__title_details">
        I do photography
      </p>
      <p class="intro-section-container__title_details">
        And sometimes I crochet
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.intro-section-container {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  line-height: 1.2;
  align-content: center;
}

.intro-section-container__title {
  flex-direction: column;
  margin: 10% 0;
  max-width: 50vw;
}

.intro-section-container__title_name {
  animation: transitionIn 2.5s;
  font-size: 4rem;
}

.intro-section-container__title_details {
  animation: transitionIn 2.5s;
  font-size: 1.6rem;
}

.intro-section-container__picture {
  animation: transitionIn 1.5s;
  display: flex;
  justify-content: center;
  max-width: 50vw;

  img {
    width: 100%;
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

// Desktop styling

@media (min-width: 60rem) {
  .intro-section-container {
    flex-wrap: nowrap;
    width: 100vh;
  }

  .intro-section-container__picture {
    width: 25vw;
  }

  .intro-section-container__title {
    width: auto;
    margin: 0 5%;
  }

  .intro-section-container__title_name {
    font-size: 7rem;
  }

  .intro-section-container__title_details {
    font-size: 2rem;
  }
}
</style>
