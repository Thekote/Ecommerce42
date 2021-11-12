import React, { useState } from 'react';
import styled from 'styled-components';
import { MdShoppingCart, MdAccountCircle } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from './AddProduct';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo href="">
                LOGO
            </Logo>
            <MenuIcon onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </MenuIcon>
            <Menu isOpen={isOpen}>
                <MenuLink href="/">Bebidas</MenuLink>
                <MenuLink href="/">Kitss</MenuLink>
                <MenuLink href="/">Copos e taças</MenuLink>
                <MenuLink> 
                    <Link to="/create">Adm</Link>
                </MenuLink>
                <MenuIcons>
                    <MenuLink href="/"><MdAccountCircle /></MenuLink>
                    <MenuLink href="/"><MdShoppingCart /></MenuLink>
                </ MenuIcons>
            </Menu>
            <div className="container mt-3">
                <Routes>
                    <Route exact path="/create" component={AddProduct}></Route>
                </Routes>
            </div>            
        </Nav>


    )
}

const Nav = styled.div`
    background-color: gray;
    width: 80vw;
    height: 80px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    font-family: 'Rubik', sans-serif;
`;

const MenuIcon = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background-color: gray;
        margin-bottom: 4px;
        border-radius: 2px;
    }

    @media (max-width: 768px){
        display: flex;
    }
`;

const MenuLink = styled.a`
    padding: 1rem 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none; 
    color: black;
    transition: all 0.3s ease-in;
    font-size: 1rem;

    &:hover {
       color: gray;
    }
`;

const Menu = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: white;

    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }

`;

const Logo = styled.a`
    padding: 1rem 0;
    color: gray;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.7rem;
    
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

const MenuIcons = styled.div`
    font-size: 2rem;
    
`

export default Navbar
