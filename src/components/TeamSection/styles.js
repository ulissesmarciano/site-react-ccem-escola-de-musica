import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    };

    to {
        transform: translateY(0);
        opacity: 1;
    };
`

export const Container = styled.section`
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease-in-out;

    &.is-visible {
        animation: ${slideUp} 1s forwards; 
    }

    margin: 4rem 0;
    padding: 0 1rem;
    
    .section-title p{
        margin: 0 0 .6rem;
        scroll-margin-top: 100px;
        
        font-size: 1.4rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #b96646;
    }

    .section-title h2 {
        margin: 0 0 4rem;

        font-size: 2rem;
        font-weight: 400;
        text-transform: uppercase;
        color: #350030;
    }

    .teachers-section {
        display: grid;
        grid-template-columns: 1fr;
        gap: .8rem;
    }

    @media (min-width: 375px){
        .teachers-section {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (min-width: 601px){
        
        margin: 4rem auto 8rem;
        padding: 1rem;
        max-width: 1440px;

        .section-title p {
            font-size: 2.2rem;
        }

        .section-title h2 {
            font-size: 3.5rem;
        }

    }

    @media(min-width: 768px){
        .teachers-section {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media(min-width: 1024px) {
        .teachers-section {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`