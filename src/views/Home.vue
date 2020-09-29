<template>
<div>
    <div id="header">
        <div id="header-text">
            <h1 id="my-name">Donovan Richardson</h1>
            <h2 id="subtitle">Full Stack Engineer</h2>
            <!-- Capitalization?? -->
        </div>
    </div>
    <div id="content">
        <p>Lorem ipsum brandmor state ament, consectetur adipisicing elit. Nam necessitatibus voluptatem quam dolores amet porro fugiat. Illo quae voluptas, quidem provident magni fugiat reiciendis eum impedit quas dicta assumenda unde.</p>
        <div id="projects">
            <div class="project" v-for="project in projects" :key="project.name">
                <h3>{{project.name}}</h3>
                <p>{{project.description}}</p>
                <p v-if="project.backend"><a :href="project.backend">Backend</a></p>
                <p v-if="project.frontend"><a :href="project.frontend">Frontend</a></p>
                <p v-if="project.live"><a :href="project.live">Live App</a></p>
            </div>
        </div>
        <div>
            <h2>Contact Me</h2>
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
                    // backend:,
                    // frontend:,
                    live: "https://donovanrichardson.github.io/departures/lirr.html"
                },
                {
                    name: "Wikipollia",
                    description: "A way to upvote and downvote Wikipedia articles.",
                    // backend:,
                    // frontend:,
                    // live:"https://donovanrichardson.github.io/departures/lirr.html"
                },
                {
                    name: "Job Tracker",
                    description: "Tracking job listings of interest for the job search.",
                    // backend:,
                    // frontend:,
                    // live:"https://donovanrichardson.github.io/departures/lirr.html"
                },
            ]
        }
    },
    methods: {

    }
}
</script>

<style>
html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-family:sans-serif
}

body {
    color: white;
    margin: 0;
    background: #5E51F5;
}

#header {
    height: 40vw;
    width: 100%;
    background: #0000007f;
    display:flex;
    justify-content: center;
    align-items: center;
}

#my-name{
    margin-top:0
}

#subtitle{
    margin-bottom:0
}
#content{
    margin: 0 8px;
}

#projects{
    display: grid;
    grid-template-columns:1fr 1fr;  
}

</style>
