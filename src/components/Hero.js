import React from 'react';

const Hero = () => {
    return (
        <section class="hero">
            <div class="hero__container">
                <h1 class="hero__h1">
                    Hey, I'm Adam!
            </h1>
                <p class="hero__para">
                    I enjoy creating beautiful websites and applications underpinned by clean, efficient code.
                    As a recent graduate of the DevelopMe_ Coding Fellowship, I am excited to now accelerate my learning
                    in industry.
            </p>
                <a href="#projects"><i class="hero__down fas fa-angle-double-down"></i></a>
            </div>
        </section>
    );
};

export default Hero;