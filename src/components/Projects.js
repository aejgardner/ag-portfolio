import React from 'react';
import ProjectsCard from './ProjectsCard';
import football from '../assets/images/team-generator.png'
import olympics from '../assets/images/lockdownolympics.png'
import pingr from '../assets/images/pingr.png'

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects__h2">Projects</h2>
            <div className="projects__container">
                <ProjectsCard
                    id="0"
                    imgSrc={football}
                    altText="Picture of Team Generator app"
                    heading="Team Generator"
                    technologies="React / Redux / Laravel / Heroku"
                    description="A React/Redux football team picking app that that stores players and previous matches in a
                    Laravel API. Users can edit players, change team settings and view match history."
                    online={true}
                    appHref="https://stormy-crag-38510.herokuapp.com/"
                    repoHref="https://github.com/aejgardner/frontend-ui-five-aside"
                />
                <ProjectsCard 
                id="1"
                imgSrc={olympics}
                altText="Picture of Lockdown Olympics app"
                heading="Lockdown Olympics"
                technologies="React / Redux / Laravel / AWS"
                description="Group project - a website for an alternative Olympics that uses a React/Redux front-end and
                a
                Laravel API. Users can add competitors and choose which event for them to compete in."
                online={true}
                appHref="https://stormy-crag-38510.herokuapp.com/"
                repoHref="https://github.com/aejgardner/lockdown-olympics"
                />
                <ProjectsCard 
                id="2"
                imgSrc={pingr}
                altText="Picture of PINGR app"
                heading="PINGR"
                technologies="React / Redux"
                description="A ping pong scoring app that enables the user to choose player names, serve alternation and
                winning score. Additional logic included to determine deuce, game history and language
                localisation to Esperanto. Built using React and Redux."
                online={false}
                repoHref="https://github.com/aejgardner/ping-pong"
                />
            </div>
        </section>
    );
};

export default Projects;