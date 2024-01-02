import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 5rem;
    padding: .8rem 0 0;

    background-color: #121212;
    border-radius: 0 0 200px 200px;

    color: #fff;

    
`

export const Wrapper = styled.div`
    padding: 1rem;
`

export const ComunidadeText = styled.p`
    margin: 0 0 .4rem;

    font-size: 2.2rem;
    font-weight: 100;

    @media(min-width: 320px){
            font-size: 2.6rem;
        }
`
export const WaveContainer = styled.div`


    display: flex;
    align-items: center;

    img {
        height: 2rem;
    }

    p {
        margin: 0 .6rem .4rem;

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

    
`
export const CriativaText = styled.p`
    margin-bottom: 2rem;

    font-size: 2.2rem;
    font-weight: 700;
    @media(min-width: 320px){
            font-size: 2.6rem;
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
`
export const ImagemCapaInstrumento = styled.img`
    margin:2rem 0 -10rem;
    width: 100%;
`