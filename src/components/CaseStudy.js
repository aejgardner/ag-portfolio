import React, { Component } from 'react';

class CaseStudy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            caseStudies: [
                {
                    heading: "berp",
                    process: "eh",
                    challenges: "boop",
                    learnings: "venny"
                },
                {
                    heading: "alexandr",
                    process: "hleb",
                    challenges: "sergio",
                    learnings: "busquets"
                },
                {
                    heading: "lance",
                    process: "armstrong",
                    challenges: "mark",
                    learnings: "viduka"
                }
            ]
        }
    }
    render() {
        const { id } = this.props.location.state;
        const caseStudy = this.state.caseStudies[id];
        return (
            <div>
                <p>{caseStudy.heading}</p>
                <p>{caseStudy.process}</p>
                <p>{caseStudy.challenges}</p>
                <p>{caseStudy.learnings}</p>
            </div>
        );
    }
}

export default CaseStudy;