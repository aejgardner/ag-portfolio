import React from 'react';

const ProjectsCard = ({ imgSrc, altText, heading, technologies, description, online, appHref, repoHref }) => {
    return (
        <article class="projects__card">
            <img class="projects__card__img" src={imgSrc} alt={altText} />
            <h3 class="projects__card__h3">{heading}</h3>
            <h2 class="projects__card__h2">{technologies}</h2>
            <div class="projects__card__text">
                <p>
                    {description}
                </p>
                <div class="projects__card__links">
                    {online ?
                        <a target="blank" rel="noopener noreferrer" class="projects__card__link-blue"
                            href={appHref}>View
                        App</a>
                        :
                        null
                    }
                    <a class="projects__card__link-green"
                        href={repoHref} target="_blank" rel="noopener noreferrer">View on
                            GitHub</a>
                </div>
            </div>
        </article>
    );
};

export default ProjectsCard;