import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import casestudies from '../data/casestudies';

class ProjectsCard extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false };
        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { imgSrc, altText, heading, technologies, description, online, appHref, repoHref, id } = this.props;
        const { open } = this.state;
        const caseStudy = casestudies.caseStudies[id];

        const modalStyles = {
            modal: {
                backgroundColor: "var(--cream)",
                borderRadius: "8px"
            },
            closeButton: {
                outline: "none"
            }
        }

        return (
            <>
                <article className="projects__card">
                    <img className="projects__card__img" src={imgSrc} alt={altText} />
                    <h2 className="projects__card__h2">{heading}</h2>
                    <h3 className="projects__card__h3">{technologies}</h3>
                    <p className="projects__card__text">{description}</p>
                    <div className="projects__card__links">
                        {online ?
                            <a target="blank" rel="noopener noreferrer" className="projects__card__link-blue"
                                href={appHref}>App</a>
                            :
                            null
                        }
                        <a className="projects__card__link-green"
                            href={repoHref} target="_blank" rel="noopener noreferrer">GitHub
                        </a>

                        <button onClick={this.onOpenModal} className="projects__card__link-orange">
                            Process
                        </button>
                    </div>
                </article>
                <Modal styles={modalStyles} open={open} onClose={this.onCloseModal} center>
                    <div className="case-study__container">
                        <h1 className="case-study__h1">{caseStudy.heading}</h1>
                        <h2 className="case-study__h2">Process</h2>
                        <p className="case-study__para">{caseStudy.process}</p>
                        <h2 className="case-study__h2">Challenges</h2>
                        <p className="case-study__para">{caseStudy.challenges}</p>
                        <h2 className="case-study__h2">Learnings</h2>
                        <p className="case-study__para">{caseStudy.learnings}</p>
                    </div>
                </Modal>
            </>
        );
    }
}

export default ProjectsCard;