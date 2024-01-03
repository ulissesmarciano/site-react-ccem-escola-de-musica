import styled from "styled-components";

export const Container = styled.div`
    margin: 20rem 1rem 0 1rem;
   
    h3{
        margin: 0 0 .6rem;

        font-size: 1.rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #B38B37;
    }

    h4{
        margin: 0 0 4rem;

        font-size: 1.8rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #121212;
    }

    @media (min-width: 601px){

        margin: auto;
        max-width: 1025px;
    }
`