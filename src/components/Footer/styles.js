import styled from "styled-components";

export const Container = styled.footer`
  
  height: 20rem;
  padding: 4rem;
  

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  align-items: center;
  text-align: center;

  color: white;
  background-color: #350030;

  @media (min-width: 769px){

    flex-direction: row;
    justify-content: space-between;

    span{
      margin: 0 2rem;
      height: 100%;

      border: 1px solid #FFFFFF;
      border-radius: 100px;
    }
  }
`

export const ContactSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuSection = styled.div`
  display: none;

  @media (min-width: 769px){
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;    
  }
`

export const SocialSection = styled.div`
  
  width: 100%;
  
  display: flex;
  justify-content: center; 

  @media (min-width: 769px){
    flex-direction: column;
    align-items: start;
  }
`
