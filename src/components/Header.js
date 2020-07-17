import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h3 className="header__h3">Adam Gardner</h3>
                <nav className="header__nav">
                    <ul className="header__nav__ul">
                        <li className="header__li"><a href="#projects" className="header__nav__link">Projects</a></li>
                        <li className="header__li"><a href="#skills" className="header__nav__link">Skills</a></li>
                        <li className="header__li"><a href="#about" className="header__nav__link">About</a></li>
                        <li className="header__li"><a href="#contact" className="header__nav__link">Contact</a></li>
                        <li className="header__li"><a href="/" className="header__nav__link">Download CV</a></li>
                    </ul>
                </nav>
                <ul className="header__socials__ul">
                    <li className="header__li"><a
                        href="https://github.com/aejgardner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="header__social__link"><i className="fab fa-github-square header__fa"></i></a>
                    </li>
                    <li className="header__li">
                        <a
                            href="https://www.linkedin.com/in/aejgardner/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header__social__link"
                        ><i className="fab fa-linkedin header__fa"></i>
                        </a>
                    </li>
                    <li className="header__li">
                        <a
                            href="mailto:adam_gardner@hotmail.co.uk"
                            className="header__social__link">
                            <i className="fas fa-envelope-square header__fa"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;