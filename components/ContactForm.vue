<script>

</script>

<template>
    <div class="contact-form-container">
        <div  class="contact-form__header">
            <h3 class="contact-form__header-title">Get in touch!</h3>
            <p>Send me a message below and I'll come back as soon as possible!</p>
        </div>
        <div class="contact-form-info">
            <div class="contact-form-info__indentification">
                <p class="label-title">Your name</p>
                <input type="text" placeholder="John Doe">
            </div>
            <div class="contact-form-info__indentification">
                <p class="label-title">Your e-mail</p>
                <input type="text" placeholder="john.doe@email.com">
            </div>
    </div>
        <div class="contact-form-message">
            <div class="contact-form-message__detail">
                <p class="label-title">Your message to me</p>
                <textarea placeholder="What you is your message to me?"></textarea>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.contact-form-container {
    display: flex;
    flex-direction: row;;
    margin: 10%;
    width: 70%;
    justify-content: space-around;
    flex-wrap: wrap;

    input,textarea {
        border: transparent;
        padding: 10px;
        border-radius: 15px;
        width: 100%;
    }

    textarea {
        resize: vertical;
    }
}

.contact-form__header {
    display: flex;
    flex-direction: column;
    padding: 6% 0;
    width: 100%;
    align-items: center;
}

.contact-form__header-title {
    font-size: 30px;
    font-weight: bold;
}

.contact-form-info {
    display: flex;
    flex-direction: column;
    width: 40%;
}

.label-title {
    font-size: 1.3rem;
}

.contact-form-info__indentification {
    padding-bottom: 30px;
}

.contact-form-message {
    width: 45%;
}

</style>