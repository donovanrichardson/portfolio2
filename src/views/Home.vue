<template>
<div id='home'>

    <div id="header">
        <div id="header-pic">
        </div>
        <div id="header-text">
            <h1 id="my-name">Donovan Richardson</h1>
            <h2 id="subtitle">Full Stack Engineer</h2>
        </div>
        <!-- <div id="header">
        </div> -->
    </div>

    <div id="content">
        <p>Lorem ipsum brandmor state ament, consectetur adipisicing elit. Nam necessitatibus voluptatem quam dolores amet porro fugiat. Illo quae voluptas, quidem provident magni fugiat reiciendis eum impedit quas dicta assumenda unde.</p>
        <div id="projects">
            <div class="project" v-for="project in projects" :key="project.name">
                <h3>{{project.name}}</h3>
                <p>{{project.description}}</p>
                <div class="project-links">
                    <p class='repos link-label'>Repos:</p>
                    <p class='app link-label'>Live App:</p>
                    <p v-if="project.backend" class="backend links-bottom"><a :href="project.backend">Backend</a></p>
                    <p v-if="project.frontend" class="frontend links-bottom"><a :href="project.frontend">Frontend</a></p>
                    <p v-if="project.live" class="live links-bottom"><a :href="project.live">Live App</a></p>
                </div>
            </div>
        </div>
        <div>
            <h2>Contact Me</h2>
        </div>
        <div id="icons">
            <font-awesome-icon :icon="['fab', 'github-square']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'dev']"></font-awesome-icon>
            <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Home",
    components: {

    },
    data: function () {
        return {
            projects: [{
                    name: "Deparch",
                    description: "Train Departure Timetables",
                    backend: "https://github.com/donovanrichardson/deparch-java-backend",
                    frontend: "https://github.com/donovanrichardson/deparch-java-api",
                    live: "https://donovanrichardson.github.io/departures/lirr.html"
                },
                {
                    name: "Wikipollia",
                    description: "A way to upvote and downvote Wikipedia articles.",
                    backend: "https://github.com/donovanrichardson/wikipollia-backend",
                    frontend: "https://github.com/donovanrichardson/wikipollia-frontend",
                    live: "https://wikipollia.netlify.app/"
                },
                {
                    name: "Job Tracker",
                    description: "Tracking job listings of interest for the job search.",
                    backend: "https://github.com/donovanrichardson/djob-tracker",
                    frontend: "https://github.com/donovanrichardson/djob-tracker-frontend",
                    live: "https://jobsearchtracker.netlify.app/"
                },
            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped>
#home {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-family: sans-serif;
    background: #7B75BA;
    color: white;
    text-align: center;
}

#header {
    height: 40vw;
    max-height: 60vh;
    width: 100%;
    /* background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Weekend_work_2012-10-22_21_%288112891452%29.jpg/1280px-Weekend_work_2012-10-22_21_%288112891452%29.jpg"); */
    background: #7B75BA7f;
    /* -webkit-filter: grayscale(100%);
    filter: grayscale(100%); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* opacity: 50% */
}

/* #header img {
    width: 100%;
    height: inherit;
    max-height: inherit;
    position: absolute;
    opacity: 50%;
} */

#header-pic {
    background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Weekend_work_2012-10-22_21_%288112891452%29.jpg/1280px-Weekend_work_2012-10-22_21_%288112891452%29.jpg");
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    background-size: cover;
    background-position: center;
    z-index: 0;
    width: inherit;
    /* background: #000; */
    height: inherit;
    max-height: inherit;
    position: absolute;
    opacity: 50%;
}

#header-text {
    position: absolute;
    opacity: 100%;
    z-index: 1;
}

#my-name {
    margin-top: 0
}

#subtitle {
    margin-bottom: 0
}

#content {
    margin: 0 8px;
    /* background:#ffffff7f; */
    border-radius: 10px;
}

@media(min-width:600px) {
    #projects {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

.project {
    color: black;
    background: #FCC2DD;
    margin: 1em;
    border-radius: 1em;
}

.project-links{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 
        "repo repo app"
        "back front live";

}
.link-label{
    margin: .25em auto;
}

.links-bottom{
    font-weight: bold;
    margin: 1em auto;
}

.repos{
    grid-area:repo
}

.app{
    grid-area:app
}

.backend{
    /* no quotes lol */
    grid-area:back;
}
.frontend{
    grid-area:front;
}
.live{
    grid-area:live;
}

</style>
