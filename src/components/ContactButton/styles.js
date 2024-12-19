import styled from "styled-components";

export const Container = styled.a`
    margin: 1rem 0 2rem;
    padding: .8rem 1.8rem;
    max-width: 10rem;

    display: flex;
    justify-content: center;

    text-transform: uppercase;

    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 4px;
    text-decoration: none;

    transition: 0.3s;

    &:hover {
        background-color: #FFFFFF;
        color: #350030;

        transform: translateY(-.2rem);
    }

    &:active {
        transform: scale(1);
        background-color: transparent;
        color: #FFFFFF;
    }
`