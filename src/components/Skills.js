import React from 'react';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="skills__h2">Skills</h2>
            <div className="skills__container">
                <div className="skills__col">
                    <h3 className="skills__h3">Core Skills</h3>
                    <p className="skills__para">HTML \ CSS \ JavaScript</p>
                    <p className="skills__para">SASS \ Bootstrap</p>
                    <p className="skills__para">React \ Redux</p>
                    <p className="skills__para">PHP \ MySQL \ Laravel</p>
                </div>
                <div className="skills__col" id="skills">
                    <h3 className="skills__h3">Tools</h3>
                    <p className="skills__para">Git \ Github</p>
                    <p className="skills__para">npm \ Gulp</p>
                    <p className="skills__para">Command line</p>
                    <p className="skills__para">Vagrant \ Scotchbox</p>
                </div>
                <div className="skills__col">
                    <h3 className="skills__h3">Techniques</h3>
                    <p className="skills__para">Responsive design</p>
                    <p className="skills__para">Scamping \ Wireframing</p>
                    <p className="skills__para">Pair programming</p>
                    <p className="skills__para">Test driven development</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;