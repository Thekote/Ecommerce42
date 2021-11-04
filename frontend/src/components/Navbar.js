import React, { useState } from 'react'
import styled from 'styled-components'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Nav>
            <Logo href="">
                L<span>OGO</span>
            </Logo>
            <MenuIcon onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </MenuIcon>
            <Menu isOpen={isOpen}>
                <MenuLink href="">Bebidas</MenuLink>
                <MenuLink href="">Kitss</MenuLink>
                <MenuLink href="">Copos e taças</MenuLink>
            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
    height: 80px;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
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
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none; 
    color: #67bc96;
    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover {
       color: #7b7fda;
    }
`;

const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

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
    font-weight: 800;
    font-size: 1.7rem;
    
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;



export default Navbar
