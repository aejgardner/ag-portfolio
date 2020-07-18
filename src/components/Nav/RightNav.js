import React from 'react';
import styled from 'styled-components';

const NavUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 970px) {
    flex-flow: column nowrap;
    background-color: rgba(15, 119, 15, 0.9);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const SocialsUl = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 18px 19px;
  }
  @media (max-width: 1030px) {
    li {
      padding: 18px 10px;
    }
  }
  @media (max-width: 970px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 350px;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open, setOpen }) => {
  return (
    <>
      <NavUl open={open}>
        <li className="header__li"><a onClick={() => setOpen(!open)} href="#projects" className="header__nav__link">Projects</a></li>
        <li className="header__li"><a onClick={() => setOpen(!open)} href="#skills" className="header__nav__link">Skills</a></li>
        <li className="header__li"><a onClick={() => setOpen(!open)} href="#about" className="header__nav__link">About</a></li>
        <li className="header__li"><a onClick={() => setOpen(!open)} href="#contact" className="header__nav__link">Contact</a></li>
        <li className="header__li"><a onClick={() => setOpen(!open)} href="/" className="header__nav__link">Download CV</a></li>
      </NavUl>
      <SocialsUl open={open}>
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
      </SocialsUl>
    </>
  )
}

export default RightNav