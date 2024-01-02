import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 5rem;
    padding: .8rem 0 0;

    display: flex;
    justify-content: space-between;
    

    background-color: #121212;
    border-radius: 0 0 200px 200px;

    color: #fff;

    @media(min-width: 601px) {

        display: flex;
        background-color: transparent;
        color: #121212;
    }
    
    @media(min-width: 1025px){
        max-width: 1025px;
        margin: auto;
    }
`

export const Wrapper = styled.div`
    padding: 1rem;
    width: 50%;

`

export const ComunidadeText = styled.p`
    margin: 0 0 .4rem;

    font-size: 2.2rem;
    font-weight: 100;

    @media(min-width: 320px){
            font-size: 2.6rem;
    }
    @media(min-width: 601px){
        font-size: 2rem;
        font-weight: 300;
    }

    @media(min-width: 769px){
        font-size: 3rem;
    }
    @media(min-width: 1025px){
        font-size: 3.4rem;
    }
`
export const WaveContainer = styled.div`
    margin-bottom:  .4rem;

    display: flex;
    align-items: center;

    img {
        height: 2rem;
    }

    p {
        margin: 0 .6rem;

        font-size: 2.2rem;
        font-weight: 800;
        color: #B38B37;

    }

    @media(min-width: 320px){
        P{
            font-size: 2.6rem;
        }

        img{
            height: 2.2rem;
        }
    }

    @media(min-width: 601px){
        p {
            font-size: 3rem;

        }
    }

    @media(min-width: 1025px){
        p{
            font-size: 3.4rem;
        }
    }
    
`
export const CriativaText = styled.p`
    margin-bottom: 2rem;

    font-size: 2.2rem;
    font-weight: 700;
    @media(min-width: 320px){
            font-size: 2.6rem;
    }
    @media(min-width: 1025px){
        font-size: 3.4rem;
    }
`

export const LinhaDivisoria = styled.div`
    margin-bottom: 2rem;

    height: 1px;
    width: 100%;
    border: 1px solid #B38B37;
`

export const TextoCultural = styled.div`
    margin-bottom: 2rem;

    color: #B7B7B7;
    font-weight: 300;
    line-height: 1.7rem;

    @media(min-width: 320px){
            font-size: 1.2rem;
    }

    @media(min-width: 601px){
        color: #808080;
        font-weight: 400;
    }

    @media(min-width: 1025px){
        font-size: 1.4rem;
    }

`

export const ContainerImagemCapaInstrumento = styled.div`
    max-width: 330px;
    align-items: end;

    @media(min-width: 601px){
        margin-top: -5rem;
        width: 100%;
    }

`
export const ImagemCapaInstrumento = styled.img`
    margin:2rem 0 -10rem;
    width: 100%;
    @media(min-width: 601px){
        margin: 0;
        position: relative;
        z-index: -1;
        width: 100%;
    }

    @media(min-width: 601px){
    }
`