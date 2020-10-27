import React from 'react';
import ProjectsCard from './ProjectsCard';
import football from '../assets/images/team-generator.png';
import olympics from '../assets/images/lockdownolympics.png';
import bagajob from '../assets/images/bagajob.png';
import memovie_register from '../assets/images/memovie_register.png';
import vet from '../assets/images/laravets.png';
import photography from '../assets/images/photography.png';

const Projects = () => (
    <section className="projects" id="projects">
        <h2 className="projects__h2">Projects</h2>
        <div className="projects__container">
        <ProjectsCard
                id="0"
                imgSrc={bagajob}
                altText="Picture of Bagajob app"
                heading="Bagajob"
                date="July/August 2020"
                technologies="React / Redux / UI & UX Design"
                description="I was the front end developer for an open source job management app built on behalf of the DevelopMe_ bootcamp. I built the front end using React and Redux, and  regularly liased with the UX Designer to ensure use of the app was intuitive and engaging."
                online={true}
                appHref="https://bagajob.developme.space/"
                repoHref="https://github.com/develop-me/bagajob"
            />
            <ProjectsCard
                id="1"
                imgSrc={memovie_register}
                altText="Picture of MeMovie app"
                heading="MeMovie"
                date="July 2020"
                technologies="React / Redux / Immer / JWT / Jest / GSAP"
                description="A React/Redux app that allows users to pick a random movie from a table of movies they have entered, with or without filter requirements. Backend authentication is handled with Laravel and JSON web tokens."
                online={true}
                appHref="https://aejgardner.github.io/memovie/#/"
                repoHref="https://github.com/aejgardner/memovie"
            />
            <ProjectsCard
                id="2"
                imgSrc={football}
                altText="Picture of Team Generator app"
                heading="Team Generator"
                date="June 2020"
                technologies="React / Redux / Laravel / Heroku"
                description="A React/Redux football team picking app that that stores players and previous matches in a
                    Laravel API. Users can edit players, change team settings and view match history."
                online={true}
                appHref="https://stormy-crag-38510.herokuapp.com/"
                repoHref="https://github.com/aejgardner/frontend-ui-five-aside"
            />
            <ProjectsCard
                id="3"
                imgSrc={olympics}
                altText="Picture of Lockdown Olympics app"
                heading="Lockdown Olympics"
                date="June 2020"
                technologies="React / Redux / Laravel / AWS"
                description="Group project - a website for a fictitious sports event that uses a React/Redux frontend and
                a
                Laravel API. Users can add competitors and choose which event for them to compete in."
                online={true}
                appHref="https://stormy-crag-38510.herokuapp.com/"
                repoHref="https://github.com/aejgardner/lockdown-olympics"
            />
            <ProjectsCard
                id="4"
                imgSrc={vet}
                altText="Picture of Vet app"
                heading="Laravel Vet Project"
                date="May 2020"
                technologies="Laravel / Blade / MySql / Auth / TDD"
                description="A mock veterinary practice database web application, developed over 2 weeks of the DevelopMe bootcamp. It uses Laravel Blade to display lists of owners and their animals from the database."
                online={false}
                repoHref="https://github.com/aejgardner/vet-project"
            />
            <ProjectsCard
                id="5"
                imgSrc={photography}
                altText="Picture of photography site"
                heading="Photography Site"
                date="April 2020"
                technologies="HTML / CSS / Atomic Design / OOCSS / Design Interpretation / Responsive Design"
                description="A fully responsive mock photography site, built during the second week of the DevelopMe_ bootcamp."
                online={true}
                appHref="http://adam.developme.space/"
                repoHref="https://github.com/aejgardner/vet-project"
            />
        </div>
    </section>
);

export default Projects;