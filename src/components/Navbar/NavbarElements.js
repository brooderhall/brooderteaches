import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
    
    margin-top: -150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: -10px;
    z-index: 10;
    background: ${( {navbar }) => (navbar ? 
        '#100855' : 'transparent')};
    height: ${( {navbar }) => (navbar ? 
        '80px' : '150px')};

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    };

`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 auto;
    max-width: 1100px;
    z-index: 1;
`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
       display: block;
       top: 0;
       position: absolute;
       right: 0;
       transform: translate(-100%, 60%);
       font-size: 1.8rem;
       cursor: pointer;
       color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: left;
    list-style: none;
    text-align: left;
    margin: 0 -20px 0px -80px;

    @media screen and (max-width: 768px) {
        display: none;
    };
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 14px;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;


export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 20px 0 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #D02C75;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: crimson;
        color: #fff;

    }
`;

export const NavBtnLink2 = styled(LinkR)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`;

