<template>
<div>
    <h1>Donovan Richardson</h1>
    <h2>Full Stack Engineer</h2>
    <!-- Capitalization?? -->
    <p>Lorem ipsum brandmor state ament, consectetur adipisicing elit. Nam necessitatibus voluptatem quam dolores amet porro fugiat. Illo quae voluptas, quidem provident magni fugiat reiciendis eum impedit quas dicta assumenda unde.</p>
    <div id="projects" v-for="project in projects" :key="project.name">
        <div class="project">
            <h3>{{project.name}}</h3>
            <p>{{project.description}}</p>
            <p v-if="project.backend"><a :href="project.backend">Backend</a></p>
            <p v-if="project.frontend"><a :href="project.frontend">Frontend</a></p>
            <p v-if="project.live"><a :href="project.live">Live App</a></p>
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
            projects: [
                {
                    name:"Deparch",
                    description:"Train Departure Timetables",
                    // backend:,
                    // frontend:,
                    live:"https://donovanrichardson.github.io/departures/lirr.html"
                },
            ]
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
