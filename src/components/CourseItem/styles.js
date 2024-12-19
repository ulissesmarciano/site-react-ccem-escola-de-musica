import styled, { css, keyframes } from "styled-components";

const slideLeft = keyframes`
    from {
        transform: translateX(-40px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(40px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
    from {
        transform: translateY(40px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Container = styled.div` 
    opacity: 0;
    transform: translateY(40px);
    transition: all 1s ease-out;
    margin: 0 0 5rem;    

    &.is-visible {
        animation: ${slideUp} 1s forwards;
    }   


    .course-container {
        max-width: 1440px;
    }

    .course-container .course-info-container {
        margin: 0 auto;
        max-width: 35.625rem;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .course-container .course-info-container .course-title {
        margin: 0 0 1rem;

        color: #350030;
        font-size: 1.8rem;

    }

    .course-container .course-info-container .course-description {
        margin: 0 0 1.2rem;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        color: #808080;
        line-height: 1.6rem;
    }

    .course-container .course-info-container .course-description span {
        font-family: 'Poppins', sans-serif;
        color: #212121;
        font-weight: 500;
    }
    
    .course-container .course-picture {
        width: 50%;
        height: fit-content;

        border-radius: 5px;

    }

    .course-container .course-picture.out-info-container {
        display: none;
    }

    .course-container .course-picture.in-info-container {
        max-width: 20.375rem;
    }

    @media (min-width: 425px) {
        .course-container .course-picture.in-info-container{
            margin-bottom: 2rem;
        }
    }

    @media (min-width: 769px){
        opacity: 0;
        transform: translateX(-30px);
        transition: all 1s ease-out;
        margin: 0 0 8rem;

        &.is-visible {
            animation: ${({ $variant }) => $variant === "reverse" ? slideLeft : slideRight} 2s forwards;
        }
        .course-container {
            display: flex;
            justify-content: space-between;
            ${({ $variant }) => $variant !== 'reverse' && css`
                flex-direction: row-reverse;                
            `}
        }

        .course-container .course-info-container {
            max-width: 100%;
            margin: 0; 
            flex: 1;
            align-items: flex-start;
        }

        .course-container .course-info-container .course-title {
            margin: 1rem 0;
            max-width: 600px;
        }


        .course-container .course-info-container .course-description {
            font-size: 1.6rem;
            line-height: 2.2rem;
            text-align: start;
        }


        .course-container .course-picture {
            min-width: 450px;
        }

        .course-container .picture-container {
            display: flex;
            flex: 1;
            flex-direction: row-reverse;

            ${({ $variant }) => $variant !== 'reverse' && css`
                flex-direction: row;
            `}
        }

        .course-container .picture-container .course-picture.out-info-container {
            display: block;
        }

        .course-container .course-picture.in-info-container {
            display: none;
        }
        
    }
`