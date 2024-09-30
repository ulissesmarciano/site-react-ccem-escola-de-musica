import styled from "styled-components";

export const Container = styled.div`
    margin: 0 0 5rem;

    .course-title {
        margin: 0 0 1rem;

        color: #350030;
        font-size: 1.8rem;

    }

    .course-info-container .course-description {
        margin: 0 0 1.2rem;

        font-family: 'Poppins', sans-serif;
        font-size: 1.2rem;
        color: #808080;
        line-height: 1.6rem;
    }
    
    .course-info-container .course-picture {
        width: 100%;

        border-radius: 5px;

    }

    @media (min-width: 769px){
        .course-title {
            margin: 1rem 0;
            max-width: 600px;
        }

        .course-info-container {
            display: flex;
            justify-content: space-between;
        }

        .course-info-container .course-description {
            font-size: 1.6rem;
            max-width: 500px;
            line-height: 2.2rem;
        }


        .course-info-container .course-picture {
            max-width: 500px;
        }
        
    }
`