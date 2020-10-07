<template>
<main id="resume" class="page">
    <header class="resume-header clearfix">
        <div class="profile-header pull-left">
            <h1>Donovan Richardson</h1>
            <h2></h2>
        </div>
        <div class="profile-pic pull-right">
        </div>
    </header>
    <div class="resume-content">
        <aside class="left-column">
            <div class="container about-container">
                <div class="title">
                    <h3>About</h3>
                    <div class="keyline"></div>
                </div>
                <div id="brand-statement" class='info-tag-container'>
                    <h6 class=info-text>
                        I am a full stack developer with a passion for databases and other backend technologies.
                        It is important for me to understand patterns patterns as well as of recognizing what these patterns can mean, and this need for understanding informs my approach to software engineering.
                    </h6>
                </div>
                <div class="info-tag-container">
                    <font-awesome-icon class="fa fa-map-marker" :icon="['fas','map-marker-alt']" />

                    <h6 class="info-text">Greater New York City Area </h6>
                </div>

                <div class="info-tag-container">
                    <font-awesome-icon :icon="['far', 'envelope']" class="fa fa-envelope-o" />

                    <h6 class="info-text">
                        <a href="mailto:donovanspqa@gmail.com" target="_blank">
                            donovanspqa@gmail.com
                        </a>
                    </h6>
                </div>

                <div class="info-tag-container">
                    <font-awesome-icon class="fa fa-globe" :icon="['fab', 'linkedin']" />

                    <h6 class="info-text">
                        <a href="https://linkedin.com/in/donovan-richardson/" target="_blank">
                            linkedin.com/in/donovan-richardson/
                        </a>
                    </h6>
                </div>
                <div class="info-tag-container">
                    <font-awesome-icon class="fa fa-globe" :icon="['fas', 'globe-americas']" />

                    <h6 class="info-text">
                        <a href="https://donovanrichardson.surge.sh" target="_blank">
                            donovanrichardson.surge.sh
                        </a>
                    </h6>
                </div>
                <div class="info-tag-container">
                    <font-awesome-icon :icon="['fas', 'mobile-alt']" class="fa fa-globe" />

                    <h6 class="info-text">
                        (631) 478-4845
                    </h6>
                </div>

            </div>
            <div class="skills-container">
                <section class="container">
                    <div class="title">
                        <h3>Programming Languages</h3>
                        <div class="keyline"></div>
                    </div>
                    <div class="minimal flex-container">
                        <h6 class="main-skill skill">Java</h6>
                        <h6 class="main-skill skill">JavaScript</h6>
                        <h6 class="main-skill skill">Python</h6>
                        <h6 class="main-skill skill">Ruby</h6>
                    </div>
                </section>
                <section class="container">
                    <div class="title">
                        <h3>Engineering</h3>
                        <div class="keyline"></div>
                    </div>
                    <div class="minimal flex-container">
                        <!-- <h6 class="main-skill skill">Object-oriented programming</h6> -->
                        <h6 class="main-skill skill">OOP</h6>
                        <h6 class="main-skill skill">Time complexity</h6>
                    </div>
                </section>
                <section class="container">
                    <div class="title">
                        <h3>DevOps</h3>
                        <div class="keyline"></div>
                    </div>
                    <div class="minimal flex-container">
                        <h6 class="main-skill skill">AWS RDS</h6>
                        <h6 class="main-skill skill">Git</h6>
                        <h6 class="main-skill skill">GitHub</h6>
                        <h6 class="main-skill skill">Heroku</h6>
                        <h6 class="main-skill skill">NPM</h6>
                    </div>
                </section>
                <section class="container">
                    <div class="title">
                        <h3>Data Systems</h3>
                        <div class="keyline"></div>
                    </div>
                    <div class="minimal flex-container">
                        <h6 class="main-skill skill">GTFS</h6>
                        <h6 class="main-skill skill">MongoDB</h6>
                        <h6 class="main-skill skill">PostgreSQL</h6>
                        <h6 class="main-skill skill">QGIS</h6>
                    </div>
                </section>
            </div>
        </aside>
        <div class="right-column">
            <div class="container education-container">
                <div class="title">
                    <h3>Education</h3>
                    <div class="keyline"></div>
                </div>
                <section class="item">
                    <div class="section-header clearfix">
                        <h3 class="bold pull-left">
                            General Assembly
                        </h3>
                        <h5 class="italic pull-right">
                            <span class="startDate">06/2020</span>
                            <span class="endDate"> - 09/2020</span>
                        </h5>
                    </div>

                    <h5 class="location">New York, NY</h5>

                    <h4>Software Engineering Certificate </h4>
                    <h4>Throughout the 12-week Software Engineering Immersive course, I used technologies such as Express, Ruby on Rails, and Python Django, and Vue to create full-stack applications, with an emphasis on object-oriented programming and algorithmic thinking. </h4>

                </section>
                <section class="item">
                    <div class="section-header clearfix">
                        <h3 class="bold pull-left">
                            Northeastern University
                        </h3>
                        <h5 class="italic pull-right">
                            <span class="startDate">09/2014</span>
                            <span class="endDate"> - 12/2018</span>
                        </h5>
                    </div>

                    <h5 class="location">Boston, MA</h5>

                    <h4>BS in Linguistics</h4>
                    <h4>Minors in Computer Science and Japanese</h4>

                </section>

            </div>
            <div class="container project-container">
                <div class="title">
                    <h3>Open Source Projects</h3>
                    <div class="keyline"></div>
                </div>
                <section class="item">
                    <div class="section-header clearfix">
                        <h3 class="bold pull-left">
                            <a href="https://github.com/donovanrichardson/deparch" target="_blank">
                                Departures
                                <span class="sublink">∙ <a href="https://github.com/donovanrichardson/deparch" target="_blank" class="sublink">github.com/donovanrichardson/deparch</a></span>
                            </a>
                        </h3>
                        <h5 class="italic pull-right">
                        </h5>
                    </div>
                    <ul>
                        <li>Integrated the OpenMobilityData API to import agancy-created transit data and generate departure timetables for the Long Island Rail Road and SEPTA Rail (Philadelphia).</li>
                        <li>Designed a PostgreSQL database schema for transit data, performing multi-table joins to serve results.</li>
                    </ul>

                    <div class="flex-container">
                        <h6 class="skill">PostgreSQL</h6>
                        <h6 class="skill">Express</h6>
                        <h6 class="skill">React</h6>
                        <h6 class="skill">Node.js</h6>
                    </div>

                </section>
                <section class="item">
                    <div class="section-header clearfix">
                        <h3 class="bold pull-left">
                            <a href="https://github.com/donovanrichardson/jobs-tracker" target="_blank">
                                Job Tracker
                                <span class="sublink">∙ <a href="https://github.com/donovanrichardson/jobs-tracker" target="_blank" class="sublink">github.com/donovanrichardson/jobs-tracker</a></span>
                            </a>
                        </h3>
                        <h5 class="italic pull-right">
                        </h5>
                    </div>
                    <ul>
                        <li>Created a job tracking app, using a web scraping utility to import job listings from LinkedIn and Indeed, allowing users to track their job applications.</li>
                        <li>Utilized a text analysis package to extract keywords from job descriptions and display them in the job tracker.</li>
                    </ul>

                    <div class="flex-container">
                        <h6 class="skill">MongoDB</h6>
                        <h6 class="skill">Express</h6>
                        <h6 class="skill">React</h6>
                        <h6 class="skill">Node.js</h6>
                    </div>

                </section>
            </div>
            <div class="container work-container">
                <div class="title">
                    <h3>Selected Experience</h3>
                    <div class="keyline"></div>
                </div>
                <section class="item">
                    <div class="section-header clearfix">
                        <h3 class="bold pull-left">
                            Lionbridge
                        </h3>
                        <h5 class="italic pull-right">
                            <span class="startDate">02/2019</span>
                            <span class="endDate"> - 08/2019</span>
                        </h5>
                    </div>

                    <h4>Linguistic Grader (Contract)</h4>

                    <ul>
                        <li>Ensured correct and consistent performance of text-to-speech and speech recognition products for speakers of North American English.</li>
                        <li>Managed the progression of speech recognition issues using an in-house issue tracker, collaborating with remote, cross-country, and international colleagues.</li>
                        <li>Used regex in Unix shell to target specific kinds of issues for review.</li>
                    </ul>
                </section>
                <section class="item">
                    <div class="section-header clearfix">
                        <h3 class="bold pull-left">
                            Northeastern University NU Global
                        </h3>
                        <h5 class="italic pull-right">
                            <span class="startDate">07/2016</span>
                            <span class="endDate"> - 12/2016</span>
                        </h5>
                    </div>

                    <h4>Academic Support Assistant (Co-op)</h4>

                    <ul>
                        <li>Performed front-end and administrative tasks, including organizing and executing plans for student events, and corresponding with NU Global students and faculty.</li>
                        <li>Compiled and organized student data using Salesforce, Excel, and Microsoft Access in collaboration with other departments to provide test score results and calculate class grades.</li>
                    </ul>
                </section>
            </div>

        </div>
    </div>
    <!-- <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"> -->
</main>
</template>

<script>
export default {
    name: 'Resume',
    components: {

    },
    beforeMount() {
        document.title = "Donovan Richardson - Resume"
    }

}
</script>

<style scoped>
@font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 300;
    src: local('Josefin Sans Light'), local('JosefinSans-Light'), url(https://fonts.gstatic.com/s/josefinsans/v14/Qw3FZQNVED7rKGKxtqIqX5Ecpl5te10k.ttf) format('truetype');
}

@font-face {
    font-family: 'Josefin Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Josefin Sans Bold'), local('JosefinSans-Bold'), url(https://fonts.gstatic.com/s/josefinsans/v14/Qw3FZQNVED7rKGKxtqIqX5Ectllte10k.ttf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI9w2_Gwfo.ttf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v16/S6u_w4BMUTPHjxsI5wq_Gwfo.ttf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPHA.ttf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
}

@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf) format('truetype');
}

html {
    background: #7B75BA;
}

body {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    background: inherit;
    margin: 50px 0 100px;
    letter-spacing: .3px;
    color: #421E2E;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-transform: none;
    margin: 0;
}

h1 {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    letter-spacing: 1px;
}

h2 {
    font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    letter-spacing: .5px;
}

h3 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: .4px;
}

h3.bold {
    font-weight: 700;
}

h4 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 11px;
}

h4.bold {
    font-weight: 700;
}

h5 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 11px;
}

h5.italic {
    font-style: italic;
}

h6 {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 10px;
}

a {
    color: inherit;
    text-decoration: inherit;
}

a:hover {
    color: #2895F1;
}

a .fa-external-link {
    font-size: 10px;
    vertical-align: text-top;
}

p,
li {
    font-size: 11px;
}

blockquote {
    font-size: 11px;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-style: italic;
    margin: 10px 25px;
}

em {
    color: #999;
}

ul {
    margin: 10px 0 0;
    -webkit-padding-start: 25px;
}

ul li {
    padding-left: 10px;
}

ul.minimal {
    list-style: none;
    padding: 0;
}

ul.minimal li {
    margin-bottom: 3px;
    padding-left: 0;
}

ul.two-column {
    -webkit-column-count: 2;
    -webkit-column-gap: 28px;
    column-count: 2;
    column-gap: 28px;
}

ul.two-column li {
    padding-left: 0;
}

@page {
    size: A4;
}

.container {
    padding-top: 20px;
}

.keyline {
    width: 45px;
    margin: 8px 0 10px;
    border-top: 1px solid #1A0F61;
}

.pull-left {
    float: left;
}

.pull-right {
    float: right;
}

.clearfix:after {
    content: "";
    display: table;
    clear: both;
}

.profile-pic {
    margin-top: -5px;
    margin-right: 18px;
}

.profile-pic img {
    height: 52px;
    width: 52px;
    border-radius: 50%;
    border: 2px solid #56817A;
}

.summary {
    margin: 5px 0 5px;
}

.sublink {
    font-size: 70%;
    font-weight: 200;
    color: dimgray;
}

.capitalize {
    text-transform: capitalize;
}

/* Layouts */
.page {
    background: white;
    width: 612px;
    min-height: 792px;
    display: block;
    margin: 0 auto;
    /* border-top: 10px solid #56817A; */
    border-top: 10px solid #7B75BA;
    padding: 36px 22px 30px 34px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}

.page:after {
    content: "";
    display: table;
    clear: both;
}

.left-column {
    float: left;
    width: 160px;
    margin-right: 20px;
    word-wrap: break-word;
}

.right-column {
    width: auto;
    overflow: hidden;
}

.item {
    margin-bottom: 15px;
}

.item:last-child {
    margin-bottom: 0;
}

@media print {
    body {
        margin: 0;
    }

    .page {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 36px 0 30px;
        box-shadow: none;
    }

    .page .resume-header,
    .page .resume-content {
        padding: 0 22px 0 34px;
    }

    .container {
        page-break-inside: avoid;
    }

    .work-container .item {
        page-break-inside: avoid;
    }

    .fa-external-link {
        display: none;
    }
}

/* Components */
.info-tag-container {
    margin-bottom: 5px;
}

.info-tag-container .fa {
    font-size: 14px;
    width: 12px;
    margin-right: 5px;
    text-align: center;
    vertical-align: middle;
}

.info-tag-container .fa.fa-map-marker {
    /* font-size: 16px; */
}

.info-tag-container .fa.fa-mobile {
    font-size: 18px;
}

.info-tag-container .fa.fa-envelope-o {
    font-size: 12px;
}

.info-tag-container .fa.fa-desktop {
    font-size: 11px;
}

.info-tag-container .fa.fa-external-link {
    width: auto;
    font-size: inherit;
    vertical-align: text-top;
}

.info-tag-container .info-text {
    font-size: 11px;
    text-transform: none;
    display: inline-block;
    vertical-align: middle;
    width: 139px;
    margin: 5px 0;
}

.references-container .fa {
    font-size: 14px;
}

.education-container .location {
    padding-bottom: 6px;
    font-weight: 400;
}

.education-container .specialization {
    text-transform: none;
    font-style: italic;
}

.flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.main-skill {
    font-size: 80%;
    border: 2px solid #7B75BA;
}

.skill {
    margin: .15em;
    padding: .15em;
    /* background: ghostwhite; */
    color: black;

    border-radius: 5px;
}

/* my style*/

.item li {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size:11px
}
</style>
