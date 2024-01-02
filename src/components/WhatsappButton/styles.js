import styled from "styled-components";

export const Container = styled.a`
    position: fixed;
    top: 90%;
    right: 10%;
`

export const WhatsLogoImage = styled.img`
    height: 5rem;
    animation: zoom-in-zoom-out 5s ease infinite;
    
    
    @keyframes zoom-in-zoom-out {
        50% {
          transform: scale(.8);
        }

        100% {
          transform: scale(1);
        }
      }
`
