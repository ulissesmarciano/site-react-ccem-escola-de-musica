import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 0 0 5rem;

    .course-container .course-info-container .course-title {
        margin: 0 0 1rem;

        color: #350030;
        font-size: 1.8rem;

    }

    .course-container .course-info-container .course-description {
        margin: 0 0 1.2rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        color: #808080;
        line-height: 1.6rem;
    }
    
    .course-container .course-picture {
        width: 100%;

        border-radius: 5px;

    }

    @media (min-width: 769px){
        margin: 0 0 8rem;
        .course-container {
            display: flex;
            justify-content: space-between;
            ${({ $variant }) => $variant !== 'reverse' && css`
                flex-direction: row-reverse;
            `}
        }

        .course-container .course-info-container {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }

        .course-container .course-info-container .course-title {
            margin: 1rem 0;
            max-width: 600px;
        }


        .course-container .course-info-container .course-description {
            font-size: 1.6rem;
            max-width: 500px;
            line-height: 2.2rem;
        }


        .course-container .course-picture {
            max-width: 500px;
        }
        
    }
`