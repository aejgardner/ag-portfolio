import React from 'react';
import portrait from '../assets/images/portrait.jpg';

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="about__h2">About Me</h2>
            <div className="about__container">
                <img className="about__img" src={portrait} alt="Portrait of Adam Gardner" />
                <div className="about__paras">
                    <p className="about__para">I am looking for a role where I can develop my skills and learn from others in a
                        collaborative environment. I am open to working across the stack, and particularly enjoy back-end
                    programming using PHP and front-end programming using the React Javascript library.</p>
                    <p className="about__para">When I'm not working on web-development side-projects, you'll find me learning a
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