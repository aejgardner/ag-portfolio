import React from 'react';
import Particles from 'react-particles-js';

const ParticlesJs = () => {
    
    return (
        <Particles className="particles"
            params={{
                particles: {
                    number: {
                        value: 28,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#E9AB3C"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        image: {
                            src: "img/github.svg",
                            width: 100,
                            height: 60
                        }
                    },
                    opacity: {
                        value: 1,
                        random: false,
                        anim: {
                            enable: false,
                            speed: 1,
                            opacity_min: 1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 40,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 189.39543399174545,
                        color: "#0F770F",
                        opacity: 1,
                        width: 1.1048066982851816
                    },
                    move: {
                        enable: true,
                        speed: 6,
                        direction: "none",
                        random: false,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                retina_detect: false
            }
            }
        />
    );
};

export default ParticlesJs;