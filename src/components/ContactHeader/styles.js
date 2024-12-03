import styled from "styled-components";

export const Container = styled.div`
    padding: .5rem 1rem;
    
    

    background-color: #350030;    

    .header-contact-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        font-family: 'Poppins', sans-serif;
        text-align: center;
        color: #fff;
        font-weight: 300;
        font-size: 1em;
        gap: .4rem;
    }

    @media(min-width: 769px){
        
        .header-contact-container {
            margin: 0 auto;
            padding: 1rem;
            max-width: 1440px;
            
            justify-content: space-between;
        }
    }
`