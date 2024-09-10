import styled from "styled-components";

export const Container = styled.div`
    padding: 0rem .6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #121212;

    @media(min-width: 601px){
        background-color: transparent;
    }

    @media(min-width: 1025px){
        max-width: 1025px;
        margin: auto;
    }
`

export const IconContainer = styled.div`

    display: flex;
    img {
        height: 1.2rem;
    }

    @media(min-width: 1025px){
        @media(min-width: 1025px){
            flex: 1;
        }
    }
`

export const MenuContainer = styled.div`
    display: none;

    @media(min-width: 1025px){
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex: 4;

        a {
            text-decoration: none;
            color: black;
        }
    }
`

export const SidebarButtonContainer = styled.div`
    width: 2rem;
    height: 2rem;

    flex: 4;
    display: flex;
    justify-content: end;
`
