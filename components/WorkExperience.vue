<script>

</script>

<template>
    <div class="work-experience-container">
        <h3>Work experiences</h3>
        <div class="work-experience__timeline-style">
            <div class="work-experience__details">
            <p class="work-experience-title">Software Developer</p>
            <p class="work-experience-company">Epiphany RBC</p>
            <p class="work-experience-location">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                Amsterdam - The Netherlands
            </p>
            <div class="work-experience-description">
            <ul>
                <li>Project development and technical communication while working for clients such as Generali, Zurich, CPW, and Uber.</li>
                <li>Enhanced the existing in-house application that provides tools to make research consultants able to write dynamic surveys.</li>
                <li>Built an AI-powered application that fits the in-house necessity to translate documents in both English and Dutch to multiple languages with a specific tone of voice.</li>
                <li>Developed a new application that redesigns the way surveys are built by consultants and presented to consumers nowadays.</li>
            </ul>
        </div>
            <div class="work-experience-description">
                <strong>Stack:</strong>
                NodeJS, TypeScript, tRPC, Vue.js, AWS, Lambda, MonoRepo, Storybook, Figma.
            </div>
        </div>

        <div class="work-experience__details">
            <p class="work-experience-title">Freelancer content creator</p>
            <p class="work-experience-company">Promoguy</p>
            <p class="work-experience-location">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                Amsterdam - The Netherlands
            </p>
            <div class="work-experience-description">
            <ul>
                <li>Content plan creation, and organization for a diversity of clients across Europe.</li>
                <li>Creation of static designs for web and social media. Video, and photography editor</li>
                <li>Brand guideline development for architecture clients, such as Vero Digital.</li>
                <li>Rebrading of Promoguy's logo, and brand identification.</li>
            </ul>
        </div>
        </div>

        <div class="work-experience__details">
            <p class="work-experience-title">Audiovisual studio advisor</p>
            <p class="work-experience-company">DeVry University</p>
            <p class="work-experience-location">
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                Sao Paulo - Brazil
            </p>
            <div class="work-experience-description">
                <ul>
                    <li>Taught students to use the video and photography cameras</li>
                    <li>Gave workshops and helped in on hand exercises in the dark room to reveal photography made in the film roll</li>
                    <li>Prepared the photography studio to use with Chroma Key, and/or different light setup</li>
                    <li>Advised and helped students to edit their projects using the Adobe Creative Cloud softwares</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

.work-experience-container {
    margin: 5% 0;
    width: 70%;
    font-size: 20px;

    h3 {
        font-size: 40px;
    }
}

.work-experience__timeline-style {
    // border-left: 3px solid black;
}

.work-experience-title {
    font-size: 25px;
    font-weight: bold;
    padding: 5px 0;
}

.work-experience__details {
    margin: 50px;
}

.work-experience-company {
    font-weight: bold;
}

.work-experience-location {
    font-size: 15px;
    color: #232323;
    border-radius: 25px;
    padding: 5px;
    width: fit-content;
}

.work-experience-description {
    li {
        margin: 10px;
    }
}

</style>