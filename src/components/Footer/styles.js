import styled from "styled-components";

export const Container = styled.div`
  height: 20rem;
  margin: 0 -1rem;
  padding: 4rem;
  

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
  text-align: center;

  color: white;
  background-color: #000;
`

export const MenuSection = styled.div`
  display: none;
`

export const SocialSection = styled.div`
  
  width: 100%;
  
  display: flex;
  justify-content: center;


  img {
    margin: 1rem;
    height: 2rem;

    filter: invert();
  }
`
