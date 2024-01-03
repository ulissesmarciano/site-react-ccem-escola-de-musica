import styled from "styled-components";

export const Container = styled.div`
    padding: .4rem 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        position: relative;
        z-index: 2;
        height: .1rem;
        width: 2rem;

        background-color: #FFF;
        border: 1px solid #FFF;
        border-radius: 100px;

    }
`