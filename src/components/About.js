import React from 'react';
import portrait from '../assets/images/portrait.jpg';

const About = () => {
    return (
        <section class="about" id="about">
            <h2 class="about__h2">About Me</h2>
            <div class="about__container">
                <img class="about__img" src={portrait} alt="Portrait of Adam Gardner" />
                <div class="about__paras">
                    <p class="about__para">I am looking for a role where I can develop my skills and learn from others in a
                        collaborative environment. I am open to working across the stack, and particularly enjoy back-end
                    programming using PHP and front-end programming using the React Javascript library.</p>
                    <p class="about__para">When I'm not working on web-development side-projects, you'll find me learning a
                        new
                        cover on my guitar, reading a book, or zenning out to an album. Travel is also a keen interest of
                        mine, a favourite location being South America, where I was lucky enough
                        to teach English and
                    volunteer for an ecological project.</p>
                </div>
            </div>
        </section>
    );
};

export default About;