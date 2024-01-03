import styled from "styled-components";

export const Container = styled.div`
    margin: 0 0 5rem;

    h3{
        margin: 0 0 1rem;
        color: #121212;

        @media (min-width: 769px){
            margin: 2rem 3rem;
            max-width: 600px;
        }
    }
    
`

export const DescriptionImageContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    div{
    
        p {
            margin: 0 .5rem 1.2rem;
    
            font-size: 1.2rem;
            color: #808080;
            line-height: 1.6rem;

            @media (min-width: 769px){
                font-size: 1.6rem;
                max-width: 300px;
                line-height: 2.2rem;
            }
        }
    
        img{
            width: 100%;
    
            border-radius: 5px;
            //-webkit-filter: grayscale(100%);
            //filter: grayscale(100%);
            //filter: gray;


            @media (min-width: 769px){
                max-width: 300px;
            }

        }
    
        
    }

    @media (min-width: 769px){
        margin: auto;
        max-width: 800px;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    `