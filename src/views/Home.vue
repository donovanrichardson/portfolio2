<template>
<div id='home'>

    <div id="header">
        <div id="header-pic">
        </div>
        <div id="header-text">
            <h1 id="my-name">Donovan Richardson</h1>
            <h2 id="subtitle">Full Stack Engineer</h2>
            <div id='top-icons'>
                <a href="https://www.linkedin.com/in/donovan-richardson/">
                    <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
                </a>
                <a href="https://github.com/donovanrichardson">
                    <font-awesome-icon :icon="['fab', 'github-square']"></font-awesome-icon>
                </a>
                <a href="https://dev.to/donovanrichardson">
                    <font-awesome-icon :icon="['fab', 'dev']"></font-awesome-icon>
                </a>
                <a href="mailto:donovanspqqa@gmail.com">
                    <font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon>
                </a>
                <br/>
                <router-link id='resume-row' to='/resume'>
                    <font-awesome-icon id='resume-icon' :icon="['far', 'file-alt']"></font-awesome-icon>
                    <span id="resume-label">Resume</span>
                    
                </router-link>
            </div>
        </div>
        <!-- <div id="header">
        </div> -->
    </div>

    <div id="content">
        <p id='brand-statement'>I am a full stack developer and a transit nerd with a passion for databases and other backend technologies. 
            As a student of linguistics, I learned the value of simplifying the complicated reality of language into comprehensible elements. 
            I appreciate the importance of looking for sources of data that show various patterns as well as of recognizing what these patterns can mean. 
            My competencies in these areas translate to my skill in software engineering, and geographic information systems, and other fields relating to computer technology.
        </p>
        <h2>Projects</h2>
        <div id="projects">
            <div class="project" v-for="project in projects" :key="project.name">
                <h3>{{project.name}}</h3>
                <p>{{project.description}}</p>
                <div class="project-links">
                    <!-- <p class='repos link-label'>Repos:</p>
                    <p class='app link-label'>Live App:</p> -->
                    <div class="backend links-bottom">
                        <p v-if="project.backend"><a :href="project.backend">Backend</a></p>
                        <span :title="project.backtext">
                            <font-awesome-icon class="icon" :icon="project.backicon"></font-awesome-icon>
                        </span>
                    </div>
                    <div class="frontend links-bottom">
                        <p v-if="project.frontend"><a :href="project.frontend">Frontend</a></p>
                        <span :title="project.fronttext">
                            <font-awesome-icon class="icon" :icon="project.fronticon"></font-awesome-icon>
                        </span>
                    </div>
                    <div class="live links-bottom">
                        <p v-if="project.live"><a :href="project.live">Live App <br /> <span>
                                    <font-awesome-icon class="icon" :icon="project.liveicon"></font-awesome-icon>
                                </span>
                            </a>
                        </p>

                    </div>

                </div>
            </div>
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
                    backend: "https://github.com/donovanrichardson/deparch-java-api",
                    frontend: "https://github.com/donovanrichardson/donovanrichardson.github.io/blob/master/departures/lirr.html",
                    live: "https://donovanrichardson.github.io/departures/lirr.html",
                    backicon: ['fab', 'java'],
                    backtext: "Backend in Java",
                    fronticon: ['fab', 'js'],
                    fronttext: "Frontend in vanilla JavaScript",
                    liveicon: ['fas', 'newspaper'],
                },
                {
                    name: "Wikipollia",
                    description: "A way to upvote and downvote Wikipedia articles.",
                    backend: "https://github.com/donovanrichardson/wikipollia-backend",
                    frontend: "https://github.com/donovanrichardson/wikipollia-frontend",
                    live: "https://wikipollia.netlify.app/",
                    backicon: ['fab', 'node-js'],
                    backtext: "Backend in Node.js with Express",
                    fronticon: ['fab', 'js'],
                    fronttext: "Frontend in JavaScript with jQuery",
                    liveicon: ['fas', 'thumbs-up'],
                },
                {
                    name: "Job Tracker",
                    description: "Tracking job listings of interest for the job search.",
                    backend: "https://github.com/donovanrichardson/djob-tracker",
                    frontend: "https://github.com/donovanrichardson/djob-tracker-frontend",
                    live: "https://jobsearchtracker.netlify.app/",
                    backicon: ['fab', 'python'],
                    backtext: "Backend in Python Django",
                    fronticon: ['fab', 'vuejs'],
                    fronttext: "Frontend in Vue.js",
                    liveicon: ['fas', 'briefcase'],
                },
            ]
        }
    },
    methods: {

    },
    beforeMount() {
        document.title = "Donovan Richardson - Home"
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
    background: url("https://res.cloudinary.com/donovanrichardson/image/upload/e_saturation:-100,e_colorize:50,co_rgb:7B75BA/v1601609602/hicksvillebymta_tcocey.jpg");
    /* -webkit-filter: grayscale(100%);
    filter: grayscale(100%); */
    background-size: cover;
    background-position: center;
    z-index: 0;
    width: inherit;
    /* background: #000; */
    height: inherit;
    max-height: inherit;
    position: absolute;
    /* opacity: 50%; */
}

#header-text {
    background: #ffffffaf;
    color: black;
    padding: 2em;
    border-radius: 1em;
    position: absolute;
    z-index: 1;
    max-height: inherit;
    padding: 0;
}

#header-text>* {
    margin: 0;
    padding: .25em;
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

#brand-statement {
    background: #ffffff7f;
    padding: 1em;
    border-radius:1em;
    color:black;
    text-align: justify;
    margin: 1.5em 3em 0 3em;
}

@media(min-width:600px) {

    #projects,
    #contact-and-resume {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

.project {
    color: black;
    background: #FCC2DD;
    margin: 1em;
    padding: .1em;
    border-radius: 1em;
    display:grid;
    grid-template-rows: 2fr 2fr 5fr;
}

.project > p{
    margin: .25em auto;
}
.project > h3{
    margin: .5em auto;
}


.project-links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        "repo repo app"
        "back front live";

}

.link-label {
    margin: .25em auto;
}

.links-bottom {
    font-weight: bold;
    margin: 1em auto;
}

.links-bottom p {
    margin: 0 auto;
}

.icon {
    font-size: 1.5em;
    margin: .5em;
    color: black;
}

.repos {
    grid-area: repo
}

.app {
    grid-area: app
}

.backend {
    /* no quotes lol */
    grid-area: back;
}

.frontend {
    grid-area: front;
}

.live {
    grid-area: live;
}

#top-icons {
    font-size: 1.5em;
    
    /* display: grid;
    grid-template: auto auto / auto auto; */
}

#contact-and-resume a {
    color: white;
}

#contact {
    margin-right: 2em;
    margin-left: 2em;
}

#top-icons>* {
    margin: .25em .25em;
    color: black;
    text-decoration: none;
}

#resume-label{
    margin: auto 5px;
    
}

#resume-row{
    font-size: .85em;
}

/* #resume-icon {
    font-size: 10em;
} */

#contact-and-resume {
    padding: 2em 0;
}
</style>
