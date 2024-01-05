import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  background-color: #121212;
  
  position: fixed;
  top: 0;
  right: 0;
  
  height: 100%;
  width: 100%;
  
  z-index: 10;
  
  right: ${props => props.sidebar ? '0' : '100%'};
  animation: showingSidebar .4s;
  
  
  
  @keyframes showingSidebar {
    from{
      opacity: 0;
      width: 0;
    }
    
    to{
      opacity: 1;
      width: 100%;
    }
  }

  @media (min-width: 1025px){
      display: none;
  }
  
`

export const CloseButtonContainer = styled.div`
    padding: 0 2.6rem;

    display: flex;
    justify-content: end;
    
    @media (min-width: 601px){
        width: 80%;
        margin: auto;
    }

`

export const CloseButton = styled.button`
    
    background-color: transparent;
    border: none;
    
    svg{
        height: 2rem;
        width: 2rem;

        color: #FFF;
    }


    
`

export const MenuContainer = styled.div`
  a{
    font-size: 1.4rem;
    color: #FFFFFF;
    text-decoration: none;
  }
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`

