import React from 'react';
import { Link } from "react-router-dom";

const ProjectsCard = ({ imgSrc, altText, heading, technologies, description, online, appHref, repoHref, id }) => {
    return (
        <article class="projects__card">
            <img class="projects__card__img" src={imgSrc} alt={altText} />
            <h2 class="projects__card__h2">{heading}</h2>
            <h3 class="projects__card__h3">{technologies}</h3>
            <p class="projects__card__text">{description}</p>
            <div class="projects__card__links">
                {online ?
                    <a target="blank" rel="noopener noreferrer" class="projects__card__link-blue"
                        href={appHref}>App</a>
                    :
                    null
                }
                <a class="projects__card__link-green"
                    href={repoHref} target="_blank" rel="noopener noreferrer">GitHub
                        </a>
                <Link
                    to={{
                        pathname: '/case-study',
                        state: {
                            id: id
                        }
                    }}
                    class="projects__card__link-orange"
                >Process
                </Link>
            </div>
        </article>
    );
};

export default ProjectsCard;