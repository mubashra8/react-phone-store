import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
//import { hover } from '@testing-library/user-event/dist/hover';
import { ButtonContainer } from './Button';
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper style={{background:"#2a2a72"}} className="navbar navbar-expand-sm  navbar-dark px-sm-5">

        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}
const ButtonContain = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:PointerEvent;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color:var(--mainBlue);
}
&:focus{
  outline:none;
}
;`;

const NavWrapper = styled.nav`
.navbar {
  background: blue;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: .5rem;
  padding-bottom: .5rem;
}
.nav-link{
  background:var(--mainBlue);
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  text-transform: capitalize; 
}
` ;
