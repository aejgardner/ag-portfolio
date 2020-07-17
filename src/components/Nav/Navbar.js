
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  z-index: 5;
  padding: 0.7rem 0;
  background-color: rgba(15, 119, 15, 0.6);
  display: flex;
  justify-content: space-between;
  .logo {
    font-size: 2.2rem;
    color: white;
    background: linear-gradient(135deg, #a1d5ff 0%,#ffffff 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="header__container">
        <div className="logo">
          Adam Gardner
      </div>
        <Burger />
      </div>
    </Nav>
  )
}

export default Navbar