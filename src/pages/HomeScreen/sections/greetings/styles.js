import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 5rem;
    padding: .8rem 0 0;

    background-color: #121212;
    border-radius: 0 0 200px 200px;

    color: #fff;

    @media(min-width: 601px) {

        display: flex;
        justify-content: space-between;
        background-color: transparent;
        color: #121212;
    }
    
    @media(min-width: 1025px){
        max-width: 1025px;
        margin: auto;
        margin-bottom: 5rem;
    }
`

export const GreetingsImageCCEMContainer = styled.div`
    img{
        height: 10rem;
    }

    margin: 2rem 0 4rem;
` 

export const Wrapper = styled.div`
    padding: 1rem;
    width: 100%;

    @media(min-width: 601px){
        width: 50%;
    }
`


export const LinhaDivisoria = styled.div`
    margin-bottom: 4rem;

    height: 1px;
    width: 100%;
    border: 1px solid #FE7000;
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
    

    @media(min-width: 601px){
        margin-top: -5rem;
        width: 100%;
        max-width: 330px;
        align-items: end;
    }

`
export const ImagemCapaInstrumento = styled.img`
    margin:2rem 0 -10rem;
    width: 100%;
    @media(min-width: 601px){
        margin: 0;
        position: relative;
        z-index: 1;
        width: 100%;
    }

    @media(min-width: 601px){
        margin-bottom: 10rem;
    }
`