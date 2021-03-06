import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    font-family: 'FivoSans';
    background: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent')};
    height: 80px;
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: 0.8s all ease;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
    `;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    margin-left: 24px;

    text-decoration: none;
    &:hover {
        transition: all 0.3s ease-in-out;
        color: #01bf71;
    }
`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.6rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
    

`
export const NavItem = styled.li`
    height: 80px;
`
export const NavLinks = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease-in-out;
        color: #01bf71;
    }
    &.active {
        border-bottom: 3px solid #010606;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    } 
`
export const NavBtnLink = styled(LinkRouter)`

    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
export const LinkContainer = styled.div`
    display: flex;
    gap: 5%;
`
export const Icon = styled.a`
    font-size: 3rem;
    cursor: pointer;
    color: white;
    &:hover {
        transition: all 0.3s ease-in-out;
        color: #01bf71;
    }
`

