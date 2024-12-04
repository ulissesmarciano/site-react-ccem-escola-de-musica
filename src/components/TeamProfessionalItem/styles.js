import styled from "styled-components";

export const Container = styled.div`
    padding: .8rem;

    border: 1px solid #212121;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    gap: .8rem;

    .image-section {
        width: 100%;
    }

    .image-section img {
        width: 100%;
        border-radius: 2px;
    }

    .name-and-teach {
        font-size: 1.2rem;
        text-align: center;
    }

    .name-and-teach p {
        margin-top: .6rem;
        font-family: 'Poppins', sans-serif;
        color: #606060;
        text-transform: uppercase;
    }
    
    .resume p {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        color: #808080;
        line-height: 1.8rem;
    }
`
