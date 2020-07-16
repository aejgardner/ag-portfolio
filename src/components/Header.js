import React from 'react';

const Header = () => {
    return (
        <header class="header">
            <div class="header__container">
                <h3 class="header__h3">Adam Gardner</h3>
                <nav class="header__nav">
                    <ul class="header__nav__ul">
                        <li class="header__li"><a href="#projects" class="header__nav__link">Projects</a></li>
                        <li class="header__li"><a href="#skills" class="header__nav__link">Skills</a></li>
                        <li class="header__li"><a href="#about" class="header__nav__link">About</a></li>
                        <li class="header__li"><a href="#contact" class="header__nav__link">Contact</a></li>
                        <li class="header__li"><a href="/" class="header__nav__link">Download CV</a></li>
                    </ul>
                </nav>
                <ul class="header__socials__ul">
                    <li class="header__li"><a
                        href="https://github.com/aejgardner"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="header__social__link"><i class="fab fa-github-square header__fa"></i></a>
                    </li>
                    <li class="header__li">
                        <a
                            href="https://www.linkedin.com/in/aejgardner/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="header__social__link"
                        ><i class="fab fa-linkedin header__fa"></i>
                        </a>
                    </li>
                    <li class="header__li">
                        <a
                            href="mailto:adam_gardner@hotmail.co.uk"
                            class="header__social__link">
                            <i class="fas fa-envelope-square header__fa"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;