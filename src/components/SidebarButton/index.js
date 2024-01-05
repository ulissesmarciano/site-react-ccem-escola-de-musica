import React from 'react'
import { Container } from './styles'

function SideBarButton({onClick}) {
  return (<>
    <Container onClick={onClick}>
        <div/>
        <div/>
    </Container>
  </>)
}

export default SideBarButton