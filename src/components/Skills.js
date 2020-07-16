import React from 'react';

const Skills = () => {
    return (
        <section class="skills" id="skills">
            <h2 class="skills__h2">Skills</h2>
            <div class="skills__container">
                <div class="skills__col">
                    <h3 class="skills__h3">Core Skills</h3>
                    <p class="skills__para">HTML \ CSS \ JavaScript</p>
                    <p class="skills__para">SASS \ Bootstrap</p>
                    <p class="skills__para">React \ Redux</p>
                    <p class="skills__para">PHP \ MySQL \ Laravel</p>
                </div>
                <div class="skills__col" id="skills">
                    <h3 class="skills__h3">Tools</h3>
                    <p class="skills__para">Git \ Github</p>
                    <p class="skills__para">npm \ Gulp</p>
                    <p class="skills__para">Command line</p>
                    <p class="skills__para">Vagrant \ Scotchbox</p>
                </div>
                <div class="skills__col">
                    <h3 class="skills__h3">Techniques</h3>
                    <p class="skills__para">Responsive design</p>
                    <p class="skills__para">Scamping \ Wireframing</p>
                    <p class="skills__para">Pair programming</p>
                    <p class="skills__para">Test driven development</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;