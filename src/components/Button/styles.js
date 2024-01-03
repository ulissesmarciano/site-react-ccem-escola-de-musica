import styled from "styled-components";

export const Container = styled.a`

    display: flex;
    align-items: center;
    color: #FFF;
    text-decoration: none;

    p {
        margin-left: 1rem;
        position: absolute;

        font-size: .8rem;
        text-transform: uppercase;
        font-weight: 300;
        span{
            margin-left: .6rem;
        }

        @media(min-width: 601px){
            color: 	#000000;
            font-size: 1rem;

        }
        
    }
    
    //background-color: blue;
        `
export const Circulo = styled.div`
    position: relative;

    height: 2.4rem;
    width: 2.4rem;
    background-color: #B38B3755;
    border-radius: 50px;
    @media(min-width: 320px){
            height: 2.6rem;
            width: 2.6rem;
    }

    @media(min-width: 601px){
        height: 3rem;
        width: 3rem;
    }
`