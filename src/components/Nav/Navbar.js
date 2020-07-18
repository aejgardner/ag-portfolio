import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  z-index: 5;
  padding: 0.6rem 0;
  background-color: rgba(15, 119, 15, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="header__container">
        <h3 className="header__h3">Adam Gardner</h3>
        <Burger />
      </div>
    </Nav>
  )
}

export default Navbar