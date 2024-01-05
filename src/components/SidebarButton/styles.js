import styled from "styled-components";

export const Container = styled.button`
    padding: .4rem 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: transparent;
    border: none;

    div {
        position: relative;
        z-index: 2;
        height: .1rem;
        width: 2rem;

        background-color: #FFF;
        border: 1px solid #FFF;
        border-radius: 100px;

    }

    @media (min-width:1025px){
        display: none;
    }
`